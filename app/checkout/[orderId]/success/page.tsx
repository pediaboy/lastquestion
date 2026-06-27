'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { use } from 'react'

const Stars  = dynamic(() => import('../../../components/Stars'),  { ssr: false })
const Nebula = dynamic(() => import('../../../components/Nebula'), { ssr: false })

export default function SuccessPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = use(params)
  const [status, setStatus] = useState<'pending' | 'completed' | 'canceled' | 'loading'>('loading')

  useEffect(() => {
    // Poll payment status every 3 seconds for up to 2 minutes
    let tries = 0
    const check = async () => {
      try {
        const amount = localStorage.getItem(`lq_amount_${orderId}`) || '0'
        const res = await fetch(`/api/payment/status?orderId=${orderId}&amount=${amount}`)
        const data = await res.json()
        if (data.payment?.status) setStatus(data.payment.status)
      } catch {
        // keep polling
      }
      tries++
      if (tries < 40) setTimeout(check, 3000)
    }
    // Start check after brief delay
    setTimeout(check, 1500)
  }, [orderId])

  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <Stars /><Nebula />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass" style={{ borderRadius: 24, padding: '40px 28px', maxWidth: 440, width: '100%', textAlign: 'center', position: 'relative', zIndex: 10 }}>

        {status === 'completed' && (
          <>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,214,143,0.15)', border: '2px solid rgba(0,214,143,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 28px rgba(0,214,143,0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d68f" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, color: '#00d68f' }}>Pembayaran Berhasil</h1>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 8 }}>
              Pesanan <strong style={{ color: 'var(--accent-2)' }}>{orderId}</strong> telah dikonfirmasi.
              Tim kami akan menghubungi kamu dalam 1x24 jam.
            </p>
          </>
        )}

        {status === 'pending' && (
          <>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(240,180,41,0.15)', border: '2px solid rgba(240,180,41,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0b429" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.3" /><path d="M21 12a9 9 0 00-9-9" />
                </svg>
              </motion.div>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, color: '#f0b429' }}>Menunggu Pembayaran</h1>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8 }}>
              Nomor pesanan: <strong style={{ color: 'var(--accent-2)' }}>{orderId}</strong><br />
              Selesaikan pembayaran dan halaman ini akan otomatis update.
            </p>
          </>
        )}

        {status === 'canceled' && (
          <>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,64,96,0.15)', border: '2px solid rgba(255,64,96,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4060" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, color: '#ff4060' }}>Pembayaran Dibatalkan</h1>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8 }}>Pesanan {orderId} dibatalkan. Hubungi kami jika ada pertanyaan.</p>
          </>
        )}

        {status === 'loading' && (
          <>
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 16 }}>Mengecek status pembayaran...</motion.div>
          </>
        )}

        <div style={{ marginTop: 28, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '11px 22px', borderRadius: 10, background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
              color: '#fff', fontSize: 13, fontWeight: 700 }}>Kembali ke Beranda</div>
          </Link>
          <a href="https://wa.me/6289663874700" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="glass" style={{ padding: '11px 18px', borderRadius: 10, color: 'var(--text-2)', fontSize: 13, fontWeight: 600 }}>
              Hubungi Kami
            </div>
          </a>
        </div>
      </motion.div>
    </main>
  )
}
