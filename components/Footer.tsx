'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Instagram, Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  layanan: [
    { label: 'Company Profile', href: '/layanan' },
    { label: 'Landing Page', href: '/layanan' },
    { label: 'Toko Online', href: '/layanan' },
    { label: 'Dashboard & ERP', href: '/layanan' },
    { label: 'AI Automation', href: '/layanan' },
    { label: 'SEO & Optimasi', href: '/layanan' },
  ],
  perusahaan: [
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Karir', href: '/tentang' },
    { label: 'Press Kit', href: '/tentang' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Harga', href: '/harga' },
    { label: 'Cara Kerja', href: '/#cara-kerja' },
    { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
    { label: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">LASTQUESTION</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Kami membantu bisnis berkembang melalui website premium yang cepat, modern, dan menghasilkan lebih banyak pelanggan.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/lastquestion.co" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://t.me/ThoriqPedia" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all">
                <Send className="w-4 h-4" />
              </a>
              <a href="mailto:lastquestion.co@gmail.com"
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-white font-semibold text-sm mb-4 capitalize">{key === 'layanan' ? 'Layanan' : key === 'perusahaan' ? 'Perusahaan' : 'Resources'}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Dapatkan Tips Digital Gratis</h4>
              <p className="text-gray-400 text-sm">Tips website, SEO, dan strategi digital langsung ke email Anda.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
              <button className="btn-glow text-white text-sm font-medium px-5 py-2.5 rounded-lg whitespace-nowrap">
                Daftar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 LASTQUESTION. Semua hak dilindungi.
          </p>
          <p className="text-gray-600 text-xs">
            Dibuat dengan kebanggaan di Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
