import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/services/ServicesSection';

export default function AllServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-10">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
