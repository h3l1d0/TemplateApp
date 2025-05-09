// src/router.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/public/HomePage'
// si luego creas más páginas, sólo importa aquí:
// import SettingsPage from './pages/SettingsPage'
// import ProfilePage  from './pages/ProfilePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/*
        ejemplo de ruta extra:
      <Route path="/settings" element={<SettingsPage />} />
      */}
      {/* Ruta comodín para 404: redirige a "/" */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
