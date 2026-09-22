export function EruditeAfricaLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Africa Continent Silhouette */}
      <path
        d="M38 34C35 30 38 24 45 22C52 20 62 25 67 29C72 32 82 32 86 35C90 38 90 44 87 48C84 53 82 58 84 64C86 70 94 77 92 84C90 91 80 97 76 104C72 111 68 122 62 126C58 128 55 125 56 120C58 112 60 102 56 94C53 87 46 80 43 72C40 64 36 55 35 46C34 40 40 37 38 34Z"
        stroke="#1E3A5F"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#0F172A"
      />
      {/* Madagascar */}
      <path
        d="M97 88C99 85 101 92 100 98C99 104 96 110 94 107C92 104 95 91 97 88Z"
        stroke="#1E3A5F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="#0F172A"
      />

      {/* Network Connecting Lines */}
      <g stroke="#94A3B8" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.85">
        <line x1="48" y1="36" x2="66" y2="40" />
        <line x1="48" y1="36" x2="42" y2="52" />
        <line x1="66" y1="40" x2="78" y2="48" />
        <line x1="42" y1="52" x2="62" y2="56" />
        <line x1="66" y1="40" x2="62" y2="56" />
        <line x1="78" y1="48" x2="80" y2="68" />
        <line x1="62" y1="56" x2="80" y2="68" />
        <line x1="62" y1="56" x2="52" y2="72" />
        <line x1="52" y1="72" x2="68" y2="78" />
        <line x1="80" y1="68" x2="68" y2="78" />
        <line x1="68" y1="78" x2="62" y2="96" />
        <line x1="52" y1="72" x2="62" y2="96" />
        <line x1="62" y1="96" x2="60" y2="116" />
      </g>

      {/* Network Nodes with distinctive colors matching Erudite Africa */}
      {/* Red hub (West/Central Africa) */}
      <circle cx="48" cy="36" r="6.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Orange node */}
      <circle cx="66" cy="40" r="4.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Gold/Yellow node */}
      <circle cx="78" cy="48" r="5" fill="#EAB308" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Cyan/Blue node */}
      <circle cx="42" cy="52" r="4" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Green center node */}
      <circle cx="62" cy="56" r="4.5" fill="#22C55E" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Teal node */}
      <circle cx="80" cy="68" r="4.2" fill="#14B8A6" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Green Southern node */}
      <circle cx="68" cy="78" r="4.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Indigo node */}
      <circle cx="52" cy="72" r="4" fill="#6366F1" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Gold South node */}
      <circle cx="62" cy="96" r="4.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Emerald Tip node */}
      <circle cx="60" cy="116" r="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

export function AlxLogo({ className = "w-6 h-6", invert = true }: { className?: string; invert?: boolean }) {
  return (
    <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Letter 'a' */}
      <path
        d="M24.5 35.5H19.5V31.8C18 34.4 15.2 36 11.8 36C5.5 36 1 31.2 1 24.5C1 17.8 5.6 13 11.9 13C15.2 13 18 14.7 19.5 17.2V8H24.5V35.5ZM12.7 17.5C8.4 17.5 5.9 20.6 5.9 24.5C5.9 28.5 8.4 31.5 12.7 31.5C17 31.5 19.5 28.5 19.5 24.5C19.5 20.5 17 17.5 12.7 17.5Z"
        fill={invert ? "#FFFFFF" : "#0F172A"}
      />
      {/* Letter 'l' */}
      <path
        d="M34.5 8H39.5V35.5H34.5V8Z"
        fill={invert ? "#FFFFFF" : "#0F172A"}
      />
      {/* Letter 'x' */}
      <path
        d="M50 13.5L57.5 24.5L50 35.5H56L61 27.8L66 35.5H72L64.5 24.5L72 13.5H66L61 21.2L56 13.5H50Z"
        fill={invert ? "#FFFFFF" : "#0F172A"}
      />
      {/* Distinctive ALX dot accent */}
      <circle cx="80" cy="33" r="3.2" fill="#0284C7" />
    </svg>
  );
}

export function GeekByteLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gb-grad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="45%" stopColor="#0070F3" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="gb-b-grad" x1="45" y1="25" x2="90" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0051C8" />
          <stop offset="100%" stopColor="#021B42" />
        </linearGradient>
      </defs>

      {/* Stylized 'G' Circle */}
      <path
        d="M52 14C31.5 14 15 30.5 15 51C15 71.5 31.5 88 52 88C64.5 88 74.8 82 81 72.5L68 64C64.5 69.5 58.5 73 52 73C39.8 73 30 63.2 30 51C30 38.8 39.8 29 52 29C60.5 29 67.5 34 70.8 41H52V54H87C88 50 88.5 45.8 88.5 41.5C88.5 26.5 72.2 14 52 14Z"
        fill="url(#gb-grad)"
      />

      {/* Interlocking 'B' Block */}
      <path
        d="M58 28H76C83.5 28 89 33 89 39.5C89 44.5 85.5 48.5 80.5 50C86.5 51.5 91 56 91 62.5C91 70.5 84 76 75.5 76H58V28Z"
        fill="url(#gb-b-grad)"
        opacity="0.95"
      />

      {/* White Dynamic Speed Lines / Radiating Wave Arcs */}
      <path
        d="M44 51C55 51 68 45 78 35"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M48 57C60 57 74 53 84 45"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M52 64C64 64 78 62 86 56"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M56 71C67 71 78 70 85 66"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GoogleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Blue Bar & Right Arc */}
      <path
        d="M44.5 20H24V28.8H35.8C34.7 32.2 32.1 35 28.7 36.6L36.3 42.5C41 38.2 44.5 31.8 44.5 24C44.5 22.6 44.3 21.3 44.5 20Z"
        fill="#4285F4"
      />
      {/* Green Bottom Arc */}
      <path
        d="M24 45C29.8 45 34.7 43.1 38.3 39.8L30.7 33.9C28.8 35.2 26.6 36 24 36C18.4 36 13.6 32.2 11.9 27L4 33.1C7.8 40.2 15.3 45 24 45Z"
        fill="#34A853"
      />
      {/* Yellow Left Arc */}
      <path
        d="M11.9 27C11.5 25.5 11.2 23.8 11.2 22C11.2 20.2 11.5 18.5 11.9 17L4 10.9C2.4 14.1 1.5 17.9 1.5 22C1.5 26.1 2.4 29.9 4 33.1L11.9 27Z"
        fill="#FBBC05"
      />
      {/* Red Top Arc */}
      <path
        d="M24 8C27.2 8 30 9.1 32.3 11.2L38.8 4.7C34.8 1.8 29.7 0 24 0C15.3 0 7.8 4.8 4 11.9L11.9 18C13.6 12.8 18.4 8 24 8Z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface BrandIconProps {
  brand: 'erudite' | 'alx' | 'geekbyte' | 'google';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CertificateBrandLogo({ brand, size = 'md', className = '' }: BrandIconProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const containerClasses = {
    sm: 'w-9 h-9 p-1.5',
    md: 'w-12 h-12 p-2',
    lg: 'w-16 h-16 p-3'
  };

  switch (brand) {
    case 'erudite':
      return (
        <div className={`rounded-xl bg-slate-900 border border-teal-500/30 flex items-center justify-center shadow-md shadow-teal-950/30 ${containerClasses[size]} ${className}`}>
          <EruditeAfricaLogo className={sizeClasses[size]} />
        </div>
      );
    case 'alx':
      return (
        <div className={`rounded-xl bg-slate-900 border border-sky-500/30 flex items-center justify-center shadow-md shadow-sky-950/30 ${containerClasses[size]} ${className}`}>
          <AlxLogo className={sizeClasses[size]} invert={true} />
        </div>
      );
    case 'geekbyte':
      return (
        <div className={`rounded-xl bg-slate-900 border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-950/30 ${containerClasses[size]} ${className}`}>
          <GeekByteLogo className={sizeClasses[size]} />
        </div>
      );
    case 'google':
      return (
        <div className={`rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center shadow-md shadow-amber-950/30 ${containerClasses[size]} ${className}`}>
          <GoogleLogo className={sizeClasses[size]} />
        </div>
      );
    default:
      return null;
  }
}
