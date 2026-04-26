'use client'
import { MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function WhatsAppFAB() {
  const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Hola! Me interesa el AuxiPata 🏍️')}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-105 group"
    >
      <MessageCircle size={22} />
      <span className="text-sm hidden sm:block">¿Consultas?</span>
    </a>
  )
}
