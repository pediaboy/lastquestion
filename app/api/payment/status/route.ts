import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const orderId = searchParams.get('orderId')
  return NextResponse.json({ orderId, status: 'pending', message: 'Menunggu verifikasi pembayaran.' })
}
