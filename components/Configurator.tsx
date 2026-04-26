'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, MessageCircle } from 'lucide-react'
import { MOTO_COLORS, PRICES, BRAND } from '@/lib/constants'
import { buildWhatsAppUrl, cn } from '@/lib/utils'

export default function Configurator() {
  const [selectedColor, setSelectedColor] = useState(MOTO_COLORS[0])
  const [customHex, setCustomHex] = useState('#FF6B00')

  const colorExtra = selectedColor.id === 'custom' ? PRICES.customColorExtra : 0
  const totalPrice = PRICES.custom + colorExtra

  const displayColor = selectedColor.id === 'custom' ? customHex : selectedColor.hex!
  const colorName =
    selectedColor.id === 'custom' ? `Color personalizado (${customHex})` : selectedColor.name

  const waUrl = buildWhatsAppUrl({
    whatsapp: BRAND.whatsapp,
    product: 'AuxiPata Custom',
    color: colorName,
    price: totalPrice,
  })

  return (
    <section className="py-24 px-4 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Personalización</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Que combine con <span className="text-gradient">tu moto.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Elige el color del terminal de tu AuxiPata Custom. Colores preset sin costo adicional, color exacto (+S/15).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* animated product preview */}
              <div
                className="w-40 h-40 rounded-3xl animate-float shadow-2xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${displayColor}, ${displayColor}88)`,
                  boxShadow: `0 20px 60px ${displayColor}44`,
                }}
              />
              <div className="absolute bottom-4 text-center">
                <span className="text-xs text-gray-500 font-medium">Vista previa del terminal</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-white font-bold text-lg">{colorName}</p>
              <p className="text-primary font-black text-3xl mt-1">
                S/{totalPrice}
                {colorExtra > 0 && (
                  <span className="text-sm text-gray-400 font-normal ml-2">
                    (incluye +S/{colorExtra} color custom)
                  </span>
                )}
              </p>
            </div>
          </motion.div>

          {/* picker */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Palette size={20} className="text-primary" />
              <h3 className="font-bold text-white text-lg">Elige el color</h3>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              {MOTO_COLORS.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c)}
                  className={cn(
                    'relative aspect-square rounded-xl transition-all duration-200 border-2 flex items-center justify-center',
                    selectedColor.id === c.id
                      ? 'border-white scale-110 shadow-lg'
                      : 'border-transparent hover:border-gray-600 hover:scale-105'
                  )}
                  style={c.hex ? { background: c.hex } : { background: 'conic-gradient(red, orange, yellow, green, blue, violet, red)' }}
                  title={c.name}
                >
                  {c.extra > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-accent text-brand-dark text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      +
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-1 mb-4">
              {MOTO_COLORS.map(c => (
                <div
                  key={c.id}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm',
                    selectedColor.id === c.id ? 'bg-primary/15 text-white' : 'text-gray-400 hover:bg-brand-border/50'
                  )}
                  onClick={() => setSelectedColor(c)}
                >
                  <span
                    className="w-4 h-4 rounded-full flex-shrink-0 border border-white/20"
                    style={c.hex ? { background: c.hex } : { background: 'conic-gradient(red, orange, yellow, green, blue, violet, red)' }}
                  />
                  <span className="font-medium">{c.name}</span>
                  {c.extra > 0 && (
                    <span className="ml-auto text-accent text-xs font-bold">+S/{c.extra}</span>
                  )}
                </div>
              ))}
            </div>

            {selectedColor.id === 'custom' && (
              <div className="mt-4 flex items-center gap-3 p-3 bg-brand-dark rounded-xl border border-brand-border">
                <label className="text-gray-400 text-sm font-medium whitespace-nowrap">Código hex:</label>
                <input
                  type="color"
                  value={customHex}
                  onChange={e => setCustomHex(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent"
                />
                <input
                  type="text"
                  value={customHex}
                  onChange={e => {
                    const v = e.target.value
                    if (/^#[0-9A-Fa-f]{0,6}$/.test(v)) setCustomHex(v)
                  }}
                  className="flex-1 bg-brand-border text-white text-sm px-3 py-2 rounded-lg font-mono"
                  placeholder="#FF6B00"
                  maxLength={7}
                />
              </div>
            )}

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold py-3.5 rounded-full transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              Pedir con este color por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
