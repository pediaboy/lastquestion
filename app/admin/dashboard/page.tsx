'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Logo from '../../components/Logo'
import { defaultServices, defaultFAQs, defaultSK, type Service, type FAQ } from '../../lib/data'

const ADMIN_KEY = 'lastquestion-admin-2026'

type Tab = 'services' | 'faq' | 'sk' | 'transactions' | 'settings'

function TabBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: '9px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
      background: active ? 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))' : 'transparent',
      color: active ? '#fff' : 'var(--text-3)', fontSize: 12, fontWeight: active ? 700 : 500,
      whiteSpace: 'nowrap',
    }}>{label}</button>
  )
}

export default function AdminDashboard() {
  const router = useRouter()
  const [tab, setTab] = useState<Tab>('services')
  const [services, setServices] = useState<Service[]>(defaultServices)
  const [faqs, setFaqs] = useState<FAQ[]>(defaultFAQs)
  const [sk, setSk] = useState(defaultSK)
  const [skDraft, setSkDraft] = useState(defaultSK)
  const [editSvc, setEditSvc] = useState<Service | null>(null)
  const [editFaq, setEditFaq] = useState<FAQ | null>(null)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('lq_admin') !== 'true') {
      router.push('/admin')
    }
  }, [router])

  const flash = (m: string) => { setMsg(m); setTimeout(() => setMsg(''), 3000) }

  const saveService = async () => {
    if (!editSvc) return
    await fetch('/api/admin/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
      body: JSON.stringify(editSvc),
    })
    setServices(p => editSvc.id.startsWith('new') ? [...p, { ...editSvc, id: `svc-${Date.now()}` }] : p.map(s => s.id === editSvc.id ? editSvc : s))
    setEditSvc(null)
    flash('Layanan disimpan.')
  }

  const saveFaq = async () => {
    if (!editFaq) return
    setFaqs(p => editFaq.id.startsWith('new') ? [...p, { ...editFaq, id: `faq-${Date.now()}` }] : p.map(f => f.id === editFaq.id ? editFaq : f))
    setEditFaq(null)
    flash('FAQ disimpan.')
  }

  const saveSK = () => { setSk(skDraft); flash('S&K diperbarui.') }

  const deleteService = (id: string) => {
    setServices(p => p.filter(s => s.id !== id))
    flash('Layanan dihapus.')
  }

  const deleteFaq = (id: string) => {
    setFaqs(p => p.filter(f => f.id !== id))
    flash('FAQ dihapus.')
  }

  const inp = { className: 'inp', style: { marginBottom: 10 } }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-950)', padding: '0 0 40px' }}>
      {/* Header */}
      <header style={{ padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(3,1,10,0.95)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Logo size="sm" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {msg && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ fontSize: 11, color: '#00d68f', fontWeight: 600 }}>{msg}</motion.div>}
          <button onClick={() => { localStorage.removeItem('lq_admin'); router.push('/admin') }}
            style={{ padding: '7px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: 'rgba(255,64,96,0.12)', color: '#ff4060', fontSize: 11, fontWeight: 700, fontFamily: 'inherit' }}>
            Keluar
          </button>
        </div>
      </header>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 20px' }}>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Admin Dashboard</div>
        <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 24 }}>lastquestion.co</div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10, marginBottom: 28 }}>
          {[
            { label: 'Total Layanan', val: services.length },
            { label: 'Total FAQ', val: faqs.length },
          ].map(s => (
            <div key={s.label} className="glass" style={{ borderRadius: 14, padding: '16px' }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--accent-2)' }}>{s.val}</div>
              <div style={{ fontSize: 10, color: 'var(--text-3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="glass" style={{ borderRadius: 14, padding: '6px', marginBottom: 20, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {(['services', 'faq', 'sk', 'settings'] as Tab[]).map(t => (
            <TabBtn key={t} label={{ services: 'Layanan', faq: 'FAQ', sk: 'S&K', transactions: 'Transaksi', settings: 'Pengaturan' }[t] || t} active={tab === t} onClick={() => setTab(t)} />
          ))}
        </div>

        {/* SERVICES */}
        {tab === 'services' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Manajemen Layanan</div>
              <button onClick={() => setEditSvc({ id: 'new', title: '', subtitle: '', description: '', price: 0, priceLabel: '', features: [], popular: false, category: 'web' })}
                style={{ padding: '8px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                Tambah Layanan
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map(svc => (
                <div key={svc.id} className="glass" style={{ borderRadius: 14, padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{svc.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--accent-2)' }}>{svc.priceLabel}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => setEditSvc(svc)} style={{ padding: '7px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                      background: 'rgba(124,58,237,0.15)', color: 'var(--accent)', fontSize: 12, fontWeight: 700 }}>Edit</button>
                    <button onClick={() => deleteService(svc.id)} style={{ padding: '7px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                      background: 'rgba(255,64,96,0.1)', color: '#ff4060', fontSize: 12, fontWeight: 700 }}>Hapus</button>
                  </div>
                </div>
              ))}
            </div>
            {editSvc && (
              <div className="glass" style={{ borderRadius: 18, padding: '22px', marginTop: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 16 }}>{editSvc.id === 'new' ? 'Tambah' : 'Edit'} Layanan</div>
                {(['title', 'subtitle', 'description', 'priceLabel'] as const).map(k => (
                  <div key={k} style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>{k}</label>
                    {k === 'description'
                      ? <textarea className="inp" rows={3} value={editSvc[k]} onChange={e => setEditSvc(p => p ? { ...p, [k]: e.target.value } : p)} style={{ resize: 'vertical' }} />
                      : <input className="inp" value={editSvc[k]} onChange={e => setEditSvc(p => p ? { ...p, [k]: e.target.value } : p)} />
                    }
                  </div>
                ))}
                <div style={{ marginBottom: 10 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>Harga (angka)</label>
                  <input className="inp" type="number" value={editSvc.price} onChange={e => setEditSvc(p => p ? { ...p, price: Number(e.target.value) } : p)} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>Fitur (satu per baris)</label>
                  <textarea className="inp" rows={5} value={editSvc.features.join('\n')} onChange={e => setEditSvc(p => p ? { ...p, features: e.target.value.split('\n').filter(Boolean) } : p)} style={{ resize: 'vertical' }} />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={saveService} style={{ padding: '11px 22px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))', color: '#fff', fontSize: 13, fontWeight: 700 }}>Simpan</button>
                  <button onClick={() => setEditSvc(null)} style={{ padding: '11px 18px', borderRadius: 10, border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit',
                    background: 'transparent', color: 'var(--text-3)', fontSize: 13, fontWeight: 600 }}>Batal</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FAQ */}
        {tab === 'faq' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Manajemen FAQ</div>
              <button onClick={() => setEditFaq({ id: 'new', question: '', answer: '', order: faqs.length + 1 })}
                style={{ padding: '8px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                Tambah FAQ
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map(f => (
                <div key={f.id} className="glass" style={{ borderRadius: 14, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{f.question}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.6 }}>{f.answer.slice(0, 80)}...</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <button onClick={() => setEditFaq(f)} style={{ padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                      background: 'rgba(124,58,237,0.15)', color: 'var(--accent)', fontSize: 11, fontWeight: 700 }}>Edit</button>
                    <button onClick={() => deleteFaq(f.id)} style={{ padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                      background: 'rgba(255,64,96,0.1)', color: '#ff4060', fontSize: 11, fontWeight: 700 }}>Hapus</button>
                  </div>
                </div>
              ))}
            </div>
            {editFaq && (
              <div className="glass" style={{ borderRadius: 18, padding: '22px', marginTop: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 16 }}>Edit FAQ</div>
                <div style={{ marginBottom: 10 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>Pertanyaan</label>
                  <input className="inp" value={editFaq.question} onChange={e => setEditFaq(p => p ? { ...p, question: e.target.value } : p)} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>Jawaban</label>
                  <textarea className="inp" rows={4} value={editFaq.answer} onChange={e => setEditFaq(p => p ? { ...p, answer: e.target.value } : p)} style={{ resize: 'vertical' }} />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={saveFaq} style={{ padding: '11px 22px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))', color: '#fff', fontSize: 13, fontWeight: 700 }}>Simpan</button>
                  <button onClick={() => setEditFaq(null)} style={{ padding: '11px 18px', borderRadius: 10, border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit',
                    background: 'transparent', color: 'var(--text-3)', fontSize: 13, fontWeight: 600 }}>Batal</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* S&K */}
        {tab === 'sk' && (
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Edit Syarat dan Ketentuan</div>
            <textarea className="inp" rows={24} value={skDraft} onChange={e => setSkDraft(e.target.value)}
              style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: 12, lineHeight: 1.8 }} />
            <button onClick={saveSK} style={{ marginTop: 12, padding: '12px 24px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))', color: '#fff', fontSize: 13, fontWeight: 700 }}>Simpan S&K</button>
          </div>
        )}

        {/* SETTINGS */}
        {tab === 'settings' && (
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Pengaturan Umum</div>
            <div className="glass" style={{ borderRadius: 18, padding: '22px' }}>
              {[
                { key: 'contact_wa', label: 'Link WhatsApp' },
                { key: 'contact_ig', label: 'Link Instagram' },
                { key: 'pakasir_slug', label: 'Pakasir Slug' },
                { key: 'site_name', label: 'Nama Situs' },
              ].map(s => (
                <div key={s.key} style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>{s.label}</label>
                  <input className="inp" defaultValue={s.key === 'contact_wa' ? 'https://wa.me/6289663874700' : s.key === 'contact_ig' ? 'https://instagram.com/lastquestion.co' : s.key === 'pakasir_slug' ? 'lastquestion' : 'lastquestion.co'} />
                </div>
              ))}
              <button onClick={() => flash('Pengaturan disimpan.')} style={{ padding: '12px 24px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                background: 'linear-gradient(135deg, var(--purple-hi), var(--accent-dim))', color: '#fff', fontSize: 13, fontWeight: 700 }}>Simpan Pengaturan</button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
