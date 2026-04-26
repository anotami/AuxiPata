'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Moto adventure en ruta de tierra',
    label: 'Ruta Antioquía',
    terrain: 'Tierra',
  },
  {
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
    alt: 'Enduro en camino de sierra',
    label: 'Sierra de Lima',
    terrain: 'Piedra',
  },
  {
    src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
    alt: 'Moto trail en barro',
    label: 'Ruta Canta',
    terrain: 'Fango',
  },
  {
    src: 'https://images.unsplash.com/photo-1609752272551-2e5ca1cc1fd6?auto=format&fit=crop&w=800&q=80',
    alt: 'Moto en arena de playa',
    label: 'Playa Asia',
    terrain: 'Arena',
  },
  {
    src: 'https://images.unsplash.com/photo-1622742031553-3e7a5f8b1e93?auto=format&fit=crop&w=800&q=80',
    alt: 'KTM en camino offroad',
    label: 'Ruta Lunahuaná',
    terrain: 'Grava',
  },
  {
    src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    alt: 'Adventure bike en montaña',
    label: 'Andes Lima',
    terrain: 'Altura',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null)

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
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Tierra, arena, piedra, fango. El AuxiPata aguanta todo lo que el Perú te pone.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-sm">{photo.label}</p>
                <span className="text-primary text-xs font-medium">{photo.terrain}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Usa el hashtag{' '}
          <span className="text-primary font-medium">#AuxiPata</span>{' '}
          en Instagram y TikTok 🏍️
        </p>
      </div>

      {/* lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-bold">{lightbox.label}</p>
              <p className="text-primary text-sm">{lightbox.terrain}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
