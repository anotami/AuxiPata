'use client'
import { useState, useEffect } from 'react'

const MESSAGES = [
  '🏍️ Envío gratis en Lima Metropolitana en todos los modelos',
  '💳 Acepta Yape, Plin y pago contra entrega',
  '🇵🇪 Fabricado en Lima para las rutas peruanas',
  '⚡ Entrega 24-48h en Lima · 3-5 días a provincias',
]

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % MESSAGES.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-primary text-white text-center text-sm font-medium py-2 px-4">
      <span className="transition-all duration-500">{MESSAGES[idx]}</span>
    </div>
  )
}
