'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import FadeUp, { Stagger, SI } from '../components/FadeUp'
import Logo from '../components/Logo'
import BottomNav from '../components/BottomNav'
import { defaultServices } from '../lib/data'

const Stars  = dynamic(() => import('../components/Stars'),  { ssr: false })
const Nebula = dynamic(() => import('../components/Nebula'), { ssr: false })

const PAYMENT_METHODS = [
  { id: 'qris',           label: 'QRIS (Semua e-wallet)' },
  { id: 'bni_va',         label: 'Virtual Account BNI' },
  { id: 'bri_va',         label: 'Virtual Account BRI' },
  { id: 'cimb_niaga_va',  label: 'Virtual Account CIMB' },
  { id: 'permata_va',     label: 'Virtual Account Permata' },
  { id: 'paypal',         label: 'PayPal' },
]

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CheckoutModal({ svc, onClose }: { svc: typeof defaultServices[0]; onClose: () => void }) {
  const [form, setForm]   = useState({ name: '', email: '', paymentMethod: 'qris' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim()) { setError('Nama dan email wajib diisi.'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: svc.id, serviceName: svc.title, amount: svc.price,
          paymentMethod: form.paymentMethod, customerName: form.name, customerEmail: form.email,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Checkout gagal.')
      // Redirect to Pakasir payment page
      if (data.payment?.payment_url) {
        window.location.href = data.payment.payment_url
      } else {
        window.location.href = `/checkout/${data.orderId}/success`
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Terjadi kesalahan.')
      setLoading(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(3,1,10,0.92)', backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
        className="glass" style={{ borderRadius: 22, padding: '28px', width: '100%', maxWidth: 440, maxHeight: '90vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-1)' }}>{svc.title}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--accent-2)', marginTop: 2 }}>{svc.priceLabel}</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)', padding: 6 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {['name', 'email'].map(k => (
          <div key={k} style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>
              {k === 'name' ? 'Nama Lengkap' : 'Alamat Email'}
            </label>
            <input className="inp" type={k === 'email' ? 'email' : 'text'}
              placeholder={k === 'name' ? 'Nama kamu' : 'email@domain.com'}
              value={form[k as 'name' | 'email']}
              onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))}
            />
          </div>
        ))}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Metode Pembayaran</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {PAYMENT_METHODS.map(m => (
              <label key={m.id} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
                padding: '11px 14px', borderRadius: 10,
                border: `1px solid ${form.paymentMethod === m.id ? 'var(--accent)' : 'var(--border)'}`,
                background: form.paymentMethod === m.id ? 'rgba(124,58,237,0.12)' : 'rgba(6,2,15,0.6)',
                transition: 'all 0.18s',
              }}>
                <input type="radio" name="pm" value={m.id} checked={form.paymentMethod === m.id}
                  onChange={() => setForm(p => ({ ...p, paymentMethod: m.id }))} style={{ display: 'none' }} />
                <div style={{
                  width: 14, height: 14, borderRadius: '50%',
                  border: `2px solid ${form.paymentMethod === m.id ? 'var(--accent)' : 'var(--text-3)'}`,
                  background: form.paymentMethod === m.id ? 'var(--accent)' : 'transparent',
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 12, color: 'var(--text-2)', fontWeight: 600 }}>{m.label}</span>
              </label>
            ))}
          </div>
        </div>
        {error && <div style={{ fontSize: 12, color: '#ff4060', marginBottom: 14, padding: '10px 12px', borderRadius: 8, background: 'rgba(255,64,96,0.08)' }}>{error}</div>}
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSubmit} disabled={loading}
          style={{
            width: '100%', padding: '14px', borderRadius: 12, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
            background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
            color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
            opacity: loading ? 0.7 : 1,
          }}>
          {loading ? 'Memproses...' : 'Lanjut ke Pembayaran'}
        </motion.button>
        <p style={{ fontSize: 10, color: 'var(--text-3)', textAlign: 'center', marginTop: 12, lineHeight: 1.6 }}>
          Dengan melanjutkan, kamu menyetujui{' '}
          <Link href="/sk" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>Syarat dan Ketentuan</Link>{' '}kami.
        </p>
      </motion.div>
    </motion.div>
  )
}

function LayananContent() {
  const params = useSearchParams()
  const focusId = params.get('id')
  const [selected, setSelected] = useState<typeof defaultServices[0] | null>(null)

  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh', paddingBottom: 100 }}>
      <Stars /><Nebula />
      {selected && <CheckoutModal svc={selected} onClose={() => setSelected(null)} />}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500, padding: '0 20px', height: 60,
        display: 'flex', alignItems: 'center', background: 'rgba(3,1,10,0.85)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}><Logo size="sm" /></Link>
      </header>
      <div style={{ position: 'relative', zIndex: 10, padding: '80px 20px 40px', maxWidth: 900, margin: '0 auto' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 48, paddingTop: 20 }}>
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase' }}>Detail Layanan</div>
          <h1 style={{ fontSize: 'clamp(26px, 6vw, 52px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 12 }}>
            <span className="grad">Semua Layanan</span>
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto' }}>
            Deskripsi lengkap setiap layanan. Klik pesan untuk langsung checkout.
          </p>
        </FadeUp>

        <Stagger style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {defaultServices.map(svc => (
            <SI key={svc.id}>
              <motion.div whileHover={{ scale: 1.005 }} className="glass" style={{
                borderRadius: 20, padding: '24px 22px',
                border: (svc.popular || svc.id === focusId) ? '1px solid rgba(167,139,250,0.4)' : '1px solid var(--border)',
                boxShadow: svc.id === focusId ? '0 0 48px rgba(124,58,237,0.2)' : 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                  <div>
                    {svc.popular && (
                      <div style={{ fontSize: 8, fontWeight: 800, letterSpacing: 1.5, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 6 }}>TERPOPULER</div>
                    )}
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-1)', marginBottom: 3 }}>{svc.title}</h2>
                    <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>{svc.subtitle}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--accent-2)', letterSpacing: -0.5 }}>{svc.priceLabel}</div>
                    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                      onClick={() => setSelected(svc)}
                      style={{
                        marginTop: 10, padding: '10px 22px', borderRadius: 10, border: 'none', cursor: 'pointer',
                        background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
                        color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'inherit',
                        boxShadow: '0 4px 20px var(--glow-sm)',
                      }}>Pesan</motion.button>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 18 }}>{svc.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                  {svc.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <CheckIcon />
                      <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </SI>
          ))}
        </Stagger>
      </div>
      <BottomNav />
    </main>
  )
}

export default function LayananPage() {
  return <Suspense fallback={null}><LayananContent /></Suspense>
}
