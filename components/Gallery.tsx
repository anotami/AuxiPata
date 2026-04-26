'use client'
import { motion } from 'framer-motion'

const GALLERY_ITEMS = [
  { label: 'Ruta Antioquía', terrain: 'Tierra', gradient: 'from-amber-900 to-amber-700', emoji: '🌄' },
  { label: 'Playa Asia', terrain: 'Arena', gradient: 'from-yellow-800 to-yellow-600', emoji: '🏖️' },
  { label: 'Ruta Canta', terrain: 'Piedra', gradient: 'from-stone-800 to-stone-600', emoji: '⛰️' },
  { label: 'Sierra de Lima', terrain: 'Fango', gradient: 'from-green-900 to-green-700', emoji: '🌿' },
  { label: 'AuxiPata Urban', terrain: 'Ciudad', gradient: 'from-gray-800 to-gray-600', emoji: '🏙️' },
  { label: 'AuxiPata Custom', terrain: 'Custom', gradient: 'from-orange-900 to-orange-600', emoji: '🎨' },
]

export default function Gallery() {
  return (
    <section className="py-24 px-4 bg-brand-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Galería</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            En todos los <span className="text-gradient">terrenos.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} group cursor-pointer`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">{item.emoji}</span>
                <span className="text-white font-black text-lg">{item.label}</span>
                <span className="text-white/60 text-sm">{item.terrain}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white/80 font-medium bg-black/40 px-2 py-1 rounded-full">
                  AuxiPata en acción
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Agrega tus fotos con{' '}
          <span className="text-primary font-medium">#AuxiPata</span>{' '}
          en Instagram y TikTok 🏍️
        </p>
      </div>
    </section>
  )
}
