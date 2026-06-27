import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/data'

const ADMIN_KEY = process.env.ADMIN_SECRET_KEY || 'lastquestion-admin-2026'
function auth(req: NextRequest) { return req.headers.get('x-admin-key') === ADMIN_KEY }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.json(db.settings.getAll())
}

export async function PUT(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const updates: { key: string; value: string }[] = await req.json()
    updates.forEach(u => db.settings.set(u.key, u.value))
    return NextResponse.json({ success: true, settings: db.settings.getAll() })
  } catch {
    return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 })
  }
}
