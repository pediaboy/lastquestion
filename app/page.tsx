'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Zap, Shield, Globe, Cpu, BarChart3, Headphones,
  Code2, Layers, Rocket, Star, ChevronDown, Monitor, Smartphone, TrendingUp,
  Users, Clock, Award
} from 'lucide-react'

// Counter Hook
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return { count, ref }
}

const stats = [
  { value: 500, suffix: '+', label: 'Project Selesai', icon: <Rocket className="w-5 h-5" /> },
  { value: 99, suffix: '%', label: 'Kepuasan Client', icon: <Star className="w-5 h-5" /> },
  { value: 7, suffix: '+', label: 'Tahun Pengalaman', icon: <Award className="w-5 h-5" /> },
  { value: 24, suffix: '/7', label: 'Support Aktif', icon: <Headphones className="w-5 h-5" /> },
]

const whyUs = [
  { icon: <Zap className="w-6 h-6 text-indigo-400" />, title: 'Performa Tinggi', desc: 'Website kami dioptimasi untuk mencapai skor Lighthouse 95+ dengan loading ultra-cepat di semua perangkat.' },
  { icon: <Shield className="w-6 h-6 text-purple-400" />, title: 'Keamanan Enterprise', desc: 'Dilindungi dengan SSL, proteksi XSS, rate limiting, dan sistem backup otomatis setiap hari.' },
  { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: 'SEO Teroptimasi', desc: 'Struktur kode dan konten yang dioptimasi untuk mesin pencari agar bisnis Anda mudah ditemukan.' },
  { icon: <Cpu className="w-6 h-6 text-pink-400" />, title: 'Teknologi Modern', desc: 'Menggunakan Next.js, React, dan stack terkini yang dipercaya perusahaan teknologi global.' },
  { icon: <BarChart3 className="w-6 h-6 text-yellow-400" />, title: 'Konversi Tinggi', desc: 'Desain dan copywriting yang dirancang khusus untuk mengubah pengunjung menjadi pelanggan.' },
  { icon: <Headphones className="w-6 h-6 text-green-400" />, title: 'Support 24/7', desc: 'Tim kami siap membantu Anda kapan saja. Tidak ada masalah yang dibiarkan menggantung.' },
]

const howItWorks = [
  { step: '01', title: 'Konsultasi', desc: 'Kami memahami kebutuhan bisnis, target pasar, dan tujuan website Anda secara mendalam.' },
  { step: '02', title: 'Desain & Persetujuan', desc: 'Tim desainer kami membuat mockup premium yang sesuai dengan identitas brand Anda.' },
  { step: '03', title: 'Pengembangan', desc: 'Developer kami membangun website dengan kode bersih, cepat, dan siap skala.' },
  { step: '04', title: 'Launch & Support', desc: 'Website diluncurkan dan kami terus memberikan dukungan penuh pasca-launching.' },
]

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel', 'Prisma']

const portfolioPrev = [
  { name: 'Klinik Sehat Prima', cat: 'Medical', tech: 'Next.js + Tailwind', color: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'Restoran Nusantara', cat: 'Restaurant', tech: 'Next.js + Framer Motion', color: 'from-orange-500/20 to-red-500/20' },
  { name: 'PT Maju Bersama', cat: 'Company Profile', tech: 'Next.js + Prisma', color: 'from-purple-500/20 to-indigo-500/20' },
]

const pricingPrev = [
  { name: 'Starter', price: '500.000', desc: 'Untuk UMKM dan usaha kecil', popular: false },
  { name: 'Professional', price: '3.000.000', desc: 'Untuk bisnis berkembang', popular: true },
  { name: 'Enterprise', price: '5.000.000', desc: 'Untuk perusahaan menengah', popular: false },
]

const faqPrev = [
  { q: 'Berapa lama proses pembuatan website?', a: 'Tergantung paket yang dipilih. Paket Starter membutuhkan 2-4 hari, sedangkan paket Enterprise bisa 10-20 hari kerja.' },
  { q: 'Apakah saya bisa meminta revisi?', a: 'Tentu. Setiap paket sudah termasuk kuota revisi. Paket Professional bahkan menawarkan revisi unlimited selama masa pengerjaan.' },
  { q: 'Teknologi apa yang digunakan?', a: 'Kami menggunakan Next.js, React, TypeScript, dan Tailwind CSS — stack yang dipakai perusahaan teknologi kelas dunia.' },
  { q: 'Apakah website saya akan muncul di Google?', a: 'Ya. Setiap website kami dioptimasi untuk SEO sejak awal, termasuk struktur data, meta tag, dan kecepatan halaman.' },
  { q: 'Bagaimana sistem pembayarannya?', a: 'Pembayaran dilakukan via transfer bank (SeaBank atau DANA). Invoice dan nomor order digenerate otomatis setelah pemesanan.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* BG Orbs */}
        <div className="orb w-96 h-96 bg-indigo-600 top-1/4 -left-48" />
        <div className="orb w-80 h-80 bg-purple-600 bottom-1/4 -right-40" style={{ animationDelay: '2s' }} />
        <div className="orb w-64 h-64 bg-cyan-600 top-1/2 left-1/2" style={{ animationDelay: '4s', opacity: 0.08 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-indigo-300 mb-8 border border-indigo-500/20">
              <Zap className="w-4 h-4" />
              <span>Web Development Agency Terpercaya di Indonesia</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
              <span className="text-white">BUILDING</span>
              <br />
              <span className="text-gradient">DIGITAL</span>
              <br />
              <span className="text-white">EXPERIENCES</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Kami membantu bisnis berkembang melalui website premium yang cepat, modern, dan menghasilkan lebih banyak pelanggan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/harga" className="btn-glow text-white font-semibold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2">
                Lihat Paket <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/kontak" className="neon-border text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-all duration-300">
                Konsultasi Gratis
              </Link>
            </div>

            {/* Floating stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Website Cepat', sub: 'Sub-2s loading' },
                { label: 'Mobile First', sub: 'Responsif 100%' },
                { label: 'SEO Ready', sub: 'Google-friendly' },
                { label: 'Garansi Revisi', sub: 'Sampai puas' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4 border-glow-animate">
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const { count, ref } = useCounter(stat.value)
              return (
                <motion.div
                  key={stat.label}
                  ref={ref}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3 text-indigo-400">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Keunggulan Kami</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Mengapa Memilih <span className="text-gradient">LASTQUESTION</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Kami bukan sekadar penyedia jasa website. Kami adalah mitra digital yang berkomitmen pada hasil nyata.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
                className="glass-card rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="cara-kerja" className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Proses Kerja</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Cara Kerja <span className="text-gradient">Kami</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Proses yang transparan dan terstruktur untuk memastikan website Anda selesai tepat waktu.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50" />
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
                className="glass-card rounded-2xl p-6 text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg mx-auto mb-4 shadow-lg shadow-indigo-500/30">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Karya Terbaik</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Portfolio <span className="text-gradient">Kami</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Setiap project adalah bukti komitmen kami terhadap kualitas dan kepuasan klien.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {portfolioPrev.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
                className={`glass-card rounded-2xl overflow-hidden group cursor-pointer`}
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Monitor className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-all" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-indigo-400 mb-1">{item.cat}</div>
                  <h3 className="text-white font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-xs">{item.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="btn-glow text-white font-semibold px-8 py-3 rounded-xl inline-flex items-center gap-2">
              Lihat Semua Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm mb-8 tracking-widest uppercase">Teknologi Yang Kami Gunakan</div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="glass-card px-5 py-2.5 rounded-full text-gray-300 text-sm hover:text-white hover:border-indigo-500/30 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Harga Transparan</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Pilihan <span className="text-gradient">Paket</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Mulai dari Rp500.000. Tidak ada biaya tersembunyi.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {pricingPrev.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
                className={`glass-card rounded-2xl p-6 relative ${item.popular ? 'border border-indigo-500/50 shadow-lg shadow-indigo-500/10' : ''}`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    PALING POPULER
                  </div>
                )}
                <div className="text-gray-400 text-sm mb-1">{item.name}</div>
                <div className="text-3xl font-black text-white mb-1">
                  Rp{item.price}
                </div>
                <div className="text-gray-500 text-xs mb-6">{item.desc}</div>
                <Link href="/harga" className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${item.popular ? 'btn-glow text-white' : 'border border-white/10 text-gray-300 hover:bg-white/5'}`}>
                  Pilih Paket
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/harga" className="text-indigo-400 hover:text-white text-sm inline-flex items-center gap-1 transition-colors">
              Lihat semua 8 paket lengkap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Pertanyaan <span className="text-gradient">Umum</span></h2>
          </motion.div>
          <div className="space-y-4">
            {faqPrev.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } } }}
                className="glass-card rounded-xl p-5"
              >
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-glow text-white font-semibold px-8 py-3 rounded-xl inline-flex items-center gap-2">
              Lihat 50+ Pertanyaan Lainnya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="glass-card neon-border rounded-3xl p-12 relative overflow-hidden">
              <div className="orb w-64 h-64 bg-indigo-600 -top-32 -right-32 opacity-20" />
              <div className="orb w-48 h-48 bg-purple-600 -bottom-24 -left-24 opacity-20" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">
                  Siap Memulai?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Konsultasikan kebutuhan website Anda sekarang. Gratis, tanpa komitmen, tanpa tekanan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/pesan" className="btn-glow text-white font-bold px-10 py-4 rounded-xl text-lg inline-flex items-center gap-2">
                    Pesan Sekarang <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/kontak" className="neon-border text-white font-semibold px-10 py-4 rounded-xl text-lg hover:bg-white/5 transition-all">
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
