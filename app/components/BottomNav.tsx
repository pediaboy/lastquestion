'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  {
    href: '/',
    label: 'Layanan',
    icon: (active: boolean) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#c4b5fd' : '#4a3d6a'} strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    href: '/layanan',
    label: 'Detail',
    icon: (active: boolean) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#c4b5fd' : '#4a3d6a'} strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    href: '/faq',
    label: 'FAQ',
    icon: (active: boolean) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#c4b5fd' : '#4a3d6a'} strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    href: '/sk',
    label: 'S&K',
    icon: (active: boolean) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#c4b5fd' : '#4a3d6a'} strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const pathname = usePathname()

  // Hide on admin and checkout routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/checkout')) return null

  return (
    <nav style={{
      position: 'fixed',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      padding: '8px 8px',
      borderRadius: 999,
      background: 'rgba(6,2,15,0.88)',
      backdropFilter: 'blur(32px) saturate(200%)',
      WebkitBackdropFilter: 'blur(32px) saturate(200%)',
      border: '1px solid rgba(124,58,237,0.25)',
      boxShadow: '0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(167,139,250,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    }}>
      {NAV.map(item => {
        const active = pathname === item.href
        return (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 3, padding: '9px 18px', borderRadius: 999,
              background: active
                ? 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(109,40,217,0.2))'
                : 'transparent',
              border: active ? '1px solid rgba(167,139,250,0.3)' : '1px solid transparent',
              boxShadow: active ? '0 0 16px rgba(124,58,237,0.25)' : 'none',
              transition: 'all 0.22s cubic-bezier(0.22,1,0.36,1)',
              minWidth: 60,
            }}>
              {item.icon(active)}
              <span style={{
                fontSize: 9, fontWeight: active ? 700 : 500,
                color: active ? '#c4b5fd' : '#4a3d6a',
                letterSpacing: 0.3, transition: 'color 0.2s',
              }}>{item.label}</span>
              {active && (
                <div style={{
                  position: 'absolute', bottom: 3, left: '50%', transform: 'translateX(-50%)',
                  width: 4, height: 4, borderRadius: '50%',
                  background: '#a78bfa', boxShadow: '0 0 8px #7c3aed',
                }} />
              )}
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
