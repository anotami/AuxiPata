'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, MapPin } from 'lucide-react'

const SCENARIOS = [
  { icon: AlertTriangle, text: 'Pinchaste la llanta a 60km del pueblo más cercano' },
  { icon: Clock,         text: 'Sin soporte adecuado, esperas horas por un arrastre' },
  { icon: MapPin,        text: 'La cadena seca en Antioquía — sin dónde elevar la rueda' },
]

// Fotos de ruta / reparación en terreno difícil
// → Reemplaza estos src con fotos reales de tu comunidad o foros
const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=85',
    alt: 'BMW GS Adventure detenida en camino de tierra — llanta pinchada sin soporte',
    label: 'Pinchazo en ruta',
    badge: 'Sin AuxiPata',
    badgeColor: '#DC2626',
  },
  {
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=85',
    alt: 'KTM 1290 Super Adventure con AuxiPata elevando la rueda trasera para aceitar cadena',
    label: 'Rueda elevada · Cadena aceitada · Listo',
    badge: 'Con AuxiPata ✓',
    badgeColor: '#22C55E',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85',
    alt: 'BMW R1250GS Adventure en ruta de sierra peruana — lista para reparación con AuxiPata',
    label: 'BMW GS en sierra peruana',
    badge: 'BMW GS',
    badgeColor: '#1C69D4',
  },
  {
    src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=85',
    alt: 'Moto adventure en terreno difícil — parche de llanta en terreno con AuxiPata',
    label: 'Reparación en terreno difícil',
    badge: 'En ruta',
    badgeColor: '#FF6B00',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">El problema real</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Pinchaste en la sierra.{' '}
            <span className="text-gradient">¿Y ahora?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            En los caminos peruanos no hay taller en cada esquina.
            Sin el soporte correcto, quedas varado esperando un arrastre que puede tardar horas.
          </p>
        </motion.div>

        {/* scenario pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          {SCENARIOS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 bg-red-950/30 border border-red-900/30 rounded-xl px-5 py-4 max-w-xs text-sm text-gray-300"
            >
              <Icon size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* 2x2 photo grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span
                  className="text-[11px] font-black px-2.5 py-1 rounded-full text-white"
                  style={{ background: photo.badgeColor }}
                >
                  {photo.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm leading-tight">{photo.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* testimony */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-brand-card border border-brand-border rounded-2xl p-8 text-center mb-10"
        >
          <p className="text-2xl mb-4">🔧</p>
          <p className="text-gray-200 text-lg italic leading-relaxed mb-4">
            &ldquo;Pinché en la bajada de Canta, a 80km de Lima, sin señal y sin suelo plano.
            El AuxiPata levantó la rueda trasera y en 20 minutos estaba rodando de vuelta.
            <strong className="text-white"> Sin él, hubiera esperado el arrastre hasta el día siguiente.</strong>&rdquo;
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm">R</div>
            <div className="text-left">
              <p className="text-white text-sm font-bold">Rodrigo M.</p>
              <p className="text-gray-500 text-xs">KTM 390 Adventure · Canta, Lima</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#como-funciona"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-10 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            Ver cómo funciona el AuxiPata
          </a>
        </motion.div>
      </div>
    </section>
  )
}
