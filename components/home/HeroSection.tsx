import React from 'react';
import Link from 'next/link';
import { Calendar, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#181512] text-white overflow-hidden">
      {/* خلفية بصورة مع تدرج لوني داكن */}
      <div className="absolute inset-0 opacity-45 bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#181512] via-[#181512]/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start justify-center">
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            خبرة في العناية ببشرتك <br />
            <span className="text-[#C8A97E]">لإطلالة أكثر ثقة</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            جلسات متخصصة للعناية بالبشرة بمستوى احترافي في بيئة مريحة وخاصة بطنطا.
          </p>

          <div className="pt-2">
            <Link
              href="#booking"
              className="inline-flex items-center gap-2.5 bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>احجز موعدك الآن</span>
            </Link>
          </div>

          {/* الأيقونات الثلاث السفلية */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-md">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-11 h-11 rounded-full border border-[#C8A97E]/60 bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-200 font-medium">بيئة نظيفة وخاصة</span>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-11 h-11 rounded-full border border-[#C8A97E]/60 bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-200 font-medium">منتجات آمنة وعالية الجودة</span>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-11 h-11 rounded-full border border-[#C8A97E]/60 bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-200 font-medium">جلسات مخصصة حسب نوع البشرة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
