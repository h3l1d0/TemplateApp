import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MarketLayout from "./components/layout/MarketLayout";
import ManagerLayout from "./components/layout/ManagerLayout";
import AdminLayout from "./components/layout/AdminLayout";

// Market Pages
import LandingPage from "./pages/market/LandingPage";
import LoginPage from "./pages/market/LoginPage";
import RegisterPage from "./pages/market/RegisterPage";

// Manager Pages
import ManagerDashboardPage from "./pages/manager/DashboardManagerPage";
import ProductsPage from "./pages/manager/ProductsPage";
import ServicesPage from "./pages/manager/ServicesPage";

// Admin Pages
import AdminDashboardPage from "./pages/admin/DashboardAdminPage";
import SettingsPage from "./pages/admin/SettingsPage";

export default function AppRouter() {
  return (
    <Routes>
      {/** MARKET PATH "/" */}
      <Route element={<MarketLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/** MANAGER PATH "/manager" */}
      <Route path="manager" element={<ManagerLayout />}>
        <Route index element={<ManagerDashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Route>

      {/** ADMIN PATH "/admin" */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="projects" element={<SettingsPage />} />
        <Route path="deployments" element={<SettingsPage />} />
        <Route path="activity" element={<SettingsPage />} />
        <Route path="domains" element={<SettingsPage />} />
        <Route path="usage" element={<SettingsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/** Cualquier otra ruta redirige a "/" */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
