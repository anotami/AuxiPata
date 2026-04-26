'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 px-4 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Testimonios</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Lo que dicen <span className="text-gradient">los patas.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#FF6B00" className="text-primary" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: t.avatarColor }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.moto} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            ¿Ya tienes tu AuxiPata?{' '}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '51999999999'}?text=Hola!%20Quiero%20dejar%20mi%20reseña%20de%20AuxiPata%20🏍️`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Cuéntanos tu experiencia.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
