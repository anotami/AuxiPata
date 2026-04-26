'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Store, TrendingUp, Package, Headphones, ChevronRight, MessageCircle, Check } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const BENEFITS = [
  {
    icon: TrendingUp,
    title: 'Hasta 20% de margen',
    desc: 'Precio especial de revendedor en todas las líneas. Tú defines el precio final al cliente.',
  },
  {
    icon: Package,
    title: 'Stock garantizado',
    desc: 'Acceso prioritario a stock. Pedidos desde 3 unidades. Entrega en 48h a tu taller en Lima.',
  },
  {
    icon: Store,
    title: 'Material de marketing',
    desc: 'Flyers digitales, fotos del producto y banner para redes sociales. Todo listo para usar.',
  },
  {
    icon: Headphones,
    title: 'Soporte directo',
    desc: 'Acceso a grupo de WhatsApp exclusivo de revendedores. Dudas resueltas en menos de 2 horas.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Regístrate',
    desc: 'Completa el formulario con los datos de tu taller. Te contactamos en menos de 24 horas.',
  },
  {
    num: '02',
    title: 'Recibe tu kit',
    desc: 'Te enviamos el kit de inicio: 3 unidades a precio especial + material de marketing digital.',
  },
  {
    num: '03',
    title: 'Vende y gana',
    desc: 'Coloca el AuxiPata en tu taller y véndelo a tus clientes. Tú te quedas con el margen completo.',
  },
]

const PRECIOS_REVENDEDOR = [
  { nombre: 'AuxiPata Urban', pvp: 89, revendedor: 70, margen: '21%' },
  { nombre: 'AuxiPata Adventure', pvp: 129, revendedor: 100, margen: '22%' },
  { nombre: 'AuxiPata Custom', pvp: 159, revendedor: 125, margen: '21%' },
]

export default function Talleres() {
  const [form, setForm] = useState({ nombre: '', taller: '', distrito: '', whatsapp: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { nombre, taller, distrito, whatsapp } = form
    if (!nombre || !taller || !distrito || !whatsapp) return

    const msg = `Hola AuxiPata! 🔧 Quiero ser revendedor en mi taller:

🏪 *Taller:* ${taller}
👤 *Contacto:* ${nombre}
📍 *Distrito/Ciudad:* ${distrito}
📱 *WhatsApp:* ${whatsapp}

Por favor envíenme información sobre el programa de revendedores y precios especiales. ¡Gracias!`

    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
    setSent(true)
  }

  return (
    <section id="talleres" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold tracking-widest uppercase">Para talleres</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Vende AuxiPata en{' '}
            <span className="text-gradient">tu taller.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Conviértete en punto de venta oficial. Precio especial de revendedor,
            material de marketing gratis y soporte directo de nuestro equipo.
          </p>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {[
            { value: 'Hasta 20%', label: 'de margen por unidad' },
            { value: '+12', label: 'talleres ya revendiendo' },
            { value: '48h', label: 'entrega a tu local' },
          ].map(s => (
            <div key={s.label} className="text-center bg-brand-card border border-brand-border rounded-xl p-4">
              <p className="text-2xl sm:text-3xl font-black text-accent">{s.value}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* benefits */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                <b.icon size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* precios revendedor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-black text-white text-center mb-8">
            Precios para <span className="text-accent">revendedores</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-brand-card border border-brand-border rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="text-left p-4 text-gray-400 font-semibold">Producto</th>
                  <th className="text-center p-4 text-gray-400 font-semibold">PVP público</th>
                  <th className="text-center p-4 text-accent font-semibold">Tu precio</th>
                  <th className="text-center p-4 text-gray-400 font-semibold">Tu margen</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS_REVENDEDOR.map((p, i) => (
                  <tr
                    key={p.nombre}
                    className={i < PRECIOS_REVENDEDOR.length - 1 ? 'border-b border-brand-border' : ''}
                  >
                    <td className="p-4 font-bold text-white">{p.nombre}</td>
                    <td className="p-4 text-center text-gray-400">S/{p.pvp}</td>
                    <td className="p-4 text-center font-black text-accent text-base">S/{p.revendedor}</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-900/30 text-green-400 font-bold text-xs px-3 py-1 rounded-full">
                        {p.margen}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-xs text-center mt-3">
            * Precios válidos para pedidos desde 3 unidades. Consulta por volumen mayor.
          </p>
        </motion.div>

        {/* cómo funciona */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-black text-white text-center mb-10">
            ¿Cómo <span className="text-accent">funciona</span>?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent/40 flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-accent">{s.num}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="hidden md:block absolute translate-x-[calc(8rem+1rem)] text-accent/30 mt-6"
                    style={{ position: 'absolute', marginTop: '2rem' }}
                  />
                )}
                <h4 className="font-bold text-white text-lg mb-2">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* registration form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-brand-card border border-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-white mb-2 text-center">
              Quiero ser revendedor
            </h3>
            <p className="text-gray-400 text-sm text-center mb-8">
              Completa tus datos y te escribimos en menos de 24 horas.
            </p>

            {sent ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-400" />
                </div>
                <p className="text-white font-bold text-lg">¡Solicitud enviada!</p>
                <p className="text-gray-400 text-sm mt-2">
                  Revisa tu WhatsApp — te contactaremos pronto.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-accent text-sm hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Tu nombre *
                  </label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Carlos Ramírez"
                    className="w-full bg-brand-dark border border-brand-border text-white rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Nombre del taller *
                  </label>
                  <input
                    name="taller"
                    value={form.taller}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Taller Ramírez Motos"
                    className="w-full bg-brand-dark border border-brand-border text-white rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Distrito / Ciudad *
                  </label>
                  <input
                    name="distrito"
                    value={form.distrito}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Surquillo, Lima"
                    className="w-full bg-brand-dark border border-brand-border text-white rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Tu WhatsApp *
                  </label>
                  <div className="flex">
                    <span className="bg-brand-border border border-r-0 border-brand-border rounded-l-xl px-3 flex items-center text-gray-500 text-sm">
                      🇵🇪 +51
                    </span>
                    <input
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="987 654 321"
                      className="flex-1 bg-brand-dark border border-brand-border text-white rounded-r-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold py-4 rounded-xl transition-all hover:scale-105 mt-2"
                >
                  <MessageCircle size={20} />
                  Enviar por WhatsApp
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Al enviar abrirás WhatsApp con tu información. Respondemos en menos de 24h.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
