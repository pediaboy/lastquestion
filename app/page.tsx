'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeUp, { Stagger, SI } from './components/FadeUp'
import Logo from './components/Logo'
import BottomNav from './components/BottomNav'
import { defaultServices, defaultFAQs } from './lib/data'
import { useState } from 'react'

const Stars  = dynamic(() => import('./components/Stars'),  { ssr: false })
const Nebula = dynamic(() => import('./components/Nebula'), { ssr: false })

function SLabel({ text }: { text: string }) {
  return (
    <div style={{
      fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase',
      color: 'var(--accent)', marginBottom: 12,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <div style={{ width: 24, height: 1, background: 'var(--accent)', opacity: 0.5 }} />
      {text}
      <div style={{ width: 24, height: 1, background: 'var(--accent)', opacity: 0.5 }} />
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
      <button onClick={() => setOpen(p => !p)} style={{
        width: '100%', padding: '16px 18px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'transparent', border: 'none', cursor: 'pointer',
        color: 'var(--text-1)', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', textAlign: 'left', gap: 12,
      }}>
        <span>{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} style={{ overflow: 'hidden' }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
        <div style={{ padding: '0 18px 16px', fontSize: 12, lineHeight: 1.85, color: 'var(--text-2)' }}>{a}</div>
      </motion.div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh', paddingBottom: 100 }}>
      <Stars />
      <Nebula />

      {/* Top bar */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '0 20px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(3,1,10,0.85)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}>
        <Logo size="sm" />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="https://instagram.com/lastquestion.co" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-3)', textDecoration: 'none', fontSize: 11, fontWeight: 600, letterSpacing: 0.3 }}>
            Instagram
          </a>
          <a href="https://wa.me/6289663874700" target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '6px 14px', borderRadius: 999,
              background: 'linear-gradient(135deg, var(--purple-hi), var(--accent))',
              color: '#fff', fontSize: 11, fontWeight: 700,
              boxShadow: '0 0 16px var(--glow-sm)',
            }}>WhatsApp</div>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        position: 'relative', zIndex: 10,
        minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', padding: '80px 20px 80px',
      }}>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}>
          <Logo size="lg" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, letterSpacing: -2, lineHeight: 1.05, marginBottom: 18 }}>
          <span className="grad">Solusi Digital</span>
          <br />
          <span style={{ color: 'var(--text-2)', fontWeight: 400, fontSize: '0.65em' }}>untuk bisnis yang tidak kompromi</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ fontSize: 14, color: 'var(--text-2)', maxWidth: 440, lineHeight: 1.85, marginBottom: 40 }}>
          Web development, desain, dan konsultasi teknologi. Kami tidak mengerjakan semua hal —
          kami mengerjakan hal-hal tertentu dengan sangat baik.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/layanan" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.04, boxShadow: '0 0 48px rgba(124,58,237,0.5)' }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 30px', borderRadius: 12,
                background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
                color: '#fff', fontSize: 13, fontWeight: 700,
                boxShadow: '0 4px 28px var(--glow)', cursor: 'pointer',
              }}>
              Lihat Layanan
            </motion.div>
          </Link>
          <a href="https://wa.me/6289663874700" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="glass"
              style={{ padding: '13px 26px', borderRadius: 12, cursor: 'pointer', color: 'var(--text-2)', fontSize: 13, fontWeight: 600 }}>
              Konsultasi Gratis
            </motion.div>
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)' }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)', margin: '0 auto' }} />
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 20px 80px', maxWidth: 900, margin: '0 auto' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
          <SLabel text="Layanan Kami" />
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 800, letterSpacing: -1, marginBottom: 10 }}>
            Yang Kami Kerjakan
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8 }}>
            Pilih layanan yang sesuai dengan kebutuhan dan skala bisnis Anda.
          </p>
        </FadeUp>

        <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
          {defaultServices.map(svc => (
            <SI key={svc.id}>
              <motion.div whileHover={{ scale: 1.02, boxShadow: '0 8px 40px rgba(124,58,237,0.22)' }}
                className="glass" style={{
                  borderRadius: 18, padding: '22px 20px', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  border: svc.popular ? '1px solid rgba(167,139,250,0.4)' : '1px solid var(--border)',
                  position: 'relative', overflow: 'hidden',
                }}>
                {svc.popular && (
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    padding: '3px 10px', borderRadius: 999,
                    background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
                    fontSize: 8, fontWeight: 800, color: '#fff', letterSpacing: 1.2,
                  }}>TERPOPULER</div>
                )}
                <div style={{ fontSize: 10, color: 'var(--text-3)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{svc.category}</div>
                <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 4, color: 'var(--text-1)' }}>{svc.title}</div>
                <div style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 10, fontWeight: 600 }}>{svc.subtitle}</div>
                <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{svc.description}</p>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--accent-2)', letterSpacing: -0.5, marginBottom: 14 }}>{svc.priceLabel}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
                  {svc.features.slice(0, 4).map(f => (
                    <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <CheckIcon />
                      <span style={{ fontSize: 11, color: 'var(--text-2)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/layanan?id=${svc.id}`} style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{
                    padding: '11px', borderRadius: 10, textAlign: 'center',
                    background: svc.popular
                      ? 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))'
                      : 'rgba(124,58,237,0.12)',
                    border: svc.popular ? 'none' : '1px solid var(--border)',
                    color: svc.popular ? '#fff' : 'var(--accent)',
                    fontSize: 12, fontWeight: 700, cursor: 'pointer',
                    boxShadow: svc.popular ? '0 4px 20px var(--glow-sm)' : 'none',
                  }}>Pesan Sekarang</motion.div>
                </Link>
              </motion.div>
            </SI>
          ))}
        </Stagger>
      </section>

      {/* FAQ PREVIEW */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 20px 80px', maxWidth: 680, margin: '0 auto' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 32 }}>
          <SLabel text="FAQ" />
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, letterSpacing: -1 }}>
            Pertanyaan Umum
          </h2>
        </FadeUp>
        <Stagger style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {defaultFAQs.slice(0, 4).map(f => (
            <SI key={f.id}><FaqItem q={f.question} a={f.answer} /></SI>
          ))}
        </Stagger>
        <FadeUp delay={0.1} style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/faq" style={{ textDecoration: 'none', fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>
            Lihat semua pertanyaan
          </Link>
        </FadeUp>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 20px 40px', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <FadeUp>
          <div className="glass glow" style={{ borderRadius: 24, padding: '44px 28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
              width: 280, height: 280, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <SLabel text="Mulai Sekarang" />
            <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 800, letterSpacing: -0.8, marginBottom: 14 }}>
              Siap membangun sesuatu yang nyata?
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 28 }}>
              Hubungi kami sekarang dan mulai diskusi tanpa komitmen. Kami jawab dalam hitungan jam.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/6289663874700" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{
                  padding: '13px 28px', borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
                  color: '#fff', fontSize: 13, fontWeight: 700,
                  boxShadow: '0 4px 24px var(--glow)',
                }}>Hubungi via WhatsApp</motion.div>
              </a>
              <a href="https://instagram.com/lastquestion.co" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="glass" style={{
                  padding: '13px 22px', borderRadius: 12, color: 'var(--text-2)', fontSize: 13, fontWeight: 600,
                }}>Follow Instagram</motion.div>
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <BottomNav />
    </main>
  )
}
