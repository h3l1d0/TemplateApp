import { Link } from "react-router-dom";

const features = [
  {
    icon: "⚡",
    title: "Rápido y Ligero",
    description:
      "Procesos optimizados para que tu aplicación vuele en cualquier dispositivo.",
  },
  {
    icon: "🔒",
    title: "Seguro",
    description:
      "Autenticación y autorización robustas para mantener tus datos protegidos.",
  },
  {
    icon: "⚙️",
    title: "Altamente Configurable",
    description:
      "Plugin-based y cero dependencias molestas: tú decides cómo personalizar.",
  },
  {
    icon: "📱",
    title: "Responsive",
    description:
      "Tu app se verá impecable en móvil, tablet y escritorio sin esfuerzo extra.",
  },
  {
    icon: "🌐",
    title: "Internacionalización",
    description: "Listo para traducir y servir a usuarios de todo el mundo.",
  },
  {
    icon: "☁️",
    title: "Despliegue en la Nube",
    description:
      "Compatible con los principales proveedores: AWS, Vercel, Netlify, y más.",
  },
];

export default function LandingPage() {
  return (
    <div className="space-y-20">
    <section className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Build Your App, Faster
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            A complete solution to launch and scale your web applications with
            confidence and ease.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              to="/features"
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            Join thousands of developers building with MyBrand.
          </p>
          <Link
            to="/register"
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Create your account
          </Link>
        </div>
      </section>
    </div>
  );
}
