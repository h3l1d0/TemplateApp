// src/pages/public/LoginPage.tsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: llamar a tu servicio de auth
    if (!email || !password) {
      setError('Por favor completa todos los campos.')
      return
    }
    // Simulamos login exitoso
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-transparent text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-transparent text-gray-900 dark:text-gray-100"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          ¿No tienes cuenta?{' '}
          <Link
            to="/register"
            className="text-purple-600 hover:underline dark:text-purple-400"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}
