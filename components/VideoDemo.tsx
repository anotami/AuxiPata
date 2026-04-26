'use client'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false)

  // Replace VIDEO_ID with your actual YouTube video ID
  const VIDEO_ID = 'YOUR_YOUTUBE_VIDEO_ID'

  return (
    <section className="py-24 px-4 bg-brand-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Demo en ruta</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Míralo en <span className="text-gradient">acción.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            En las rutas más exigentes de Lima: Antioquía, Canta, San Bartolo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-brand-dark border border-brand-border"
        >
          {!playing ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setPlaying(true)}
              style={{
                background: 'linear-gradient(135deg, #1a0800 0%, #0A0A0A 100%)',
              }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform mb-4">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <p className="text-white font-bold text-lg">Ver demostración</p>
              <p className="text-gray-500 text-sm mt-1">AuxiPata en ruta hacia Antioquía</p>
              <div className="absolute bottom-6 flex gap-3">
                {['Tierra', 'Arena', 'Piedra', 'Fango'].map(t => (
                  <span
                    key={t}
                    className="bg-brand-card border border-brand-border text-gray-400 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="AuxiPata Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </motion.div>

        <p className="text-center text-gray-600 text-sm mt-4">
          ¿Tienes un video rodando con AuxiPata?{' '}
          <a href="#footer" className="text-primary hover:underline">Compártelo con nosotros.</a>
        </p>
      </div>
    </section>
  )
}
