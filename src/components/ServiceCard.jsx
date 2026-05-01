import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServiceCard({ title, description, benefits, icon: Icon, delay = 0 }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        height: '100%'
      }}
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          translateZ: rotate.x !== 0 ? 20 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass"
        style={{
          height: '100%',
          padding: '2.5rem',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          borderColor: rotate.x !== 0 ? 'rgba(0, 210, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
          boxShadow: rotate.x !== 0 ? '0 20px 40px rgba(0, 210, 255, 0.2)' : 'none'
        }}
      >
        <div style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '16px', 
          background: 'rgba(212, 175, 55, 0.1)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--color-accent-gold)',
          marginBottom: '0.5rem'
        }}>
          <Icon size={32} />
        </div>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{title}</h3>
        
        <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          {description}
        </p>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                <Check size={16} color="var(--color-accent-gold)" />
                {benefit}
              </div>
            ))}
          </div>

          <button 
            className="btn-secondary" 
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '0.75rem',
              fontSize: '1rem'
            }}
          >
            Get Help Now
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Decorative corner glow */}
        <div style={{ 
          position: 'absolute', 
          top: '-20%', 
          right: '-20%', 
          width: '150px', 
          height: '150px', 
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>
      </motion.div>
    </motion.div>
  );
}
