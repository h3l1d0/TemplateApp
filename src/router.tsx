// src/router.tsx
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import LandingPage from "./pages/public/LandingPage";
import AboutPage from "./pages/public/AboutPage";
import ContactPage from "./pages/public/ContactPage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage ";
// si luego creas más páginas, sólo importa aquí:
// import SettingsPage from './pages/SettingsPage'
// import ProfilePage  from './pages/ProfilePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
