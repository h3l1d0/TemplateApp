// src/pages/public/AboutPage.tsx

const team = [
  { name: 'Ana Pérez', role: 'CEO & Fundadora', avatar: '/assets/ana.jpg' },
  { name: 'Luis Gómez', role: 'CTO', avatar: '/assets/luis.jpg' },
  { name: 'María Ruiz', role: 'Lead Designer', avatar: '/assets/maria.jpg' },
  { name: 'Jorge Díaz', role: 'Senior Dev', avatar: '/assets/jorge.jpg' },
]

const stats = [
  { value: '100K+', label: 'Usuarios activos' },
  { value: '500+', label: 'Proyectos completados' },
  { value: '99%', label: 'Satisfacción cliente' },
  { value: '24/7', label: 'Soporte disponible' },
]

export default function AboutPage() {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      {/* Hero con imagen y overlay */}
      <section
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/about-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Sobre Nosotros
          </h1>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 px-6 md:px-16 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-center">Nuestra Historia</h2>
          <p className="leading-relaxed text-center text-gray-700 dark:text-gray-300">
            Comenzamos en 2020 con la visión de revolucionar la forma en que las
            empresas construyen sus aplicaciones. Desde entonces, hemos crecido
            hasta ser un equipo global, entregando soluciones robustas y
            escalables a cientos de clientes.
          </p>
        </div>
      </section>

      {/* Estadísticas clave */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold">{s.value}</p>
              <p className="text-gray-600 dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Conoce al Equipo</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">
                  {m.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          ¿Listo para empezar?
        </h2>
        <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition">
          Contáctanos
        </button>
      </section>
    </div>
  )
}
