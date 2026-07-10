'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, CheckCircle2, Copy, Upload, Zap } from 'lucide-react'

const packages = [
  { name: 'Starter', price: 500000 },
  { name: 'Basic', price: 1000000 },
  { name: 'Business', price: 1500000 },
  { name: 'Professional', price: 3000000 },
  { name: 'Enterprise', price: 5000000 },
  { name: 'Corporate', price: 7500000 },
  { name: 'Premium', price: 10000000 },
  { name: 'Ultimate', price: 15000000 },
]

const paymentMethods = [
  { id: 'seabank', label: 'SeaBank', account: '901555691160', name: 'THIRAFI THARIQ AL IDRIS' },
  { id: 'dana', label: 'DANA', account: '082218723401', name: 'THIRAFI THARIQ AL IDRIS' },
]

type Step = 'form' | 'payment' | 'upload' | 'done'

interface OrderData {
  orderNumber: string
  invoiceNumber: string
  name: string
  email: string
  phone: string
  business: string
  package: string
  amount: number
  notes: string
}

export default function PesanPage() {
  const [step, setStep] = useState<Step>('form')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<OrderData | null>(null)
  const [selectedMethod, setSelectedMethod] = useState('seabank')
  const [proofUrl, setProofUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', package: 'Professional', notes: '' })

  const selectedPkg = packages.find(p => p.name === form.package)
  const selectedPayment = paymentMethods.find(m => m.id === selectedMethod)

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount: selectedPkg?.price }),
    })
    const data = await res.json()
    if (data.success) {
      setOrder(data.order)
      setStep('payment')
    }
    setLoading(false)
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!order || !proofUrl) return
    setLoading(true)
    await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        invoiceNumber: order.invoiceNumber,
        orderNumber: order.orderNumber,
        name: order.name,
        email: order.email,
        phone: order.phone,
        package: order.package,
        amount: order.amount,
        method: selectedMethod,
        proofUrl,
      }),
    })
    setStep('done')
    setLoading(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatRp = (n: number) => `Rp${n.toLocaleString('id-ID')}`

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Pemesanan</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Pesan <span className="text-gradient">Sekarang</span></h1>
          <p className="text-gray-400">Isi form di bawah dan tim kami akan segera memproses pesanan Anda.</p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {(['form','payment','upload','done'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === s || (['payment','upload','done'].indexOf(step) > ['payment','upload','done'].indexOf(s)) ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white' : 'bg-white/5 text-gray-500'}`}>
                {i + 1}
              </div>
              {i < 3 && <div className="w-8 h-px bg-white/10" />}
            </div>
          ))}
        </div>

        {/* Step 1: Form */}
        {step === 'form' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-2xl p-8">
            <h2 className="text-white font-bold text-xl mb-6">Data Pemesanan</h2>
            <form onSubmit={handleOrder} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Nama Lengkap *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">No. WhatsApp *</label>
                  <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Nama Usaha</label>
                  <input value={form.business} onChange={e => setForm({...form, business: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Pilih Paket *</label>
                <select required value={form.package} onChange={e => setForm({...form, package: e.target.value})} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500">
                  {packages.map(p => <option key={p.name} value={p.name}>{p.name} — {formatRp(p.price)}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Catatan / Kebutuhan Tambahan</label>
                <textarea rows={3} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Ceritakan kebutuhan spesifik Anda..." className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-none" />
              </div>
              <div className="glass-card rounded-xl p-4 border border-indigo-500/20">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Paket {form.package}</span>
                  <span className="text-white font-bold">{formatRp(selectedPkg?.price || 0)}</span>
                </div>
              </div>
              <button type="submit" disabled={loading} className="btn-glow text-white font-bold px-8 py-3.5 rounded-xl w-full flex items-center justify-center gap-2">
                {loading ? 'Memproses...' : <><span>Lanjut ke Pembayaran</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </motion.div>
        )}

        {/* Step 2: Payment */}
        {step === 'payment' && order && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/20">
              <h2 className="text-white font-bold text-lg mb-4">Detail Invoice</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-400">No. Invoice</span><span className="text-white font-mono">{order.invoiceNumber}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">No. Order</span><span className="text-white font-mono">{order.orderNumber}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Paket</span><span className="text-white">{order.package}</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2 mt-2"><span className="text-gray-400">Total</span><span className="text-indigo-400 font-bold text-base">{formatRp(order.amount)}</span></div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">Pilih Metode Pembayaran</h2>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {paymentMethods.map(m => (
                  <button key={m.id} onClick={() => setSelectedMethod(m.id)} className={`p-4 rounded-xl border text-left transition-all ${selectedMethod === m.id ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10 bg-white/5'}`}>
                    <div className="text-white font-semibold text-sm">{m.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{m.account}</div>
                  </button>
                ))}
              </div>
              {selectedPayment && (
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-gray-400 text-xs mb-2">Transfer ke rekening</div>
                  <div className="text-white font-bold text-lg mb-0.5">{selectedPayment.label}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-300 font-mono text-xl">{selectedPayment.account}</span>
                    <button onClick={() => copyToClipboard(selectedPayment.account)} className="text-gray-500 hover:text-white transition-colors">
                      {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">a.n. {selectedPayment.name}</div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="text-gray-400 text-xs mb-1">Nominal Transfer</div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">{formatRp(order.amount)}</span>
                      <button onClick={() => copyToClipboard(String(order.amount))} className="text-gray-500 hover:text-white transition-colors">
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <button onClick={() => setStep('upload')} className="btn-glow text-white font-bold px-8 py-3.5 rounded-xl w-full mt-5 flex items-center justify-center gap-2">
                Sudah Transfer <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Upload Proof */}
        {step === 'upload' && order && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-2xl p-8">
            <h2 className="text-white font-bold text-xl mb-2">Upload Bukti Transfer</h2>
            <p className="text-gray-400 text-sm mb-6">Masukkan link bukti transfer (Google Drive, imgbb, atau URL gambar).</p>
            <form onSubmit={handleUpload} className="space-y-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">URL Bukti Transfer *</label>
                <input required type="url" value={proofUrl} onChange={e => setProofUrl(e.target.value)} placeholder="https://drive.google.com/..." className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
              </div>
              <button type="submit" disabled={loading || !proofUrl} className="btn-glow text-white font-bold px-8 py-3.5 rounded-xl w-full flex items-center justify-center gap-2">
                {loading ? 'Mengirim...' : <><Upload className="w-4 h-4" /><span>Kirim Bukti Pembayaran</span></>}
              </button>
            </form>
          </motion.div>
        )}

        {/* Step 4: Done */}
        {step === 'done' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-white text-2xl font-black mb-3">Pembayaran Diterima!</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">Tim kami akan memverifikasi pembayaran Anda dalam <strong className="text-white">1x24 jam kerja</strong>. Anda akan dihubungi melalui WhatsApp atau email setelah verifikasi selesai.</p>
            <div className="glass-card rounded-xl p-4 mb-6 text-sm">
              <div className="flex justify-between mb-1"><span className="text-gray-400">No. Invoice</span><span className="text-white font-mono">{order?.invoiceNumber}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">No. Order</span><span className="text-white font-mono">{order?.orderNumber}</span></div>
            </div>
            <p className="text-gray-500 text-xs">Simpan nomor invoice Anda sebagai referensi. Terima kasih telah mempercayakan proyek Anda kepada LASTQUESTION.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
