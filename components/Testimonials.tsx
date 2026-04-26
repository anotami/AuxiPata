'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Rodrigo M.',
    moto: 'KTM 390 Adventure',
    tipo: 'Aventura',
    location: 'Miraflores',
    rating: 5,
    text: 'Lo usé en la ruta a Marcahuasi y la moto quedó firme como roca en la piedra suelta. No más miedo de que se desplome.',
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#FF6B00',
  },
  {
    name: 'Valentina C.',
    moto: 'Honda XR 150L',
    tipo: 'Trail',
    location: 'Surquillo',
    rating: 5,
    text: 'Por fin un accesorio hecho acá en Lima que entiende nuestros caminos. Vale cada sol. La calidad del 3D printing es impresionante.',
    photo: 'https://images.unsplash.com/photo-1609429019995-8c40f49535a5?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#DC2626',
  },
  {
    name: 'Sebastián P.',
    moto: 'Yamaha Ténéré 700',
    tipo: 'Enduro',
    location: 'San Borja',
    rating: 5,
    text: 'El sistema telescópico ajusta perfecto a la Ténéré. En la arena de Asia no se mueve ni un centímetro. Un lujo total.',
    photo: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#1E40AF',
  },
  {
    name: 'Diego L.',
    moto: 'Kawasaki KLX 300',
    tipo: 'Enduro',
    location: 'La Molina',
    rating: 5,
    text: 'Pedí el Custom en verde Kawasaki y quedó espectacular. El acabado de impresión 3D es de primera. Mi grupo lo quiere.',
    photo: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#2ECC40',
  },
  {
    name: 'Camila F.',
    moto: 'Royal Enfield Himalayan',
    tipo: 'Aventura',
    location: 'Barranco',
    rating: 5,
    text: 'Lo usé en Antioquía y en Canta. En el barro de la sierra no hay nada igual. Es el mejor accesorio que he comprado.',
    photo: 'https://images.unsplash.com/photo-1609752272551-2e5ca1cc1fd6?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#9CA3AF',
  },
  {
    name: 'Luis A.',
    moto: 'Honda PCX 150',
    tipo: 'Urbano',
    location: 'Lince',
    rating: 5,
    text: 'El Urban me salvó mil veces en las veredas inclinadas de Lima. Compacto, ligero y se instala en segundos. 100% recomendado.',
    photo: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#F59E0B',
  },
]

const TIPO_COLORS: Record<string, string> = {
  Aventura: '#FF6B00',
  Trail: '#DC2626',
  Enduro: '#2ECC40',
  Urbano: '#3B82F6',
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 px-4 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Testimonios</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Lo que dicen <span className="text-gradient">los patas.</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Moteros urbanos, trail, enduro y aventura — el AuxiPata es para todos.
          </p>
        </motion.div>

        {/* rider type filters (visual only) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {Object.entries(TIPO_COLORS).map(([tipo, color]) => (
            <span
              key={tipo}
              className="px-4 py-1.5 rounded-full text-xs font-bold border"
              style={{ borderColor: color + '50', color, background: color + '15' }}
            >
              {tipo}
            </span>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#FF6B00" className="text-primary" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2"
                  style={{ borderColor: TIPO_COLORS[t.tipo] ?? t.avatarColor }}
                >
                  <Image
                    src={t.photo}
                    alt={`Motero ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white text-sm truncate">{t.name}</p>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        background: (TIPO_COLORS[t.tipo] ?? t.avatarColor) + '20',
                        color: TIPO_COLORS[t.tipo] ?? t.avatarColor,
                      }}
                    >
                      {t.tipo}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs truncate">{t.moto} · {t.location}</p>
                </div>
              </div>
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
          ¿Ya tienes tu AuxiPata?{' '}
          <a
            href="https://wa.me/51932900134?text=Hola!%20Quiero%20dejar%20mi%20reseña%20de%20AuxiPata%20🏍️"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Cuéntanos tu experiencia.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
