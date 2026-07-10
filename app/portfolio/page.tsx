'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Monitor, ExternalLink } from 'lucide-react'

const categories = ['Semua', 'Company Profile', 'UMKM', 'Restaurant', 'Dashboard', 'Landing Page', 'Medical', 'Education']

const projects = [
  { name: 'PT Nusantara Teknologi', cat: 'Company Profile', tech: ['Next.js', 'Tailwind', 'Framer Motion'], color: 'from-blue-600/20 to-indigo-600/20', year: '2025' },
  { name: 'Bakso Pak Kumis', cat: 'UMKM', tech: ['Next.js', 'Tailwind'], color: 'from-orange-500/20 to-red-500/20', year: '2025' },
  { name: 'Restoran Sari Rasa', cat: 'Restaurant', tech: ['Next.js', 'Prisma'], color: 'from-yellow-500/20 to-orange-500/20', year: '2024' },
  { name: 'Dashboard Inventaris CV Maju', cat: 'Dashboard', tech: ['Next.js', 'PostgreSQL', 'Recharts'], color: 'from-green-500/20 to-teal-500/20', year: '2025' },
  { name: 'Klinik Sehat Mandiri', cat: 'Medical', tech: ['Next.js', 'Tailwind', 'Prisma'], color: 'from-cyan-500/20 to-blue-500/20', year: '2024' },
  { name: 'SMA Negeri Digital', cat: 'Education', tech: ['Next.js', 'TypeScript', 'Prisma'], color: 'from-purple-500/20 to-pink-500/20', year: '2024' },
  { name: 'Promo Ramadhan 2025', cat: 'Landing Page', tech: ['Next.js', 'Framer Motion'], color: 'from-emerald-500/20 to-green-500/20', year: '2025' },
  { name: 'PT Karya Logistik', cat: 'Company Profile', tech: ['Next.js', 'Tailwind'], color: 'from-slate-500/20 to-indigo-500/20', year: '2024' },
  { name: 'Toko Kue Manis Bu Sari', cat: 'UMKM', tech: ['Next.js', 'Tailwind'], color: 'from-pink-500/20 to-rose-500/20', year: '2025' },
  { name: 'Rumah Makan Padang Baru', cat: 'Restaurant', tech: ['Next.js', 'Framer Motion'], color: 'from-amber-500/20 to-yellow-500/20', year: '2025' },
  { name: 'ERP Distributor Elektronik', cat: 'Dashboard', tech: ['Next.js', 'PostgreSQL', 'Prisma'], color: 'from-violet-500/20 to-purple-500/20', year: '2025' },
  { name: 'Klinik Gigi Dr. Ari', cat: 'Medical', tech: ['Next.js', 'Tailwind', 'TypeScript'], color: 'from-sky-500/20 to-cyan-500/20', year: '2024' },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('Semua')
  const filtered = active === 'Semua' ? projects : projects.filter(p => p.cat === active)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Karya Terbaik</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">Portfolio <span className="text-gradient">Kami</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Setiap proyek adalah cerminan komitmen kami terhadap kualitas, detail, dan hasil yang terukur.</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30' : 'glass-card text-gray-400 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div key={project.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-all duration-300">
              <div className={`h-52 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                <Monitor className="w-16 h-16 text-white/10 group-hover:text-white/25 transition-all duration-300" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <ExternalLink className="w-4 h-4" /> Lihat Detail
                  </div>
                </div>
                <div className="absolute top-3 right-3 glass-card px-2 py-1 rounded-full text-xs text-gray-300">{project.year}</div>
              </div>
              <div className="p-5">
                <div className="text-xs text-indigo-400 mb-1">{project.cat}</div>
                <h3 className="text-white font-bold mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => <span key={t} className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">Tidak ada proyek dalam kategori ini.</div>
        )}

        <div className="text-center mt-16">
          <div className="glass-card neon-border rounded-2xl p-8 max-w-lg mx-auto">
            <h3 className="text-white font-bold text-xl mb-2">Ingin Proyek Anda di Sini?</h3>
            <p className="text-gray-400 text-sm mb-5">Mulai perjalanan digital Anda bersama LASTQUESTION dan jadilah bagian dari portofolio kami.</p>
            <a href="/pesan" className="btn-glow text-white font-semibold px-8 py-3 rounded-xl inline-block">Mulai Proyek</a>
          </div>
        </div>
      </div>
    </div>
  )
}
