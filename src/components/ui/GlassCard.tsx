import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  strong?: boolean
  hover?: boolean
  delay?: number
}

export default function GlassCard({ children, className = '', strong = false, hover = true, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, boxShadow: '0 0 40px -8px rgba(91,127,255,0.45)' } : undefined}
      className={`rounded-2xl ${strong ? 'glass-strong' : 'glass'} shadow-card transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
