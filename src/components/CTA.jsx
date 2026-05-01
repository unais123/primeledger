import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section" style={{ padding: '4rem 0', background: 'transparent' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(135deg, var(--color-bg-base), var(--color-bg-secondary))',
            borderRadius: '40px',
            padding: 'clamp(4rem, 15vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            overflow: 'hidden'
          }}
        >
          {/* Background Gradients & Patterns */}
          <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(214, 193, 156, 0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <h2 style={{ color: 'var(--color-text-main)', fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 1, lineHeight: 1.05 }}>
            Ready to simplify <br/> your compliance?
          </h2>
          <p style={{ color: 'var(--color-text-body)', fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto 3rem auto', position: 'relative', zIndex: 1 }}>
            Join thousands of modern businesses that trust Prime Ledger for total financial clarity and absolute compliance.
          </p>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <button className="btn-primary" onClick={() => window.location.href = '/contact'} style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
              Book Your Free Consultation
              <ArrowRight size={24} style={{ marginLeft: '15px' }} />
            </button>
          </div>

          <div style={{ marginTop: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem', position: 'relative', zIndex: 1 }}>
            Schedule a free 30-minute strategic advisory session.
          </div>

          {/* Faux Floating Badges */}
          <div className="cta-badge" style={{ position: 'absolute', top: '15%', right: '15%', background: 'var(--color-bg-card)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '100px', color: 'var(--color-accent-gold)', fontWeight: 700, transform: 'rotate(10deg)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            +24% ROI
          </div>
          <div className="cta-badge" style={{ position: 'absolute', bottom: '20%', left: '15%', background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-dark))', padding: '12px 20px', borderRadius: '100px', color: 'var(--color-bg-base)', fontWeight: 700, transform: 'rotate(-10deg)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            Zero Setup Fees
          </div>

          <style>{`
            @media (max-width: 1024px) {
              .cta-badge { display: none !important; }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
