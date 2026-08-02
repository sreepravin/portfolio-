import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const question = 'Show total sales per region last quarter'
const sql = `SELECT region, SUM(amount) AS total_sales
FROM sales
WHERE sale_date >= NOW() - INTERVAL '3 months'
GROUP BY region
ORDER BY total_sales DESC;`

export default function SqlDemo() {
  const [typed, setTyped] = useState('')
  const [showSql, setShowSql] = useState(false)

  useEffect(() => {
    let i = 0
    let cancelled = false
    setTyped('')
    setShowSql(false)

    const type = () => {
      if (cancelled) return
      if (i <= question.length) {
        setTyped(question.slice(0, i))
        i++
        window.setTimeout(type, 45)
      } else {
        window.setTimeout(() => !cancelled && setShowSql(true), 500)
      }
    }
    const start = window.setTimeout(type, 500)

    return () => {
      cancelled = true
      window.clearTimeout(start)
    }
  }, [])

  return (
    <div className="rounded-xl bg-ink-950/70 border border-royal-400/15 p-4 font-mono text-xs sm:text-sm overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-[10px] text-mist-500 tracking-wide">ai-db-assistant · query</span>
      </div>
      <p className="text-mist-300">
        <span className="text-royal-400">›</span> {typed}
        <span className="inline-block w-[6px] h-[1em] bg-royal-400 ml-0.5 align-middle animate-pulse" />
      </p>
      <AnimatePresence>
        {showSql && (
          <motion.pre
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="mt-3 pt-3 border-t border-white/10 text-royal-300 whitespace-pre-wrap leading-relaxed"
          >
            {sql}
          </motion.pre>
        )}
      </AnimatePresence>
    </div>
  )
}
