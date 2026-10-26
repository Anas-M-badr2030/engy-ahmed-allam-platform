import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#181512] text-white pt-14 pb-8 border-t border-[#C8A97E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الشعار بالمنتصف */}
        <div className="text-center mb-10">
          <div className="text-4xl font-bold text-[#C8A97E] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
            EA
          </div>
          <h3 className="text-xl font-semibold tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
            Engy Ahmed Allam
          </h3>
          <p className="text-[11px] tracking-[0.25em] text-[#C8A97E] uppercase mb-3">
            BEAUTY SPECIALIST
          </p>
          <p className="text-gray-400 text-sm">لأن جمالك يستحق عناية خاصة</p>

          {/* أيقونات التواصل */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <a href="https://wa.me/201069488778" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C8A97E] hover:text-[#181512] flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <a href="#instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C8A97E] hover:text-[#181512] flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#facebook" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C8A97E] hover:text-[#181512] flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* الأعمدة الثلاثة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10 text-sm">
          {/* روابط سريعة */}
          <div>
            <h4 className="text-[#C8A97E] font-bold mb-4 text-base">روابط سريعة</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li><Link href="/" className="hover:text-[#C8A97E]">الرئيسية</Link></li>
              <li><Link href="/#services" className="hover:text-[#C8A97E]">الخدمات</Link></li>
              <li><Link href="/#booking" className="hover:text-[#C8A97E]">الحجز</Link></li>
              <li><Link href="/#about" className="hover:text-[#C8A97E]">من أنا</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#C8A97E]">معرض الأعمال</Link></li>
              <li><Link href="/#location" className="hover:text-[#C8A97E]">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* خدماتي */}
          <div>
            <h4 className="text-[#C8A97E] font-bold mb-4 text-base">خدماتي</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li><Link href="/#booking" className="hover:text-[#C8A97E]">تنظيف البشرة العميق</Link></li>
              <li><Link href="/#booking" className="hover:text-[#C8A97E]">جلسات الترطيب والتغذية</Link></li>
              <li><Link href="/#booking" className="hover:text-[#C8A97E]">علاج مشاكل البشرة</Link></li>
              <li><Link href="/#booking" className="hover:text-[#C8A97E]">النضارة ومقاومة العمر</Link></li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 className="text-[#C8A97E] font-bold mb-4 text-base">معلومات التواصل</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                <span>طنطا - شارع عثمان محمد من ميدان الساعة - برج الفيروز</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#C8A97E] shrink-0" />
                <a href="tel:01069488778" dir="ltr" className="hover:text-[#C8A97E]">01069488778</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#C8A97E] shrink-0" />
                <span>السبت - الخميس: 10:00 ص - 8:00 م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Engy Ahmed Allam. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
