import { motion } from 'framer-motion';
import { Network, Zap, Lock, Database } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="solutions" className="section" style={{ background: 'transparent', padding: '4rem 0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>
            <Network size={16} /> Compliance Cycle
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', maxWidth: '700px', margin: '0 auto' }}>
            Streamlined audit & tax workflows.
          </h2>
        </div>

        {/* Integration Graphic Bento Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bento-card"
          style={{ background: 'var(--color-bg-card)', padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
        >
          {/* Top Graphic Area */}
          <div style={{ background: 'var(--color-bg-secondary)', height: 'clamp(300px, 50vh, 400px)', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            
            {/* Background Grid Pattern */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(214, 193, 156, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Central Node */}
            <div style={{ width: 'clamp(80px, 20vw, 120px)', height: 'clamp(80px, 20vw, 120px)', background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-dark))', borderRadius: 'clamp(20px, 5vw, 32px)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <div style={{ width: '20%', height: '20%', background: 'var(--color-bg-base)', borderRadius: '6px' }}></div>
            </div>

            {/* Connecting Lines & Orbiting Nodes */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
              <circle cx="50%" cy="50%" r="min(20vw, 150px)" fill="none" stroke="rgba(214, 193, 156, 0.1)" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="50%" cy="50%" r="min(40vw, 250px)" fill="none" stroke="rgba(214, 193, 156, 0.1)" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* App Icons (Faux) */}
            <div className="orbit-node" style={{ position: 'absolute', top: '20%', left: '30%', width: 'clamp(40px, 12vw, 60px)', height: 'clamp(40px, 12vw, 60px)', background: 'var(--color-bg-card)', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-text-main)', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)' }}>Tally</div>
            <div className="orbit-node" style={{ position: 'absolute', bottom: '25%', right: '35%', width: 'clamp(50px, 15vw, 70px)', height: 'clamp(50px, 15vw, 70px)', background: 'var(--color-bg-card)', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-text-main)', fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>Zoho</div>
            <div className="orbit-node" style={{ position: 'absolute', top: '35%', right: '20%', width: 'clamp(35px, 10vw, 50px)', height: 'clamp(35px, 10vw, 50px)', background: 'var(--color-bg-card)', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-text-main)', fontSize: 'clamp(0.6rem, 1.8vw, 0.8rem)' }}>MCA</div>
            <div className="orbit-node" style={{ position: 'absolute', bottom: '20%', left: '25%', width: 'clamp(45px, 13vw, 64px)', height: 'clamp(45px, 13vw, 64px)', background: 'var(--color-bg-card)', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-text-main)', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)' }}>GSTN</div>
          </div>

          {/* Bottom Content Area */}
          <div className="responsive-card" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(214, 193, 156, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(214, 193, 156, 0.2)' }}>
                <Zap color="var(--color-accent-gold)" />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Real-Time Sync</h4>
              <p>Your data flows instantly between your accounting software (Xero, QuickBooks, Tally) and our compliance engine.</p>
            </div>
            
            <div className="separator-vertical"></div>
            
            <div style={{ flex: 1, minWidth: '250px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(214, 193, 156, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(214, 193, 156, 0.2)' }}>
                <Lock color="var(--color-accent-gold)" />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Strict Data Confidentiality</h4>
              <p>We use enterprise-grade encryption to ensure your financial statements, payroll, and tax data remain strictly confidential.</p>
            </div>
          </div>
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            .orbit-node:nth-of-type(odd) { transform: scale(0.8) translate(-10%, -10%); }
            .orbit-node:nth-of-type(even) { transform: scale(0.8) translate(10%, 10%); }
            svg circle:nth-of-type(2) { display: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
