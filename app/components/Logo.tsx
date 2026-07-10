import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-7 h-7', md: 'w-9 h-9', lg: 'w-12 h-12' }
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className={`${sizes[size]} rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center`}>
        <Zap className="w-5 h-5 text-white" />
      </div>
      <span className="font-bold text-gradient">LASTQUESTION</span>
    </Link>
  )
}
