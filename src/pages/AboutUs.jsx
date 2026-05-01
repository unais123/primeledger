import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';
const About3DBg = lazy(() => import('../components/About3DBg'));

export default function AboutUs() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', position: 'relative' }}>
      <Suspense fallback={null}>
        <About3DBg />
      </Suspense>
      
      {/* Hero Section */}
      <section style={{ paddingTop: 'clamp(120px, 15vh, 180px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>About Prime Ledger</div>
              <h1 style={{ marginBottom: '2rem' }}>Precise. Trusted. <br/>Tech-Driven.</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Prime Ledger was founded on the principle that financial management should be a catalyst for growth, not a hurdle. We combine deep domain expertise in Indian CA practices with modern technological efficiency.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--color-accent-gold)', marginBottom: '0.5rem' }}>Mission</h4>
                  <p style={{ fontSize: '0.95rem' }}>Simplify finance with precision and trust, enabling businesses to focus on what they do best.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-accent-gold)', marginBottom: '0.5rem' }}>Vision</h4>
                  <p style={{ fontSize: '0.95rem' }}>Become a leading tech-driven CA firm, redefining how enterprises handle compliance globally.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass"
              style={{ padding: '3rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%)' }}></div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Prime Standard</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <ShieldCheck color="var(--color-accent-gold)" />
                  <div>
                    <strong>Absolute Integrity</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Transparent practices and uncompromising ethics in every audit.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Award color="var(--color-accent-gold)" />
                  <div>
                    <strong>Precision Engineering</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Meticulous attention to detail in tax planning and GST reconciliation.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: '8rem 0', background: 'rgba(15, 31, 90, 0.2)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
             <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'absolute', inset: '-20px', border: '1px solid var(--color-accent-gold)', borderRadius: '24px', opacity: 0.2, zIndex: 0 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ibrahim Basil" 
                style={{ width: '100%', borderRadius: '20px', position: 'relative', zIndex: 1, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <div className="badge" style={{ marginBottom: '1.5rem' }}>Managing Partner</div>
              <h2 style={{ marginBottom: '1.5rem' }}>Ibrahim Basil</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-body)', marginBottom: '2rem' }}>
                With over a decade of experience in corporate taxation and compliance, Ibrahim Basil leads Prime Ledger with a vision to modernize CA services. His expertise lies in navigating the complexities of GST and international tax laws, ensuring that clients stay ahead of regulatory shifts.
              </p>
              <div style={{ display: 'flex', gap: '3rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>12+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase' }}>Years Experience</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>500+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase' }}>Clients Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Our Core Pillars</h2>
          </div>
          <div className="responsive-grid-3">
            {[
              { title: "Strategic Precision", icon: <Target />, text: "We don't just file returns; we engineer tax strategies that save money." },
              { title: "Tech-First Approach", icon: <Eye />, text: "Real-time dashboards and automated reconciliation for zero-error compliance." },
              { title: "Unwavering Trust", icon: <ShieldCheck />, text: "Built on a foundation of transparency and long-term partnership." }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass" 
                style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center' }}
              >
                <div style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', color: 'var(--color-accent-gold)' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
