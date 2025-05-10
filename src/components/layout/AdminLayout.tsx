import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const sections = [
  "projects",
  "deployments",
  "activity",
  "domains",
  "usage",
  "settings",
];

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">Logo</h1>
        </div>
        {/* Nav Items */}
        <nav className="flex-1 space-y-2">
          {sections.map((section) => (
            <NavLink
              key={section}
              to={section} // ← ruta relativa
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`
              }
            >
              {section[0].toUpperCase() + section.slice(1)}
            </NavLink>
          ))}
        </nav>
        {/* Theme toggle y perfil */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <ThemeToggle />
          <img
            src="/assets/avatar.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Search bar */}
        <header className="px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                🔍
              </span>
            </div>
          </div>
        </header>
        {/* Center panel */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <Outlet />
          </div>
        </main>
      </div>
      {/* Right activity feed */}
      <aside className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Activity</h2>
        <ul className="space-y-4">
          {/* Ejemplo de actividad */}
          <li className="flex items-start space-x-3">
            <img
              src="/assets/avatar2.jpg"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm">
                <strong>Michael Foster</strong> pushed to <em>ios-app</em>
              </p>
              <p className="text-xs text-gray-500">1h ago</p>
            </div>
          </li>
          {/* Repite según datos */}
        </ul>
      </aside>
    </div>
  );
}
