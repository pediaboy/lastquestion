'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    cat: 'Harga & Pembayaran',
    items: [
      { q: 'Berapa harga pembuatan website?', a: 'Harga kami mulai dari Rp500.000 untuk paket Starter hingga Rp15.000.000 untuk paket Ultimate. Setiap paket memiliki fitur yang berbeda sesuai kebutuhan bisnis Anda. Anda dapat melihat detail lengkap di halaman Harga.' },
      { q: 'Apa saja metode pembayaran yang tersedia?', a: 'Saat ini kami menerima pembayaran melalui transfer bank SeaBank (901555691160) dan DANA (082218723401), keduanya atas nama THIRAFI THARIQ AL IDRIS. Setelah transfer, Anda cukup mengunggah bukti pembayaran dan tim kami akan memverifikasi dalam 1x24 jam kerja.' },
      { q: 'Apakah ada biaya tersembunyi setelah proyek selesai?', a: 'Tidak ada biaya tersembunyi sama sekali. Semua biaya sudah transparan di awal kesepakatan. Biaya tambahan hanya timbul jika Anda secara aktif menambah fitur baru, perpanjangan hosting/domain tahunan, atau berlangganan layanan maintenance.' },
      { q: 'Apakah bisa bayar cicilan?', a: 'Untuk proyek dengan nilai di atas Rp3.000.000, kami dapat mendiskusikan skema pembayaran bertahap. Umumnya 50% di awal pengerjaan dan 50% saat proyek selesai. Silakan hubungi kami untuk negosiasi lebih lanjut.' },
      { q: 'Apakah harga bisa dinegosiasikan?', a: 'Harga yang tertera adalah harga standar kami. Namun untuk proyek skala besar, kemitraan jangka panjang, atau proyek sosial/pendidikan, kami membuka ruang diskusi. Hubungi kami dan ceritakan kebutuhan Anda.' },
      { q: 'Bagaimana jika saya tidak puas dengan hasilnya?', a: 'Kepuasan Anda adalah prioritas kami. Kami menyediakan kuota revisi di setiap paket. Jika setelah semua revisi Anda masih belum puas, kami akan mendiskusikan solusi terbaik secara kekeluargaan.' },
    ]
  },
  {
    cat: 'Website & Fitur',
    items: [
      { q: 'Teknologi apa yang digunakan?', a: 'Kami menggunakan stack modern: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion untuk animasi, dan Prisma dengan PostgreSQL untuk database. Stack ini digunakan perusahaan teknologi kelas dunia seperti Vercel, Shopify, dan Netflix.' },
      { q: 'Apakah website saya akan tampil bagus di HP?', a: 'Tentu. Semua website kami dibangun dengan pendekatan Mobile First. Kami menguji di berbagai ukuran layar (smartphone, tablet, laptop, desktop) sebelum proyek dianggap selesai.' },
      { q: 'Apakah bisa menambah fitur setelah website jadi?', a: 'Sangat bisa. Kami menyediakan layanan pengembangan berkelanjutan. Anda cukup menghubungi tim kami, menjelaskan fitur yang diinginkan, dan kami akan memberikan estimasi waktu dan biaya.' },
      { q: 'Apakah website saya bisa diupdate sendiri?', a: 'Untuk paket Business ke atas, kami menyediakan CMS (Content Management System) admin panel yang user-friendly sehingga Anda bisa update konten, gambar, dan artikel blog tanpa perlu keahlian teknis.' },
      { q: 'Apakah ada sistem login untuk pengguna?', a: 'Sistem autentikasi tersedia di paket Enterprise ke atas. Kami mendukung login dengan email/password, Google OAuth, dan OTP via SMS/WhatsApp.' },
      { q: 'Bisakah website terintegrasi dengan WhatsApp?', a: 'Ya. Kami menyediakan integrasi WhatsApp dari yang sederhana (tombol chat) hingga WhatsApp API untuk otomasi pesan, notifikasi order, dan chatbot customer service.' },
    ]
  },
  {
    cat: 'Domain & Hosting',
    items: [
      { q: 'Apakah domain dan hosting sudah termasuk?', a: 'Ya, mulai paket Starter sudah termasuk domain (.my.id atau domain milik klien) dan hosting 1 tahun. Untuk domain premium seperti .com atau .id tersedia sebagai add-on dengan harga terjangkau.' },
      { q: 'Di mana website saya di-hosting?', a: 'Kami menggunakan Vercel sebagai platform deployment utama, yang didukung oleh infrastruktur cloud AWS global. Untuk proyek enterprise yang membutuhkan database, kami menggunakan PostgreSQL di Supabase atau Railway.' },
      { q: 'Bagaimana jika domain saya sudah ada sendiri?', a: 'Tidak masalah. Kami dapat menggunakan domain yang sudah Anda miliki. Tim kami akan membantu proses koneksi domain ke server kami tanpa biaya tambahan.' },
      { q: 'Apakah ada jaminan uptime?', a: 'Platform Vercel yang kami gunakan memiliki uptime 99.99% berdasarkan SLA mereka. Ini berarti website Anda hampir tidak pernah down kecuali ada maintenance terjadwal yang diumumkan jauh-jauh hari.' },
      { q: 'Apa yang terjadi setelah hosting 1 tahun berakhir?', a: 'Kami akan mengingatkan Anda 30 hari sebelum masa hosting berakhir. Biaya perpanjangan hosting mulai dari Rp500.000/tahun tergantung kebutuhan traffic dan storage proyek Anda.' },
    ]
  },
  {
    cat: 'SEO & Performa',
    items: [
      { q: 'Apakah website saya akan muncul di Google?', a: 'Semua website kami dioptimasi untuk SEO sejak awal: struktur URL yang bersih, meta tag dinamis, schema markup, sitemap XML otomatis, robots.txt, Open Graph, dan optimasi kecepatan halaman. Ini memberi fondasi yang kuat untuk ranking Google.' },
      { q: 'Berapa skor Lighthouse website yang akan dibangun?', a: 'Target kami adalah skor Lighthouse minimal 90 untuk semua kategori (Performance, Accessibility, Best Practices, SEO). Untuk paket Premium ke atas, kami menargetkan 95+.' },
      { q: 'Apakah SEO bisa menjamin website saya di halaman 1 Google?', a: 'Tidak ada yang bisa menjamin posisi #1 Google, dan waspadai siapapun yang membuat klaim tersebut. SEO adalah proses jangka panjang. Kami membangun fondasi teknis yang kuat dan memberikan panduan strategi konten untuk memaksimalkan peluang ranking Anda.' },
      { q: 'Berapa lama website loading?', a: 'Target kami adalah loading time di bawah 2 detik untuk First Contentful Paint. Kami menggunakan image optimization, code splitting, lazy loading, dan CDN untuk memastikan performa optimal.' },
      { q: 'Apakah ada layanan SEO lanjutan?', a: 'Ya. Kami menyediakan layanan SEO Advanced sebagai add-on seharga mulai Rp2.000.000, mencakup riset kata kunci mendalam, optimasi konten, link building strategy, dan laporan bulanan.' },
    ]
  },
  {
    cat: 'Timeline & Proses',
    items: [
      { q: 'Berapa lama proses pembuatan website?', a: 'Estimasi pengerjaan bervariasi: Starter 2-4 hari, Basic 4-7 hari, Business 5-10 hari, Professional 7-14 hari, Enterprise 10-20 hari, Corporate 14-25 hari, Premium 20-35 hari, dan Ultimate 20-45 hari. Estimasi dapat berubah sesuai kompleksitas kebutuhan.' },
      { q: 'Bagaimana proses pengerjaan website?', a: 'Alur kerja kami: (1) Konsultasi kebutuhan, (2) Penandatanganan brief & pembayaran DP, (3) Proses desain dan pengembangan, (4) Review dan revisi, (5) Final testing, (6) Launch dan handover. Setiap tahap dikomunikasikan secara transparan.' },
      { q: 'Apakah saya bisa memantau perkembangan proyek?', a: 'Ya. Kami menyediakan preview link di staging environment sehingga Anda bisa melihat perkembangan website secara real-time sebelum diluncurkan secara publik.' },
      { q: 'Apa yang perlu saya siapkan sebelum proyek dimulai?', a: 'Dokumen yang perlu disiapkan: logo (format SVG/PNG), foto-foto bisnis, teks/konten yang akan ditampilkan, referensi desain yang disukai, dan informasi lengkap tentang bisnis Anda. Tim kami akan membantu jika ada yang kurang.' },
      { q: 'Apakah bisa dipercepat pengerjaannya?', a: 'Bisa, dengan biaya express tambahan 30-50% dari harga paket. Ketentuan berlaku berdasarkan ketersediaan tim dan kompleksitas proyek.' },
    ]
  },
  {
    cat: 'Revisi & Garansi',
    items: [
      { q: 'Berapa kali saya bisa meminta revisi?', a: 'Kuota revisi bervariasi per paket: Starter 2 kali, Basic 3 kali, Business 5 kali, Professional unlimited selama masa pengerjaan. Revisi yang diminta di luar kuota atau setelah proyek selesai dikenakan biaya tambahan.' },
      { q: 'Apa yang termasuk dalam revisi?', a: 'Revisi mencakup perubahan konten teks, penggantian gambar, perubahan warna, penyesuaian layout, dan penambahan/pengurangan elemen dalam lingkup yang sudah disepakati di brief awal.' },
      { q: 'Apakah ada garansi setelah website diluncurkan?', a: 'Ya. Kami memberikan garansi bug fixing gratis selama 30 hari setelah website diluncurkan. Bug yang kami maksud adalah error teknis yang bukan disebabkan oleh perubahan yang Anda lakukan sendiri.' },
      { q: 'Bagaimana jika ada bug setelah website live?', a: 'Laporkan kepada tim kami melalui WhatsApp atau email. Untuk bug kritis, kami merespons dalam 4 jam kerja. Untuk bug non-kritis, diselesaikan dalam 1-3 hari kerja.' },
    ]
  },
  {
    cat: 'Keamanan',
    items: [
      { q: 'Apakah website saya aman dari hacker?', a: 'Kami menerapkan standar keamanan modern: SSL/HTTPS, proteksi XSS, CSRF protection, input sanitization, rate limiting, dan untuk paket Enterprise ke atas tersedia Web Application Firewall (WAF) dan monitoring keamanan.' },
      { q: 'Apakah data pelanggan saya aman?', a: 'Data pelanggan disimpan terenkripsi dan tidak pernah dijual atau dibagikan ke pihak ketiga. Kami mengikuti prinsip-prinsip keamanan data dan privasi pengguna dalam setiap implementasi.' },
      { q: 'Apakah ada backup data?', a: 'Ya. Mulai paket Business, kami menyediakan backup otomatis. Paket Enterprise mendapatkan backup harian, dan paket Premium ke atas mendapatkan backup real-time dengan retensi 30 hari.' },
    ]
  },
  {
    cat: 'Support & Maintenance',
    items: [
      { q: 'Bagaimana cara menghubungi tim support?', a: 'Anda dapat menghubungi kami melalui WhatsApp (082218723401), Telegram (@ThoriqPedia), atau email (lastquestion.co@gmail.com). Jam operasional Senin-Jumat 09.00-18.00 WIB dan Sabtu 09.00-14.00 WIB.' },
      { q: 'Apakah ada layanan maintenance bulanan?', a: 'Ya. Kami menyediakan paket maintenance bulanan mulai Rp300.000/bulan yang mencakup update konten rutin, monitoring performa, update keamanan, dan laporan bulanan.' },
      { q: 'Apakah saya bisa pindah ke developer lain?', a: 'Anda sepenuhnya memiliki website Anda. Source code menjadi milik Anda setelah pembayaran lunas. Kami juga menyediakan dokumentasi teknis yang memudahkan proses handover ke developer lain jika diperlukan.' },
      { q: 'Apakah LASTQUESTION menerima proyek dari luar kota?', a: 'Tentu. Kami adalah tim digital yang bekerja secara remote dan telah menangani klien dari Sabang sampai Merauke, bahkan dari luar negeri. Semua komunikasi dilakukan secara online dengan efisien.' },
    ]
  },
]

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="text-indigo-400 text-sm font-medium mb-3 tracking-widest uppercase">FAQ</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">Pertanyaan <span className="text-gradient">Umum</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Semua yang perlu Anda ketahui sebelum memulai proyek bersama kami.</p>
        </motion.div>

        <div className="space-y-10">
          {faqData.map((section) => (
            <motion.div key={section.cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-white font-black text-xl mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full inline-block" />
                {section.cat}
              </h2>
              <div className="space-y-2">
                {section.items.map((item, j) => {
                  const key = `${section.cat}-${j}`
                  const isOpen = openItem === key
                  return (
                    <div key={j} className={`glass-card rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-indigo-500/30' : ''}`}>
                      <button onClick={() => toggle(key)} className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
                        <span className="text-white font-medium text-sm leading-snug">{item.q}</span>
                        <ChevronDown className={`w-4 h-4 text-indigo-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="glass-card neon-border rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">Masih Ada Pertanyaan?</h3>
            <p className="text-gray-400 text-sm mb-5">Tim kami siap menjawab pertanyaan spesifik Anda secara langsung.</p>
            <a href="/kontak" className="btn-glow text-white font-semibold px-8 py-3 rounded-xl inline-block">Hubungi Kami</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
