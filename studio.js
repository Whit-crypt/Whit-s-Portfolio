/* Owner Studio + live content for the portfolio (Supabase) */
(() => {
  "use strict";
  const cfg = window.PORTFOLIO_CONFIG;
  if (!window.supabase || !cfg) {
    console.warn("Studio: Supabase library or config missing.");
    return;
  }
  const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  const BUCKET = "portfolio";
  const MAX_IMG = 10 * 1024 * 1024;
  const MAX_PDF = 15 * 1024 * 1024;

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? u : "");

  const state = { projects: [], settings: {}, fallback: "" };

  /* ---------------------------------------------------------------
     PUBLIC SIDE: load content and paint it into the page
  --------------------------------------------------------------- */
  function paintProjects(rows) {
    const grid = $("#projects-grid");
    if (!grid) return;
    if (!rows.length) {
      grid.innerHTML = state.fallback;
      return;
    }
    grid.innerHTML = rows
      .map((p) => {
        const img = p.cover_url || p.logo_url;
        const tags = [p.category, ...(p.tags || [])].filter(Boolean);
        const link = safeUrl(p.link_url);
        return `<div class="project-card">
          ${img ? `<div class="project-thumbnail"><img src="${esc(img)}" alt="${esc(p.title)}" loading="lazy"></div>` : ""}
          <div class="project-body">
            <div>
              <h3 class="project-name">${esc(p.title)}</h3>
              <p class="project-desc">${esc(p.description)}</p>
            </div>
            <div>
              <div class="project-tags">${tags.map((t) => `<span class="tag-pill">${esc(t)}</span>`).join("")}</div>
              ${link ? `<a class="project-action-link" href="${esc(link)}" target="_blank" rel="noopener noreferrer">View project &rarr;</a>` : ""}
            </div>
          </div>
        </div>`;
      })
      .join("");
  }

  function paintGraphics(rows) {
    const sec = $("#graphics");
    const nav = $("#nav-graphics");
    const grid = $("#graphics-grid");
    if (!sec || !grid) return;
    const has = rows.length > 0;
    sec.hidden = !has;
    if (nav) nav.hidden = !has;
    grid.innerHTML = rows
      .map(
        (g) => `<a class="graphic-tile" href="${esc(g.image_url)}" target="_blank" rel="noopener noreferrer">
          <img src="${esc(g.image_url)}" alt="${esc(g.title || "Graphic design work")}" loading="lazy">
        </a>`
      )
      .join("");
  }

  async function loadPublic() {
    const [p, g, s] = await Promise.all([
      sb.from("projects").select("*").order("sort_order").order("created_at", { ascending: false }),
      sb.from("graphics").select("*").order("sort_order").order("created_at", { ascending: false }),
      sb.from("site_settings").select("*"),
    ]);
    if (!p.error) paintProjects(p.data || []);
    if (!g.error) paintGraphics(g.data || []);
    if (!s.error) state.settings = Object.fromEntries((s.data || []).map((r) => [r.key, r.value]));
  }

  // Download CV buttons: open the uploaded CV when one exists, otherwise keep the old behaviour
  document.addEventListener(
    "click",
    (e) => {
      const el = e.target.closest(".open-cv-modal");
      const url = safeUrl(state.settings.cv_url);
      if (!el || !url) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(url, "_blank", "noopener");
    },
    true
  );

  /* ---------------------------------------------------------------
     TRIPLE-TAP ON THE LOGO
  --------------------------------------------------------------- */
  let taps = [];
  function onLogoTap(e) {
    const now = Date.now();
    taps = taps.filter((t) => now - t < 700);
    taps.push(now);
    if (taps.length >= 3) {
      taps = [];
      e.preventDefault();
      openOwner();
    }
  }
  document.querySelectorAll(".nav-brand, .footer-logo").forEach((el) => el.addEventListener("click", onLogoTap));

  async function openOwner() {
    const { data } = await sb.auth.getSession();
    data.session ? openStudio() : openSignIn();
  }

  // Allow opening via link too: yoursite/#studio
  if (location.hash === "#studio") setTimeout(openOwner, 400);

  /* ---------------------------------------------------------------
     SIGN-IN MODAL
  --------------------------------------------------------------- */
  let signin;
  function openSignIn() {
    if (!signin) {
      signin = document.createElement("div");
      signin.className = "st-overlay st-center";
      signin.innerHTML = `<form class="st-card" aria-label="Owner sign in" novalidate>
        <div class="st-head"><h2>Owner sign in</h2><button type="button" class="st-btn st-ghost" data-close>Close</button></div>
        <label>Email<input name="email" type="email" autocomplete="username" required></label>
        <label>Password<input name="password" type="password" autocomplete="current-password" required></label>
        <p class="st-msg" role="status"></p>
        <button class="st-btn st-gold" type="submit">Sign in</button>
      </form>`;
      document.body.appendChild(signin);
      signin.addEventListener("click", (e) => {
        if (e.target === signin || e.target.closest("[data-close]")) closeSignIn();
      });
      $("form", signin).addEventListener("submit", async (e) => {
        e.preventDefault();
        const f = e.currentTarget;
        const btn = $("button[type=submit]", f);
        btn.disabled = true;
        say(f, "Signing in…");
        const { error } = await sb.auth.signInWithPassword({
          email: f.email.value.trim(),
          password: f.password.value,
        });
        btn.disabled = false;
        if (error) return say(f, "Wrong email or password.", false);
        f.password.value = "";
        say(f, "");
        closeSignIn();
        openStudio();
      });
    }
    signin.hidden = false;
    document.body.classList.add("st-lock");
    $("input[name=email]", signin).focus();
  }
  function closeSignIn() {
    if (signin) signin.hidden = true;
    document.body.classList.remove("st-lock");
  }

  /* ---------------------------------------------------------------
     STUDIO DRAWER
  --------------------------------------------------------------- */
  const TABS = [
    ["projects", "Projects"],
    ["graphics", "Graphics"],
    ["cv", "CV"],
    ["account", "Account"],
  ];
  const studio = { el: null, tab: "projects", editing: null };

  function say(root, text, ok) {
    const m = $(".st-msg", root);
    if (!m) return;
    m.textContent = text || "";
    m.className = "st-msg" + (ok === true ? " ok" : ok === false ? " bad" : "");
  }

  function ensureStudio() {
    if (studio.el) return;
    const el = document.createElement("div");
    el.className = "st-overlay";
    el.innerHTML = `<aside class="st-drawer" role="dialog" aria-modal="true" aria-label="Studio">
      <div class="st-head"><h2>Studio</h2><button class="st-btn st-ghost" data-close>Close</button></div>
      <nav class="st-tabs">${TABS.map(([k, l]) => `<button class="st-tab" data-tab="${k}">${l}</button>`).join("")}</nav>
      <div class="st-body"></div>
    </aside>`;
    document.body.appendChild(el);
    studio.el = el;
    const body = $(".st-body", el);

    el.addEventListener("click", (e) => {
      if (e.target === el || e.target.closest("[data-close]")) return closeStudio();
      const t = e.target.closest("[data-tab]");
      if (t) {
        studio.tab = t.dataset.tab;
        studio.editing = null;
        return render();
      }
    });

    body.addEventListener("click", async (e) => {
      const add = e.target.closest("[data-add]");
      const edit = e.target.closest("[data-edit]");
      const del = e.target.closest("[data-del]");
      const delg = e.target.closest("[data-delg]");
      const cancel = e.target.closest("[data-cancel]");
      const out = e.target.closest("[data-signout]");
      if (add) { studio.editing = "new"; return render(); }
      if (edit) { studio.editing = edit.dataset.edit; return render(); }
      if (cancel) { studio.editing = null; return render(); }
      if (del) {
        const p = state.projects.find((x) => x.id === del.dataset.del);
        if (!confirm(`Delete "${p ? p.title : "this project"}"? This cannot be undone.`)) return;
        const { data, error } = await sb.from("projects").delete().eq("id", del.dataset.del).select();
        if (error || !data.length) return alert("Could not delete. Make sure you are signed in as the owner.");
        await render();
        loadPublic();
      }
      if (delg) {
        if (!confirm("Delete this graphic?")) return;
        const { data, error } = await sb.from("graphics").delete().eq("id", delg.dataset.delg).select();
        if (error || !data.length) return alert("Could not delete. Make sure you are signed in as the owner.");
        await render();
        loadPublic();
      }
      if (out) {
        await sb.auth.signOut();
        closeStudio();
      }
    });

    body.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = $("button[type=submit]", form);
      btn.disabled = true;
      try {
        const handlers = { project: saveProject, graphics: saveGraphics, cv: saveCv, password: savePassword };
        await handlers[form.dataset.form](form);
      } catch (err) {
        say(form, err.message || "Something went wrong.", false);
      }
      btn.disabled = false;
    });
  }

  function openStudio() {
    ensureStudio();
    studio.el.hidden = false;
    document.body.classList.add("st-lock");
    render();
  }
  function closeStudio() {
    if (studio.el) studio.el.hidden = true;
    document.body.classList.remove("st-lock");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (studio.el && !studio.el.hidden) closeStudio();
    else if (signin && !signin.hidden) closeSignIn();
  });

  async function render() {
    $$tabs();
    const body = $(".st-body", studio.el);
    body.innerHTML = `<p class="st-note">Loading…</p>`;
    const view = { projects: tabProjects, graphics: tabGraphics, cv: tabCv, account: tabAccount }[studio.tab];
    await view(body);
  }
  function $$tabs() {
    studio.el.querySelectorAll(".st-tab").forEach((b) => b.classList.toggle("on", b.dataset.tab === studio.tab));
  }

  /* ---------- helpers ---------- */
  async function upload(file, folder, maxBytes = MAX_IMG) {
    if (file.size > maxBytes) throw new Error(`"${file.name}" is too large (max ${Math.round(maxBytes / 1048576)} MB).`);
    const safe = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 7)}-${safe}`;
    const { error } = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type, cacheControl: "3600" });
    if (error) throw new Error("Upload failed: " + error.message);
    return sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
  }
  const isFile = (f) => f && f.size > 0;

  /* ---------- Projects ---------- */
  async function tabProjects(body) {
    const { data, error } = await sb
      .from("projects")
      .select("*")
      .order("sort_order")
      .order("created_at", { ascending: false });
    if (error) return (body.innerHTML = `<p class="st-msg bad">${esc(error.message)}</p>`);
    state.projects = data;
    if (studio.editing) return projectForm(body);
    body.innerHTML = `<button class="st-btn st-gold" data-add>Add project</button>
      ${
        data.length
          ? `<ul class="st-list">${data
              .map(
                (p) => `<li class="st-row">
          <span class="st-thumb">${p.logo_url ? `<img src="${esc(p.logo_url)}" alt="">` : ""}</span>
          <span class="st-meta"><strong>${esc(p.title)}</strong><small>${esc([p.category, p.featured ? "Highlight" : ""].filter(Boolean).join(" / "))}</small></span>
          <button class="st-btn st-line" data-edit="${p.id}">Edit</button>
          <button class="st-btn st-line" data-del="${p.id}">Delete</button></li>`
              )
              .join("")}</ul>`
          : `<p class="st-note">No projects yet. Add your first one.</p>`
      }`;
  }

  function projectForm(body) {
    const p = state.projects.find((x) => x.id === studio.editing) || {};
    const editing = !!p.id;
    body.innerHTML = `<form class="st-form" data-form="project" novalidate>
      <h3>${editing ? "Edit project" : "Add project"}</h3>
      <input type="hidden" name="id" value="${esc(p.id)}">
      <label>Title<input name="title" required maxlength="120" value="${esc(p.title)}"></label>
      <label>Category<input name="category" placeholder="Web, Mobile, Hardware" value="${esc(p.category)}"></label>
      <label>Description<textarea name="description" rows="4" maxlength="1200">${esc(p.description)}</textarea></label>
      <label>Tags (separate with commas)<input name="tags" value="${esc((p.tags || []).join(", "))}"></label>
      <label>Project link<input name="link_url" type="url" placeholder="https://" value="${esc(p.link_url)}"></label>
      <label>Logo${p.logo_url ? " (leave empty to keep the current one)" : ""}<input name="logo" type="file" accept="image/*"></label>
      <label>Cover image${p.cover_url ? " (leave empty to keep the current one)" : ""}<input name="cover" type="file" accept="image/*"></label>
      <div class="st-two">
        <label>Order (lower shows first)<input name="sort_order" type="number" value="${esc(p.sort_order ?? 0)}"></label>
        <label class="st-check"><input type="checkbox" name="featured" ${p.featured ? "checked" : ""}> Highlight</label>
      </div>
      <p class="st-msg" role="status"></p>
      <div class="st-actions">
        <button class="st-btn st-gold" type="submit">Save project</button>
        <button class="st-btn st-line" type="button" data-cancel>Cancel</button>
      </div>
    </form>`;
  }

  async function saveProject(form) {
    const f = form.elements;
    const title = f.title.value.trim();
    if (!title) return say(form, "Add a title first.", false);
    say(form, "Saving…");
    const rec = {
      title,
      category: f.category.value.trim() || null,
      description: f.description.value.trim() || null,
      tags: f.tags.value.split(",").map((t) => t.trim()).filter(Boolean),
      link_url: safeUrl(f.link_url.value.trim()) || null,
      featured: f.featured.checked,
      sort_order: parseInt(f.sort_order.value, 10) || 0,
    };
    if (isFile(f.logo.files[0])) rec.logo_url = await upload(f.logo.files[0], "projects");
    if (isFile(f.cover.files[0])) rec.cover_url = await upload(f.cover.files[0], "projects");

    const id = f.id.value;
    const q = id ? sb.from("projects").update(rec).eq("id", id).select() : sb.from("projects").insert(rec).select();
    const { data, error } = await q;
    if (error || !data || !data.length) throw new Error(error ? error.message : "Not allowed. Sign in as the owner.");
    studio.editing = null;
    await render();
    loadPublic();
  }

  /* ---------- Graphics ---------- */
  async function tabGraphics(body) {
    const { data, error } = await sb
      .from("graphics")
      .select("*")
      .order("sort_order")
      .order("created_at", { ascending: false });
    if (error) return (body.innerHTML = `<p class="st-msg bad">${esc(error.message)}</p>`);
    body.innerHTML = `<form class="st-form" data-form="graphics">
        <label>Title (optional)<input name="title" maxlength="120"></label>
        <label>Images<input name="files" type="file" accept="image/*" multiple required></label>
        <p class="st-msg" role="status"></p>
        <button class="st-btn st-gold" type="submit">Upload graphics</button>
      </form>
      ${
        data.length
          ? `<div class="st-grid">${data
              .map(
                (g) => `<figure><img src="${esc(g.image_url)}" alt="${esc(g.title || "")}">
              <button class="st-btn st-line" data-delg="${g.id}">Delete</button></figure>`
              )
              .join("")}</div>`
          : `<p class="st-note">No graphics yet. Upload flyers, posters and brand work here.</p>`
      }`;
  }

  async function saveGraphics(form) {
    const files = [...form.elements.files.files].filter(isFile);
    if (!files.length) return say(form, "Choose at least one image.", false);
    const title = form.elements.title.value.trim() || null;
    for (let i = 0; i < files.length; i++) {
      say(form, `Uploading ${i + 1} of ${files.length}…`);
      const image_url = await upload(files[i], "graphics");
      const { error } = await sb.from("graphics").insert({ title, image_url });
      if (error) throw new Error(error.message);
    }
    await render();
    loadPublic();
  }

  /* ---------- CV ---------- */
  async function tabCv(body) {
    const { data } = await sb.from("site_settings").select("*").eq("key", "cv_url").maybeSingle();
    const cv = safeUrl(data && data.value);
    body.innerHTML = `${
      cv
        ? `<a class="st-link" href="${esc(cv)}" target="_blank" rel="noopener noreferrer">Open current CV</a>`
        : `<p class="st-note">No CV uploaded yet.</p>`
    }
      <form class="st-form" data-form="cv">
        <label>Upload new CV (PDF)<input name="file" type="file" accept="application/pdf" required></label>
        <p class="st-note">It replaces the old one everywhere on the site straight away.</p>
        <p class="st-msg" role="status"></p>
        <button class="st-btn st-gold" type="submit">Upload CV</button>
      </form>`;
  }

  async function saveCv(form) {
    const file = form.elements.file.files[0];
    if (!isFile(file)) return say(form, "Choose a PDF first.", false);
    if (file.type !== "application/pdf") return say(form, "The CV must be a PDF.", false);
    if (file.size > MAX_PDF) return say(form, "That PDF is too large (max 15 MB).", false);
    say(form, "Uploading…");
    const path = "cv/cv.pdf";
    const { error } = await sb.storage.from(BUCKET).upload(path, file, {
      contentType: "application/pdf",
      upsert: true,
      cacheControl: "0",
    });
    if (error) throw new Error("Upload failed: " + error.message);
    const url = sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl + "?v=" + Date.now();
    const res = await sb.from("site_settings").upsert({ key: "cv_url", value: url }).select();
    if (res.error || !res.data.length) throw new Error(res.error ? res.error.message : "Not allowed. Sign in as the owner.");
    state.settings.cv_url = url;
    await render();
    say($(".st-body", studio.el), "CV uploaded. It is live on the site.", true);
  }

  /* ---------- Account ---------- */
  async function tabAccount(body) {
    const { data } = await sb.auth.getUser();
    body.innerHTML = `<p class="st-note">Signed in as</p><p class="st-email">${esc(data.user ? data.user.email : "")}</p>
      <form class="st-form" data-form="password">
        <label>New password<input name="pw" type="password" minlength="8" autocomplete="new-password" required></label>
        <label>Repeat new password<input name="pw2" type="password" minlength="8" autocomplete="new-password" required></label>
        <p class="st-msg" role="status"></p>
        <button class="st-btn st-gold" type="submit">Change password</button>
      </form>
      <button class="st-btn st-line" data-signout>Sign out</button>`;
  }

  async function savePassword(form) {
    const { pw, pw2 } = form.elements;
    if (pw.value.length < 8) return say(form, "Use at least 8 characters.", false);
    if (pw.value !== pw2.value) return say(form, "The two passwords don't match.", false);
    const { error } = await sb.auth.updateUser({ password: pw.value });
    if (error) throw new Error(error.message);
    form.reset();
    say(form, "Password changed.", true);
  }

  /* ---------------------------------------------------------------
     GO
  --------------------------------------------------------------- */
  const grid = $("#projects-grid");
  if (grid) state.fallback = grid.innerHTML;
  loadPublic();
})();
