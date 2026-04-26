'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/lib/constants'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Preguntas <span className="text-gradient">frecuentes.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-border flex items-center justify-center">
                  {open === i ? (
                    <Minus size={14} className="text-primary" />
                  ) : (
                    <Plus size={14} className="text-gray-400" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-brand-border pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          ¿Más preguntas?{' '}
          <a
            href={`https://wa.me/51999999999?text=Hola!%20Tengo%20una%20pregunta%20sobre%20AuxiPata`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Escríbenos por WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  )
}
