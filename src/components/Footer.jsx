import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'transparent', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div style={{ background: 'var(--color-bg-card)', borderRadius: '40px', padding: 'clamp(3rem, 10vw, 5rem) clamp(1.5rem, 5vw, 4rem) 3rem clamp(1.5rem, 5vw, 4rem)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
          
          <div className="footer-grid" style={{ marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
            
            {/* Brand & Newsletter */}
            <div className="footer-col-full" style={{ gridColumn: 'span 1' }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', textDecoration: 'none' }}>
                <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-dark))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '12px', height: '12px', background: 'var(--color-bg-base)', borderRadius: '3px' }}></div>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}>
                  Prime Ledger
                </span>
              </Link>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '350px', marginBottom: '2.5rem' }}>
                Engineering financial success through precision, tax optimization, and absolute compliance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color="var(--color-accent-gold)" />
                  <span>+91 8123937745</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="var(--color-accent-gold)" />
                  <span>primeledgerinfo@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} color="var(--color-accent-gold)" />
                  <span>Mangalore, Bangalore</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-col-half" style={{ gridColumn: 'span 1' }}>
              <h4 style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 700 }}>Expertise</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {["Accounting", "Taxation", "Compliance", "Registration", "GST Services"].map((item, i) => (
                  <li key={i}>
                    <Link to="/services" style={{ color: 'var(--color-text-body)', textDecoration: 'none', fontSize: '1.05rem', transition: 'color 0.2s', fontWeight: 500 }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent-gold)'} onMouseOut={(e) => e.target.style.color = 'var(--color-text-body)'}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col-half" style={{ gridColumn: 'span 1' }}>
              <h4 style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 700 }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Case Studies", path: "/case-studies" },
                  { name: "Contact Us", path: "/contact" },
                  { name: "Partner Info", path: "/about" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} style={{ color: 'var(--color-text-body)', textDecoration: 'none', fontSize: '1.05rem', transition: 'color 0.2s', fontWeight: 500 }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent-gold)'} onMouseOut={(e) => e.target.style.color = 'var(--color-text-body)'}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col-full" style={{ gridColumn: 'span 1' }}>
              <h4 style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 700 }}>Newsletter</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Stay updated with the latest tax and compliance shifts in India.</p>
              <div className="responsive-flex" style={{ gap: '12px', width: '100%' }}>
                <input type="email" placeholder="Email address" style={{ flex: 1, width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', outline: 'none', fontFamily: 'inherit', fontSize: '1rem' }} />
                <button style={{ background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-dark))', color: 'var(--color-bg-base)', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{ paddingTop: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} Prime Ledger. All rights reserved.
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
              <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Twitter</a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
