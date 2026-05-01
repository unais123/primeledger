import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

export default function BookConsultation() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', paddingTop: 'clamp(100px, 15vh, 150px)', paddingBottom: 'clamp(50px, 8vw, 100px)', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ width: '100%', maxWidth: '1200px' }}>
        
        <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Panel: Trust & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ paddingRight: 'clamp(0rem, 5vw, 2rem)' }}
          >
            <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Advisory Session</div>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Let's Talk Strategy.</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-body)', marginBottom: '3rem', lineHeight: 1.6 }}>
              Schedule a highly confidential, 30-minute strategic session with a senior partner to assess your current financial architecture and identify immediate optimization vectors.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Clock color="var(--color-accent-gold)" size={24} />, text: "30-Minute deep dive into your financial operations." },
                { icon: <ShieldCheck color="var(--color-accent-gold)" size={24} />, text: "Absolute confidentiality and secure data handling." },
                { icon: <TrendingUp color="var(--color-accent-gold)" size={24} />, text: "Actionable tax optimization and compliance roadmap." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(214, 193, 156, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Stack */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Consultation led by Senior Partners</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex' }}>
                  {['A', 'P', 'V'].map((initial, i) => (
                    <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-bg-secondary)', border: '2px solid var(--color-bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: i === 0 ? 0 : '-15px', color: 'var(--color-accent-gold)', fontWeight: 700, fontSize: '0.9rem' }}>
                      {initial}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Join <strong style={{ color: 'var(--color-text-main)' }}>200+</strong> enterprise clients.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ 
              background: 'var(--color-bg-card)', 
              backdropFilter: 'blur(20px)', 
              borderRadius: '32px', 
              padding: 'clamp(1.5rem, 5vw, 3rem)', 
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(214, 193, 156, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }} onSubmit={(e) => e.preventDefault()}>
                
                <div className="form-row">
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Company Name</label>
                  <input type="text" placeholder="Acme Corp" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Work Email</label>
                  <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Company Size</label>
                  <select style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                    <option value="" disabled selected>Select company size...</option>
                    <option style={{ color: 'black' }} value="1-10">1-10 Employees</option>
                    <option style={{ color: 'black' }} value="11-50">11-50 Employees</option>
                    <option style={{ color: 'black' }} value="51-200">51-200 Employees</option>
                    <option style={{ color: 'black' }} value="201+">201+ Employees</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>How can we help?</label>
                  <textarea rows="4" placeholder="Briefly describe your current financial challenges..." style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}></textarea>
                </div>

                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem' }}>
                  Request Consultation
                </button>
                
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
