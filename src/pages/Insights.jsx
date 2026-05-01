import React from 'react';
import { motion } from 'framer-motion';

const topStories = [
  { tag: "TAX COMPLIANCE", title: "Understanding the latest GST Council Recommendations", desc: "A deep dive into the recent changes in GST slabs and how they affect the manufacturing sector in Q3.", date: "Oct 12, 2026" },
  { tag: "CORPORATE LAW", title: "Navigating Foreign Direct Investment (FDI) Regulations", desc: "Key compliance requirements for tech startups raising capital from international venture funds.", date: "Oct 05, 2026" },
  { tag: "AUDIT", title: "The Future of Automated Statutory Audits", desc: "How AI and cloud infrastructure are eliminating human error and accelerating the corporate audit process.", date: "Sep 28, 2026" },
];

export default function Insights() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: 'var(--color-text-main)', paddingBottom: '100px' }}>
      
      {/* Editorial Header */}
      <div style={{ paddingTop: 'clamp(100px, 15vh, 150px)', paddingBottom: '3rem', borderBottom: '2px solid rgba(214, 193, 156, 0.2)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--color-accent-gold)', marginBottom: '1rem', textTransform: 'uppercase' }}>Prime Ledger Journal</h1>
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 400, fontFamily: 'serif', letterSpacing: '-0.02em' }}>Financial Insights & Tax Policy</h2>
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', display: 'flex', justifyContent: 'center', gap: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <span>Vol. IV</span>
          <span>Mumbai, India</span>
          <span>October 2026</span>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <div className="responsive-grid-2-1">
          
          {/* Main Feature Article (Left) */}
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <div style={{ width: '100%', height: '400px', background: 'var(--color-bg-card)', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(214, 193, 156, 0.15), transparent 70%)' }}></div>
              </div>
              <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'serif', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                The Impact of the New Union Budget on Enterprise Tax Liabilities
              </h3>
              <p className="insights-text-body" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-text-body)', lineHeight: 1.8, marginBottom: '2rem' }}>
                An exhaustive breakdown of the recent fiscal policy shifts, including changes to corporate surcharge rates, capital gains harmonization, and new compliance mandates for multi-national entities operating in India. As the regulatory framework tightens, CFOs must adapt their strategic provisioning to maintain absolute compliance while shielding free cash flow. This article examines the immediate downstream effects of Section 194R and outlines proactive restructuring maneuvers to protect enterprise margins in the coming fiscal year.
              </p>
              <button style={{ background: 'none', border: '1px solid var(--color-accent-gold)', color: 'var(--color-accent-gold)', padding: '0.8rem 2rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Read Full Report</button>
            </motion.div>
          </div>

          {/* Sidebar Articles (Right) */}
          <div className="insights-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingLeft: 'clamp(0rem, 5vw, 4rem)' }}>
            <h4 style={{ fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--color-accent-gold)', textTransform: 'uppercase', borderBottom: '1px solid rgba(214, 193, 156, 0.2)', paddingBottom: '1rem', marginBottom: '1rem' }}>Latest Updates</h4>
            
            {topStories.map((story, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{story.tag} • {story.date}</div>
                <h5 style={{ fontSize: '1.5rem', fontFamily: 'serif', lineHeight: 1.3, marginBottom: '0.5rem' }}>{story.title}</h5>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', lineHeight: 1.5 }}>{story.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <style>{`
          @media (min-width: 1025px) {
            .insights-text-body { column-count: 2; column-gap: 3rem; }
            .insights-sidebar { border-left: 1px solid rgba(255,255,255,0.05); }
          }
        `}</style>
      </div>
    </div>
  );
}
