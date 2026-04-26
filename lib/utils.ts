import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateReferralCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return 'AUX-' + Array.from({ length: 6 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('')
}

export function buildWhatsAppUrl(params: {
  whatsapp: string
  product: string
  color: string
  price: number
  referralCode?: string
  discountedPrice?: number
}): string {
  const { whatsapp, product, color, price, referralCode, discountedPrice } = params

  const referralLine = referralCode
    ? `\n🤝 *Referido por:* ${referralCode}\n💸 *Precio con 10% off:* S/${discountedPrice?.toFixed(2)}`
    : ''

  const message = `¡Hola! Quiero mi *AuxiPata* 🏍️

📦 *Producto:* ${product}
🎨 *Color:* ${color}
💰 *Precio:* S/${price}${referralLine}

Por favor confirmar disponibilidad y coordinar envío. ¡Gracias!

_Nombre:_
_Dirección:_
_Moto:_`

  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}

export function formatPrice(price: number): string {
  return `S/${price}`
}
