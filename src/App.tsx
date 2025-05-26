import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import EvolveXvsOldSchool from './components/EvolveXvsOldSchool';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactDialog from './components/ContactDialog';

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Handler to open dialog from children
  const handleOpenDialog = () => setDialogOpen(true);

  return (
    <>
      <Navbar onGetStarted={handleOpenDialog} />
      <div className="pt-20">
        {/* Add padding to offset fixed navbar */}
        <Hero onGetStarted={handleOpenDialog} />
        <WhatWeDo />
        <Features />
        <Testimonials />
        <WhyUs />
        <EvolveXvsOldSchool />
        <Pricing />
        <FAQ />
        <CTA onBookCall={handleOpenDialog} />
        <Footer />
      </div>
      <ContactDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
