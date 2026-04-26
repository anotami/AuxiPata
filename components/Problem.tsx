'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Wrench, Check } from 'lucide-react'

const PAINS = [
  { icon: AlertTriangle, label: 'BMW GS y KTM se hunden en tierra y barro' },
  { icon: DollarSign, label: 'Daños costosos: manetas, carenados, espejos' },
  { icon: Wrench, label: 'Sin solución rápida — arrastre en ruta' },
]

// BMW GS caída en camino de tierra — el problema
const FALLEN_PHOTO = 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=85'
// KTM Adventure estable en terreno — la solución
const STABLE_PHOTO  = 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=85'

// Segunda fila: más caídas reales
const EXTRA_FALLEN  = 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=85'
const BMW_TRAIL     = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85'

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
            Hasta la BMW GS{' '}
            <span className="text-gradient">cae sin soporte.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Da igual que sea una KTM 1290, una BMW R1250GS o una Honda XR.
            Sin el soporte correcto, cualquier moto se cae en tierra peruana.
          </p>
        </motion.div>

        {/* main photo comparison */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
          >
            <Image
              src={FALLEN_PHOTO}
              alt="BMW GS Adventure caída en camino de tierra sin soporte lateral"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/85 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full">
                Sin AuxiPata
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-red-400 text-xs font-bold tracking-wide uppercase mb-1">BMW GS · Camino de tierra</p>
              <p className="text-white font-black text-xl leading-tight">
                Moto caída = daños de S/200 a S/800
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
          >
            <Image
              src={STABLE_PHOTO}
              alt="KTM 1290 Super Adventure estable en barro con AuxiPata"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/85 via-black/15 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white text-xs font-black px-3 py-1 rounded-full">
                Con AuxiPata ✓
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-primary text-xs font-bold tracking-wide uppercase mb-1">KTM 1290 · Cualquier terreno</p>
              <p className="text-white font-black text-xl leading-tight">
                Firme en tierra, barro, piedra y arena
              </p>
            </div>
          </motion.div>
        </div>

        {/* second row: more fallen bike photos */}
        <div className="grid grid-cols-2 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden aspect-video group"
          >
            <Image
              src={EXTRA_FALLEN}
              alt="Moto adventure grande caída en pendiente de tierra suelta"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="bg-red-700/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                Moto caída en pendiente
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="relative rounded-2xl overflow-hidden aspect-video group"
          >
            <Image
              src={BMW_TRAIL}
              alt="BMW R1250GS Adventure en trail — la pata lateral no aguanta el barro"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="bg-[#1C69D4]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                BMW R1250GS en trail
              </span>
            </div>
          </motion.div>
        </div>

        {/* pain points + quote */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-950/30 border border-red-900/40 rounded-2xl p-8"
          >
            <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-5">Sin AuxiPata</p>
            <div className="space-y-4">
              {PAINS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-red-400" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-black/30 rounded-xl">
              <p className="text-gray-400 text-sm italic">
                &ldquo;Se me cayó la BMW GS en la ruta a Canta. La maneta y el espejo me costaron S/450 en el taller. Podría haberlo evitado.&rdquo;
              </p>
              <p className="text-gray-500 text-xs mt-2">— Rodrigo, propietario BMW R1250GS · Lima</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-primary/10 border border-primary/30 rounded-2xl p-8"
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-5">Con AuxiPata</p>
            <div className="space-y-4">
              {[
                'BMW GS y KTM estables en cualquier superficie',
                'Funciona en tierra, arena, piedra y fango',
                'Listo en 5 segundos — sin herramientas',
              ].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={15} className="text-primary" />
                  </div>
                  <span className="text-gray-200 font-medium text-sm">{s}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-xl">
              <p className="text-gray-300 text-sm italic">
                &ldquo;Lo puse en la KTM 1290 Super Adventure y ahora paro en cualquier lugar sin miedo. Es un cambio total en ruta.&rdquo;
              </p>
              <p className="text-gray-400 text-xs mt-2">— Sebastián P., KTM 1290 SAR · San Borja</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#precios"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-10 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            Quiero mi AuxiPata
          </a>
        </motion.div>
      </div>
    </section>
  )
}
