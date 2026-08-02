import { motion } from 'framer-motion'

type Props = {
  name: string
  level: number
  delay?: number
}

export default function SkillBar({ name, level, delay = 0 }: Props) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-xs text-[var(--text-muted)] font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-royal-700 to-royal-400"
        />
      </div>
    </div>
  )
}
