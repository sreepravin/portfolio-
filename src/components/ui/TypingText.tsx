import { useEffect, useState } from 'react'

type Props = {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pause?: number
}

export default function TypingText({ words, typeSpeed = 70, deleteSpeed = 40, pause = 1400 }: Props) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: number

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return (
    <span className="text-royal-400">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-royal-400 ml-1 align-middle animate-pulse" />
    </span>
  )
}
