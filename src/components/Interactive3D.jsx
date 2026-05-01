import { motion } from 'framer-motion';

export default function Interactive3D() {
  return (
    <section className="section" style={{ padding: '6rem 0', background: 'transparent' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'var(--color-bg-secondary)',
            borderRadius: '40px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 'clamp(3rem, 10vw, 6rem) clamp(1rem, 5vw, 2rem) 0 clamp(1rem, 5vw, 2rem)',
            textAlign: 'center',
            width: '100%',
            position: 'relative'
          }}
        >
          {/* Ambient Glow */}
          <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(214, 193, 156, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

          <div className="badge badge-gold" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>The Dashboard</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '800px', marginBottom: '1.5rem', lineHeight: 1.1, position: 'relative', zIndex: 1 }}>
            Complete regulatory control. <br/> Zero compliance stress.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-body)', maxWidth: '600px', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
            Track your GST filings, audit timelines, and corporate tax strategies in one unified, beautiful interface.
          </p>

          {/* Giant Dashboard Mockup (Banki Style) - Animated */}
          <div style={{ 
            width: '100%', 
            maxWidth: '1200px', 
            background: 'var(--color-bg-card)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderBottom: 'none',
            borderRadius: '32px 32px 0 0', 
            minHeight: '450px',
            position: 'relative',
            padding: 'clamp(1rem, 4vw, 3rem)',
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 2rem)',
            overflowX: 'hidden',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.3)'
          }}>
            
            {/* Sidebar Mock - Animated entry */}
            <div className="desktop-only" style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  style={{ width: '100%', height: '44px', background: i === 1 ? 'rgba(255,255,255,0.05)' : 'transparent', borderRadius: '12px', border: i === 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', display: 'flex', alignItems: 'center', padding: '0 1rem' }}
                >
                  <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: i === 1 ? 'var(--color-accent-gold)' : 'rgba(255,255,255,0.1)' }}></div>
                </motion.div>
              ))}
            </div>
            
            {/* Main Content Mock */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Top Bar */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ width: '100%', maxWidth: '300px', height: '50px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 1rem' }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-accent-gold)' }}></div>
              </motion.div>

              <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2rem)', flexWrap: 'wrap' }}>
                
                {/* Graph Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  style={{ flex: '2 1 400px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '2rem', minHeight: '260px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                >
                   {/* Graphical Image Overlay */}
                   <div style={{ width: '100%', height: '140px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                     <motion.img 
                       src="/images/dashboard_graph_chart.png"
                       alt="Financial Dashboard Analytics"
                       initial={{ opacity: 0, scale: 1.1 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.8, delay: 0.6 }}
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                     />
                   </div>
                </motion.div>

                {/* Status Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -5 }}
                  style={{ flex: '1 1 200px', background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-dark))', borderRadius: '24px', minHeight: '260px', padding: '2.5rem', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                >
                   <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-bg-base)', marginBottom: 'auto', border: '2px solid rgba(255,255,255,0.2)' }}
                   ></motion.div>
                   
                   <div style={{ width: '100%', height: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px', marginBottom: '1rem' }}></div>
                   <div style={{ width: '60%', height: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}></div>
                </motion.div>

              </div>
            </div>
            
            <style>{`
              @media (max-width: 1024px) {
                .desktop-only { display: none !important; }
              }
              @media (max-width: 768px) {
                div[style*="minHeight: 450px"] { minHeight: 300px !important; }
                div[style*="padding: clamp(1rem, 4vw, 3rem)"] { padding: 1.5rem !important; }
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
