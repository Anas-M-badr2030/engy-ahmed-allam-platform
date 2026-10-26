'use client';

import React, { useState } from 'react';
import { WORKING_HOURS } from '@/lib/availability';

export default function AdminCalendarPage() {
  const [selectedDate, setSelectedDate] = useState('2025-11-22');
  const [blockedSlots, setBlockedSlots] = useState<string[]>(['11:00 ص', '01:00 م']);

  const toggleSlot = (time: string) => {
    setBlockedSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1] max-w-3xl">
      <h1 className="text-xl font-bold mb-2">إدارة الجدول الزمني والمواعيد المتاحة</h1>
      <p className="text-xs text-gray-500 mb-6">
        اضغطي على أي ساعة لتحويلها بين (متاح للحجز) أو (فترة مغلقة/محجوزة).
      </p>

      <div className="mb-6">
        <label className="block text-xs font-bold mb-2">اختاري التاريخ:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-gray-300 text-sm"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {WORKING_HOURS.map((time) => {
          const isBlocked = blockedSlots.includes(time);
          return (
            <button
              key={time}
              onClick={() => toggleSlot(time)}
              className={`p-4 rounded-xl border text-center transition-all ${
                isBlocked
                  ? 'bg-red-50 border-red-200 text-red-700'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}
            >
              <p className="font-bold text-sm">{time}</p>
              <span className="text-[11px] font-semibold mt-1 block">
                {isBlocked ? 'مغلق / محجوز' : 'متاح للحجز'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
