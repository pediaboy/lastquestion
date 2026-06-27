/**
 * POST /api/payment/cancel
 * Cancel a pending Pakasir payment.
 * Body: { orderId, amount }
 */
import { NextRequest, NextResponse } from 'next/server'
import { cancelPayment } from '@/app/lib/pakasir'
import { db } from '@/app/lib/data'

export async function POST(req: NextRequest) {
  try {
    const { orderId, amount } = await req.json()

    if (!orderId || !amount) {
      return NextResponse.json({ error: 'orderId dan amount wajib diisi.' }, { status: 400 })
    }

    const payment = await cancelPayment(orderId, Number(amount))

    // Update local transaction
    const txn = db.transactions.getByOrderId(orderId)
    if (txn) db.transactions.update(txn.id, { status: 'canceled' })

    return NextResponse.json({ success: true, payment })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan server.'
    console.error('[POST /api/payment/cancel]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
