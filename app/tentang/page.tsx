'use client'
import { motion } from 'framer-motion'
import { Zap, Target, Eye, Heart, Code2, Users, Award, TrendingUp } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const timeline = [
  { year: '2018', title: 'Awal Perjalanan', desc: 'LASTQUESTION lahir dari passion seorang developer muda yang ingin membantu UMKM Indonesia memiliki kehadiran digital yang layak.' },
  { year: '2019', title: 'Proyek Pertama', desc: 'Menyelesaikan 20+ website untuk klien lokal. Kepercayaan klien menjadi fondasi terkuat kami.' },
  { year: '2020', title: 'Ekspansi Tim', desc: 'Bergabungnya developer, desainer, dan konsultan SEO profesional memperkuat kapabilitas kami.' },
  { year: '2021', title: 'Layanan Premium', desc: 'Meluncurkan layanan Enterprise dan sistem ERP khusus untuk perusahaan menengah ke atas.' },
  { year: '2022', title: '100+ Klien', desc: 'Melampaui 100 klien aktif dengan tingkat kepuasan 99%. Memperkenalkan paket Corporate dan Ultimate.' },
  { year: '2023', title: 'AI & Automation', desc: 'Mengintegrasikan kecerdasan buatan, WhatsApp API, dan Telegram Bot ke dalam layanan pengembangan kami.' },
  { year: '2024', title: 'Standar Internasional', desc: 'Menerapkan metodologi Agile, CI/CD pipeline, dan deployment otomatis ke infrastruktur cloud global.' },
  { year: '2025', title: 'Masa Depan', desc: 'Terus berinovasi menghadirkan solusi digital terdepan untuk bisnis-bisnis Indonesia yang siap go global.' },
]

const values = [
  { icon: <Award className="w-5 h-5 text-indigo-400" />, title: 'Kualitas Tanpa Kompromi', desc: 'Setiap baris kode ditulis dengan standar tertinggi. Kami tidak mengorbankan kualitas demi kecepatan.' },
  { icon: <Heart className="w-5 h-5 text-pink-400" />, title: 'Berpusat pada Klien', desc: 'Keberhasilan klien adalah keberhasilan kami. Setiap keputusan dibuat dengan mempertimbangkan dampaknya bagi bisnis klien.' },
  { icon: <TrendingUp className="w-5 h-5 text-green-400" />, title: 'Hasil yang Terukur', desc: 'Kami tidak hanya membuat website yang indah, tapi website yang benar-benar menghasilkan konversi dan pendapatan.' },
  { icon: <Users className="w-5 h-5 text-cyan-400" />, title: 'Kolaborasi Terbuka', desc: 'Proses pengerjaan transparan. Klien selalu tahu perkembangan proyeknya secara real-time.' },
]

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Prisma', 'Vercel', 'Docker', 'Git', 'Figma']

export default function TentangPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Tentang Kami</div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Kami <span className="text-gradient">LASTQUESTION</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Sebuah Web Development Agency yang lahir dari keyakinan bahwa setiap bisnis Indonesia berhak memiliki kehadiran digital sekelas perusahaan internasional.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Cerita Kami</div>
            <h2 className="text-3xl font-black mb-5">Dari Passion <span className="text-gradient">Menjadi Misi</span></h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>LASTQUESTION dimulai di tahun 2018 oleh seorang developer yang frustasi melihat banyak UMKM Indonesia terpaksa menggunakan website template murahan yang tidak mencerminkan kualitas bisnis mereka yang sesungguhnya.</p>
              <p>Kami percaya bahwa website bukan sekadar brosur digital. Website adalah aset bisnis yang seharusnya bekerja keras untuk Anda setiap detik, setiap hari — menghasilkan lead, membangun kepercayaan, dan mengkonversi pengunjung menjadi pelanggan setia.</p>
              <p>Hari ini, dengan 500+ proyek yang telah selesai dan tingkat kepuasan klien 99%, kami terus berkomitmen untuk memberikan solusi digital terbaik bagi bisnis Indonesia dari berbagai skala dan industri.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[{n:'500+',l:'Project Selesai'},{n:'99%',l:'Kepuasan Client'},{n:'7+',l:'Tahun Pengalaman'},{n:'24/7',l:'Support Aktif'}].map((s) => (
              <div key={s.l} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-gradient mb-1">{s.n}</div>
                <div className="text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card neon-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4"><Eye className="w-6 h-6 text-indigo-400" /></div>
            <h3 className="text-white font-black text-2xl mb-3">Visi</h3>
            <p className="text-gray-400 leading-relaxed">Menjadi Web Development Agency nomor satu di Indonesia yang dikenal karena kualitas premium, inovasi tanpa henti, dan dampak nyata terhadap pertumbuhan bisnis klien kami di era digital.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1 } } }} className="glass-card neon-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4"><Target className="w-6 h-6 text-purple-400" /></div>
            <h3 className="text-white font-black text-2xl mb-3">Misi</h3>
            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><Zap className="w-3.5 h-3.5 text-indigo-400 mt-1 shrink-0" />Membantu UMKM hingga enterprise memiliki website profesional yang menghasilkan konversi nyata.</li>
              <li className="flex items-start gap-2"><Zap className="w-3.5 h-3.5 text-indigo-400 mt-1 shrink-0" />Menghadirkan teknologi terkini yang sebelumnya hanya bisa diakses perusahaan besar.</li>
              <li className="flex items-start gap-2"><Zap className="w-3.5 h-3.5 text-indigo-400 mt-1 shrink-0" />Menjadi mitra jangka panjang yang tumbuh bersama bisnis klien kami.</li>
            </ul>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24">
          <div className="text-center mb-10">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Nilai-Nilai Kami</div>
            <h2 className="text-3xl font-black">Yang <span className="text-gradient">Kami Pegang Teguh</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-3">{v.icon}</div>
                <h3 className="text-white font-bold mb-2 text-sm">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24">
          <div className="text-center mb-10">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Perjalanan Kami</div>
            <h2 className="text-3xl font-black">Timeline <span className="text-gradient">LASTQUESTION</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10">
                    <div className={`glass-card rounded-xl p-5 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-indigo-400 font-black text-lg mb-1">{item.year}</div>
                      <div className="text-white font-bold mb-1">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-px items-start justify-center relative">
                    <div className="absolute top-5 w-3 h-3 rounded-full bg-indigo-500 -translate-x-1/2 shadow-lg shadow-indigo-500/50" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-center mb-8">
            <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">Teknologi</div>
            <h2 className="text-3xl font-black">Stack yang <span className="text-gradient">Kami Kuasai</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div key={tech} className="glass-card px-5 py-2.5 rounded-full text-gray-300 text-sm hover:text-white hover:border-indigo-500/30 transition-all">{tech}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
