import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LASTQUESTION | Building Digital Experiences That Convert',
  description: 'Kami membantu bisnis berkembang melalui website premium yang cepat, modern, profesional, dan menghasilkan lebih banyak pelanggan.',
  keywords: 'web developer, jasa website, website profesional, website UMKM, website perusahaan, web development Indonesia',
  authors: [{ name: 'LASTQUESTION' }],
  openGraph: {
    title: 'LASTQUESTION | Building Digital Experiences That Convert',
    description: 'Jasa pembuatan website premium untuk UMKM, perusahaan, startup, dan personal brand di Indonesia.',
    url: 'https://lastquestion.co',
    siteName: 'LASTQUESTION',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LASTQUESTION | Web Development Agency',
    description: 'Website premium untuk bisnis Anda. Cepat, modern, dan menghasilkan konversi tinggi.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="stars-bg" aria-hidden="true">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.7 + 0.1,
              }}
            />
          ))}
        </div>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
