import React from 'react';
import { motion } from 'framer-motion';

// --- Faux 3D Mini Icons ---

const CFOGraph3D = () => (
  <div style={{ width: '50px', height: '50px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '5px', transform: 'rotateX(20deg) rotateY(-20deg)', transformStyle: 'preserve-3d' }}>
    <motion.div animate={{ height: ['20px', '40px', '20px'] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '12px', background: 'rgba(214, 193, 156, 0.5)', borderTop: '1px solid #D6C19C' }} />
    <motion.div animate={{ height: ['40px', '20px', '40px'] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} style={{ width: '12px', background: 'rgba(214, 193, 156, 0.8)', borderTop: '1px solid #D6C19C' }} />
    <motion.div animate={{ height: ['30px', '50px', '30px'] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} style={{ width: '12px', background: '#D6C19C', borderTop: '1px solid #fff' }} />
  </div>
);

const TransferGlobe3D = () => (
  <div style={{ width: '50px', height: '50px', position: 'relative', transformStyle: 'preserve-3d', perspective: '200px' }}>
    <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(214, 193, 156, 0.2)', position: 'absolute', boxShadow: 'inset 0 0 20px rgba(214, 193, 156, 0.5)' }}></div>
    <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} style={{ width: '100%', height: '100%', position: 'absolute', border: '2px solid rgba(214, 193, 156, 0.8)', borderRadius: '50%', transform: 'rotateX(70deg)' }}></motion.div>
    <motion.div animate={{ rotateX: [0, 360] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} style={{ width: '100%', height: '100%', position: 'absolute', border: '2px solid rgba(214, 193, 156, 0.8)', borderRadius: '50%', transform: 'rotateY(70deg)' }}></motion.div>
  </div>
);

const PayrollStack3D = () => (
  <div style={{ width: '50px', height: '50px', position: 'relative', transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}>
    {[0, 1, 2].map(i => (
      <motion.div key={i} animate={{ z: [i*10, i*10 + 5, i*10] }} transition={{ duration: 2, repeat: Infinity, delay: i*0.2 }} style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderRadius: '50%', background: i === 2 ? '#D6C19C' : 'rgba(214, 193, 156, 0.4)', border: '2px solid rgba(255,255,255,0.5)' }} />
    ))}
  </div>
);

const AuditGlass3D = () => (
  <div style={{ width: '50px', height: '50px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
    <motion.div animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '30px', height: '30px', borderRadius: '50%', border: '4px solid #D6C19C', position: 'relative', backdropFilter: 'blur(4px)', background: 'rgba(255,255,255,0.1)' }}>
      <div style={{ width: '15px', height: '4px', background: '#D6C19C', position: 'absolute', bottom: '-10px', right: '-10px', transform: 'rotate(45deg)' }}></div>
    </motion.div>
  </div>
);

const AdvisoryMerge3D = () => (
  <div style={{ width: '50px', height: '50px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
    <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '30px', height: '30px', border: '4px solid rgba(214, 193, 156, 0.5)', position: 'absolute', left: '5px' }} />
    <motion.div animate={{ x: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '30px', height: '30px', background: 'rgba(214, 193, 156, 0.8)', border: '1px solid #fff', position: 'absolute', right: '5px', backdropFilter: 'blur(2px)' }} />
  </div>
);

const SecretarialDoc3D = () => (
  <div style={{ width: '40px', height: '50px', position: 'relative', transform: 'rotateX(20deg) rotateY(-20deg)', transformStyle: 'preserve-3d' }}>
    <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(214, 193, 156, 0.5)', position: 'absolute' }}></div>
    <div style={{ width: '80%', height: '2px', background: '#D6C19C', position: 'absolute', top: '10px', left: '10%' }}></div>
    <div style={{ width: '60%', height: '2px', background: '#D6C19C', position: 'absolute', top: '20px', left: '10%' }}></div>
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#D6C19C', position: 'absolute', bottom: '10px', right: '-5px', border: '2px solid var(--color-bg-card)' }}></motion.div>
  </div>
);

const LitigationScale3D = () => (
  <div style={{ width: '50px', height: '50px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', transformStyle: 'preserve-3d' }}>
    <motion.div animate={{ rotateZ: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '40px', height: '20px', borderTop: '3px solid #D6C19C', position: 'absolute', top: '15px', display: 'flex', justifyContent: 'space-between' }}>
       <div style={{ width: '12px', height: '12px', borderBottom: '2px solid #D6C19C', borderRadius: '50%', transform: 'translateY(10px)' }}></div>
       <div style={{ width: '12px', height: '12px', borderBottom: '2px solid #D6C19C', borderRadius: '50%', transform: 'translateY(10px)' }}></div>
    </motion.div>
    <div style={{ width: '4px', height: '40px', background: '#D6C19C' }}></div>
    <div style={{ width: '20px', height: '4px', background: '#D6C19C' }}></div>
  </div>
);

const services = [
  { icon: <CFOGraph3D />, title: "Virtual CFO Services", desc: "Strategic financial leadership, cash flow forecasting, and KPI tracking for startups scaling to Series A and beyond." },
  { icon: <TransferGlobe3D />, title: "Transfer Pricing", desc: "Cross-border tax optimization and robust documentation to comply with international regulations." },
  { icon: <PayrollStack3D />, title: "Payroll & HR Compliance", desc: "End-to-end payroll processing, PF/ESI management, and labor law compliance." },
  { icon: <AuditGlass3D />, title: "Forensic Audit", desc: "Deep-dive investigative auditing to detect anomalies, prevent fraud, and ensure absolute financial integrity." },
  { icon: <AdvisoryMerge3D />, title: "M&A Advisory", desc: "Due diligence, valuation modeling, and tax structuring for mergers, acquisitions, and restructuring." },
  { icon: <SecretarialDoc3D />, title: "Secretarial Services", desc: "Board meeting minutes, RoC filings, and corporate governance compliance for Private Limited Companies." },
  { icon: <LitigationScale3D />, title: "Direct Tax Litigation", desc: "Representation before appellate authorities and tribunals for complex income tax assessments." }
];

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent' }}>
      
      {/* Massive Typographic Hero */}
      <div style={{ paddingTop: 'clamp(140px, 18vh, 220px)', paddingBottom: 'clamp(80px, 10vw, 120px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(3.5rem, 12vw, 7rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', maxWidth: '1000px', marginBottom: '2rem' }}
          >
            Capabilities & <br/>
            <span style={{ color: 'var(--color-accent-gold)' }}>Expertise.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', color: 'var(--color-text-muted)', maxWidth: '600px' }}
          >
            We move beyond standard compliance, deploying advanced financial architecture to secure your assets and accelerate growth.
          </motion.p>
        </div>
      </div>

      {/* Sticky Split Layout */}
      <div className="container sticky-sidebar-container" style={{ paddingTop: 'clamp(5rem, 12vw, 8rem)', paddingBottom: 'clamp(5rem, 12vw, 8rem)' }}>
        
        {/* Left Sticky Sidebar */}
        <div className="sticky-sidebar" style={{ flex: '1', minWidth: 'min(100%, 300px)' }}>
          <div style={{ color: 'var(--color-accent-gold)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>CORE OFFERINGS</div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 8vw, 3rem)', lineHeight: 1.1, marginBottom: '2rem' }}>Comprehensive financial engineering.</h2>
          <p style={{ color: 'var(--color-text-body)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Scroll through our specialized practice areas. Each service is helmed by a dedicated partner with decades of domain-specific experience.
          </p>
        </div>

        {/* Right Scrolling Cards */}
        <div style={{ flex: '2', minWidth: 'min(100%, 350px)', display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 8vw, 4rem)' }}>
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="responsive-card"
              style={{ 
                background: 'var(--color-bg-card)',
                borderRadius: '32px', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                padding: 'clamp(2.5rem, 8vw, 4.5rem) clamp(1.5rem, 6vw, 3.5rem)'
              }}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(214, 193, 156, 0.1)', color: 'var(--color-accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {React.cloneElement(svc.icon, { size: 36, strokeWidth: 1.5 })}
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>{svc.title}</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.6, maxWidth: '500px' }}>{svc.desc}</p>
              </div>
              
              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(214, 193, 156, 0.5) 0%, transparent 100%)', marginTop: '1rem' }}></div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
