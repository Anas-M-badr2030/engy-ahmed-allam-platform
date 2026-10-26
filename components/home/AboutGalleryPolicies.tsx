'use client';

import React, { useState } from 'react';
import {
  Lock,
  Sparkles,
  UserCheck,
  Award,
  Clock,
  CalendarX2,
  CreditCard,
  FileWarning,
  MapPin,
  MessageCircle,
} from 'lucide-react';

const galleryData = [
  {
    id: 1,
    category: 'علاج المشاكل',
    before: 'https://images.unsplash.com/photo-1512290900672-1f80180200b9?q=80&w=400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'تنظيف البشرة',
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'النضارة',
    before: 'https://images.unsplash.com/photo-1512290900672-1f80180200b9?q=80&w=400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'الترطيب',
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop',
  },
];

const categories = ['كل الأعمال', 'تنظيف البشرة', 'الترطيب', 'علاج المشاكل', 'النضارة'];

export default function AboutGalleryPolicies() {
  const [activeTab, setActiveTab] = useState('كل الأعمال');

  const filteredGallery =
    activeTab === 'كل الأعمال'
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* الصف الأول: من أنا + معرض الأعمال + سياسة المواعيد */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 1. قسم من أنا (About) */}
        <div
          id="about"
          className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-[#E8DFD1]"
        >
          <span className="text-xs font-bold text-[#C8A97E]">من أنا</span>
          <h2
            className="text-2xl font-bold text-[#181512] mt-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Engy Ahmed Allam
          </h2>
          <p className="text-xs text-[#B68D52] font-semibold mb-4">
            Beauty Specialist
          </p>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
            خبيرة عناية بالبشرة في طنطا، أؤمن أن كل بشرة تستحق اهتماماً خاصاً وروتيناً
            مناسباً. أقدم جلسات مخصصة بناءً على تحليل احترافي لاحتياجات بشرتك باستخدام
            تقنيات متقدمة ومنتجات آمنة وعالية الجودة.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#C8A97E] flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold">خصوصية وراحة</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#C8A97E] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold">جلسات مخصصة</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#C8A97E] flex items-center justify-center">
                <UserCheck className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold">متابعة مستمرة</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#C8A97E] flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold">خبرة عملية</span>
            </div>
          </div>
        </div>

        {/* 2. قسم معرض الأعمال (Before / After Gallery) */}
        <div
          id="gallery"
          className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-[#E8DFD1]"
        >
          <div className="text-center mb-5">
            <span className="text-xs font-bold text-[#C8A97E]">معرض الأعمال</span>
            <h2 className="text-xl font-bold text-[#181512] mt-1">
              نتائج حقيقية لعملائنا
            </h2>
          </div>

          {/* أزرار الفلترة */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
                  activeTab === cat
                    ? 'bg-[#2A2520] text-white'
                    : 'bg-[#F5EFE6] text-gray-700 hover:bg-[#E8DFD1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* شبكة صور قبل وبعد */}
          <div className="grid grid-cols-2 gap-3">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden border border-gray-200"
              >
                <div className="relative h-24">
                  <img
                    src={item.before}
                    alt="قبل"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] px-1.5 py-0.5 rounded">
                    قبل
                  </span>
                </div>
                <div className="relative h-24">
                  <img
                    src={item.after}
                    alt="بعد"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#C8A97E] text-[#181512] font-bold text-[9px] px-1.5 py-0.5 rounded">
                    بعد
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. قسم سياسة المواعيد (Policies) */}
        <div
          id="policies"
          className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-[#E8DFD1] space-y-3.5"
        >
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-[#C8A97E]">سياسة المواعيد</span>
            <h2 className="text-xl font-bold text-[#181512] mt-1">
              لضمان أفضل تجربة للجميع
            </h2>
          </div>

          {[
            {
              icon: Clock,
              title: 'الالتزام بالموعد',
              desc: 'يرجى الوصول في الوقت المحدد، وفي حال التأخير أكثر من 15 دقيقة قد يتم إلغاء الموعد أو تقليل مدة الجلسة.',
            },
            {
              icon: CalendarX2,
              title: 'إلغاء أو إعادة الجدولة',
              desc: 'يمكن إلغاء أو تعديل الموعد قبل 24 ساعة على الأقل من خلال الموقع أو التواصل.',
            },
            {
              icon: CreditCard,
              title: 'العربون وتأكيد الحجز',
              desc: 'قد يُطلب دفع عربون لتأكيد بعض المواعيد، ويتم توضيح ذلك أثناء الحجز.',
            },
            {
              icon: FileWarning,
              title: 'ملاحظات مهمة',
              desc: 'يرجى إبلاغنا بأي حالة صحية خاصة أو استخدام منتجات معينة قبل الجلسة.',
            },
          ].map((policy, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EFE7DA]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C8A97E]/20 text-[#9B7846] flex items-center justify-center shrink-0 mt-0.5">
                <policy.icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#181512]">{policy.title}</h4>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  {policy.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الصف الثاني: موقعنا في طنطا (Location) */}
      <div
        id="location"
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8DFD1] max-w-3xl mx-auto"
      >
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-[#C8A97E]">موقعنا</span>
          <h2 className="text-2xl font-bold text-[#181512] mt-1">نستقبلكم في طنطا</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 text-center sm:text-right">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE7DA]">
              <h4 className="font-bold text-sm text-[#181512] flex items-center justify-center sm:justify-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#C8A97E]" />
                العنوان
              </h4>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                شارع عثمان محمد، من ميدان الساعة، عمارة نيل، شقة برج الفيروز، طنطا، الغربية
              </p>
              <a
                href="https://maps.google.com/?q=Tanta"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block w-full text-center bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold py-2.5 rounded-xl text-xs"
              >
                فتح الموقع على خرائط جوجل
              </a>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE7DA]">
              <h4 className="font-bold text-sm text-[#181512]">مواعيد العمل</h4>
              <p className="text-xs text-gray-600 mt-1">
                السبت - الخميس: 10:00 ص - 8:00 م
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
              alt="غرفة الجلسات"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <a
              href="https://wa.me/201069488778"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#2A2520] hover:bg-[#181512] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>تواصل معنا عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
