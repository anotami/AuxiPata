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
    src: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure detenida en camino de tierra — llanta pinchada esperando parche',
    label: 'Pinchazo en la bajada de Canta',
    terrain: 'Lima · 80km del taller',
    badge: 'Parche en ruta',
    badgeColor: '#DC2626',
  },
  {
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=85',
    alt: 'KTM Adventure con rueda elevada aceitando la cadena en ruta de tierra',
    label: 'Cadena aceitada · Rueda girando a mano',
    terrain: 'KTM Adventure · Antioquía',
    badge: 'Aceitar cadena',
    badgeColor: '#FF6B00',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85',
    alt: 'BMW R1250GS Adventure lista para reparación en sierra peruana con AuxiPata',
    label: 'BMW GS · Rueda elevada · Lista',
    terrain: 'BMW R1250GS · Sierra Andina',
    badge: 'Con AuxiPata ✓',
    badgeColor: '#22C55E',
  },
  {
    src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure en terreno de piedra suelta — reparación de frenos en ruta',
    label: 'Pastillas de freno · Piedra suelta',
    terrain: 'Ruta a Lunahuaná',
    badge: 'Parche en ruta',
    badgeColor: '#DC2626',
  },
  {
    src: 'https://images.unsplash.com/photo-1609752272551-2e5ca1cc1fd6?auto=format&fit=crop&w=900&q=85',
    alt: 'Royal Enfield Himalayan en ruta andina con cadena aceitada gracias al AuxiPata',
    label: 'Himalayan · Cadena lista · A rodar',
    terrain: 'Royal Enfield · Ruta serrana',
    badge: 'Con AuxiPata ✓',
    badgeColor: '#22C55E',
  },
  {
    src: 'https://images.unsplash.com/photo-1609429019995-8c40f49535a5?auto=format&fit=crop&w=900&q=85',
    alt: 'Motociclista preparando herramientas para parchar llanta en terreno de arena',
    label: 'Arena de Ica · Sin suelo plano',
    terrain: 'Honda XR · Ica',
    badge: 'Terreno',
    badgeColor: '#F59E0B',
  },
  {
    src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85',
    alt: 'KTM 390 Adventure en camino de tierra con llanta pinchada — necesita AuxiPata',
    label: 'KTM 390 · Pinchazo en Canta',
    terrain: 'KTM 390 Adventure · Canta',
    badge: 'Parche en ruta',
    badgeColor: '#DC2626',
  },
  {
    src: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=900&q=85',
    alt: 'BMW GS en barro con AuxiPata estabilizando la rueda para reparación',
    label: 'GS en barro · Reparación completa',
    terrain: 'BMW GS · Barro · Serranía',
    badge: 'Terreno',
    badgeColor: '#F59E0B',
  },
]

const BADGE_FILTER = ['Todos', 'Parche en ruta', 'Aceitar cadena', 'Terreno', 'Con AuxiPata ✓']

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
          ¿Reparaste en ruta con el AuxiPata? Etiqueta{' '}
          <span className="text-primary font-medium">#AuxiPata</span>
          {' '}en Instagram y apareces aquí.
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
