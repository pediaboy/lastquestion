'use client'

import Link from 'next/link'
import { Code, Instagram, Send, ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Mohon isi alamat email Anda.')
      return
    }
    toast.success('Terima kasih! Anda berhasil berlangganan newsletter kami.')
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#020208] border-t border-indigo-500/20 pt-16 pb-8 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[4px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-black tracking-widest text-white">
                LAST<span className="text-indigo-500">QUESTION</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kami membangun solusi digital kelas dunia. Spesialisasi dalam pembuatan website premium berkinerja luar biasa untuk mendongkrak konversi bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/lastquestion.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/ThoriqPedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Layanan Populer</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition-colors">Website E-Commerce Premium</Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition-colors">Sistem Manajemen Sekolah</Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition-colors">Website Reservasi Kamar Hotel</Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition-colors">Landing Page Konversi Tinggi</Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition-colors">Sistem ERP & Dashboard Kustom</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Perusahaan</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/tentang" className="text-gray-400 hover:text-indigo-400 transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-indigo-400 transition-colors">Portofolio Hasil Kerja</Link>
              </li>
              <li>
                <Link href="/harga" className="text-gray-400 hover:text-indigo-400 transition-colors">Daftar Paket Harga</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">Artikel & Blog Terbaru</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-indigo-400 transition-colors">Pusat Bantuan (FAQ)</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Langganan Artikel</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Dapatkan tip eksklusif mengenai optimasi website dan digital marketing langsung di email Anda.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Masukkan email Anda..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-colors shadow-lg"
              >
                Berlangganan Sekarang
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
          <p>© 2026 LASTQUESTION. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center space-x-6">
            <Link href="/faq" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="/faq" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
