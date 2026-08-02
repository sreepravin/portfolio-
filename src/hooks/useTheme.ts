import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
      root.classList.add('light')
    } else {
      root.classList.remove('light')
      root.classList.add('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
