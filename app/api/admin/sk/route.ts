import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/data'

const ADMIN_KEY = process.env.ADMIN_SECRET_KEY || 'lastquestion-admin-2026'
function auth(req: NextRequest) { return req.headers.get('x-admin-key') === ADMIN_KEY }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.json({ content: db.sk.get() })
}

export async function PUT(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { content } = await req.json()
    return NextResponse.json({ content: db.sk.update(content) })
  } catch {
    return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 })
  }
}
