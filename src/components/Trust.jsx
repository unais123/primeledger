import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const testimonials = [
  { name: "Rahul Sharma", role: "CEO, TechNova Solutions", text: "Prime Ledger completely modernized our financial stack. The compliance automation alone saved us hundreds of hours. This is what modern CA looks like." },
  { name: "Priya Desai", role: "Founder, Aura Capital", text: "Moving from a traditional CA firm to Prime was the best decision. Real-time dashboards and proactive tax planning have optimized our cash flow immensely." },
  { name: "Amit Patel", role: "Director, Patel Logistics", text: "The integration with our ERP was flawless. Their team handles our multi-state GST complexities so we can focus entirely on scaling our operations." },
  { name: "Neha Gupta", role: "CFO, Vertex Startups", text: "Incredible attention to detail. During our Series B funding, their audit documentation was spotless and highly praised by the investors." },
];

const logos = ["Acme Corp", "GlobalFlow", "NexusTech", "Vertex", "Lumina"];

export default function Trust() {
  return (
    <section id="company" className="section" style={{ background: 'transparent', padding: '4rem 0 8rem 0' }}>
      <div className="container">
        
        {/* Trusted By Marquee Area */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
            Trusted by fast-growing companies
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap', opacity: 0.6 }}>
            {logos.map((logo, i) => (
              <h3 key={i} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, margin: 0, color: 'var(--color-text-main)' }}>{logo}</h3>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>
              <ShieldCheck size={16} /> 100% Satisfaction
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', maxWidth: '600px' }}>
              Don't just take our word for it.
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 2rem)', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 auto' }}>
              <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3rem)', fontWeight: 700, color: 'var(--color-accent-gold)', lineHeight: 1 }}>4.9/5</div>
              <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} color="var(--color-accent-gold)" fill="var(--color-accent-gold)" />)}
              </div>
            </div>
            <div className="separator-vertical" style={{ height: '60px' }}></div>
            <div style={{ flex: '1 1 auto' }}>
              <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3rem)', fontWeight: 700, color: 'var(--color-accent-gold)', lineHeight: 1 }}>500+</div>
              <div style={{ color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '8px' }}>Corporate Clients</div>
            </div>
          </div>
        </div>

        {/* Masonry-style Testimonial Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bento-card"
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--color-bg-card)' }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[1,2,3,4,5].map(j => <Star key={j} size={14} color="var(--color-accent-gold)" fill="var(--color-accent-gold)" />)}
              </div>
              <p style={{ color: 'var(--color-text-main)', fontSize: '1.15rem', lineHeight: 1.6, fontWeight: 500, marginBottom: '2.5rem' }}>
                "{test.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-bg-base)', fontWeight: 700, fontSize: '1.2rem' }}>
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>{test.name}</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{test.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
