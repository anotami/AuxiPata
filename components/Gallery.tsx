'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

// =============================================================
// FOTOS: Reemplaza los src con tus propias fotos si quieres
// Todas son de Unsplash (licencia libre comercial)
// =============================================================
const PHOTOS = [
  {
    // BMW R1250GS Adventure — moto grande en ruta
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85',
    alt: 'BMW R1250GS Adventure en ruta de tierra',
    label: 'BMW GS Adventure',
    terrain: 'Aventura',
    badge: 'BMW',
    badgeColor: '#1C69D4',
  },
  {
    // BMW GS caída / volcada en camino de tierra
    src: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto BMW GS caída en camino de tierra sin soporte',
    label: 'Moto caída en tierra',
    terrain: 'Problema real',
    badge: 'Caída',
    badgeColor: '#DC2626',
  },
  {
    // KTM 1290 Super Adventure naranja en barro
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=85',
    alt: 'KTM 1290 Super Adventure en camino de barro offroad',
    label: 'KTM 1290 Super Adventure',
    terrain: 'Barro',
    badge: 'KTM',
    badgeColor: '#FF6B00',
  },
  {
    // Moto grande volcada / tirada en pendiente de tierra
    src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure caída en pendiente de tierra suelta',
    label: 'Pendiente peligrosa',
    terrain: 'Piedra / Caída',
    badge: 'Caída',
    badgeColor: '#DC2626',
  },
  {
    // BMW GS o KTM en ruta de sierra peruana
    src: 'https://images.unsplash.com/photo-1609752272551-2e5ca1cc1fd6?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure grande en ruta de sierra andina',
    label: 'Sierra Andina',
    terrain: 'Altitude / Grava',
    badge: 'BMW GS',
    badgeColor: '#1C69D4',
  },
  {
    // KTM Adventure naranja en arena / playa
    src: 'https://images.unsplash.com/photo-1622742031553-3e7a5f8b1e93?auto=format&fit=crop&w=900&q=85',
    alt: 'KTM Adventure en arena de playa — pata original hundida',
    label: 'Arena — sin AuxiPata',
    terrain: 'Arena',
    badge: 'KTM',
    badgeColor: '#FF6B00',
  },
  {
    // Moto grande caída de lado en camino de montaña
    src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure caída de lado en camino de montaña',
    label: 'Caída en montaña',
    terrain: 'Montaña / Caída',
    badge: 'Caída',
    badgeColor: '#DC2626',
  },
  {
    // BMW o KTM estable con soporte — con AuxiPata
    src: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure grande estable con soporte AuxiPata',
    label: 'Estable con AuxiPata',
    terrain: 'Aventura',
    badge: 'Con AuxiPata ✓',
    badgeColor: '#22C55E',
  },
]

const BADGE_FILTER = ['Todos', 'BMW', 'KTM', 'Caída', 'Con AuxiPata ✓']

export default function Gallery() {
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null)
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos' ? PHOTOS : PHOTOS.filter(p => p.badge === filter)

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
            BMW, KTM y las{' '}
            <span className="text-gradient">rutas reales.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Las motos más grandes del mundo también se caen sin el soporte correcto.
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

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* badge */}
              <div className="absolute top-3 left-3">
                <span
                  className="text-[10px] font-black px-2.5 py-1 rounded-full text-white"
                  style={{ background: photo.badgeColor }}
                >
                  {photo.badge}
                </span>
              </div>
              {/* hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-sm">{photo.label}</p>
                <p className="text-gray-300 text-xs">{photo.terrain}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Usa{' '}
          <span className="text-primary font-medium">#AuxiPata</span>
          {' '}en Instagram y TikTok para aparecer aquí 🏍️
        </p>
      </div>

      {/* lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-black px-3 py-1 rounded-full text-white"
                  style={{ background: lightbox.badgeColor }}
                >
                  {lightbox.badge}
                </span>
                <div>
                  <p className="text-white font-bold">{lightbox.label}</p>
                  <p className="text-gray-400 text-sm">{lightbox.terrain}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black text-lg"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
