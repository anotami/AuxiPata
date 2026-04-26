'use client'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Wrench } from 'lucide-react'

const PAINS = [
  { icon: AlertTriangle, label: 'Se hunde en tierra y barro' },
  { icon: DollarSign, label: 'Daños costosos en manetas y carenado' },
  { icon: Wrench, label: 'Sin solución rápida en ruta' },
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
          <span className="text-primary text-sm font-bold tracking-widest uppercase">El problema</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            La pata original{' '}
            <span className="text-gradient">arruga en la tierra.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Las patas laterales originales están diseñadas para asfalto plano.
            En los caminos reales del Perú, te traicionan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="bg-red-950/30 border border-red-900/40 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-red-400 font-bold text-sm tracking-wider uppercase">Sin AuxiPata</span>
              </div>
              <div className="space-y-4">
                {PAINS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-black/30 rounded-xl">
                <p className="text-gray-400 text-sm italic">
                  &ldquo;Me caí en la tierra de Canta. La maneta quebrada me costó S/180. Podría haberlo evitado.&rdquo;
                </p>
                <p className="text-gray-500 text-xs mt-2">— Motero anónimo, Grupo Enduro Lima</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-primary font-bold text-sm tracking-wider uppercase">Con AuxiPata</span>
              </div>
              <div className="space-y-4">
                {[
                  'Trípode de estabilidad infalible',
                  'Funciona en tierra, arena, piedra y fango',
                  'Listo en 5 segundos, sin herramientas',
                ].map(s => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-200 font-medium">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                <p className="text-gray-300 text-sm italic">
                  &ldquo;Desde que lo uso en la KTM no tengo miedo de detenerme en ningún terreno. Es un cambio total.&rdquo;
                </p>
                <p className="text-gray-400 text-xs mt-2">— Rodrigo M., AuxiPata Adventure</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <a
                href="#precios"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105"
              >
                Quiero mi AuxiPata
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
