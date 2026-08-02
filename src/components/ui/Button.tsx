import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  download?: boolean
  target?: string
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  download,
  target,
  className = '',
}: Props) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-medium text-sm tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-400 focus-visible:outline-offset-2'
  const styles =
    variant === 'primary'
      ? 'bg-royal-600 text-white shadow-glow-sm hover:bg-royal-500 hover:shadow-glow'
      : 'glass text-[var(--text-primary)] hover:border-royal-400/50'

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {icon}
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} download={download} target={target} rel={target ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className="border-0 bg-transparent p-0">
      {content}
    </button>
  )
}
