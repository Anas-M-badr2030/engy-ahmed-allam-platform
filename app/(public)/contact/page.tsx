import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutGalleryPolicies from '@/components/home/AboutGalleryPolicies';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutGalleryPolicies />
      </main>
      <Footer />
    </>
  );
}
