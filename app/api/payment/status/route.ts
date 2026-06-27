/**
 * GET /api/payment/status?orderId=LQ-xxx&amount=350000
 * Check Pakasir payment status and sync to local transaction record.
 */
import { NextRequest, NextResponse } from 'next/server'
import { checkStatus } from '@/app/lib/pakasir'
import { db } from '@/app/lib/data'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const orderId = searchParams.get('orderId')
    const amountStr = searchParams.get('amount')

    if (!orderId || !amountStr) {
      return NextResponse.json({ error: 'orderId dan amount wajib disertakan.' }, { status: 400 })
    }

    const amount = parseInt(amountStr, 10)
    if (isNaN(amount)) {
      return NextResponse.json({ error: 'amount harus berupa angka.' }, { status: 400 })
    }

    // Call Pakasir SDK — checkStatus
    const payment = await checkStatus(orderId, amount)

    // Sync status to local transaction if status changed
    const txn = db.transactions.getByOrderId(orderId)
    if (txn && txn.status !== payment.status) {
      db.transactions.update(txn.id, { status: payment.status })
    }

    return NextResponse.json({ success: true, payment })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan server.'
    console.error('[GET /api/payment/status]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
