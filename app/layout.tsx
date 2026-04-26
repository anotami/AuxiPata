import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'AuxiPata – El pata que nunca te deja caer',
  description:
    'Soporte telescópico portátil para motos. Estaciona en cualquier terreno: tierra, arena, piedra y fango. Fabricado en Lima, Perú.',
  keywords: ['AuxiPata', 'soporte moto Peru', 'caballete moto trail', 'accesorio enduro Peru', 'moto aventura Lima'],
  openGraph: {
    title: 'AuxiPata – El pata que nunca te deja caer',
    description: 'Soporte telescópico para motos. Fabricado en Lima para las rutas peruanas.',
    url: 'https://auxipata.pe',
    siteName: 'AuxiPata',
    locale: 'es_PE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE">
      <body>
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  )
}
