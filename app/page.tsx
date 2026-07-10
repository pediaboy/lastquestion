'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { 
  Rocket, Shield, Award, Sparkles, Cpu, Compass, CheckCircle2, 
  HelpCircle, ArrowRight, Zap, Target, HeartHandshake, Smile, RefreshCw
} from 'lucide-react'

// Stats
const stats = [
  { value: '500+', label: 'Project Selesai' },
  { value: '99%', label: 'Kepuasan Klien' },
  { value: '7+', label: 'Tahun Pengalaman' },
  { value: '24/7', label: 'Support Responsif' }
]

// Why Choose Us
const features = [
  {
    icon: Rocket,
    title: 'Ultra Performa & Speed',
    desc: 'Kami menggunakan Next.js 14 premium untuk memastikan website Anda dimuat dalam hitungan milidetik. Kecepatan maksimal setara standar global.'
  },
  {
    icon: Shield,
    title: 'Keamanan Super Ketat',
    desc: 'Dilengkapi sertifikasi SSL, pertahanan dari serangan DDoS, dan struktur kode aman untuk menjamin seluruh data transaksi bisnis Anda aman.'
  },
  {
    icon: Award,
    title: 'Desain Eksklusif (No-Template)',
    desc: 'Setiap pixel dirancang khusus secara orisinal agar merefleksikan identitas premium brand Anda secara sempurna dan mewah.'
  },
  {
    icon: Sparkles,
    title: 'Konversi Maksimal',
    desc: 'Pendekatan UI/UX berbasis riset psikologi konsumen untuk memastikan setiap pengunjung website diarahkan menjadi pembeli setia.'
  },
  {
    icon: Cpu,
    title: 'Arsitektur Skala Besar',
    desc: 'Struktur database dan backend modern yang siap menampung lonjakan jutaan traffic secara bersamaan tanpa kendala.'
  },
  {
    icon: Compass,
    title: 'Optimasi SEO Kelas Dunia',
    desc: 'Dilengkapi kaidah SEO on-page termutakhir agar website bisnis Anda langsung meroket ke peringkat teratas pencarian Google.'
  }
]

// How It Works
const steps = [
  { step: '01', title: 'Konsultasi & Strategi', desc: 'Kami menganalisis target market Anda dan merumuskan cetak biru (blueprint) website terbaik.' },
  { step: '02', title: 'Desain UI/UX Mewah', desc: 'Pembuatan visual website premium yang estetis, fungsional, dan interaktif menggunakan Figma.' },
  { step: '03', title: 'Pengembangan Next.js', desc: 'Menyusun kode program berkinerja ultra tinggi, animasi halus, dan integrasi backend tanpa celah.' },
  { step: '04', title: 'Peluncuran & Optimasi', desc: 'Proses testing ketat, rilis ke server produksi, diikuti optimasi SEO penuh untuk hasil terbaik.' }
]

// Tech Stack
const techStack = [
  'Next.js 14', 'React 18', 'TypeScript', 'TailwindCSS', 
  'Framer Motion', 'Prisma ORM', 'SQLite', 'Node.js', 
  'PostgreSQL', 'Vercel', 'AWS', 'Telegram API'
]

// FAQ Preview
const faqPreview = [
  { q: 'Mengapa menggunakan Next.js 14 dibandingkan CMS biasa seperti WordPress?', a: 'Next.js 14 menawarkan performa kecepatan berkali-kali lipat lebih cepat, keamanan tanpa celah karena bersifat static-site generation, skalabilitas tanpa batas, serta optimasi SEO yang jauh lebih unggul di mata Google.' },
  { q: 'Berapa lama estimasi pengerjaan untuk satu website?', a: 'Sangat bervariasi tergantung kompleksitas. Paket Landing Page dapat selesai dalam waktu 3-5 hari kerja, sementara sistem custom berskala enterprise membutuhkan waktu 14 hingga 30 hari kerja.' },
  { q: 'Apakah harga yang tertera sudah termasuk hosting dan domain?', a: 'Ya, seluruh paket yang kami tawarkan sudah termasuk gratis domain premium (.com/.id) dan cloud hosting super cepat selama tahun pertama.' },
  { q: 'Bagaimana sistem pembayaran di LASTQUESTION?', a: 'Sistem pembayaran menggunakan uang muka (DP) sebesar 50% untuk memulai project, dan pelunasan sebesar 50% dilakukan setelah seluruh website selesai dikembangkan dan siap dideploy.' },
  { q: 'Apakah ada garansi jika terjadi kendala pada website?', a: 'Kami memberikan garansi kerusakan dan perlindungan penuh dari bug selamanya (Lifetime Warranty) selama website dihosting di server rekomendasi kami.' }
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 relative bg-zinc-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 glass-card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-indigo-400 uppercase mb-3">Keunggulan Utama</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">MENGAPA MEMILIH LASTQUESTION?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Kami menggabungkan seni desain premium dengan teknologi paling mutakhir untuk melipatgandakan omset bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col items-start text-left group"
              >
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feat.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* How It Works (Timeline with Line) */}
      <section className="py-24 relative bg-zinc-950/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-indigo-400 uppercase mb-3">Workflow Kelas Dunia</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">4 LANGKAH MENUJU WEBSITE IMPIAN</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Proses kolaborasi transparan dan terukur untuk hasil yang presisi dan tepat waktu.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-violet-500/40 to-cyan-500/20 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-6 text-left relative z-10 bg-black/50"
                >
                  <span className="text-5xl font-black text-indigo-500/20 absolute right-4 top-4 font-mono">{item.step}</span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-extrabold text-sm mb-6 shadow-md">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-indigo-400 uppercase mb-3">Teknologi Mutakhir</h2>
        <h3 className="text-2xl sm:text-4xl font-black text-white mb-12">STACK TEKNOLOGI YANG KAMI GUNAKAN</h3>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm hover:border-indigo-500/50 hover:bg-white/10 hover:text-white transition-all cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-black to-purple-950/10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="neon-border p-8 sm:p-16">
            <div className="neon-border-inner p-8 sm:p-12 flex flex-col items-center">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                SIAP MEWUJUDKAN SITUS WEB PREMIUM ANDA?
              </h3>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
                Hubungi tim ahli kami hari ini untuk konsultasi strategis gratis senilai Rp2.500.000. Dapatkan blueprint gratis khusus untuk bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold btn-glow-primary flex items-center justify-center space-x-2"
                >
                  <span>Mulai Konsultasi</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/harga"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold btn-glow-secondary flex items-center justify-center"
                >
                  <span>Lihat Paket Harga</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-indigo-400 uppercase mb-3">Pusat Informasi</h2>
          <h3 className="text-3xl font-black text-white mb-4">PERTANYAAN UMUM</h3>
        </div>

        <div className="space-y-4">
          {faqPreview.map((faq, i) => (
            <div key={i} className="glass-card p-6 sm:p-8 text-left">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/faq" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-white font-bold transition-colors">
            <span>Lihat Semua 50+ Pertanyaan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
