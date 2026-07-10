'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Phone, Mail, Clock, Instagram, MessageCircle, CheckCircle2 } from 'lucide-react'

const budgets = ['< Rp500.000', 'Rp500.000 - Rp1.000.000', 'Rp1.000.000 - Rp3.000.000', 'Rp3.000.000 - Rp5.000.000', 'Rp5.000.000 - Rp10.000.000', '> Rp10.000.000']
const websiteTypes = ['Landing Page', 'Company Profile', 'Toko Online', 'Website UMKM', 'Dashboard Admin', 'ERP/CRM', 'Aplikasi Web', 'Lainnya']

export default function KontakPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', type: '', budget: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setSent(true)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Hubungi Kami</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">Mari <span className="text-gradient">Diskusi</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Ceritakan kebutuhan website Anda dan kami akan memberikan solusi terbaik secara gratis.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-9 h-9 bg-indigo-500/10 rounded-lg flex items-center justify-center"><Mail className="w-4 h-4 text-indigo-400" /></div>
                  <div><div className="text-xs text-gray-500">Email</div><div className="text-sm">lastquestion.co@gmail.com</div></div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-9 h-9 bg-indigo-500/10 rounded-lg flex items-center justify-center"><Instagram className="w-4 h-4 text-indigo-400" /></div>
                  <div><div className="text-xs text-gray-500">Instagram</div><div className="text-sm">@lastquestion.co</div></div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-9 h-9 bg-indigo-500/10 rounded-lg flex items-center justify-center"><Send className="w-4 h-4 text-indigo-400" /></div>
                  <div><div className="text-xs text-gray-500">Telegram</div><div className="text-sm">@ThoriqPedia</div></div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4"><Clock className="w-4 h-4 text-indigo-400" /><h3 className="text-white font-bold">Jam Operasional</h3></div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between"><span>Senin - Jumat</span><span className="text-white">09.00 - 18.00 WIB</span></div>
                <div className="flex justify-between"><span>Sabtu</span><span className="text-white">09.00 - 14.00 WIB</span></div>
                <div className="flex justify-between"><span>Minggu</span><span className="text-gray-600">Tutup</span></div>
              </div>
            </div>
            <a href="https://wa.me/6282218723401" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 w-full">
              <MessageCircle className="w-5 h-5" /> Chat via WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-white text-2xl font-bold mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-400">Tim kami akan menghubungi Anda dalam 1x24 jam kerja.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Nama Lengkap *</label>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Nama Anda" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@bisnis.com" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">No. HP / WhatsApp *</label>
                      <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="08xxxxxxxxxx" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Nama Usaha</label>
                      <input value={form.business} onChange={e => setForm({...form, business: e.target.value})} placeholder="Nama bisnis Anda" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Jenis Website</label>
                      <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500">
                        <option value="">Pilih jenis website</option>
                        {websiteTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Budget</label>
                      <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500">
                        <option value="">Pilih estimasi budget</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Pesan / Deskripsi Kebutuhan *</label>
                    <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Ceritakan kebutuhan website Anda secara detail..." className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-none" />
                  </div>
                  <button type="submit" className="btn-glow text-white font-semibold px-8 py-3.5 rounded-xl w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
