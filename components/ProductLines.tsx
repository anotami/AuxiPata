'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRODUCTS } from '@/lib/constants'

export default function ProductLines() {
  return (
    <section id="lineas" className="py-24 px-4 bg-brand-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Líneas de producto</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Uno para cada <span className="text-gradient">pata.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-brand-dark border border-brand-border rounded-2xl p-6 hover:border-primary/40 card-glow transition-all duration-300 group"
            >
              {p.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: p.accent, color: p.id === 'custom' ? '#0A0A0A' : '#fff' }}
                >
                  {p.badge}
                </div>
              )}

              {/* color swatch */}
              <div
                className="w-16 h-16 rounded-2xl mb-5 transition-transform group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}99)` }}
              />

              <h3 className="text-xl font-black text-white mb-1">{p.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.subtitle}</p>

              <div className="text-3xl font-black mb-6" style={{ color: p.accent }}>
                S/{p.price}
              </div>

              <ul className="space-y-2.5 mb-6">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: p.accent }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#precios"
                className="block w-full text-center font-bold py-3 rounded-full text-sm transition-all hover:scale-105"
                style={{
                  background: p.id === 'adventure' ? p.accent : 'transparent',
                  border: `2px solid ${p.accent}`,
                  color: p.id === 'adventure' ? '#fff' : p.accent,
                }}
              >
                Elegir esta línea
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
