"use client"; // We need this to check the URL

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // If we are inside the dashboard or admin area, DO NOT show this navbar
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="logo">
          Uni<span className="highlight">Tutor</span>
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link href="/login" className="btn btn-text">Log In</Link>
          <Link href="/register" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}