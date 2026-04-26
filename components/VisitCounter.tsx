'use client'
import { useEffect, useState, useRef } from 'react'
import { Eye } from 'lucide-react'

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!target) return
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [target, duration])

  return count
}

export default function VisitCounter() {
  const [total, setTotal] = useState(0)
  const displayed = useCountUp(total)

  useEffect(() => {
    fetch('/api/visits', { method: 'POST' })
      .then(r => r.json())
      .then(d => { if (d.count) setTotal(d.count) })
      .catch(() => {})
  }, [])

  if (!total) return null

  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80">
      <Eye size={14} className="text-primary" />
      <span>
        <span className="font-bold text-white">{displayed.toLocaleString('es-PE')}</span> moteros ya lo conocen
      </span>
    </div>
  )
}
