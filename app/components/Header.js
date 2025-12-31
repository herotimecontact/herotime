'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          HeroTime
        </Link>
        <nav className="nav">
          <Link 
            href="/" 
            className={pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            href="/fans" 
            className={pathname === '/fans' ? 'active' : ''}
          >
            Fans
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            href="/privacy" 
            className={pathname === '/privacy' ? 'active' : ''}
          >
            Privacy
          </Link>
          <Link 
            href="/contact" 
            className={pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
