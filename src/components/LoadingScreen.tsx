import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05060B]"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.35em' }}
              transition={{ duration: 1 }}
              className="font-display text-2xl font-semibold text-white"
            >
              SP<span className="text-royal-400">.</span>
            </motion.span>
            <div className="w-40 h-[3px] rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-royal-400 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
