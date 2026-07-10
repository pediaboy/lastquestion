import { NextRequest, NextResponse } from 'next/server'

function generateOrderNumber(): string {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 9000) + 1000
  return `LQ-${y}${m}${d}-${rand}`
}

function generateInvoiceNumber(): string {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 9000) + 1000
  return `INV-LQ-${y}${m}${d}-${rand}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, business, package: pkg, amount, notes } = body

    if (!name || !email || !phone || !pkg || !amount) {
      return NextResponse.json({ error: 'Data tidak lengkap.' }, { status: 400 })
    }

    const orderNumber = generateOrderNumber()
    const invoiceNumber = generateInvoiceNumber()
    const createdAt = new Date().toISOString()

    const order = {
      orderNumber,
      invoiceNumber,
      name,
      email,
      phone,
      business: business || '-',
      package: pkg,
      amount,
      notes: notes || '-',
      status: 'waiting_payment',
      paymentMethod: null,
      proofUrl: null,
      createdAt,
    }

    return NextResponse.json({ success: true, order })
  } catch {
    return NextResponse.json({ error: 'Terjadi kesalahan server.' }, { status: 500 })
  }
}
