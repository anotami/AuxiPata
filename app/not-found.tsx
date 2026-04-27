import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: '#0A0A0A' }}
    >
      <p className="text-8xl font-black text-primary mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
        Ruta no encontrada
      </h1>
      <p className="text-gray-400 text-lg max-w-md mb-8">
        Esta página se perdió en la sierra. Vuelve al inicio y sigue rodando.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
