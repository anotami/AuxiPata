import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'AuxiPata – El pata que nunca te deja varado',
  description:
    'Soporte telescópico portátil para motos. Eleva la rueda para parchar llantas, aceitar la cadena y reparar en ruta — sin buscar suelo plano. Fabricado en Lima, Perú.',
  keywords: [
    'AuxiPata', 'parchar llanta moto Peru', 'aceitar cadena moto ruta',
    'soporte reparacion moto trail', 'caballete moto enduro Peru',
    'reparacion moto sierra peruana', 'accesorio moto aventura Lima',
  ],
  openGraph: {
    title: 'AuxiPata – El pata que nunca te deja varado',
    description: 'Eleva la rueda de tu moto para parchar, aceitar la cadena y reparar en cualquier ruta peruana.',
    url: 'https://auxipata.pe',
    siteName: 'AuxiPata',
    locale: 'es_PE',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AuxiPata Adventure',
  description:
    'Soporte telescópico portátil que eleva la rueda trasera de tu moto para parchar llantas, aceitar la cadena y hacer reparaciones en ruta. Compatible con motos hasta 220kg.',
  brand: { '@type': 'Brand', name: 'AuxiPata' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'PEN',
    price: '129',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'AuxiPata' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '6',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  )
}
