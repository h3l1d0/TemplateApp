import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = ["Product", "Features", "Blog", "Contact"];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-purple-600">MyBrand</div>
          <nav className="space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                className="hover:text-purple-600 transition"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div>
            <Link
              to="/login"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
            >
              Log in
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 MyBrand, Inc.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-sm hover:text-purple-600 transition"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm hover:text-purple-600 transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
