import React from 'react';

const customers = [
  { id: 1, name: 'سارة محمد', phone: '01012345678', skinType: 'مختلطة', visits: 4, notes: 'تحتاج ترطيب مستمر حول الفم' },
  { id: 2, name: 'منار عبد الله', phone: '01098765432', skinType: 'دهنية معرضة للحبوب', visits: 2, notes: 'حساسية من أحماض الفواكه القوية' },
  { id: 3, name: 'هبة أحمد', phone: '01122334455', skinType: 'جافة', visits: 1, notes: 'جلسة تنظيف عميق أولى' },
];

export default function AdminCustomersPage() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1]">
      <h1 className="text-xl font-bold mb-6">قاعدة بيانات العميلات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {customers.map((c) => (
          <div key={c.id} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EFE7DA] space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base">{c.name}</h3>
              <span className="text-xs bg-[#C8A97E]/20 text-[#8C6C3E] px-2.5 py-0.5 rounded-full font-bold">
                {c.visits} زيارات
              </span>
            </div>
            <p className="text-xs text-gray-600" dir="ltr">{c.phone}</p>
            <p className="text-xs"><strong>نوع البشرة:</strong> {c.skinType}</p>
            <p className="text-xs text-gray-600 bg-white p-2.5 rounded-xl border border-gray-100">
              {c.notes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
