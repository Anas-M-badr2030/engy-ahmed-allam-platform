import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle2, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { defaultServices } from '@/components/services/ServicesSection';

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const service =
    defaultServices.find((s) => s.slug === params.slug) || defaultServices[0];

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8DFD1] grid grid-cols-1 md:grid-cols-2">
          <div className="h-72 md:h-auto">
            <img
              src={service.image_url}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-[#C8A97E] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#EFE7DA]">
                {service.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#181512] mt-3">
                {service.title}
              </h1>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {service.short_description} — جلسة متكاملة تتم باستخدام أحدث الأجهزة
                ومنتجات العناية الطبية الآمنة تماماً على البشرة مع تحليل شامل لنوع
                البشرة قبل البدء.
              </p>

              <ul className="mt-6 space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>فحص وتحليل نوع البشرة مجاناً قبل الجلسة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>أدوات معقمة بالكامل وبيئة خاصة للسيدات فقط</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>روتين عناية منزلي مخصص بعد الجلسة</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#B68D52]">{service.price} جنيه</p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <Clock className="w-3.5 h-3.5" /> مدة الجلسة: {service.duration_minutes} دقيقة
                </p>
              </div>

              <Link
                href={`/booking?service=${service.slug}`}
                className="bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>احجزي هذه الجلسة</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
