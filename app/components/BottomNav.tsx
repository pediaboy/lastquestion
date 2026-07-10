'use client'
import Link from 'next/link'
import { Home, Package, MessageCircle, Info } from 'lucide-react'

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-card border-t border-white/5 px-4 py-2">
      <div className="flex items-center justify-around">
        {[
          { href: '/', icon: <Home className="w-5 h-5" />, label: 'Beranda' },
          { href: '/harga', icon: <Package className="w-5 h-5" />, label: 'Harga' },
          { href: '/kontak', icon: <MessageCircle className="w-5 h-5" />, label: 'Kontak' },
          { href: '/tentang', icon: <Info className="w-5 h-5" />, label: 'Tentang' },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
