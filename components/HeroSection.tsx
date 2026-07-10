'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, Activity, Users, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-[12000ms]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.12),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg mb-8 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
        >
          <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-300 uppercase">
            Web Development Agency #1 di Indonesia
          </span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl mb-6 leading-[1.1] text-gradient"
        >
          BUILDING DIGITAL EXPERIENCES THAT CONVERT
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-medium leading-relaxed"
        >
          Kami membantu bisnis scale-up melalui pembuatan website premium berperforma ultra tinggi, landing page dengan konversi maksimal, dan dashboard custom tercanggih.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md"
        >
          <Link
            href="/harga"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold btn-glow-primary flex items-center justify-center space-x-2"
          >
            <span>Lihat Paket</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/kontak"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold btn-glow-secondary flex items-center justify-center space-x-2"
          >
            <span>Konsultasi Gratis</span>
          </Link>
        </motion.div>

        {/* Mockup with floating stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-zinc-950/80 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Header style */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 px-2">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60 block" />
              <span className="w-3 h-3 rounded-full bg-green-500/60 block" />
            </div>
            <div className="bg-white/5 rounded px-8 py-0.5 text-[10px] text-gray-500 font-mono w-48 truncate">
              https://lastquestion.co
            </div>
            <div className="w-12" />
          </div>

          {/* Simulated content / Mockup image */}
          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gradient-to-tr from-indigo-950 via-black to-purple-950 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
            
            {/* Visual inside mockup */}
            <h3 className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-wider mb-2">
              THE NEXT GEN WEBSITE
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm text-center">
              Performa sempurna. Skor Lighthouse 100%. SEO Ter-optimasi Maksimal.
            </p>

            {/* Floating Stat Card 1 - Speed */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute left-4 top-1/4 sm:left-12 glass-card p-3 sm:p-4 flex items-center space-x-3 text-left border border-indigo-500/30 max-w-[160px] sm:max-w-[200px]"
            >
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Lighthouse</p>
                <p className="text-base sm:text-lg font-black text-white">100% Speed</p>
              </div>
            </motion.div>

            {/* Floating Stat Card 2 - Users */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-4 bottom-1/4 sm:right-12 glass-card p-3 sm:p-4 flex items-center space-x-3 text-left border border-purple-500/30 max-w-[160px] sm:max-w-[200px]"
            >
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Konversi</p>
                <p className="text-base sm:text-lg font-black text-white">+350% Naik</p>
              </div>
            </motion.div>

            {/* Floating Stat Card 3 - Security */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute left-1/3 bottom-4 sm:bottom-8 glass-card p-2 sm:p-3 flex items-center space-x-2 text-left border border-cyan-500/20"
            >
              <div className="p-1.5 rounded bg-cyan-500/20 text-cyan-400">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-gray-300">Optimasi SEO Harian</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </section>
  )
}
