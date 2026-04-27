// ================================================
// CONFIGURACIÓN RÁPIDA — cambia tus datos aquí
// ================================================
const WHATSAPP_NUMBER = '51932900134' // código país + número, sin el +

export const BRAND = {
  name: 'AuxiPata',
  slogan: 'El pata que nunca te deja varado.',
  tagline: 'Eleva la rueda. Parcha, aceita y repara tu moto en cualquier ruta peruana.',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_NUMBER,
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

export const USE_CASES = [
  {
    icon: '🔧',
    title: 'Parcha en ruta',
    desc: 'Pinchaste en la sierra o en el trail. El AuxiPata eleva la rueda para que puedas sacarla, parcharla y volver a rodar.',
  },
  {
    icon: '⛓️',
    title: 'Aceita la cadena',
    desc: 'Cadena seca a mitad de ruta. Eleva la rueda trasera, gírala a mano y aplica el lubricante uniformemente. Sin buscar suelo plano.',
  },
  {
    icon: '🛠️',
    title: 'Repara en cualquier lugar',
    desc: 'Ajuste de frenos, cambio de pastilla, revisión de rodamientos. El AuxiPata convierte cualquier punto de la ruta en tu taller.',
  },
]

export const PRODUCTS = [
  {
    id: 'urban',
    name: 'AuxiPata Urban',
    subtitle: 'Para motos de ciudad y scooters',
    price: PRICES.urban,
    features: [
      'Peso ultraligero 280g',
      'Posiciona bajo el eje — sin herramientas',
      'Eleva la rueda para parchar y aceitar cadena',
      'Compatible con scooters y motos urbanas',
      'Base TPU anti-deslizante',
    ],
    badge: null,
    accent: '#4B5563',
  },
  {
    id: 'adventure',
    name: 'AuxiPata Adventure',
    subtitle: 'Para Trail, Enduro y Grandes Aventuras',
    price: PRICES.adventure,
    features: [
      'Soporta motos hasta 300kg',
      'Posiciona bajo el eje — sin herramientas',
      'Base TPU reforzada con diseño garra',
      'Estable en tierra, arena, piedra y barro',
      'Sistema telescópico 25-45cm de altura',
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
      'Terminal en el color de tu moto',
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
    tipo: 'Aventura',
    location: 'Miraflores',
    rating: 5,
    text: 'Pinché en la bajada de Canta, sin señal y sin suelo plano. El AuxiPata levantó la rueda trasera y en 20 minutos estaba rodando. Lo salvó todo.',
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#FF6B00',
  },
  {
    name: 'Valentina C.',
    moto: 'Honda XR 150L',
    tipo: 'Trail',
    location: 'Surquillo',
    rating: 5,
    text: 'Aceitar la cadena en tierra era una pesadilla. Ahora la elevo, la giro a mano y listo. Lo hago en 5 minutos en cualquier parte de la ruta.',
    photo: 'https://images.unsplash.com/photo-1609429019995-8c40f49535a5?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#DC2626',
  },
  {
    name: 'Sebastián P.',
    moto: 'BMW R1250GS Adventure',
    tipo: 'Aventura',
    location: 'San Borja',
    rating: 5,
    text: 'Con la GS no hay stand convencional que funcione en tierra. El AuxiPata es el único que aguanta el peso en cualquier superficie. Imprescindible.',
    photo: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#1C69D4',
  },
  {
    name: 'Diego L.',
    moto: 'KTM 1290 Super Adventure',
    tipo: 'Aventura',
    location: 'La Molina',
    rating: 5,
    text: 'En la ruta a Lunahuaná tuve que cambiar la pastilla de freno en tierra suelta. Imposible sin el AuxiPata. Me salvó la ruta.',
    photo: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#FF6B00',
  },
  {
    name: 'Camila F.',
    moto: 'Royal Enfield Himalayan',
    tipo: 'Trail',
    location: 'Barranco',
    rating: 5,
    text: 'Compacto, ligero y salvavidas. Lo llevo siempre. Ya lo usé dos veces para parchar en ruta — en Antioquía y en San Bartolo.',
    photo: 'https://images.unsplash.com/photo-1609752272551-2e5ca1cc1fd6?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#9CA3AF',
  },
  {
    name: 'Luis A.',
    moto: 'Honda PCX 150',
    tipo: 'Urbano',
    location: 'Lince',
    rating: 5,
    text: 'Pensé que no lo necesitaba en la ciudad. Luego pinché en una calle sin suelo plano y entendí todo. El Urban es perfecto para scooters.',
    photo: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=200&h=200&q=80',
    avatarColor: '#F59E0B',
  },
]

export const FAQS = [
  {
    q: '¿Para qué sirve exactamente el AuxiPata?',
    a: 'El AuxiPata es un soporte telescópico portátil que eleva la rueda de tu moto del suelo. Te permite parchar una llanta pinchada, aceitar la cadena girándola a mano, o hacer cualquier reparación mecánica sin necesidad de buscar un suelo plano o un taller cercano. Es tu taller portátil de ruta.',
  },
  {
    q: '¿Funciona para parchar llantas en tierra o piedra?',
    a: 'Sí, ese es su uso principal. La base TPU con diseño garra se ancla en tierra, arena, piedra y barro. Una vez desplegado, puedes elevar la rueda trasera para sacarla, parcharla o inflarla sin que la moto se mueva.',
  },
  {
    q: '¿Puedo aceitar la cadena con el AuxiPata?',
    a: 'Exactamente. Elevas la rueda trasera, la giras a mano y aplicas el lubricante de forma uniforme en toda la cadena. En 5 minutos lista, en cualquier punto de la ruta, sin buscar el famoso "suelo plano".',
  },
  {
    q: '¿Para qué motos es compatible?',
    a: 'Compatible con KTM, BMW, Yamaha, Honda, Kawasaki, Suzuki, Royal Enfield, Bajaj y más. El sistema telescópico ajusta entre 40cm y 70cm de altura. Compatible con motos desde 150cc hasta grandes adventure de 1300cc.',
  },
  {
    q: '¿Cuánto tiempo tarda el envío en Lima?',
    a: 'Entrega en 24-48 horas en Lima Metropolitana. Para provincias (Arequipa, Cusco, Trujillo, Piura y más), 3-5 días hábiles. Envío gratis en Lima en todos los modelos.',
  },
  {
    q: '¿Cómo se usa en ruta?',
    a: 'Lo colocas bajo el eje trasero de tu moto, extiendes el tubo telescópico y la rueda queda elevada. Sin herramientas, sin modificaciones. En menos de 2 minutos estás listo para parchar, aceitar o reparar. Incluye instructivo con fotos paso a paso.',
  },
  {
    q: '¿Funciona con motos pesadas como BMW GS o KTM 1290?',
    a: 'Sí. El modelo Adventure soporta hasta 300kg. Se coloca bajo el eje trasero y eleva únicamente la rueda — no levanta la moto entera. Compatible con BMW R1250GS Adventure, KTM 1290 Super Adventure y otras grandes adventure.',
  },
  {
    q: '¿Cómo funciona el sistema de referidos?',
    a: 'Al visitar la página obtienes tu código único de referido. Si un pata compra usando tu link, él obtiene 10% de descuento. Sin complicaciones, sin apps extra.',
  },
  {
    q: '¿Aceptan Yape o Plin?',
    a: 'Sí. Aceptamos Yape, Plin, transferencia bancaria y pago contra entrega en Lima Metropolitana.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Posiciona',
    desc: 'Coloca el AuxiPata bajo el eje trasero de tu moto. Sin herramientas, sin perforar nada — encaja en segundos en cualquier terreno.',
  },
  {
    step: '02',
    title: 'Eleva',
    desc: 'Extiende el tubo telescópico. La rueda trasera sube del suelo y queda libre para girar. Vale en tierra, arena, piedra o barro.',
  },
  {
    step: '03',
    title: 'Repara',
    desc: 'Parcha la llanta, aceita la cadena girándola a mano, cambia pastillas, ajusta frenos. Tu taller portátil en cualquier ruta.',
  },
]

export const FEATURES = [
  {
    icon: 'Wrench',
    title: 'Tu taller en ruta',
    desc: 'Eleva la rueda para parchar, aceitar la cadena o hacer reparaciones. Sin buscar suelo plano, sin esperar auxilio.',
  },
  {
    icon: 'Ruler',
    title: 'Sistema Telescópico',
    desc: 'Ajustable entre 25 y 45cm. Posiciona bajo el eje trasero y eleva la rueda de cualquier moto, desde una PCX hasta una GS 1250.',
  },
  {
    icon: 'Shield',
    title: 'Base Todo Terreno',
    desc: 'Terminal en TPU de alta densidad con diseño garra. Agarre en tierra, arena, piedra y barro. No resbala, no cede.',
  },
  {
    icon: 'Layers',
    title: 'Materiales Híbridos',
    desc: 'Tubo de aluminio aeronáutico + terminales en PETG/Carbon Fiber impresos en 3D en Lima. Ligero y a prueba de todo.',
  },
]
