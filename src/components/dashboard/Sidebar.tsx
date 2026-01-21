"use client";

import { BookOpen, Bot, LayoutDashboard, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Import Router

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter(); // Initialize Router

  const handleLogout = () => {
    // In a real app, we would clear cookies/tokens here
    router.push('/login');
  };

  const links = [
    { name: 'Overview', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'My Classroom', href: '/dashboard/classroom', icon: <BookOpen size={20} /> },
    { name: 'AI Tutor', href: '/dashboard/chat', icon: <Bot size={20} /> },
    { name: 'Settings', href: '/dashboard/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Uni<span className="highlight">Tutor</span></h2>
        <span className="badge">JAMBite (Science)</span>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        {/* Added onClick to handle logout */}
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}