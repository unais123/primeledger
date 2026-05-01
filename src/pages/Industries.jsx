import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Industry Data with Generated 3D Images ---

const industries = [
  { 
    id: "01", 
    name: "Technology & SaaS", 
    desc: "From seed-stage funding compliance to IPO readiness, we navigate the complex regulatory vectors of hyper-growth tech companies. We handle international transfer pricing and complex ESOP taxation structures.", 
    imgColor: "rgba(30, 60, 160, 0.2)", 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "02", 
    name: "Manufacturing", 
    desc: "Optimizing supply chain taxation, inventory valuation, and navigating the complex landscape of factory excise duties. We provide real-time reconciliation to prevent margin erosion.", 
    imgColor: "rgba(214, 193, 156, 0.1)", 
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "03", 
    name: "Fintech & Web3", 
    desc: "Pioneering audit standards for digital assets, smart contracts, and algorithmic trading platforms. Absolute regulatory compliance in the most scrutinized industry on the planet.", 
    imgColor: "rgba(214, 193, 156, 0.4)", 
    img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "04", 
    name: "Real Estate & Infra", 
    desc: "Structuring complex joint ventures, executing REIT compliance, and managing high-stakes capital gains advisory for large-scale property developers.", 
    imgColor: "rgba(20, 40, 100, 0.5)", 
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  }
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingTop: 'clamp(100px, 15vh, 150px)', paddingBottom: 'clamp(50px, 8vw, 100px)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            Sectors We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}
          >
            Specialized financial architecture built for the exact regulatory environment of your industry.
          </motion.p>
        </div>

        {/* Interactive Vertical Tabs Layout */}
        <div className="responsive-grid-1-2" style={{ 
          background: 'var(--color-bg-card)', 
          borderRadius: '40px', 
          padding: 'clamp(1rem, 5vw, 2rem)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          
          {/* Left Column: Tab List */}
          <div className="tab-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: 'clamp(0rem, 5vw, 2rem)' }}>
            {industries.map((ind, i) => {
              const isActive = activeIndex === i;
              return (
                <button 
                  key={ind.id}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    background: isActive ? 'rgba(214, 193, 156, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(214, 193, 156, 0.3)' : '1px solid transparent',
                    borderRadius: '20px',
                    color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '0.5rem' }}>{ind.id}</div>
                    <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 600 }}>{ind.name}</div>
                  </div>
                  {isActive && <ArrowRight size={20} />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Panel */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', background: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'clamp(400px, 60vh, 600px)' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}
              >
                {/* Background Glow */}
                <div style={{ position: 'absolute', inset: 0, background: industries[activeIndex].imgColor, filter: 'blur(50px)', opacity: 0.5 }}></div>

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
                  {/* Real Image */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <motion.img 
                      src={industries[activeIndex].img} 
                      alt={industries[activeIndex].name} 
                      style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Text Details */}
                  <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', background: 'linear-gradient(to top, var(--color-bg-card) 50%, transparent)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>{industries[activeIndex].name}</h2>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {industries[activeIndex].desc}
                    </p>
                    <button className="btn-primary">Explore Services <ArrowRight size={18} style={{ marginLeft: '8px' }} /></button>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <style>{`
          @media (min-width: 1025px) {
            .tab-list { border-right: 1px solid rgba(255,255,255,0.05); }
          }
          @media (max-width: 1200px) {
            .tab-list { flex-direction: row !important; overflow-x: auto; padding-right: 0 !important; padding-bottom: 1rem; border-right: none !important; }
            .tab-list button { flex-shrink: 0; min-width: 200px; }
          }
        `}</style>
      </div>
    </div>
  );
}
