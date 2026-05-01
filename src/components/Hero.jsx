import React, { Suspense, lazy } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918123937745', '_blank');
  };

  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: 'clamp(100px, 12vh, 180px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ambient Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26, 46, 122, 0.4) 0%, rgba(15, 31, 90, 0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, rgba(15, 31, 90, 0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            <div
              className="badge"
              style={{ marginBottom: '1.5rem', background: 'rgba(212, 175, 55, 0.05)', borderColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--color-accent-gold)' }}
            >
              <div style={{ background: 'var(--color-accent-gold)', width: '8px', height: '8px', borderRadius: '50%' }}></div>
              Prime Ledger | Tax & Compliance
            </div>
            
            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Your Finances. <br/>
              <span className="glow-text-blue" style={{ color: 'var(--color-accent-glow)' }}>Engineered for Growth.</span>
            </h1>
            
            <p style={{ maxWidth: '550px', marginBottom: '2.5rem', fontSize: '1.25rem' }}>
              We handle tax, compliance, and accounting so you can scale confidently. Precision-driven CA services for modern businesses.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => window.location.href = '#contact'}>
                Get Free Consultation
                <div className="icon-circle">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </button>
              
              <button 
                className="btn-secondary glass" 
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                onClick={handleWhatsApp}
              >
                <MessageCircle size={20} color="#25D366" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ height: '600px', width: '100%', position: 'relative' }}
          >
            <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '24px' }} />}>
              <Hero3D />
            </Suspense>
            
            {/* Subtle floating labels/elements can be added here if needed */}
            <div style={{ position: 'absolute', bottom: '10%', left: '10%', padding: '1rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Trusted by</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>500+ Corporations</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
