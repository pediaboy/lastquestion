/**
 * POST /api/checkout
 * Create a new Pakasir payment invoice.
 *
 * Body: { orderId, serviceId, serviceName, amount, paymentMethod, customerName, customerEmail, redirectUrl? }
 */
import { NextRequest, NextResponse } from 'next/server'
import { createInvoice, generateOrderId } from '@/app/lib/pakasir'
import { db } from '@/app/lib/data'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      serviceId,
      serviceName,
      amount,
      paymentMethod = 'qris',
      customerName,
      customerEmail,
      redirectUrl,
    } = body

    // Validate required fields
    if (!serviceId || !amount || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: 'serviceId, amount, customerName, customerEmail wajib diisi.' },
        { status: 400 },
      )
    }

    // Validate service exists
    const service = db.services.getById(serviceId)
    if (!service) {
      return NextResponse.json({ error: 'Layanan tidak ditemukan.' }, { status: 404 })
    }

    // Minimum Pakasir amount is Rp 500
    if (amount < 500) {
      return NextResponse.json({ error: 'Jumlah pembayaran minimum Rp 500.' }, { status: 400 })
    }

    const orderId = generateOrderId()

    // Call Pakasir SDK — createInvoice handles API communication
    const payment = await createInvoice(
      paymentMethod,
      orderId,
      amount,
      redirectUrl ?? `${process.env.NEXT_PUBLIC_BASE_URL ?? 'https://lastquestion.co'}/checkout/${orderId}/success`,
    )

    // Save transaction record
    db.transactions.create({
      orderId,
      serviceName: serviceName ?? service.title,
      amount,
      status: 'pending',
      customerName,
      customerEmail,
      paymentMethod,
    })

    return NextResponse.json({ success: true, orderId, payment })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan server.'
    console.error('[POST /api/checkout]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
