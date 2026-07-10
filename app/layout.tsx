import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'LASTQUESTION | Building Digital Experiences That Convert',
  description: 'Kami membantu bisnis berkembang melalui pembuatan website premium, landing page konversi tinggi, dashboard custom, dan optimasi SEO kelas dunia.',
  keywords: 'Web Development, Next.js, Website Premium, Jasa Website, Landing Page, SEO Indonesia, LASTQUESTION',
  authors: [{ name: 'LASTQUESTION' }],
  openGraph: {
    title: 'LASTQUESTION | Premium Web Development Agency',
    description: 'Kami membantu bisnis berkembang melalui pembuatan website premium, landing page konversi tinggi, dashboard custom, dan optimasi SEO kelas dunia.',
    url: 'https://lastquestion.co',
    siteName: 'LASTQUESTION',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'LASTQUESTION Premium Web Development Agency',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LASTQUESTION | Building Digital Experiences That Convert',
    description: 'Kami membantu bisnis berkembang melalui website premium berperforma ultra tinggi.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.variable} font-sans bg-black text-gray-100 min-h-screen flex flex-col antialiased selection:bg-indigo-500/30 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="starfield-container" />
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <Toaster 
            position="top-center"
            toastOptions={{
              className: 'glass-card border-white/10 text-white bg-black/80',
              duration: 4000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
