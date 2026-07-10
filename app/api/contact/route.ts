import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, business, type, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Data tidak lengkap.' }, { status: 400 })
    }

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const msg = `
[LASTQUESTION] Pesan Kontak Baru

Nama: ${name}
Email: ${email}
No. HP: ${phone || '-'}
Nama Usaha: ${business || '-'}
Jenis Website: ${type || '-'}
Budget: ${budget || '-'}

Pesan:
${message}
`.trim()

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Terjadi kesalahan server.' }, { status: 500 })
  }
}
