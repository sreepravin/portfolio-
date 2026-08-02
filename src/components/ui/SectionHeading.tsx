import { motion } from 'framer-motion'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--text-muted)] text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
