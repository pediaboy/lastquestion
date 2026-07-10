'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Star, Zap } from 'lucide-react'
import { useState } from 'react'

const packages = [
  {
    name: 'Starter',
    price: '500.000',
    desc: 'Cocok untuk UMKM, toko kecil, usaha rumahan, freelancer, dan jasa lokal.',
    popular: false,
    features: ['Landing Page Profesional','Maksimal 5 Section','Responsive Mobile','Domain (.my.id atau milik client)','Hosting 1 Tahun','SSL Gratis','WhatsApp Button','Google Maps','Form Kontak','Basic SEO','Kecepatan Website Optimal','Gratis Revisi 2 Kali'],
    est: '2-4 Hari',
  },
  {
    name: 'Basic',
    price: '1.000.000',
    desc: 'Cocok untuk cafe, restoran, klinik, personal branding, dan toko online kecil.',
    popular: false,
    features: ['Hingga 5 Halaman','Desain Premium','Responsive','Hosting 1 Tahun','SSL & Domain','Form Booking','WhatsApp Integration','Google Analytics','Google Search Console','Basic On Page SEO','Optimasi Speed','Revisi 3 Kali'],
    est: '4-7 Hari',
  },
  {
    name: 'Business',
    price: '1.500.000',
    desc: 'Cocok untuk perusahaan kecil, startup, dan jasa profesional.',
    popular: false,
    features: ['Hingga 10 Halaman','Company Profile Premium','CMS Admin','Blog','Testimoni','FAQ & Portfolio','Optimasi SEO','Integrasi WhatsApp','Google Maps','Hosting, Domain & SSL','Backup Otomatis','Revisi 5 Kali'],
    est: '5-10 Hari',
  },
  {
    name: 'Professional',
    price: '3.000.000',
    desc: 'Untuk bisnis berkembang yang membutuhkan website profesional dengan fitur lengkap.',
    popular: true,
    features: ['Unlimited Halaman','Dashboard Admin','Artikel Blog','SEO Lengkap','Optimasi Performa','Integrasi Email','WhatsApp API','Sistem Testimoni','Form Dinamis','Galeri Animasi Premium','Hosting Premium & Domain','Backup Otomatis','Training Admin','Revisi Unlimited selama pengerjaan'],
    est: '7-14 Hari',
  },
  {
    name: 'Enterprise',
    price: '5.000.000',
    desc: 'Untuk perusahaan menengah yang membutuhkan sistem terintegrasi dan manajemen lengkap.',
    popular: false,
    features: ['Semua fitur Professional','Multi User','Dashboard Lengkap','CRM Sederhana','Customer Management','Invoice & Laporan','Database','API Integration','Telegram & WhatsApp Notification','Email Notification','Security Premium','Backup Harian','CDN & Optimasi Server'],
    est: '10-20 Hari',
  },
  {
    name: 'Corporate',
    price: '7.500.000',
    desc: 'Untuk perusahaan besar yang membutuhkan sistem ERP dan manajemen skala besar.',
    popular: false,
    features: ['Custom Dashboard','ERP Sederhana','Multi Role Login','Approval Workflow','Analytics Dashboard','Export Excel & PDF','Integrasi API','Database Besar','Server Optimization','High Security','Audit Log','Maintenance 3 Bulan','Prioritas Support'],
    est: '14-25 Hari',
  },
  {
    name: 'Premium',
    price: '10.000.000',
    desc: 'Untuk startup dan perusahaan digital yang membutuhkan otomasi dan integrasi penuh.',
    popular: false,
    features: ['Semua fitur Corporate','AI Automation','WhatsApp & Telegram & Email Automation','Payment Gateway','Midtrans/Xendit Integration','Multi Database','Admin Dashboard Premium','Sistem Membership','Login Google & OTP','SEO Advanced','Lighthouse 95+','Maintenance 6 Bulan'],
    est: '20-35 Hari',
  },
  {
    name: 'Ultimate',
    price: '15.000.000',
    desc: 'Untuk enterprise, SaaS, marketplace, dan aplikasi web skala besar.',
    popular: false,
    features: ['Custom System Full','ERP + CRM + POS','Membership & Subscription','Multi Vendor & Multi Branch','AI Assistant','Chat System','Real Time Dashboard','Payment Gateway + Invoice Otomatis','Telegram Bot + WhatsApp API','Email Server','Integrasi API Unlimited','Cloud & Vercel Deployment','Database Optimization','Backup Otomatis & Monitoring','Security Enterprise','Dokumentasi Lengkap','Maintenance 12 Bulan','Priority Support 24/7','Source Code Full'],
    est: '20-45 Hari',
  },
]

const addons = [
  { name: 'Logo Design', price: 'Rp250.000' },
  { name: 'Copywriting Website', price: 'Rp300.000' },
  { name: 'Artikel SEO', price: 'Rp150.000/artikel' },
  { name: 'Maintenance Bulanan', price: 'Rp300.000/bulan' },
  { name: 'Hosting Premium', price: 'Mulai Rp500.000/tahun' },
  { name: 'Domain .COM', price: 'Mulai Rp250.000/tahun' },
  { name: 'Domain .ID', price: 'Mulai Rp350.000/tahun' },
  { name: 'Integrasi Midtrans', price: 'Rp750.000' },
  { name: 'Integrasi Xendit', price: 'Rp750.000' },
  { name: 'Integrasi RajaOngkir', price: 'Rp500.000' },
  { name: 'WhatsApp API', price: 'Mulai Rp750.000' },
  { name: 'Telegram Bot', price: 'Rp500.000' },
  { name: 'Sistem Membership', price: 'Rp1.500.000' },
  { name: 'Dashboard Admin Custom', price: 'Mulai Rp2.000.000' },
  { name: 'AI Chatbot', price: 'Mulai Rp2.500.000' },
  { name: 'SEO Advanced', price: 'Mulai Rp2.000.000' },
  { name: 'Optimasi Kecepatan', price: 'Rp750.000' },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function HargaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqs = [
    { q: 'Apakah harga sudah termasuk domain dan hosting?', a: 'Mulai paket Starter sudah termasuk domain dan hosting 1 tahun. Detail lengkap ada di daftar fitur masing-masing paket.' },
    { q: 'Bagaimana jika saya membutuhkan fitur di luar paket?', a: 'Kami menyediakan layanan Add-On dan paket Custom yang bisa disesuaikan dengan kebutuhan spesifik Anda.' },
    { q: 'Apakah ada biaya tambahan setelah project selesai?', a: 'Tidak ada biaya tersembunyi. Biaya tambahan hanya muncul jika Anda memilih perpanjangan hosting, domain, atau maintenance.' },
  ]
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Harga Transparan</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">Pilihan <span className="text-gradient">Paket</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda. Semua paket dapat dikustomisasi.</p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } } }}
              className={`glass-card rounded-2xl p-6 flex flex-col relative ${pkg.popular ? 'border border-indigo-500/60 shadow-xl shadow-indigo-500/10' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> PALING POPULER
                </div>
              )}
              <div className="mb-4">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{pkg.name}</div>
                <div className="text-2xl font-black text-white">Rp{pkg.price}</div>
                <div className="text-gray-500 text-xs mt-0.5">Estimasi {pkg.est}</div>
              </div>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">{pkg.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.slice(0, 8).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
                {pkg.features.length > 8 && (
                  <li className="text-xs text-indigo-400">+{pkg.features.length - 8} fitur lainnya</li>
                )}
              </ul>
              <Link href={`/pesan?paket=${pkg.name}`} className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${pkg.popular ? 'btn-glow text-white' : 'border border-white/10 text-gray-300 hover:bg-white/5'}`}>
                Pesan Sekarang
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-Ons */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <div className="text-center mb-10">
            <div className="text-indigo-400 text-sm font-medium mb-2 tracking-widest uppercase">Tambahan Layanan</div>
            <h2 className="text-3xl font-black mb-2">Fitur <span className="text-gradient">Add-On</span></h2>
            <p className="text-gray-400 text-sm">Lengkapi website Anda dengan fitur tambahan sesuai kebutuhan.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {addons.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-4 hover:border-indigo-500/30 transition-all"
              >
                <div className="text-white font-medium text-sm mb-1">{a.name}</div>
                <div className="text-indigo-400 text-xs font-semibold">{a.price}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-xs text-center mt-6 max-w-2xl mx-auto">
            * Seluruh harga di atas merupakan harga mulai (starting from). Harga akhir dapat berubah sesuai kompleksitas fitur, desain, integrasi pihak ketiga, serta kebutuhan bisnis klien.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8 text-gradient">FAQ Harga</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                  <span className="text-white font-medium text-sm">{f.q}</span>
                  <Zap className={`w-4 h-4 text-indigo-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
          <div className="glass-card neon-border rounded-3xl p-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black mb-3 text-gradient">Butuh Paket Custom?</h2>
            <p className="text-gray-400 mb-6">Ceritakan kebutuhan Anda dan kami akan membuat penawaran yang tepat.</p>
            <Link href="/kontak" className="btn-glow text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2">
              Diskusi Sekarang <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
