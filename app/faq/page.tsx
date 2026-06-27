'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeUp, { Stagger, SI } from '../components/FadeUp'
import Logo from '../components/Logo'
import BottomNav from '../components/BottomNav'
import { defaultFAQs } from '../lib/data'

const Stars  = dynamic(() => import('../components/Stars'),  { ssr: false })
const Nebula = dynamic(() => import('../components/Nebula'), { ssr: false })

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass" style={{ borderRadius: 16, overflow: 'hidden' }}>
      <button onClick={() => setOpen(p => !p)} style={{
        width: '100%', padding: '18px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'transparent', border: 'none', cursor: 'pointer',
        color: 'var(--text-1)', fontSize: 14, fontWeight: 700, fontFamily: 'inherit', textAlign: 'left', gap: 14,
      }}>
        <span>{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        style={{ overflow: 'hidden' }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <div style={{ padding: '0 20px 20px', fontSize: 13, lineHeight: 1.9, color: 'var(--text-2)' }}>{a}</div>
      </motion.div>
    </div>
  )
}

export default function FAQPage() {
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
      <div style={{ position: 'relative', zIndex: 10, padding: '80px 20px 40px', maxWidth: 680, margin: '0 auto' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 44, paddingTop: 20 }}>
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase' }}>FAQ</div>
          <h1 style={{ fontSize: 'clamp(24px, 6vw, 44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 12 }}>
            <span className="grad">Pertanyaan Umum</span>
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8 }}>
            Hal-hal yang sering ditanyakan sebelum mulai. Kalau belum ada jawabannya di sini, tanya langsung.
          </p>
        </FadeUp>
        <Stagger style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {defaultFAQs.map(f => (
            <SI key={f.id}><FaqItem q={f.question} a={f.answer} /></SI>
          ))}
        </Stagger>
        <FadeUp delay={0.1} style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://wa.me/6289663874700" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{
              display: 'inline-block', padding: '13px 28px', borderRadius: 12,
              background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
              color: '#fff', fontSize: 13, fontWeight: 700,
            }}>Tanya via WhatsApp</motion.div>
          </a>
        </FadeUp>
      </div>
      <BottomNav />
    </main>
  )
}
