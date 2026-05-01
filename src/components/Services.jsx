import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, FileText, Building2, BarChart, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Accounting",
    description: "Full-cycle bookkeeping and ledger management to keep your business financially transparent.",
    benefits: ["Real-time Reporting", "Cloud-based Ledgers", "Payroll Management"],
    icon: Calculator
  },
  {
    title: "Taxation",
    description: "Strategic tax planning and filing to minimize liability and ensure 100% compliance.",
    benefits: ["Corporate Tax", "Income Tax Filing", "Tax Strategy"],
    icon: FileText
  },
  {
    title: "Compliance",
    description: "Navigating complex legal frameworks so you never miss a deadline or a regulation.",
    benefits: ["Statutory Audits", "ROC Filing", "Legal Advisory"],
    icon: ShieldCheck
  },
  {
    title: "Company Registration",
    description: "Fast-track incorporation for Private Limited, LLPs, and OPCs with all documentation handled.",
    benefits: ["Quick Incorporation", "PAN/TAN Setup", "Digital Signatures"],
    icon: Building2
  },
  {
    title: "GST Services",
    description: "End-to-end GST management including registration, reconciliation, and monthly filings.",
    benefits: ["GST Returns", "Reconciliation", "Audit Support"],
    icon: BarChart
  },
  {
    title: "Consulting",
    description: "Data-driven business advisory to help you optimize operations and scale your enterprise.",
    benefits: ["Business Strategy", "Financial Modeling", "Risk Management"],
    icon: Users
  }
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Our Expertise</div>
          <h2 style={{ margin: '0 auto', fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '900px' }}>
            Precision-Driven CA Services <br/>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.6em' }}>Customized for Your Growth</span>
          </h2>
        </div>
        
        <div className="responsive-grid-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.1} 
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '5rem', textAlign: 'center' }}
        >
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Need a customized financial package?</p>
          <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
            Build Your Custom Plan
          </button>
        </motion.div>
      </div>
    </section>
  );
}
