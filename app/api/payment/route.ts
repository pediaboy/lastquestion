import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

async function sendTelegramNotification(data: {
  invoiceNumber: string
  orderNumber: string
  name: string
  email: string
  phone: string
  package: string
  amount: number
  method: string
  proofUrl: string
  date: string
}) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return

  const msg = `
[LASTQUESTION] Bukti Pembayaran Baru

No. Invoice: ${data.invoiceNumber}
No. Order: ${data.orderNumber}
Nama: ${data.name}
Email: ${data.email}
No. HP: ${data.phone}
Paket: ${data.package}
Nominal: Rp${data.amount.toLocaleString('id-ID')}
Metode: ${data.method}
Tanggal: ${data.date}
Status: Menunggu Verifikasi

Bukti Transfer: ${data.proofUrl}
`.trim()

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg }),
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { invoiceNumber, orderNumber, name, email, phone, package: pkg, amount, method, proofUrl } = body

    if (!invoiceNumber || !orderNumber || !name || !email || !phone || !pkg || !amount || !method) {
      return NextResponse.json({ error: 'Data tidak lengkap.' }, { status: 400 })
    }

    const date = new Date().toLocaleDateString('id-ID', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    })

    await sendTelegramNotification({ invoiceNumber, orderNumber, name, email, phone, package: pkg, amount, method, proofUrl: proofUrl || '-', date })

    return NextResponse.json({ success: true, message: 'Bukti pembayaran berhasil dikirim. Tim kami akan memverifikasi dalam 1x24 jam kerja.' })
  } catch {
    return NextResponse.json({ error: 'Terjadi kesalahan server.' }, { status: 500 })
  }
}
