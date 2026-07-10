# LASTQUESTION (Premium Web Development Agency)

Situs web premium instan kelas dunia untuk **LASTQUESTION**, agensi pengembangan web eksklusif yang memfokuskan pada pembuatan situs web performa tinggi dengan konversi maksimal.

## Fitur Utama
1. **Premium & Modern UI**: Menggunakan Next.js 14 App Router, Tailwind CSS, Framer Motion, dan custom glassmorphism.
2. **20+ Detail Layanan**: Terintegrasi penuh dengan estimasi pengerjaan, harga, dan CTA yang persuasif.
3. **8 Paket Harga Komprehensif + Add-ons**: Memudahkan klien memilih sesuai skala bisnis mereka.
4. **Halaman Portofolio Interaktif**: Filter dinamis berbasis kategori (UMKM, Restaurant, Company, Dashboard, dll.).
5. **Halaman Kontak Cerdas**: Input formulir lengkap, opsi dropdown interaktif, dan jam operasional.
6. **Sistem Pemesanan Mandiri (Self-Service Order)**: Halaman Invoice & order otomatis dengan metode transfer instan (SeaBank / DANA) dan unggah bukti pembayaran.
7. **Notifikasi Telegram Otomatis**: Integrasi API bot Telegram untuk notifikasi bukti pembayaran secara real-time ke administrator.
8. **Prisma ORM + SQLite**: Pengelolaan database lokal yang siap di-migrate ke server produksi PostgreSQL/MySQL kapan saja.

## Tech Stack
- **Framework**: Next.js 14 (App Router, Server Components)
- **Styling**: Tailwind CSS, Framer Motion, Lucide Icons, next-themes (Dark mode premium)
- **Form Handling**: React Hook Form, Zod, @hookform/resolvers
- **Database**: Prisma Client + SQLite

## Cara Menjalankan Project secara Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/pediaboy/lastquestion.git
   cd lastquestion
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Konfigurasi Environment:
   Salin berkas `.env.example` ke `.env` dan isi token Telegram Anda jika diperlukan:
   ```bash
   cp .env.example .env
   ```

4. Setup Database & Prisma Migrations:
   ```bash
   npx prisma db push
   ```

5. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Hak Cipta
© 2026 LASTQUESTION. Seluruh hak cipta dilindungi undang-undang.
