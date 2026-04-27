'use client'
import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 bg-brand-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Cómo funciona</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            3 pasos.{' '}
            <span className="text-gradient">Rueda libre. A reparar.</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            En menos de 2 minutos tienes la rueda trasera elevada y puedes
            parchar, aceitar la cadena o hacer cualquier reparación en ruta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-brand-dark border-2 border-primary/40 flex items-center justify-center">
                  <span className="text-4xl font-black text-gradient">{item.step}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* use cases visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {[
            { emoji: '🔧', title: 'Parchar llanta', detail: 'Rueda trasera elevada · saca, parcha, monta y a rodar' },
            { emoji: '⛓️', title: 'Aceitar cadena', detail: 'Gira la rueda a mano · lubricante uniforme en toda la cadena' },
            { emoji: '🛠️', title: 'Reparaciones', detail: 'Frenos, pastillas, rodamientos · tú decides dónde paras' },
          ].map(u => (
            <div
              key={u.title}
              className="bg-brand-dark border border-brand-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl mb-3">{u.emoji}</div>
              <p className="text-white font-bold mb-1">{u.title}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{u.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
