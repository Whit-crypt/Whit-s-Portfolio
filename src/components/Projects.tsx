import { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, Shield, Terminal, Users, Sparkles } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<'All' | 'Cybersecurity' | 'AI Education' | 'Leadership'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: ('All' | 'Cybersecurity' | 'AI Education' | 'Leadership')[] = [
    'All',
    'Cybersecurity',
    'AI Education',
    'Leadership'
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              03. Selected Portfolio & Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Technical audits, educational outreach, and operational coordination.
            </h2>
          </div>

          {/* Interactive Filters (Functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const getCategoryIcon = () => {
              switch (project.category) {
                case 'Cybersecurity':
                  return Shield;
                case 'AI Education':
                  return Sparkles;
                case 'Leadership':
                  return Users;
                default:
                  return Terminal;
              }
            };
            const CategoryIcon = getCategoryIcon();

            return (
              <div
                key={project.id}
                className="group bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-900', 'p-6');
                        const iconContainer = document.createElement('div');
                        iconContainer.className = 'text-center space-y-2';
                        iconContainer.innerHTML = `
                          <div class="w-12 h-12 mx-auto rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">PROJ</div>
                          <span class="text-xs text-slate-400 block">${project.category}</span>
                        `;
                        parent.appendChild(iconContainer);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Clean unboxed category badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-medium text-slate-300">
                    <CategoryIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>{project.category}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-400">
                    Role: <span className="text-slate-200 font-medium">{project.role}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools used - Clean unboxed text list */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                      <span className="text-slate-500 text-[11px]">Stack:</span>
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="font-mono text-slate-300 text-xs bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn"
                    >
                      <span>Explore Case Study & Outcomes</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed deep dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
