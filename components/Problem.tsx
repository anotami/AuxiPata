'use client'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, MapPin, XCircle, CheckCircle2, Timer, Banknote, Mountain, Wrench, Link, Hammer } from 'lucide-react'

const SCENARIOS = [
  { icon: AlertTriangle, text: 'Pinchaste la llanta a 60km del pueblo más cercano' },
  { icon: Clock,         text: 'Sin soporte adecuado, esperas horas por un arrastre' },
  { icon: MapPin,        text: 'La cadena seca en Antioquía — sin dónde elevar la rueda' },
]

const WITHOUT = [
  { icon: Timer,    text: '3-4 horas esperando el arrastre' },
  { icon: Banknote, text: 'Arrastre desde S/150 hasta S/400' },
  { icon: MapPin,   text: 'Sin suelo plano para reparar' },
  { icon: XCircle,  text: 'La cadena, no puedes girarla sola' },
]

const WITH = [
  { icon: Timer,        text: 'Rueda elevada en menos de 2 minutos' },
  { icon: Wrench,       text: 'Parcha la llanta en cualquier terreno' },
  { icon: Link,         text: 'Gira la rueda a mano — aceita la cadena' },
  { icon: Mountain,     text: 'Funciona en tierra, arena, piedra y barro' },
]

const USE_CASES = [
  { icon: Wrench,  label: 'Parchar llanta', detail: 'Rueda trasera elevada · saca, parcha, monta y a rodar' },
  { icon: Link,    label: 'Aceitar cadena', detail: 'Gira la rueda a mano · lubricante uniforme en toda la cadena' },
  { icon: Hammer,  label: 'Reparaciones',   detail: 'Frenos, pastillas, rodamientos · tú decides dónde paras' },
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

        {/* before / after comparison */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {/* WITHOUT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden p-8"
            style={{ background: 'linear-gradient(135deg, #1f0505 0%, #0f0000 100%)', border: '1px solid #7f1d1d55' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-red-900/10 -translate-y-1/2 translate-x-1/2" />
            <span className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full bg-red-600 text-white mb-5">
              <XCircle size={12} /> Sin AuxiPata
            </span>
            <h3 className="text-2xl font-black text-white mb-2">Quedas varado.</h3>
            <p className="text-red-300/70 text-sm mb-6">Sin soporte, sin herramientas, sin opciones.</p>
            <ul className="space-y-3">
              {WITHOUT.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="w-7 h-7 rounded-full bg-red-900/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-red-400" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WITH */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden p-8"
            style={{ background: 'linear-gradient(135deg, #021a06 0%, #010d03 100%)', border: '1px solid #14532d55' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-green-900/10 -translate-y-1/2 translate-x-1/2" />
            <span className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full bg-green-600 text-white mb-5">
              <CheckCircle2 size={12} /> Con AuxiPata ✓
            </span>
            <h3 className="text-2xl font-black text-white mb-2">Rueda arriba en 2 min.</h3>
            <p className="text-green-300/70 text-sm mb-6">Posiciona, eleva y repara en cualquier ruta.</p>
            <ul className="space-y-3">
              {WITH.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-7 h-7 rounded-full bg-green-900/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-green-400" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* use-case tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {USE_CASES.map(({ icon: Icon, label, detail }) => (
            <div
              key={label}
              className="bg-brand-card border border-brand-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-primary" />
              </div>
              <p className="text-white font-bold mb-1">{label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{detail}</p>
            </div>
          ))}
        </motion.div>

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
