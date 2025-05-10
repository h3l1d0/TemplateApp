// src/pages/public/LandingPage.tsx

const features = [
  {
    icon: '⚡',
    title: 'Rápido y Ligero',
    description: 'Procesos optimizados para que tu aplicación vuele en cualquier dispositivo.'
  },
  {
    icon: '🔒',
    title: 'Seguro',
    description: 'Autenticación y autorización robustas para mantener tus datos protegidos.'
  },
  {
    icon: '⚙️',
    title: 'Altamente Configurable',
    description: 'Plugin-based y cero dependencias molestas: tú decides cómo personalizar.'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Tu app se verá impecable en móvil, tablet y escritorio sin esfuerzo extra.'
  },
  {
    icon: '🌐',
    title: 'Internacionalización',
    description: 'Listo para traducir y servir a usuarios de todo el mundo.'
  },
  {
    icon: '☁️',
    title: 'Despliegue en la Nube',
    description: 'Compatible con los principales proveedores: AWS, Vercel, Netlify, y más.'
  }
]

export default function LandingPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="flex flex-col items-center text-center py-24 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Tu WebApp en un Instante</h1>
        <p className="text-lg max-w-2xl mb-8">
          Construye aplicaciones modernas, rápidas y seguras con nuestra plataforma completa.
        </p>
        <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition">
          Comenzar Ahora
        </button>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Características Clave</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <div
              key={f.title}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
