import React from 'react';

export default function AdminPoliciesPage() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1] max-w-2xl space-y-4">
      <h1 className="text-xl font-bold">تعديل سياسة المواعيد والعربون</h1>
      <div>
        <label className="block text-xs font-bold mb-1">مهلة التأخير المسموحة (بالدقائق)</label>
        <input type="number" defaultValue={15} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1">مهلة الإلغاء أو التعديل المجاني (بالساعات)</label>
        <input type="number" defaultValue={24} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
      </div>
      <button className="bg-[#C8A97E] text-[#181512] font-bold px-6 py-2.5 rounded-xl text-sm">
        حفظ التعديلات
      </button>
    </div>
  );
}
