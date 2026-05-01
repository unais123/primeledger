import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, FileText, ArrowRight } from 'lucide-react';

const cases = [
  {
    client: "TechScale Global",
    problem: "Inefficient tax structure leading to 35% effective tax rate and frequent compliance hurdles.",
    solution: "Re-engineered corporate tax strategy and implemented automated GST reconciliation.",
    result: "Reduced effective tax rate to 22% and saved ₹45 Lakhs in annual tax liability.",
    category: "Tax Strategy"
  },
  {
    client: "Finova Manufacturing",
    problem: "Pending GST audits and reconciliation errors spanning three financial years.",
    solution: "Conducted a comprehensive internal audit and cleared all backlogs with the GST department.",
    result: "100% compliance achieved; zero penalties on ₹20Cr turnover.",
    category: "Compliance"
  },
  {
    client: "NextGen Logistics",
    problem: "Complex payroll and ledger management across multiple state branches.",
    solution: "Migrated to a cloud-based unified accounting system with automated payroll compliance.",
    result: "Reduced accounting overhead by 40% and improved reporting speed by 3x.",
    category: "Accounting"
  }
];

export default function CaseStudies() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingTop: 'clamp(120px, 15vh, 180px)', paddingBottom: '8rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Success Stories</div>
          <h1 style={{ marginBottom: '2rem' }}>Engineered Results.</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-body)' }}>
            Explore how we've helped enterprises optimize their financial architecture and navigate complex regulatory landscapes.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '3rem',
                padding: '4rem',
                borderRadius: '32px',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '1.5rem', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-accent-gold)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '0 0 0 20px' }}>
                {item.category}
              </div>

              <div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-accent-gold)' }}>{item.client}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-muted)' }}>
                  <TrendingUp size={20} />
                  <span>Success Narrative</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText size={18} color="var(--color-accent-gold)" />
                    The Challenge
                  </h4>
                  <p style={{ color: 'var(--color-text-body)', lineHeight: 1.6 }}>{item.problem}</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle size={18} color="var(--color-accent-glow)" />
                    The Outcome
                  </h4>
                  <p style={{ color: 'var(--color-text-body)', lineHeight: 1.6 }}>{item.result}</p>
                </div>
                <div style={{ gridColumn: 'span 2', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'white' }}>Our Solution</h4>
                  <p style={{ fontSize: '1.1rem' }}>{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          style={{ marginTop: '6rem', textAlign: 'center' }}
        >
          <button className="btn-primary" style={{ padding: '1rem 3rem' }}>
            View More Case Studies
            <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
            padding: 2.5rem !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
