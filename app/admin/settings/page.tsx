import React from 'react';

export default function AdminSettingsPage() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1] max-w-2xl space-y-4">
      <h1 className="text-xl font-bold">إعدادات المنصة وبيانات التواصل</h1>
      <div>
        <label className="block text-xs font-bold mb-1">اسم الأخصائية / العيادة</label>
        <input type="text" defaultValue="Engy Ahmed Allam - Beauty Specialist" className="w-full px-4 py-2.5 rounded-xl border text-sm" />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1">رقم الواتساب لاستقبال الحجوزات</label>
        <input type="text" defaultValue="01069488778" className="w-full px-4 py-2.5 rounded-xl border text-sm" />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1">العنوان بالتفصيل</label>
        <input type="text" defaultValue="طنطا - شارع عثمان محمد من ميدان الساعة - برج الفيروز" className="w-full px-4 py-2.5 rounded-xl border text-sm" />
      </div>
      <button className="bg-[#C8A97E] text-[#181512] font-bold px-6 py-2.5 rounded-xl text-sm">
        حفظ الإعدادات
      </button>
    </div>
  );
}
