'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, CSSProperties } from 'react'

type P = { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }

export default function FadeUp({ children, delay = 0, className, style }: P) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -48px 0px' })
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

export function Stagger({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -36px 0px' })
  return (
    <motion.div ref={ref} className={className} style={style}
      initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
    >{children}</motion.div>
  )
}

export function SI({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div className={className} style={style}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >{children}</motion.div>
  )
}
