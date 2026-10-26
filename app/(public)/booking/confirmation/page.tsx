import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BookingConfirmationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-[#E8DFD1] max-w-md w-full space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
          <h1 className="text-2xl font-bold text-[#181512]">تم تأكيد طلب حجزك!</h1>
          <p className="text-sm text-gray-600">
            شكراً لثقتك في Engy Ahmed Allam. سنتواصل معكِ قريباً عبر الواتساب لتأكيد الموعد.
          </p>
          <Link
            href="/"
            className="block w-full bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold py-3 rounded-xl text-sm"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
