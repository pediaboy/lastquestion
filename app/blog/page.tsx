'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, ArrowRight, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

const categories = ['Semua', 'Web Development', 'SEO', 'Digital Marketing', 'Tips & Trik', 'Case Study']

const posts = [
  { title: '10 Alasan Mengapa Website Bisnis Anda Harus Dibuat dengan Next.js', cat: 'Web Development', date: '5 Jul 2025', read: '7 menit', excerpt: 'Next.js telah menjadi standar industri untuk membangun website modern. Pelajari mengapa framework ini menjadi pilihan utama perusahaan teknologi global.' },
  { title: 'Cara Meningkatkan Kecepatan Website hingga 300% Tanpa Biaya Tambahan', cat: 'Tips & Trik', date: '1 Jul 2025', read: '5 menit', excerpt: 'Kecepatan website berdampak langsung pada konversi dan ranking Google. Berikut strategi teknis yang bisa langsung Anda terapkan hari ini.' },
  { title: 'SEO On-Page vs Off-Page: Mana yang Lebih Penting untuk Bisnis Anda?', cat: 'SEO', date: '28 Jun 2025', read: '8 menit', excerpt: 'Memahami perbedaan dan sinergi antara SEO on-page dan off-page adalah kunci sukses strategi digital marketing jangka panjang.' },
  { title: 'Studi Kasus: Bagaimana Website Baru Meningkatkan Penjualan Restoran 250%', cat: 'Case Study', date: '22 Jun 2025', read: '10 menit', excerpt: 'Kisah nyata klien kami dari industri kuliner yang berhasil melipatgandakan reservasi dan penjualan hanya dalam 3 bulan setelah rebranding digital.' },
  { title: 'Panduan Lengkap Google Analytics 4 untuk Pemilik Bisnis Non-Teknis', cat: 'Digital Marketing', date: '18 Jun 2025', read: '12 menit', excerpt: 'GA4 menghadirkan cara baru untuk memahami perilaku pengunjung website Anda. Panduan ini akan membantu Anda memaksimalkan data tanpa perlu jadi ahli teknis.' },
  { title: 'Mengapa Website UMKM Anda Tidak Muncul di Google (dan Cara Memperbaikinya)', cat: 'SEO', date: '14 Jun 2025', read: '6 menit', excerpt: 'Ada 7 kesalahan umum yang membuat website bisnis kecil sulit ditemukan di Google. Pelajari cara mengidentifikasi dan memperbaiki setiap masalah tersebut.' },
  { title: 'Desain Website 2025: Tren yang Wajib Anda Ketahui', cat: 'Web Development', date: '10 Jun 2025', read: '9 menit', excerpt: 'Glassmorphism, dark mode, micro-interaction, dan AI-powered personalization. Ini adalah tren desain yang mendominasi industri web tahun 2025.' },
  { title: 'ROI Website: Cara Menghitung dan Memaksimalkan Return dari Investasi Digital', cat: 'Digital Marketing', date: '5 Jun 2025', read: '11 menit', excerpt: 'Website bukan sekadar biaya, melainkan investasi. Pelajari cara menghitung ROI website bisnis Anda dan strategi untuk terus meningkatkannya.' },
  { title: 'WhatsApp Business API vs WhatsApp Business App: Mana yang Tepat?', cat: 'Tips & Trik', date: '1 Jun 2025', read: '7 menit', excerpt: 'Memilih antara WhatsApp Business API dan aplikasi reguler bergantung pada skala bisnis dan kebutuhan otomasi Anda. Panduan lengkap ada di sini.' },
]

export default function BlogPage() {
  const [active, setActive] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = active === 'Semua' || p.cat === active
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Blog</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">Insight <span className="text-gradient">Digital</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Tips, strategi, dan panduan praktis untuk memaksimalkan kehadiran digital bisnis Anda.</p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari artikel..." className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'glass-card text-gray-400 hover:text-white'}`}>{cat}</button>
          ))}
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 hover:border-indigo-500/30 transition-all group cursor-pointer flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">{post.cat}</span>
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-indigo-300 transition-colors leading-snug">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read}</span>
                  <span>{post.date}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">Tidak ada artikel yang ditemukan.</div>
        )}
      </div>
    </div>
  )
}
