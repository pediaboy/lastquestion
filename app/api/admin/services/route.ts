import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/data'

const ADMIN_KEY = process.env.ADMIN_SECRET_KEY || 'lastquestion-admin-2026'

function auth(req: NextRequest): boolean {
  const key = req.headers.get('x-admin-key')
  return key === ADMIN_KEY
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.json(db.services.getAll())
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const data = await req.json()
    const svc = db.services.create(data)
    return NextResponse.json(svc, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 })
  }
}
