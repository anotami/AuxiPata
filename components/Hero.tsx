'use client'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { buildWhatsAppUrl } from '@/lib/utils'
import VisitCounter from './VisitCounter'

export default function Hero() {
  const waUrl = buildWhatsAppUrl({
    whatsapp: BRAND.whatsapp,
    product: 'AuxiPata Adventure',
    color: 'a elegir',
    price: 129,
  })

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 50%, #1a0800 0%, #0A0A0A 60%)',
      }}
    >
      {/* decorative rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <VisitCounter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6"
        >
          🇵🇪 Fabricado en Lima · Hecho para el Perú
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
        >
          El pata que{' '}
          <span className="text-gradient">nunca te</span>
          <br />
          <span className="text-gradient">deja caer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Soporte telescópico portátil para estacionar tu moto en cualquier terreno.
          Tierra, arena, piedra, fango — no hay superficie que lo detenga.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#precios"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            Ver producto desde S/89
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-bold text-lg px-8 py-4 rounded-full transition-all"
          >
            <MessageCircle size={20} />
            Pedir por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a href="#problema" className="text-gray-600 hover:text-gray-400 transition-colors animate-float">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
