import React from 'react';

export default function AdminPackagesPage() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">الباقات والعروض الموسمية</h1>
        <button className="bg-[#C8A97E] text-[#181512] font-bold px-4 py-2 rounded-xl text-xs">
          + إنشاء باقة جديدة
        </button>
      </div>
      <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EFE7DA] max-w-md">
        <span className="text-[11px] bg-[#C8A97E] text-[#181512] font-bold px-2.5 py-0.5 rounded">
          باقة العروسة
        </span>
        <h3 className="font-bold text-base mt-2">باقة الإشراقة الكاملة (3 جلسات)</h3>
        <p className="text-xs text-gray-600 mt-1">
          تشمل جلسة تنظيف عميق + جلسة ترطيب ملكي + جلسة نضارة فورية قبل المناسبة.
        </p>
        <p className="text-lg font-bold text-[#B68D52] mt-3">1800 جنيه بدلاً من 2100 جنيه</p>
      </div>
    </div>
  );
}
