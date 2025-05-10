// src/components/layout/PublicLayout.tsx
import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <nav className="bg-white p-4 shadow">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about" className="mr-4">
          About
        </Link>
        <Link to="/contact" className="mr-4">
          Contact
        </Link>
        <Link to="/login" className="ml-auto">
          Login
        </Link>
        <Link to="/register" className="ml-auto">
          Register
        </Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center p-4">© 2025 Mi WebApp</footer>
    </>
  );
}
