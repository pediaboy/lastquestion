'use client'
import { useEffect, useRef } from 'react'

interface Star { x: number; y: number; r: number; delay: number; dur: number; drift: number }

export default function Stars() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const W = window.innerWidth
    const H = window.innerHeight

    const count = Math.min(120, Math.floor((W * H) / 12000))
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: 0.6 + Math.random() * 1.4,
      delay: Math.random() * 5,
      dur: 2.5 + Math.random() * 4,
      drift: Math.random() * 8,
    }))

    el.innerHTML = ''
    stars.forEach(s => {
      const div = document.createElement('div')
      div.style.cssText = `
        position:absolute;
        left:${s.x}%;
        top:${s.y}%;
        width:${s.r * 2}px;
        height:${s.r * 2}px;
        border-radius:50%;
        background:rgba(196,181,253,0.9);
        box-shadow:0 0 ${s.r * 3}px rgba(196,181,253,0.6);
        animation:twinkle ${s.dur}s ${s.delay}s ease-in-out infinite,
                  drift ${s.drift + 10}s ${s.delay}s ease-in-out infinite;
      `
      el.appendChild(div)
    })
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
