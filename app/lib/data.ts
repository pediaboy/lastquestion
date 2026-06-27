// ─── In-memory store (replace with DB / Prisma in production) ───
// Schema mirrors what you'd use with Prisma:
// model Service { id, title, subtitle, description, price, features[], popular }
// model FAQ     { id, question, answer, order }
// model SK      { id, content, updatedAt }
// model Transaction { id, orderId, serviceName, amount, status, customerName, customerEmail, paymentMethod, createdAt }

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  price: number
  priceLabel: string
  features: string[]
  popular: boolean
  category: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  order: number
}

export interface Transaction {
  id: string
  orderId: string
  serviceName: string
  amount: number
  status: 'pending' | 'completed' | 'canceled'
  customerName: string
  customerEmail: string
  paymentMethod: string
  createdAt: string
}

export interface Setting {
  key: string
  value: string
}

// ── Default seed data ──────────────────────────────────────────

export const defaultServices: Service[] = [
  {
    id: 'svc-001',
    title: 'Landing Page',
    subtitle: 'Konversi tinggi, desain presisi',
    description: 'Halaman landing yang dirancang khusus untuk mengubah pengunjung menjadi pelanggan. Dibangun dengan performa loading super cepat dan desain yang berbicara.',
    price: 350000,
    priceLabel: 'Rp 350.000',
    features: ['1 halaman responsif', 'Desain custom dari nol', 'Form & integrasi WhatsApp', 'SEO dasar', 'Revisi 2x', 'Selesai 3-4 hari'],
    popular: false,
    category: 'web',
  },
  {
    id: 'svc-002',
    title: 'Company Profile',
    subtitle: 'Representasi digital bisnis Anda',
    description: 'Website company profile multi-halaman yang membangun kepercayaan dan menampilkan identitas bisnis secara profesional kepada calon klien.',
    price: 850000,
    priceLabel: 'Rp 850.000',
    features: ['5 halaman', 'Desain premium custom', 'CMS sederhana', 'SEO komprehensif', 'Revisi 3x', 'Selesai 5-7 hari'],
    popular: true,
    category: 'web',
  },
  {
    id: 'svc-003',
    title: 'Toko Online',
    subtitle: 'Jualan 24 jam tanpa henti',
    description: 'Platform e-commerce lengkap dengan katalog produk, sistem keranjang, dan integrasi pembayaran digital Indonesia.',
    price: 1750000,
    priceLabel: 'Rp 1.750.000',
    features: ['Produk unlimited', 'Checkout + pembayaran', 'Panel admin produk', 'SEO toko', 'Revisi 4x', 'Selesai 10-14 hari'],
    popular: false,
    category: 'web',
  },
  {
    id: 'svc-004',
    title: 'Aplikasi Web Custom',
    subtitle: 'Sistem sesuai kebutuhan spesifik',
    description: 'Pengembangan sistem berbasis web untuk kebutuhan operasional bisnis — dari manajemen inventori, booking, hingga dashboard analytics.',
    price: 3500000,
    priceLabel: 'Rp 3.500.000',
    features: ['Fitur fully custom', 'Database & API', 'Panel admin penuh', 'Dokumentasi teknis', 'Revisi unlimited', 'Timeline sesuai scope'],
    popular: false,
    category: 'web',
  },
  {
    id: 'svc-005',
    title: 'Desain UI/UX',
    subtitle: 'Desain yang berpikir, bukan sekadar cantik',
    description: 'Proses desain lengkap dari riset pengguna, wireframe, hingga prototype interaktif siap handoff ke developer.',
    price: 500000,
    priceLabel: 'Rp 500.000',
    features: ['Wireframe lengkap', 'Prototype interaktif', 'Design system', 'Handoff ke dev', 'Revisi 3x', 'Selesai 4-6 hari'],
    popular: false,
    category: 'design',
  },
  {
    id: 'svc-006',
    title: 'Konsultasi Teknis',
    subtitle: 'Bicara masalah, pulang dengan solusi',
    description: 'Sesi konsultasi 1-on-1 untuk membahas arsitektur sistem, stack teknologi, atau review kode existing bisnis Anda.',
    price: 200000,
    priceLabel: 'Rp 200.000',
    features: ['Durasi 60 menit', 'Via Google Meet', 'Rekaman sesi', 'Ringkasan tertulis', 'Follow-up 7 hari'],
    popular: false,
    category: 'consulting',
  },
]

export const defaultFAQs: FAQ[] = [
  {
    id: 'faq-001',
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Waktu pengerjaan tergantung paket yang dipilih. Landing page biasanya 3-4 hari kerja, company profile 5-7 hari, toko online 10-14 hari. Kami selalu memberikan estimasi waktu yang realistis di awal — bukan janji manis yang tidak ditepati.',
    order: 1,
  },
  {
    id: 'faq-002',
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Untuk paket di bawah Rp 1.000.000, pembayaran dilakukan 100% di muka. Untuk paket di atas itu, sistem DP 50% di awal dan 50% setelah proyek selesai sebelum diserahkan. Pembayaran bisa via QRIS, berbagai Virtual Account bank, atau PayPal.',
    order: 2,
  },
  {
    id: 'faq-003',
    question: 'Apakah ada garansi setelah proyek selesai?',
    answer: 'Ada. Setiap proyek mendapat garansi bug gratis selama 7 hari kerja setelah serah terima. Kalau ada yang tidak berfungsi sesuai brief awal, kami perbaiki tanpa biaya tambahan. Garansi ini khusus untuk bug, bukan untuk permintaan fitur baru.',
    order: 3,
  },
  {
    id: 'faq-004',
    question: 'Apakah bisa request fitur di luar paket?',
    answer: 'Bisa. Fitur di luar scope paket bisa ditambahkan dengan biaya yang disepakati sebelum dikerjakan. Tidak ada biaya kejutan — semua dibicarakan terlebih dahulu dan kami berikan estimasi biaya & waktu yang transparan.',
    order: 4,
  },
  {
    id: 'faq-005',
    question: 'Apakah hosting dan domain termasuk?',
    answer: 'Standarnya tidak termasuk, tapi kami bisa membantu setup dan mengarahkan ke layanan hosting yang sesuai dengan kebutuhan dan budget Anda. Tersedia juga sebagai add-on dengan biaya terpisah yang jelas dari awal.',
    order: 5,
  },
  {
    id: 'faq-006',
    question: 'Bagaimana cara mulai memesan?',
    answer: 'Pilih paket yang sesuai di halaman layanan, lalu isi formulir pemesanan. Setelah checkout, tim kami akan menghubungi via WhatsApp dalam 1x24 jam untuk konfirmasi dan mulai diskusi brief proyek Anda.',
    order: 6,
  },
]

export const defaultSK = `SYARAT DAN KETENTUAN LAYANAN
lastquestion.co
Berlaku sejak: Juni 2026

1. DEFINISI DAN RUANG LINGKUP

1.1. "lastquestion.co" adalah penyedia layanan pengembangan web dan solusi digital.
1.2. "Klien" adalah individu atau entitas yang menggunakan layanan lastquestion.co.
1.3. "Proyek" adalah pekerjaan yang disepakati antara lastquestion.co dan Klien.
1.4. Dengan melakukan pemesanan, Klien menyatakan telah membaca dan menyetujui seluruh syarat ini.

2. PEMESANAN DAN KONFIRMASI

2.1. Pemesanan resmi dimulai setelah pembayaran diterima dan konfirmasi tertulis dikirimkan.
2.2. lastquestion.co akan menghubungi Klien via WhatsApp dalam 1x24 jam hari kerja.
2.3. lastquestion.co berhak menolak pesanan yang tidak sesuai kapasitas, dengan pengembalian dana penuh.

3. PEMBAYARAN

3.1. Paket di bawah Rp 1.000.000: Lunas 100% di muka.
3.2. Paket di atas Rp 1.000.000: DP 50% di awal, 50% setelah proyek selesai.
3.3. Keterlambatan pembayaran dapat berdampak pada mundurnya timeline pengerjaan.
3.4. lastquestion.co tidak bertanggung jawab atas keterlambatan akibat kelambatan pembayaran Klien.

4. PENGERJAAN DAN REVISI

4.1. Timeline dihitung sejak pembayaran diterima dan brief lengkap sudah disampaikan.
4.2. Revisi di luar ketentuan paket dikenakan biaya Rp 75.000 per sesi revisi.
4.3. Revisi mencakup penyesuaian desain dan konten minor — bukan perubahan fundamental fitur.
4.4. Klien wajib memberikan feedback revisi dalam 3 hari kerja. Keterlambatan dapat memundurkan timeline.

5. HAK KEKAYAAN INTELEKTUAL

5.1. Setelah pelunasan, seluruh hak atas hasil karya diserahkan kepada Klien.
5.2. lastquestion.co berhak menampilkan proyek sebagai portofolio kecuali ada perjanjian NDA tertulis.
5.3. Klien bertanggung jawab penuh atas legalitas konten yang diberikan.

6. GARANSI DAN DUKUNGAN PURNA JUAL

6.1. Garansi bug gratis 7 hari kerja setelah serah terima.
6.2. Dukungan di luar periode garansi dikenakan biaya terpisah yang disepakati sebelumnya.
6.3. Garansi tidak mencakup kerusakan akibat modifikasi pihak ketiga setelah serah terima.

7. PEMBATALAN

7.1. Pembatalan sebelum pengerjaan dimulai: Pengembalian 80% dari DP.
7.2. Pembatalan setelah pengerjaan dimulai: Tidak ada pengembalian dana.
7.3. Pembatalan oleh lastquestion.co: Pengembalian dana 100%.

8. KETENTUAN LAIN

8.1. Segala perselisihan diselesaikan secara musyawarah terlebih dahulu.
8.2. Hukum yang berlaku adalah hukum Republik Indonesia.
8.3. Dengan melanjutkan pemesanan, Klien menyatakan menyetujui seluruh isi Syarat dan Ketentuan ini.`

// ── Simple in-memory "DB" (replace with Prisma in production) ──
let _services: Service[] = [...defaultServices]
let _faqs: FAQ[] = [...defaultFAQs]
let _sk = defaultSK
let _transactions: Transaction[] = []
let _settings: Setting[] = [
  { key: 'site_name', value: 'lastquestion.co' },
  { key: 'contact_wa', value: 'https://wa.me/6289663874700' },
  { key: 'contact_ig', value: 'https://instagram.com/lastquestion.co' },
  { key: 'pakasir_slug', value: 'lastquestion' },
]

export const db = {
  services: {
    getAll: () => [..._services],
    getById: (id: string) => _services.find(s => s.id === id),
    create: (data: Omit<Service, 'id'>) => {
      const s = { ...data, id: `svc-${Date.now()}` }
      _services.push(s)
      return s
    },
    update: (id: string, data: Partial<Service>) => {
      const idx = _services.findIndex(s => s.id === id)
      if (idx < 0) return null
      _services[idx] = { ..._services[idx], ...data }
      return _services[idx]
    },
    delete: (id: string) => {
      const len = _services.length
      _services = _services.filter(s => s.id !== id)
      return _services.length !== len
    },
  },
  faqs: {
    getAll: () => [..._faqs].sort((a, b) => a.order - b.order),
    getById: (id: string) => _faqs.find(f => f.id === id),
    create: (data: Omit<FAQ, 'id'>) => {
      const f = { ...data, id: `faq-${Date.now()}` }
      _faqs.push(f)
      return f
    },
    update: (id: string, data: Partial<FAQ>) => {
      const idx = _faqs.findIndex(f => f.id === id)
      if (idx < 0) return null
      _faqs[idx] = { ..._faqs[idx], ...data }
      return _faqs[idx]
    },
    delete: (id: string) => {
      const len = _faqs.length
      _faqs = _faqs.filter(f => f.id !== id)
      return _faqs.length !== len
    },
  },
  sk: {
    get: () => _sk,
    update: (content: string) => { _sk = content; return _sk },
  },
  transactions: {
    getAll: () => [..._transactions].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    getById: (id: string) => _transactions.find(t => t.id === id),
    getByOrderId: (orderId: string) => _transactions.find(t => t.orderId === orderId),
    create: (data: Omit<Transaction, 'id' | 'createdAt'>) => {
      const t = { ...data, id: `txn-${Date.now()}`, createdAt: new Date().toISOString() }
      _transactions.push(t)
      return t
    },
    update: (id: string, data: Partial<Transaction>) => {
      const idx = _transactions.findIndex(t => t.id === id)
      if (idx < 0) return null
      _transactions[idx] = { ..._transactions[idx], ...data }
      return _transactions[idx]
    },
  },
  settings: {
    getAll: () => [..._settings],
    get: (key: string) => _settings.find(s => s.key === key)?.value ?? '',
    set: (key: string, value: string) => {
      const idx = _settings.findIndex(s => s.key === key)
      if (idx >= 0) _settings[idx].value = value
      else _settings.push({ key, value })
    },
  },
}
