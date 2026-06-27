'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import FadeUp from '../components/FadeUp'
import Logo from '../components/Logo'
import BottomNav from '../components/BottomNav'
import { defaultSK } from '../lib/data'

const Stars  = dynamic(() => import('../components/Stars'),  { ssr: false })
const Nebula = dynamic(() => import('../components/Nebula'), { ssr: false })

export default function SKPage() {
  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh', paddingBottom: 100 }}>
      <Stars /><Nebula />
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500, padding: '0 20px', height: 60,
        display: 'flex', alignItems: 'center', background: 'rgba(3,1,10,0.85)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}><Logo size="sm" /></Link>
      </header>
      <div style={{ position: 'relative', zIndex: 10, padding: '80px 20px 40px', maxWidth: 720, margin: '0 auto' }}>
        <FadeUp style={{ paddingTop: 20, marginBottom: 36, textAlign: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase' }}>Legal</div>
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 40px)', fontWeight: 900, letterSpacing: -1.2, marginBottom: 10 }}>
            <span className="grad">Syarat dan Ketentuan</span>
          </h1>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>Berlaku untuk semua layanan lastquestion.co</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="glass" style={{ borderRadius: 20, padding: '28px', lineHeight: 1.9, color: 'var(--text-2)', fontSize: 13, whiteSpace: 'pre-line' }}>
            {defaultSK}
          </div>
        </FadeUp>
        <FadeUp delay={0.15} style={{ textAlign: 'center', marginTop: 28 }}>
          <a href="https://wa.me/6289663874700" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
            Ada pertanyaan? Hubungi kami via WhatsApp
          </a>
        </FadeUp>
      </div>
      <BottomNav />
    </main>
  )
}
