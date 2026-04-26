'use client'
import { useState, useEffect } from 'react'

const MESSAGES = [
  '🔧 Parcha tu llanta en cualquier ruta sin buscar un taller',
  '⛓️ Aceita la cadena en el camino — rueda elevada, lista en 5 minutos',
  '🇵🇪 Fabricado en Lima para las rutas peruanas · Envío gratis Lima',
  '💳 Acepta Yape, Plin y pago contra entrega · Entrega 24-48h',
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
