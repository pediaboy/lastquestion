interface LogoProps { size?: 'sm' | 'md' | 'lg'; showText?: boolean }

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const dims = { sm: 28, md: 36, lg: 48 }[size]
  const fs   = { sm: 13, md: 16, lg: 22 }[size]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {/* SVG mark — stylized 'LQ' as a minimal galaxy eye */}
      <svg width={dims} height={dims} viewBox="0 0 48 48" fill="none">
        <defs>
          <radialGradient id="lq-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="60%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4c1d95" />
          </radialGradient>
          <radialGradient id="lq-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Outer glow ring */}
        <circle cx="24" cy="24" r="23" fill="url(#lq-glow)" />
        {/* Main circle */}
        <circle cx="24" cy="24" r="20" fill="url(#lq-grad)" opacity="0.15" />
        <circle cx="24" cy="24" r="20" stroke="url(#lq-grad)" strokeWidth="1" fill="none" opacity="0.6" />
        {/* Inner eye shape */}
        <ellipse cx="24" cy="24" rx="12" ry="6" stroke="#c4b5fd" strokeWidth="1.2" fill="none" opacity="0.7" />
        {/* Center dot — the 'last question' point */}
        <circle cx="24" cy="24" r="3" fill="#e9d5ff" />
        <circle cx="24" cy="24" r="1.2" fill="#fff" />
        {/* Orbit particles */}
        <circle cx="36" cy="24" r="1.2" fill="#a78bfa" opacity="0.7" />
        <circle cx="12" cy="24" r="1.2" fill="#a78bfa" opacity="0.7" />
        <circle cx="24" cy="36" r="0.8" fill="#7c3aed" opacity="0.5" />
        <circle cx="24" cy="12" r="0.8" fill="#7c3aed" opacity="0.5" />
      </svg>

      {showText && (
        <div>
          <div style={{
            fontSize: fs, fontWeight: 800, letterSpacing: -0.4,
            background: 'linear-gradient(135deg, #e9d5ff 0%, #a78bfa 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
          }}>lastquestion</div>
          {size !== 'sm' && (
            <div style={{ fontSize: 9, color: 'rgba(167,139,250,0.5)', letterSpacing: 2, fontWeight: 600, marginTop: 1 }}>.co</div>
          )}
        </div>
      )}
    </div>
  )
}
