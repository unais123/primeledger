import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: scrolled ? '1rem' : '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 3rem)',
          maxWidth: '1200px',
          zIndex: 100,
          padding: '0.8rem 2rem',
          borderRadius: '100px',
          background: scrolled ? 'rgba(10, 22, 63, 0.85)' : 'rgba(10, 22, 63, 0.4)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.3)' : 'none',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--color-bg-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <div style={{ width: '14px', height: '14px', background: 'var(--color-accent-gold)', borderRadius: '4px' }}></div>
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}>
            Prime <span style={{ color: 'var(--color-accent-gold)' }}>Ledger</span>
          </span>
        </Link>
        
        <div className="desktop-only" style={{ gap: '2rem', alignItems: 'center', display: 'flex' }}>
          {links.map((link) => (
            <Link key={link.name} to={link.path} style={{
              color: location.pathname === link.path ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent-gold)'}
            onMouseOut={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--color-accent-gold)' : 'var(--color-text-muted)'}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="desktop-only">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>
              Free Consultation
            </button>
          </Link>
        </div>

        <button 
          className="mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--color-text-main)', cursor: 'pointer' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div style={{ 
        position: 'fixed', 
        top: '0', 
        left: '0', 
        right: '0', 
        bottom: '0',
        height: '100vh',
        background: 'rgba(5, 10, 31, 0.98)', 
        backdropFilter: 'blur(20px)',
        padding: '8rem 2rem 2rem 2rem', 
        zIndex: 99,
        display: mobileMenuOpen ? 'flex' : 'none', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '2rem',
        animation: 'fadeIn 0.4s ease'
      }}>
        {links.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: location.pathname === link.path ? 'var(--color-accent-gold)' : 'var(--color-text-main)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '2rem',
              textAlign: 'center'
            }}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', width: '100%', maxWidth: '300px', marginTop: '2rem' }}>
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>
            Free Consultation
          </button>
        </Link>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.1); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (min-width: 1025px) {
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
