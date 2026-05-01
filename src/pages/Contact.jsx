import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, message } = formData;
    const text = `Hello Prime Ledger, I am ${name}. My phone: ${phone}. Service: ${service}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918123937745?text=${encodedText}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingTop: 'clamp(120px, 15vh, 180px)', paddingBottom: '8rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Get In Touch</div>
          <h1>Connect with our Experts</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-body)' }}>
            Have a question or ready to optimize your finances? Send us a message or reach out via WhatsApp.
          </p>
        </div>

        <div className="responsive-grid-2" style={{ gap: '5rem' }}>
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(0, 210, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-glow)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
                  <p style={{ color: 'var(--color-text-body)' }}>+91 8123937745</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Alt: +91 7411373153</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Email Us</h4>
                  <p style={{ color: 'var(--color-text-body)' }}>primeledgerinfo@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Visit Us</h4>
                  <p style={{ color: 'var(--color-text-body)' }}>Mangalore, Bangalore</p>
                </div>
              </div>
            </div>

            <div className="glass" style={{ marginTop: '4rem', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
              <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle color="#25D366" />
                Direct WhatsApp
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Prefer instant messaging? Chat with our managing partner directly on WhatsApp for immediate assistance.
              </p>
              <button 
                className="btn-secondary" 
                style={{ width: '100%', borderColor: '#25D366', color: '#25D366' }}
                onClick={() => window.open('https://wa.me/918123937745', '_blank')}
              >
                Start Chat
              </button>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ padding: '3rem', borderRadius: '32px' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Ibrahim Basil" 
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="+91 81239 37745" 
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Service Required</label>
                <select 
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', appearance: 'none' }}
                >
                  <option value="" disabled style={{ color: 'black' }}>Select a service...</option>
                  <option value="Accounting" style={{ color: 'black' }}>Accounting</option>
                  <option value="Taxation" style={{ color: 'black' }}>Taxation</option>
                  <option value="Compliance" style={{ color: 'black' }}>Compliance</option>
                  <option value="GST" style={{ color: 'black' }}>GST</option>
                  <option value="Consulting" style={{ color: 'black' }}>Consulting</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="How can we help you?" 
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none' }} 
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', gap: '15px' }}>
                Send to WhatsApp
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
