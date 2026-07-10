'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Globe, ShoppingCart, GraduationCap, Building, Key, MapPin, 
  BookOpen, HeartPulse, Cpu, Search, Sparkles, MessageCircle, 
  Lock, ArrowRight, Layers, Newspaper, Calendar, Landmark, 
  Plane, UtensilsCrossed, MonitorCheck
} from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    name: 'Website E-Commerce Premium',
    desc: 'Toko online eksklusif dengan performa kilat, keranjang belanja interaktif, kalkulator ongkir otomatis (RajaOngkir), dan payment gateway terintegrasi untuk konversi penjualan terbaik.',
    benefits: ['Payment gateway instan (Midtrans/Xendit)', 'Kalkulasi ongkir real-time', 'Panel admin manajemen produk', 'Notifikasi transaksi via WhatsApp'],
    duration: '10-14 Hari Kerja',
    price: 'Rp5.000.000'
  },
  {
    icon: GraduationCap,
    name: 'Sistem Manajemen Sekolah (LMS)',
    desc: 'Platform pembelajaran digital terpadu untuk instansi pendidikan. Menyediakan ruang kelas virtual, modul tugas online, rekap absensi, dan ujian online terautomasi.',
    benefits: ['Ujian online (CBT) anti-curang', 'Portal wali murid dan siswa', 'Sistem pembayaran SPP online', 'Laporan nilai otomatis (Raport)'],
    duration: '14-21 Hari Kerja',
    price: 'Rp7.500.000'
  },
  {
    icon: Key,
    name: 'Website Reservasi Kamar Hotel',
    desc: 'Sistem booking penginapan langsung tanpa perantara. Memudahkan tamu memeriksa ketersediaan kamar secara real-time, memesan tipe kamar, serta melakukan checkout aman.',
    benefits: ['Kalender ketersediaan kamar interaktif', 'Add-on layanan (penjemputan/sarapan)', 'Invoice digital otomatis via email', 'Sistem kupon diskon dinamis'],
    duration: '10-14 Hari Kerja',
    price: 'Rp5.000.000'
  },
  {
    icon: UtensilsCrossed,
    name: 'Sistem Pemesanan Restoran & Menu QR',
    desc: 'Digitalisasi menu restoran Anda. Memungkinkan pelanggan memesan hidangan langsung dari meja mereka melalui pemindaian kode QR serta membayar instan.',
    benefits: ['Menu interaktif bergambar premium', 'Sistem antrean dapur real-time', 'Pesanan cetak langsung ke printer dapur', 'Opsi pembayaran e-wallet lengkap'],
    duration: '7-10 Hari Kerja',
    price: 'Rp3.000.000'
  },
  {
    icon: Building,
    name: 'Website Company Profile Eksklusif',
    desc: 'Representasi digital premium untuk korporasi Anda. Dirancang untuk memancarkan profesionalisme tinggi guna membangun kepercayaan klien dan mitra bisnis global.',
    benefits: ['Desain UI/UX orisinal berkelas tinggi', 'Kecepatan akses super kilat', 'Formulir kemitraan interaktif', 'Integrasi Google Maps & profil tim'],
    duration: '5-7 Hari Kerja',
    price: 'Rp1.500.000'
  },
  {
    icon: Globe,
    name: 'Landing Page Konversi Tinggi (Squeeze Page)',
    desc: 'Satu halaman fokus tinggi yang dirancang khusus untuk mempromosikan satu produk atau layanan demi memicu tindakan (CTA) maksimal dari pengunjung website.',
    benefits: ['Skor kecepatan Google PageSpeed 99+', 'Bebas biaya maintenance tahunan', 'Formulir leads terintegrasi Google Sheet', 'Desain responsif ramah smartphone'],
    duration: '3-5 Hari Kerja',
    price: 'Rp1.000.000'
  },
  {
    icon: Landmark,
    name: 'Sistem Informasi Desa & Kecamatan',
    desc: 'Portal resmi transparansi publik untuk pemerintahan daerah. Membantu warga mengurus surat administrasi online, memantau program desa, dan membaca info terkini.',
    benefits: ['Sistem administrasi surat mandiri', 'Papan statistik kependudukan interaktif', 'Galeri transparansi anggaran APBDes', 'Sistem pengaduan warga digital'],
    duration: '10-14 Hari Kerja',
    price: 'Rp5.000.000'
  },
  {
    icon: MonitorCheck,
    name: 'Dashboard ERP & HRIS Kustom',
    desc: 'Sistem monitoring operasional internal perusahaan. Pantau kehadiran staf, manajemen cuti, penggajian (payroll), inventaris, hingga analitik keuntungan harian.',
    benefits: ['Sistem rekap absensi berbasis GPS', 'Slip gaji PDF otomatis terkirim', 'Analitik grafik penjualan real-time', 'Level akses bertingkat (Role user)'],
    duration: '21-30 Hari Kerja',
    price: 'Rp15.000.000'
  },
  {
    icon: HeartPulse,
    name: 'Portal Reservasi Klinik & Telemedicine',
    desc: 'Solusi digital terintegrasi untuk klinik atau rumah sakit. Pasien dapat membuat janji temu dengan dokter spesifik, berkonsultasi, dan memantau rekam medis.',
    benefits: ['Jadwal dokter real-time', 'Rekam medis digital aman (RME)', 'Integrasi video call telekonsultasi', 'Notifikasi pengingat via WhatsApp'],
    duration: '14-21 Hari Kerja',
    price: 'Rp7.500.000'
  },
  {
    icon: BookOpen,
    name: 'Sistem Kursus Online (E-Learning)',
    desc: 'Situs web keanggotaan premium untuk menjual materi kursus Anda sendiri. Unggah video terlindungi, kelola kuis, serta terbitkan sertifikat digital otomatis.',
    benefits: ['Pemutar video aman (anti-download)', 'Sistem langganan (membership) bulanan', 'Pembuatan sertifikat kelulusan dinamis', 'Forum diskusi antar siswa dan mentor'],
    duration: '10-14 Hari Kerja',
    price: 'Rp5.000.000'
  },
  {
    icon: Plane,
    name: 'Portal Agen Travel & Reservasi Wisata',
    desc: 'Website pencarian paket liburan terlengkap. Pengunjung dapat memilih paket tour, melakukan kostumisasi tanggal, memesan, serta melakukan pembayaran aman.',
    benefits: ['Manajemen paket tour lengkap', 'Integrasi API tiket/hotel eksternal', 'Sistem ulasan & rating dari pelanggan', 'Invoice PDF otomatis terkirim'],
    duration: '10-14 Hari Kerja',
    price: 'Rp5.000.000'
  },
  {
    icon: Search,
    name: 'Jasa Optimasi SEO Premium bulanan',
    desc: 'Layanan optimasi mesin pencari komprehensif. Meningkatkan posisi website Anda di halaman pertama Google demi mendatangkan ribuan pengunjung organik berkualitas.',
    benefits: ['Audit teknikal & on-page menyeluruh', 'Riset kata kunci kompetitor mendalam', 'Optimasi konten artikel berkala', 'Laporan bulanan progres peringkat'],
    duration: 'Setiap Bulan',
    price: 'Rp3.000.000'
  }
]

export default function Services() {
  return (
    <div className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>20+ Solusi Digital Eksklusif</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            LAYANAN PENGEMBANGAN WEBSITE PREMIUM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Dari website company profile elegan hingga sistem kustom berskala enterprise, kami menghadirkan kode yang bersih dan visual mewah kelas dunia.
          </motion.p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass-card p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-6 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {svc.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-300">
                        <span className="mr-2 text-indigo-500 font-bold">✔</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Section */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <div className="flex justify-between items-center text-xs mb-4 text-gray-400">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider">Pengerjaan</p>
                      <p className="font-semibold text-white mt-0.5">{svc.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold tracking-wider">Harga Mulai</p>
                      <p className="font-black text-indigo-400 text-sm mt-0.5">{svc.price}</p>
                    </div>
                  </div>

                  <Link
                    href={`/pesan?paket=${encodeURIComponent(svc.name)}`}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs flex items-center justify-center space-x-2 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all"
                  >
                    <span>Pesan Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Custom ERP Request */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 neon-border p-1"
        >
          <div className="neon-border-inner p-8 sm:p-12 text-center flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Butuh Sistem Custom yang Tidak Tercantum di Atas?
            </h3>
            <p className="text-gray-400 max-w-2xl mb-8 text-sm sm:text-base">
              Tim arsitek sistem kami siap membangun solusi ERP kustom, API integrasi pihak ketiga, sistem pergudangan, hingga portal multi-aplikasi sesuai kebutuhan unik bisnis Anda.
            </p>
            <Link
              href="/kontak"
              className="px-8 py-4 rounded-full text-sm font-bold btn-glow-primary flex items-center space-x-2"
            >
              <span>Diskusikan Kebutuhan Anda</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
