'use client';

import React, { useState } from 'react';
import { MessageCircle, Check, X } from 'lucide-react';
import { getAdminWhatsAppAlertUrl } from '@/lib/notifications';

const initialBookings = [
  {
    id: '1',
    code: 'EA-4821',
    name: 'سارة محمد',
    phone: '01012345678',
    service: 'تنظيف البشرة العميق',
    date: '2025-11-22',
    time: '10:00 ص',
    price: 600,
    status: 'مؤكد',
  },
  {
    id: '2',
    code: 'EA-9104',
    name: 'منار عبد الله',
    phone: '01098765432',
    service: 'جلسات الترطيب والتغذية',
    date: '2025-11-22',
    time: '12:00 م',
    price: 700,
    status: 'مؤكد',
  },
  {
    id: '3',
    code: 'EA-3319',
    name: 'هبة أحمد',
    phone: '01122334455',
    service: 'تنظيف البشرة العميق',
    date: '2025-11-22',
    time: '02:00 م',
    price: 600,
    status: 'قيد التأكيد',
  },
];

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState(initialBookings);

  const updateStatus = (id: string, newStatus: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">سجل الحجوزات والمواعيد</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead className="bg-[#FAF7F2] text-gray-600 text-xs border-y border-[#EFE7DA]">
            <tr>
              <th className="py-3.5 px-4">كود الحجز</th>
              <th className="py-3.5 px-4">العميلة</th>
              <th className="py-3.5 px-4">الخدمة</th>
              <th className="py-3.5 px-4">التاريخ والوقت</th>
              <th className="py-3.5 px-4">السعر</th>
              <th className="py-3.5 px-4">الحالة</th>
              <th className="py-3.5 px-4">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50/50">
                <td className="py-4 px-4 font-bold text-xs">{b.code}</td>
                <td className="py-4 px-4">
                  <p className="font-bold">{b.name}</p>
                  <p className="text-xs text-gray-500" dir="ltr">{b.phone}</p>
                </td>
                <td className="py-4 px-4">{b.service}</td>
                <td className="py-4 px-4 text-xs">
                  {b.date} — <span className="font-bold">{b.time}</span>
                </td>
                <td className="py-4 px-4 font-bold text-[#B68D52]">{b.price} ج.م</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      b.status === 'مؤكد'
                        ? 'bg-emerald-100 text-emerald-700'
                        : b.status === 'ملغي'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="py-4 px-4 flex items-center gap-2">
                  <button
                    onClick={() => updateStatus(b.id, 'مؤكد')}
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                    title="تأكيد الحجز"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => updateStatus(b.id, 'ملغي')}
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                    title="إلغاء الحجز"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <a
                    href={getAdminWhatsAppAlertUrl(b.phone, b.name, b.date, b.time)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                    title="إرسال رسالة واتساب للعميلة"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
