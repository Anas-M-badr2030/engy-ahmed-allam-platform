import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingWizard from '@/components/booking/BookingWizard';

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BookingWizard />
      </main>
      <Footer />
    </>
  );
}
