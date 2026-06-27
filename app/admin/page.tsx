'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '../components/Logo'

const ADMIN_PIN = '260805'

export default function AdminLoginPage() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (pin === ADMIN_PIN) {
      localStorage.setItem('lq_admin', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('PIN salah. Coba lagi.')
      setPin('')
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="glass" style={{ borderRadius: 22, padding: '36px 28px', width: '100%', maxWidth: 360, textAlign: 'center' }}>
        <div style={{ marginBottom: 24 }}><Logo size="md" /></div>
        <h1 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Admin Panel</h1>
        <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 24 }}>Masukkan PIN untuk melanjutkan</p>
        <input className="inp" type="password" placeholder="PIN Admin" value={pin}
          onChange={e => { setPin(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          style={{ textAlign: 'center', fontSize: 18, letterSpacing: 6, marginBottom: 12 }}
        />
        {error && <div style={{ fontSize: 12, color: '#ff4060', marginBottom: 12 }}>{error}</div>}
        <button onClick={handleLogin} style={{
          width: '100%', padding: '13px', borderRadius: 10, border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))',
          color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
        }}>Masuk</button>
      </div>
    </main>
  )
}
