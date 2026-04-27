'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Camera, Instagram, Upload } from 'lucide-react'

const TERRAIN_CARDS = [
  {
    badge: 'Parche en ruta',
    badgeColor: '#DC2626',
    label: 'Pinchazo en Canta',
    sub: 'KTM 390 · 80km de Lima',
    gradient: 'linear-gradient(135deg, #3b0f00 0%, #1a0500 100%)',
    icon: '🔧',
    terrain: 'Tierra · Sierra',
  },
  {
    badge: 'Con AuxiPata ✓',
    badgeColor: '#22C55E',
    label: 'Rueda elevada · Cadena lista',
    sub: 'Royal Enfield · Antioquía',
    gradient: 'linear-gradient(135deg, #021a06 0%, #010d03 100%)',
    icon: '⛓️',
    terrain: 'Tierra · Grava',
  },
  {
    badge: 'BMW GS',
    badgeColor: '#1C69D4',
    label: 'GS Adventure en sierra peruana',
    sub: 'BMW R1250GS · Ruta serrana',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #040810 100%)',
    icon: '🏔️',
    terrain: 'Piedra · Altura',
  },
  {
    badge: 'Parche en ruta',
    badgeColor: '#DC2626',
    label: 'Pastillas de freno en Lunahuaná',
    sub: 'KTM 1290 SAR · Ruta a Cañete',
    gradient: 'linear-gradient(135deg, #2a1500 0%, #110900 100%)',
    icon: '⚠️',
    terrain: 'Piedra suelta · Barro',
  },
  {
    badge: 'Con AuxiPata ✓',
    badgeColor: '#22C55E',
    label: 'Honda XR · Cadena aceitada',
    sub: 'Honda XR 150L · Ica',
    gradient: 'linear-gradient(135deg, #021a06 0%, #010d03 100%)',
    icon: '✅',
    terrain: 'Arena · Desierto',
  },
  {
    badge: 'KTM',
    badgeColor: '#FF6B00',
    label: 'KTM en barro · Ruta a Huancayo',
    sub: 'KTM 390 Adventure',
    gradient: 'linear-gradient(135deg, #1a0800 0%, #0a0300 100%)',
    icon: '🏍️',
    terrain: 'Barro · Selva',
  },
]

const BADGE_FILTER = ['Todos', 'Parche en ruta', 'Con AuxiPata ✓', 'BMW GS', 'KTM']

export default function Gallery() {
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos'
    ? TERRAIN_CARDS
    : TERRAIN_CARDS.filter(c => c.badge === filter)

  return (
    <section className="py-24 px-4 bg-brand-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Galería</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Donde otros esperan auxilio,{' '}
            <span className="text-gradient">tú reparas.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Parches en Canta, cadenas en Antioquía, frenos en Lunahuaná — el AuxiPata va donde tú vas.
          </p>
        </motion.div>

        {/* filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {BADGE_FILTER.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                filter === f
                  ? 'bg-primary border-primary text-white'
                  : 'border-brand-border text-gray-400 hover:border-primary/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <AnimatePresence>
            {filtered.map((card, i) => (
              <motion.div
                key={card.label}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-default"
                style={{ background: card.gradient, border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {/* texture overlay */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                    backgroundSize: '8px 8px',
                  }}
                />

                {/* terrain tag top-right */}
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{card.terrain}</span>
                </div>

                {/* badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] font-black px-2.5 py-1 rounded-full text-white"
                    style={{ background: card.badgeColor }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity">{card.icon}</span>
                </div>

                {/* bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                >
                  <p className="text-white font-bold text-sm leading-tight">{card.label}</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* community photo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-dashed border-primary/30 rounded-2xl p-8 text-center"
          style={{ background: 'rgba(255,107,0,0.04)' }}
        >
          <div className="flex justify-center gap-3 mb-4">
            <Camera size={20} className="text-primary" />
            <Upload size={20} className="text-primary" />
            <Instagram size={20} className="text-primary" />
          </div>
          <h3 className="text-white font-black text-xl mb-2">¿Reparaste en ruta con el AuxiPata?</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-5">
            Sube tu foto a Instagram con{' '}
            <span className="text-primary font-bold">#AuxiPata</span>
            {' '}o{' '}
            <span className="text-primary font-bold">#AuxiPataEnRuta</span>
            {' '}y aparecer aquí. Las mejores fotos de la comunidad peruanas de motos.
          </p>
          <a
            href="https://instagram.com/auxipata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105"
          >
            <Instagram size={14} />
            @auxipata en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
