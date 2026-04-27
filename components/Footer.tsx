import { Instagram, Youtube, Facebook, Mail } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const NAV = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#lineas', label: 'Líneas' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#precios', label: 'Precios' },
  { href: '#talleres', label: 'Talleres' },
  { href: '#faq', label: 'FAQ' },
]

const SOCIAL = [
  { Icon: Instagram, href: `https://instagram.com/${BRAND.instagram}`, label: 'Instagram' },
  { Icon: Youtube, href: `https://youtube.com/@${BRAND.instagram}`, label: 'YouTube' },
  { Icon: Facebook, href: `https://facebook.com/${BRAND.facebook}`, label: 'Facebook' },
  { Icon: Mail, href: `mailto:${BRAND.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-darker border-t border-brand-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* brand */}
          <div>
            <span className="text-3xl font-black">
              <span className="text-gradient">Auxi</span>
              <span className="text-white">Pata</span>
            </span>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              {BRAND.slogan}
              <br />
              Soporte telescópico para motos, fabricado en Lima.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Navegación</h4>
            <ul className="space-y-2">
              {NAV.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Lima, Perú</p>
              <p>
                📱{' '}
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp Business
                </a>
              </p>
              <p>
                📧{' '}
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </p>
              <p>📷 <span className="text-primary">@{BRAND.instagram}</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} AuxiPata by FTD · Lima, Perú · Todos los derechos reservados.</p>
          <p>
            Hecho con 🧡 en Lima para las rutas del Perú
          </p>
        </div>
      </div>
    </footer>
  )
}
