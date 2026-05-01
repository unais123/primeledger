import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Timeline from '../components/Timeline';
import Trust from '../components/Trust';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Timeline />
      <Trust />
      <CTA />
    </>
  );
}
