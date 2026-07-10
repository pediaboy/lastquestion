'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Check, HelpCircle, AlertCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    price: 'Rp500.000',
    originalPrice: 'Rp1.000.000',
    desc: 'Solusi dasar super hemat untuk kebutuhan personal, portofolio online, atau profil UMKM baru.',
    popular: false,
    features: [
      '1 Halaman Sederhana (One-Page)',
      'Free Domain .my.id / .web.id 1 Thn',
      'Hosting Standar 500MB',
      'Desain Menggunakan Template Responsi',
      'Integrasi Tombol WhatsApp Chat',
      'Garansi Perbaikan Bug 1 Bulan',
      'Waktu Pengerjaan 3-5 Hari Kerja'
    ]
  },
  {
    name: 'Basic',
    price: 'Rp1.000.000',
    originalPrice: 'Rp2.000.000',
    desc: 'Website representatif yang ideal untuk bisnis kecil, portofolio profesional, dan brosur online.',
    popular: false,
    features: [
      'Hingga 3 Halaman Utama',
      'Free Domain Premium (.com / .id) 1 Thn',
      'Cloud Hosting SSD 1GB Super Cepat',
      'Desain Modern & Responsif Seluler',
      'Integrasi Sosial Media & Google Maps',
      'Optimasi SEO Dasar (Meta Tags)',
      'Garansi Bug 3 Bulan',
      'Waktu Pengerjaan 5-7 Hari Kerja'
    ]
  },
  {
    name: 'Business',
    price: 'Rp1.500.000',
    originalPrice: 'Rp3.000.000',
    desc: 'Pilihan tepat untuk profil korporasi, UMKM menengah, dan instansi yang menginginkan tampilan orisinal.',
    popular: false,
    features: [
      'Hingga 7 Halaman Utama',
      'Free Domain Premium (.com / .id) 1 Thn',
      'Cloud Hosting SSD 2GB Super Cepat',
      'Desain UI/UX Eksklusif (Custom Figma)',
      'Formulir Hubungi Kami & Lead Capture',
      'Keamanan SSL Certificate Gratis',
      'Optimasi Kecepatan PageSpeed 80+',
      'Garansi Bug 6 Bulan',
      'Waktu Pengerjaan 7-10 Hari Kerja'
    ]
  },
  {
    name: 'Professional',
    price: 'Rp3.000.000',
    originalPrice: 'Rp6.000.000',
    desc: 'Paket terlaris dengan fitur lengkap, performa premium Next.js 14, serta integrasi e-commerce dasar.',
    popular: true,
    features: [
      'Hingga 15 Halaman Premium',
      'Free Domain Premium (.com / .id) 1 Thn',
      'Premium Cloud Hosting SSD 5GB',
      'Dibuat dengan Next.js 14 + Tailwind',
      'Fitur Toko Online / E-Commerce Dasar',
      'Integrasi WhatsApp API / Auto-Sender',
      'Skor Kecepatan Google PageSpeed 95+',
      'Garansi Selamanya (Lifetime Bug Warranty)',
      'Waktu Pengerjaan 10-14 Hari Kerja'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Rp5.000.000',
    originalPrice: 'Rp10.000.000',
    desc: 'Dibuat khusus untuk korporasi besar yang memerlukan sistem e-commerce penuh dan integrasi pembayaran.',
    popular: false,
    features: [
      'Halaman Tidak Terbatas (Unlimited)',
      'Free Domain Premium (.com / .id / .co.id)',
      'Premium VPS Cloud Hosting 10GB',
      'Teknologi Next.js 14 App Router',
      'Sistem E-Commerce Lengkap & Cart',
      'Payment Gateway (Midtrans/Xendit/Duitku)',
      'Kalkulator Ongkos Kirim Otomatis',
      'Optimasi SEO On-Page Tingkat Lanjut',
      'Garansi Selamanya (Lifetime Bug Warranty)',
      'Waktu Pengerjaan 14-20 Hari Kerja'
    ]
  },
  {
    name: 'Corporate',
    price: 'Rp7.500.000',
    originalPrice: 'Rp15.000.000',
    desc: 'Sistem multi-aplikasi canggih dengan dashboard interaktif untuk pengelolaan data operasional berskala besar.',
    popular: false,
    features: [
      'Sistem Database Custom / Multi-Relasi',
      'Next.js 14 + Prisma + PostgreSQL/MySQL',
      'Dashboard Admin Eksklusif & Analitik',
      'Sistem Manajemen Pengguna (Role-Based)',
      'Manajemen Konten Custom (CMS Internal)',
      'Integrasi Bot Telegram / Notifikasi WA',
      'Keamanan Maksimal (DDOS Protection)',
      'Dokumentasi Kode & Desain Lengkap',
      'Garansi Selamanya (Lifetime Bug Warranty)',
      'Waktu Pengerjaan 20-30 Hari Kerja'
    ]
  },
  {
    name: 'Premium',
    price: 'Rp10.000.000',
    originalPrice: 'Rp20.000.000',
    desc: 'Aplikasi web kustom berkinerja ekstrim dengan integrasi AI, multi-bahasa, serta skalabilitas tanpa batas.',
    popular: false,
    features: [
      'Semua Fitur Paket Corporate',
      'Integrasi AI (OpenAI API / LLM Custom)',
      'Sistem Multi-Bahasa (Localization)',
      'Optimasi Arsitektur Database Super Besar',
      'Kecepatan Respon Database <50ms',
      'Setup CI/CD Otomatis ke Server Produksi',
      'Dukungan Teknis Prioritas 24/7',
      'Garansi Selamanya (Lifetime Bug Warranty)',
      'Waktu Pengerjaan 30-45 Hari Kerja'
    ]
  },
  {
    name: 'Ultimate',
    price: 'Rp15.000.000',
    originalPrice: 'Rp30.000.000',
    desc: 'Situs web kustom berkecepatan dewa, fitur tak terbatas, performa ultra, didukung tim arsitek sistem terbaik kami.',
    popular: false,
    features: [
      'Fitur Custom Tanpa Batasan Apapun',
      'Infrastruktur Cloud Khusus (AWS / GCP)',
      'Arsitektur Microservices Profesional',
      'Sistem Keamanan Tingkat Tinggi (SOC 2)',
      'Desain UI/UX oleh Art Director Khusus',
      'Konsultasi Tatap Muka / Online Mingguan',
      'Dukungan Dedicated Developer 3 Bulan',
      'Garansi Selamanya (Lifetime Bug Warranty)',
      'Waktu Pengerjaan Sesuai Timeline Kesepakatan'
    ]
  }
]

const addons = [
  { name: 'Tambah Halaman Tambahan', price: 'Rp100.000 / halaman', desc: 'Penambahan halaman di luar kuota paket yang dipilih.' },
  { name: 'Sistem Multi-Bahasa (English/Indonesian)', price: 'Rp1.000.000', desc: 'Translasi dinamis untuk seluruh halaman website.' },
  { name: 'Integrasi Payment Gateway Otomatis', price: 'Rp1.500.000', desc: 'Menerima pembayaran otomatis via Transfer Bank, E-Wallet, & Alfamart/Indomaret.' },
  { name: 'Sistem WhatsApp Blast / Notifikasi', price: 'Rp500.000', desc: 'Kirim notifikasi transaksi otomatis ke nomor WhatsApp pembeli Anda.' },
  { name: 'Maintenance & Optimasi Bulanan', price: 'Rp300.000 / bulan', desc: 'Pencadangan data mingguan, pembaruan plugin/sistem, serta perbaikan berkala.' },
  { name: 'Optimasi SEO Bulanan (Peringkat Google)', price: 'Rp3.000.000 / bulan', desc: 'Riset keyword bulanan, penulisan artikel SEO, backlink berkualitas tinggi.' }
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('one-time') // 'one-time' or 'maintenance'

  return (
    <div className="py-16 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            PILIHAN PAKET HARGA TRANSPARAN
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Tidak ada biaya tersembunyi. Semua paket dibuat dengan standar kualitas premium untuk mendorong kesuksesan bisnis Anda di ranah digital.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className={`glass-card p-6 flex flex-col justify-between relative overflow-hidden ${
                pkg.popular ? 'border-indigo-500/60 shadow-[0_0_30px_rgba(99,102,241,0.2)] bg-indigo-950/5' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-extrabold text-[10px] uppercase px-3 py-1.5 rounded-full tracking-wider flex items-center gap-1 shadow-md animate-pulse">
                  <Zap className="w-3 h-3" />
                  <span>Paling Populer</span>
                </div>
              )}

              <div>
                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                
                {/* Pricing info */}
                <div className="mb-4">
                  <span className="text-[11px] text-gray-500 line-through block">{pkg.originalPrice}</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-black text-white">{pkg.price}</span>
                    <span className="text-xs text-gray-400 font-medium">/ Sekali bayar</span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-6 border-b border-white/5 pb-6">
                  {pkg.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-300">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mr-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order CTA */}
              <Link
                href={`/pesan?paket=${pkg.name}`}
                className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg' 
                    : 'bg-white/5 border border-white/10 hover:bg-indigo-600 hover:border-indigo-600 text-white'
                }`}
              >
                <span>Pilih Paket {pkg.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-on Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">ADD-ON & FITUR TAMBAHAN</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Kostumisasi website Anda dengan fitur-fitur premium tambahan sesuai kebutuhan fungsional spesifik bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addons.map((addon, i) => (
              <div key={i} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white text-base mb-2">{addon.name}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{addon.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between items-center mt-auto">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Investasi</span>
                  <span className="text-sm font-black text-indigo-400">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer / Notes */}
        <div className="mt-16 glass-card p-6 border-indigo-500/20 bg-indigo-950/5 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
          <AlertCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
          <div className="text-xs text-gray-400 leading-relaxed space-y-2">
            <h5 className="font-bold text-white text-sm">Catatan Penting Pembayaran & Ketentuan Jasa:</h5>
            <p>1. Seluruh paket membutuhkan Pembayaran Uang Muka (DP) sebesar 50% sebelum pengerjaan project dimulai.</p>
            <p>2. Perpanjangan tahun berikutnya hanya dikenakan biaya sewa domain dan hosting berkisar Rp250.000 s/d Rp1.500.000 per tahun tergantung paket yang dipilih.</p>
            <p>3. Lifetime Bug Warranty berlaku penuh selama website Anda tidak dimodifikasi oleh pihak eksternal dan tetap dihosting di infrastruktur server milik kami.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
