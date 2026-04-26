export const BRAND = {
  name: 'AuxiPata',
  slogan: 'El pata que nunca te deja caer.',
  tagline: 'Soporte telescópico para cualquier terreno. Fabricado en Lima.',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '51999999999',
  instagram: 'auxipata',
  tiktok: 'auxipata',
  facebook: 'auxipata',
  email: 'hola@auxipata.pe',
  location: 'Lima, Perú',
}

export const PRICES = {
  urban: 89,
  adventure: 129,
  custom: 159,
  customColorExtra: 15,
  referralDiscount: 0.1,
}

export const MOTO_COLORS = [
  { id: 'ktm-orange', name: 'Naranja KTM', hex: '#FF6B00', extra: 0 },
  { id: 'kawa-green', name: 'Verde Kawasaki', hex: '#2ECC40', extra: 0 },
  { id: 'yamaha-blue', name: 'Azul Yamaha', hex: '#1E40AF', extra: 0 },
  { id: 'honda-red', name: 'Rojo Honda', hex: '#DC2626', extra: 0 },
  { id: 'suzuki-yellow', name: 'Amarillo Suzuki', hex: '#FBBF24', extra: 0 },
  { id: 'black', name: 'Negro', hex: '#1A1A1A', extra: 0 },
  { id: 'white', name: 'Blanco', hex: '#EEEEEE', extra: 0 },
  { id: 'custom', name: 'Color Personalizado', hex: null, extra: 15 },
]

export const PRODUCTS = [
  {
    id: 'urban',
    name: 'AuxiPata Urban',
    subtitle: 'Para motos de ciudad y scooters',
    price: PRICES.urban,
    features: [
      'Peso ultraligero 280g',
      'Compacto y portátil',
      'Compatible con scooters y motos urbanas',
      'Base TPU anti-deslizante',
      'Anclaje en bridas de acero',
    ],
    badge: null,
    accent: '#4B5563',
  },
  {
    id: 'adventure',
    name: 'AuxiPata Adventure',
    subtitle: 'Para Trail y Enduro',
    price: PRICES.adventure,
    features: [
      'Resistente al impacto y barro',
      'Base TPU reforzada con diseño garra',
      'Soporta hasta 220kg',
      'Sistema telescópico 40-70cm',
      'Anclaje en bridas de acero inox',
    ],
    badge: 'Más vendido',
    accent: '#FF6B00',
  },
  {
    id: 'custom',
    name: 'AuxiPata Custom',
    subtitle: 'Edición limitada a tu color',
    price: PRICES.custom,
    features: [
      'Todo lo del Adventure',
      'Color del terminal a elección',
      'Grabado láser del nombre/apodo',
      'Packaging premium',
      'Certificado de edición numerada',
    ],
    badge: 'Edición limitada',
    accent: '#FFD700',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Rodrigo M.',
    moto: 'KTM 390 Adventure',
    location: 'Miraflores, Lima',
    rating: 5,
    text: 'Lo usé en la ruta a Marcahuasi y la moto quedó firme como roca en la piedra suelta. No más miedo de que se desplome.',
    avatarColor: '#FF6B00',
  },
  {
    name: 'Valentina C.',
    moto: 'Honda XR 150L',
    location: 'Surquillo, Lima',
    rating: 5,
    text: 'Por fin un accesorio hecho acá en Lima que entiende nuestros caminos. Vale cada sol. La calidad del 3D printing es impresionante.',
    avatarColor: '#DC2626',
  },
  {
    name: 'Sebastián P.',
    moto: 'Yamaha Ténéré 700',
    location: 'San Borja, Lima',
    rating: 5,
    text: 'El sistema telescópico ajusta perfecto a la Ténéré y en la arena de Asia no se mueve ni un centímetro. Un lujo.',
    avatarColor: '#1E40AF',
  },
  {
    name: 'Diego L.',
    moto: 'Kawasaki KLX 300',
    location: 'La Molina, Lima',
    rating: 5,
    text: 'Pedí el Custom en verde Kawasaki y quedó espectacular. El acabado de impresión 3D es de primera. Mi grupo lo quiere.',
    avatarColor: '#2ECC40',
  },
  {
    name: 'Camila F.',
    moto: 'Royal Enfield Himalayan',
    location: 'Barranco, Lima',
    rating: 5,
    text: 'Lo usé en Antioquía y en Canta. En el barro de la sierra no hay nada igual. Es el mejor accesorio que he comprado.',
    avatarColor: '#9CA3AF',
  },
]

export const FAQS = [
  {
    q: '¿Para qué motos es compatible el AuxiPata?',
    a: 'Compatible con KTM, Yamaha, Honda, Kawasaki, Suzuki, Royal Enfield, Bajaj y más. El sistema telescópico se ajusta entre 40cm y 70cm de altura. Si tienes dudas sobre tu modelo específico, escríbenos por WhatsApp y te confirmamos al instante.',
  },
  {
    q: '¿Cuánto tiempo tarda el envío en Lima?',
    a: 'Entrega en 24-48 horas en Lima Metropolitana. Para provincias (Arequipa, Cusco, Trujillo, Piura y más), 3-5 días hábiles vía courier. Envío gratis en Lima Metropolitana en todos los modelos.',
  },
  {
    q: '¿Cómo anclo el AuxiPata a mi moto?',
    a: 'Viene con bridas reforzadas de acero inoxidable que se sujetan al chasis sin herramientas ni modificaciones. En menos de 5 minutos queda instalado. Incluye instructivo de instalación con fotos paso a paso.',
  },
  {
    q: '¿Qué incluye el kit?',
    a: 'AuxiPata + 2 bridas de anclaje de acero inox + base TPU + instructivo de instalación. El modelo Custom suma grabado láser y packaging premium con número de edición.',
  },
  {
    q: '¿Puedo elegir el color del terminal?',
    a: 'Sí, pero solo en el modelo Custom. Puedes elegir entre los colores preset de las marcas principales (Naranja KTM, Verde Kawasaki, Azul Yamaha, Rojo Honda, etc.) sin costo adicional, o ingresar el código hex exacto de tu color por +S/15.',
  },
  {
    q: '¿Qué garantía tienen?',
    a: '6 meses de garantía por defectos de fabricación. Si el producto falla en condiciones normales de uso, lo reemplazamos sin costo. Envía foto del defecto por WhatsApp y te respondemos en menos de 24h.',
  },
  {
    q: '¿Cómo funciona el sistema de referidos?',
    a: 'Al visitar la página obtienes un código único. Si compartes tu link y un pata compra usando ese código, él obtiene 10% de descuento directo en su pedido. Sin complicaciones.',
  },
  {
    q: '¿Aceptan Yape o Plin?',
    a: 'Sí. Aceptamos Yape, Plin, transferencia bancaria y pago contra entrega en Lima Metropolitana. Al coordinar por WhatsApp te compartimos el QR o número de cuenta.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Ancla',
    desc: 'Sujeta el AuxiPata al chasis de tu moto con las bridas de acero inox incluidas. Sin herramientas, sin modificaciones permanentes.',
  },
  {
    step: '02',
    title: 'Extiende',
    desc: 'Despliega el sistema telescópico y ajusta la altura ideal para tu moto en segundos. De 40cm a 70cm de alcance.',
  },
  {
    step: '03',
    title: 'Estaciona',
    desc: 'La base TPU con diseño garra se clava en cualquier superficie: tierra, arena, piedra, fango. Tu moto queda firme como roca.',
  },
]

export const FEATURES = [
  {
    icon: 'Ruler',
    title: 'Sistema Telescópico',
    desc: 'Ajustable entre 40 y 70cm. Compatible desde scooters hasta motos de enduro de gran porte.',
  },
  {
    icon: 'Shield',
    title: 'Base Todo Terreno',
    desc: 'Terminal en TPU de alta densidad con diseño garra. Máxima tracción en tierra, arena, piedra y fango.',
  },
  {
    icon: 'Zap',
    title: 'Anclaje en Segundos',
    desc: 'Sistema de bridas reforzadas de acero inoxidable. Instalación sin herramientas en menos de 5 minutos.',
  },
  {
    icon: 'Layers',
    title: 'Materiales Híbridos',
    desc: 'Tubo central de aluminio aeronáutico + terminales en PETG/Carbon Fiber impresos en 3D en Lima.',
  },
]
