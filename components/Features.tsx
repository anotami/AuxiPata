'use client'
import { motion } from 'framer-motion'
import { Wrench, Ruler, Shield, Layers } from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const ICONS = { Wrench, Ruler, Shield, Layers }

export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Características</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Diseñado para el{' '}
            <span className="text-gradient">Peru real.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            No es un soporte de garaje. Está diseñado para reparar en tierra, barro
            y piedra — las condiciones reales de las rutas peruanas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-brand-card border border-brand-border rounded-2xl p-8 hover:border-primary/40 card-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
