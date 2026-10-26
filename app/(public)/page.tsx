'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import BookingWizard from '@/components/booking/BookingWizard';
import AboutGalleryPolicies from '@/components/home/AboutGalleryPolicies';
import { Service } from '@/types';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection onSelectService={(srv: Service) => setSelectedService(srv)} />
        <BookingWizard preSelectedService={selectedService} />
        <AboutGalleryPolicies />
      </main>
      <Footer />
    </>
  );
}
