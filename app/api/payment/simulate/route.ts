/**
 * POST /api/payment/simulate  [TESTING ONLY — disable in production]
 * Simulate a successful Pakasir payment for development/testing.
 * Body: { orderId, amount }
 */
import { NextRequest, NextResponse } from 'next/server'
import { simulatePayment } from '@/app/lib/pakasir'
import { db } from '@/app/lib/data'

export async function POST(req: NextRequest) {
  // Guard: Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Endpoint ini hanya tersedia di environment development.' }, { status: 403 })
  }

  try {
    const { orderId, amount } = await req.json()

    if (!orderId || !amount) {
      return NextResponse.json({ error: 'orderId dan amount wajib diisi.' }, { status: 400 })
    }

    const payment = await simulatePayment(orderId, Number(amount))

    // Sync local transaction to completed
    const txn = db.transactions.getByOrderId(orderId)
    if (txn) db.transactions.update(txn.id, { status: 'completed' })

    return NextResponse.json({ success: true, payment })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan server.'
    console.error('[POST /api/payment/simulate]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
