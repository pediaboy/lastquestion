'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Eye, ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'

const categories = ['Semua', 'UMKM', 'Restaurant', 'Company', 'Dashboard', 'Landing Page', 'Medical', 'Education']

const projects = [
  {
    title: 'Sentra Batik Solo Premium',
    category: 'UMKM',
    desc: 'Toko online kerajinan batik tulis premium khas Solo dengan integrasi pembayaran multi-channel otomatis.',
    tech: ['Next.js 14', 'TailwindCSS', 'Prisma', 'Midtrans API'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Nusantara Culinary Hub',
    category: 'Restaurant',
    desc: 'Sistem e-menu interaktif berbasis pemindaian QR Code dan order pelacakan status makanan instan.',
    tech: ['Next.js 14', 'TypeScript', 'Websockets', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sinergi Mega Konstruksi',
    category: 'Company',
    desc: 'Situs web profil korporasi raksasa di bidang infrastruktur sipil dengan portofolio interaktif 3D.',
    tech: ['Next.js 14', 'Framer Motion', 'TailwindCSS', 'Figma'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Apex Logistic Dashboard',
    category: 'Dashboard',
    desc: 'Panel kontrol internal pemantauan armada logistik antar-pulau real-time terintegrasi peta GPS.',
    tech: ['React 18', 'Recharts', 'PostgreSQL', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'SaaS Alpha Copywriting Tool',
    category: 'Landing Page',
    desc: 'Landing page promosi perangkat lunak AI Copywriting dengan rasio konversi pendaftaran tinggi.',
    tech: ['Next.js 14', 'TailwindCSS', 'Framer Motion', 'Zod'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'MediCare Telehealth Portal',
    category: 'Medical',
    desc: 'Portal reservasi dokter spesialis, konsultasi live chat, dan rekam medis elektronik terenskripsi.',
    tech: ['Next.js 14', 'Prisma', 'TailwindCSS', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cendekia Academy LMS',
    category: 'Education',
    desc: 'Sistem manajemen kursus video online dengan kuis interaktif dan penerbitan sertifikat kelulusan.',
    tech: ['Next.js 14', 'Node.js', 'Vimeo API', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Hotel Mulia Sentosa',
    category: 'Company',
    desc: 'Portal booking mewah, sistem ketersediaan kamar, dan integrasi ulasan akomodasi berbintang.',
    tech: ['Next.js 14', 'Prisma', 'Stripe', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Toko Furnitur Kayu Jati',
    category: 'UMKM',
    desc: 'Katalog online furniture Jepara mewah dengan fitur visualisasi ruang interaktif.',
    tech: ['Next.js 14', 'TailwindCSS', 'Firebase', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'HR-Smart Employee Portal',
    category: 'Dashboard',
    desc: 'Sistem portal karyawan terpadu untuk pengajuan cuti, presensi wajah GPS, dan sistem payroll.',
    tech: ['Next.js 14', 'TailwindCSS', 'Prisma', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Crypto Wave Trading LP',
    category: 'Landing Page',
    desc: 'Situs pemasaran aplikasi finansial kripto dengan grafik pergerakan harga real-time interaktif.',
    tech: ['Next.js 14', 'TailwindCSS', 'Framer Motion', 'CoinGecko API'],
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Klinik Gigi Sehat Bersama',
    category: 'Medical',
    desc: 'Website pendaftaran konsultasi medis terintegrasi sistem rekam medis antrean pasien klinik gigi.',
    tech: ['Next.js 14', 'Prisma', 'SQLite', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  }
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Semua')

  const filteredProjects = activeTab === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <div className="py-16 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Karya Terbaik Kami</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            GALERI PORTOFOLIO PRESTASI KAMI
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Menampilkan hasil karya digital orisinal, berperforma tinggi, serta memiliki rasio konversi tinggi yang telah membantu klien kami berkembang pesat.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === cat
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={proj.title}
                className="glass-card overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden border-b border-white/5">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link 
                        href={`/pesan?paket=${encodeURIComponent(proj.title)}`}
                        className="p-3.5 rounded-full bg-indigo-600 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2 font-bold text-xs"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Pesan Website Serupa</span>
                      </Link>
                    </div>
                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full">
                      {proj.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="px-6 pb-6 mt-auto border-t border-white/5 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[10px] bg-white/5 border border-white/10 text-gray-400 font-semibold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA section */}
        <div className="mt-20 text-center glass-card p-8 sm:p-12 border-indigo-500/10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ingin Memiliki Website Sekelas Portofolio Kami?</h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
            Hubungi kami sekarang untuk mewujudkan ide brilian bisnis Anda menjadi kenyataan digital yang luar biasa.
          </p>
          <Link
            href="/kontak"
            className="px-8 py-4 rounded-full text-xs font-bold btn-glow-primary inline-flex items-center space-x-2"
          >
            <span>Dapatkan Penawaran Khusus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
