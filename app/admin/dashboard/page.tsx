'use client';

import React from 'react';
import {
  Home,
  Calendar,
  Users,
  Sparkles,
  Clock,
  BarChart3,
  Settings,
  CheckCircle,
  AlertCircle,
  CalendarDays,
} from 'lucide-react';

const todaySchedule = [
  {
    time: '10:00 ص',
    customer: 'سارة محمد',
    service: 'تنظيف البشرة العميق',
    status: 'مؤكد',
    statusColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    time: '11:00 ص',
    customer: '—',
    service: '',
    status: 'محجوز',
    statusColor: 'bg-red-100 text-red-600',
  },
  {
    time: '12:00 م',
    customer: 'منار عبد الله',
    service: 'جلسة الترطيب',
    status: 'مؤكد',
    statusColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    time: '01:00 م',
    customer: '—',
    service: '',
    status: 'محجوز',
    statusColor: 'bg-red-100 text-red-600',
  },
  {
    time: '02:00 م',
    customer: 'هبة أحمد',
    service: 'تنظيف البشرة العميق',
    status: 'قيد التأكيد',
    statusColor: 'bg-amber-100 text-amber-700',
  },
  {
    time: '03:00 م',
    customer: 'متاح',
    service: '',
    status: 'متاح',
    statusColor: 'bg-emerald-50 text-emerald-600',
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] flex text-[#181512]" dir="rtl">
      {/* القائمة الجانبية الداكنة */}
      <aside className="w-60 bg-[#181512] text-white flex flex-col justify-between p-5 shrink-0">
        <div>
          <div className="text-center pb-6 border-b border-white/10">
            <span
              className="text-3xl font-bold text-[#C8A97E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              EA
            </span>
            <p className="text-xs text-gray-400 mt-1">لوحة إدارة العيادة</p>
          </div>

          <nav className="mt-6 space-y-1.5 text-sm">
            {[
              { name: 'الرئيسية', icon: Home, active: true },
              { name: 'المواعيد', icon: Calendar, active: false },
              { name: 'العملاء', icon: Users, active: false },
              { name: 'الخدمات', icon: Sparkles, active: false },
              { name: 'الجدول الزمني', icon: Clock, active: false },
              { name: 'التقارير', icon: BarChart3, active: false },
              { name: 'الإعدادات', icon: Settings, active: false },
            ].map((item) => (
              <a
                key={item.name}
                href="#admin"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  item.active
                    ? 'bg-[#C8A97E] text-[#181512] font-bold'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="text-xs text-gray-400 border-t border-white/10 pt-4 text-center">
          Engy Ahmed Allam © 2025
        </div>
      </aside>

      {/* المحتوى الرئيسي للوحة التحكم */}
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
        {/* الهيدر العلوي */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-[#E8DFD1]">
          <h1 className="text-xl font-bold">لوحة التحكم</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">مرحباً، إنجي</span>
            <div className="w-10 h-10 rounded-full bg-[#C8A97E] text-[#181512] font-bold flex items-center justify-center">
              EA
            </div>
          </div>
        </div>

        {/* الكروت الإحصائية الأربعة العلوية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#E8DFD1] flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">4</p>
              <p className="text-xs text-gray-500 mt-1">مواعيد اليوم</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C8A97E] flex items-center justify-center">
              <CalendarDays className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#E8DFD1] flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-gray-500 mt-1">مواعيد مؤكدة</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#E8DFD1] flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">1</p>
              <p className="text-xs text-gray-500 mt-1">مواعيد قيد التأكيد</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#E8DFD1] flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">2</p>
              <p className="text-xs text-gray-500 mt-1">فترات متاحة</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* القسم السفلي: جدول مواعيد اليوم + إحصائيات الشهر وآخر الحجوزات */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* جدول مواعيد اليوم */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-sm border border-[#E8DFD1]">
            <h2 className="font-bold text-base mb-4">السبت 22 نوفمبر 2025</h2>
            <div className="divide-y divide-gray-100">
              {todaySchedule.map((slot, index) => (
                <div
                  key={index}
                  className="py-3.5 flex items-center justify-between text-xs sm:text-sm"
                >
                  <span className="font-bold text-gray-700 w-20">{slot.time}</span>
                  <div className="flex-1 px-4">
                    <p className="font-bold text-[#181512]">{slot.customer}</p>
                    {slot.service && (
                      <p className="text-xs text-gray-500">{slot.service}</p>
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${slot.statusColor}`}
                  >
                    {slot.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* إحصائيات هذا الشهر وآخر الحجوزات */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8DFD1]">
              <h3 className="font-bold text-sm mb-4">إحصائيات هذا الشهر</h3>
              <div className="grid grid-cols-4 gap-2 text-center pt-2">
                <div className="bg-[#FAF7F2] p-3 rounded-xl">
                  <p className="text-lg font-bold">24</p>
                  <p className="text-[10px] text-gray-500">إجمالي الحجوزات</p>
                </div>
                <div className="bg-[#FAF7F2] p-3 rounded-xl">
                  <p className="text-lg font-bold text-emerald-700">19</p>
                  <p className="text-[10px] text-gray-500">مواعيد مؤكدة</p>
                </div>
                <div className="bg-[#FAF7F2] p-3 rounded-xl">
                  <p className="text-lg font-bold text-red-600">3</p>
                  <p className="text-[10px] text-gray-500">ملغاة</p>
                </div>
                <div className="bg-[#FAF7F2] p-3 rounded-xl">
                  <p className="text-lg font-bold text-gray-600">2</p>
                  <p className="text-[10px] text-gray-500">لم يحضر</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8DFD1]">
              <h3 className="font-bold text-sm mb-4">آخر الحجوزات</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2]">
                  <div>
                    <p className="font-bold">سارة محمد</p>
                    <p className="text-gray-500 text-[11px]">تنظيف البشرة العميق - 10:00 ص</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded font-bold">
                    مؤكد
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2]">
                  <div>
                    <p className="font-bold">منار عبد الله</p>
                    <p className="text-gray-500 text-[11px]">جلسة الترطيب - 12:00 م</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded font-bold">
                    مؤكد
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
