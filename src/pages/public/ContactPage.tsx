// src/pages/public/ContactPage.tsx
import React, { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // TODO: Llama a tu servicio de envío de mensaje
      // await sendContact({ name, email, message })
      await new Promise(res => setTimeout(res, 1000)) // simulación
      setStatus('sent')
      setName(''); setEmail(''); setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center dark:text-white">
          Contáctanos
        </h2>

        {/* Detalles de contacto */}
        <div className="flex flex-col sm:flex-row justify-around text-center text-gray-700 dark:text-gray-300 space-y-4 sm:space-y-0">
          <div>
            <p className="font-semibold">📍 Dirección</p>
            <p>Calle Falsa 123, Ciudad</p>
          </div>
          <div>
            <p className="font-semibold">✉️ Email</p>
            <p>soporte@tusitio.com</p>
          </div>
          <div>
            <p className="font-semibold">📞 Teléfono</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Mensaje
            </label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>

        {status === 'sent' && (
          <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center">Hubo un error. Intenta de nuevo.</p>
        )}
      </div>
    </div>
  )
}
