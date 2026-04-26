'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { PRODUCTS, BRAND, PRICES } from '@/lib/constants'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Pricing() {
  const [activeRef] = useState<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('auxipata_ref') : null
  )

  function getWaUrl(product: typeof PRODUCTS[0]) {
    const ref = typeof window !== 'undefined' ? localStorage.getItem('auxipata_ref') : null
    const discount = ref ? PRICES.referralDiscount : 0
    const discountedPrice = Math.round(product.price * (1 - discount))
    return buildWhatsAppUrl({
      whatsapp: BRAND.whatsapp,
      product: product.name,
      color: product.id === 'custom' ? 'a elegir' : 'estándar',
      price: product.price,
      referralCode: ref ?? undefined,
      discountedPrice,
    })
  }

  return (
    <section id="precios" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Precios</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Elige tu <span className="text-gradient">AuxiPata.</span>
          </h2>
        </motion.div>

        {activeRef && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent font-bold rounded-full px-5 py-2 text-sm">
              🎉 ¡Tienes 10% de descuento por referido activo!
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PRODUCTS.map((p, i) => {
            const isHighlighted = p.id === 'adventure'
            const displayPrice = activeRef
              ? Math.round(p.price * (1 - PRICES.referralDiscount))
              : p.price

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  isHighlighted
                    ? 'bg-primary/10 border-2 border-primary ring-1 ring-primary/20'
                    : 'bg-brand-card border border-brand-border'
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    {p.badge}
                  </div>
                )}

                <h3 className="text-xl font-black text-white mb-1">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{p.subtitle}</p>

                <div className="mb-6">
                  {activeRef && (
                    <p className="text-gray-500 line-through text-sm">S/{p.price}</p>
                  )}
                  <span className="text-4xl font-black text-white">S/{displayPrice}</span>
                  {activeRef && (
                    <span className="ml-2 text-accent text-sm font-bold">−10%</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={15} className="mt-0.5 flex-shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWaUrl(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full font-bold py-3.5 rounded-full transition-all hover:scale-105 ${
                    isHighlighted
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20'
                      : 'bg-brand-border hover:bg-brand-border/70 text-white'
                  }`}
                >
                  <MessageCircle size={17} />
                  Pedir por WhatsApp
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
        >
          {[
            '✅ Garantía 6 meses',
            '🚚 Envío gratis en Lima',
            '💳 Yape · Plin · Efectivo',
            '📦 Entrega 24-48h',
            '🇵🇪 Fabricado en Lima',
          ].map(b => (
            <span key={b} className="bg-brand-card border border-brand-border px-4 py-2 rounded-full">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
