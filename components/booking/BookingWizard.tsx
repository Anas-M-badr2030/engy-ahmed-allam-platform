'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Service, TimeSlot } from '@/types';
import { defaultServices } from '../services/ServicesSection';

const initialSlots: TimeSlot[] = [
  { time: '10:00 ص', label: 'متاح', available: true },
  { time: '11:00 ص', label: 'محجوز', available: false },
  { time: '12:00 م', label: 'متاح', available: true },
  { time: '01:00 م', label: 'محجوز', available: false },
  { time: '02:00 م', label: 'متاح', available: true },
  { time: '03:00 م', label: 'متاح', available: true },
];

export default function BookingWizard({
  preSelectedService,
}: {
  preSelectedService?: Service | null;
}) {
  const [step, setStep] = useState<number>(2); // يبدأ على خطوة التقويم كما في التصميم أو يمكن التنقل بين الـ 4 خطوات
  const [selectedService, setSelectedService] = useState<Service>(
    preSelectedService || defaultServices[0]
  );
  const [selectedDay, setSelectedDay] = useState<number>(22);
  const [selectedTime, setSelectedTime] = useState<string>('10:00 ص');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [healthNotes, setHealthNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCode, setBookingCode] = useState<string | null>(null);

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleConfirmBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: selectedService.id,
          service_title: selectedService.title,
          total_price: selectedService.price,
          booking_date: `2025-11-${String(selectedDay).padStart(2, '0')}`,
          booking_time: selectedTime,
          customer_name: customerName,
          customer_phone: customerPhone,
          health_notes: healthNotes,
        }),
      });

      const data = await response.json();
      setBookingCode(data.booking_code || `EA-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep(4);
    } catch {
      setBookingCode(`EA-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-14 bg-[#F5EFE6] border-y border-[#E6DEC8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* شريط الخطوات العلوي (1، 2، 3، 4) */}
        <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto mb-8 text-center">
          {[
            { num: 1, title: 'اختيار الخدمة' },
            { num: 2, title: 'اختيار الموعد' },
            { num: 3, title: 'بيانات العميل' },
            { num: 4, title: 'تأكيد الحجز' },
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => item.num < 4 && setStep(item.num)}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 transition-colors ${
                  step >= item.num
                    ? 'bg-[#C8A97E] text-white shadow'
                    : 'bg-[#E5DEC9] text-gray-600'
                }`}
              >
                {item.num}
              </div>
              <span
                className={`text-xs font-semibold ${
                  step === item.num ? 'text-[#181512]' : 'text-gray-500'
                }`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181512]">حجز موعدك</h2>
          <p className="text-sm text-gray-600 mt-1">
            اختاري الخدمة المناسبة ثم الموعد المتاح
          </p>
        </div>

        {/* الخطوة 1 و 2: واجهة اختيار الخدمة والتقويم والمواعيد (مطابقة للتصميم) */}
        {(step === 1 || step === 2) && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8DFD1]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* العمود الأول: 1. اختيار الخدمة */}
              <div className="lg:col-span-4 space-y-3">
                <h3 className="font-bold text-sm text-[#181512] mb-3">
                  1. اختيار الخدمة
                </h3>
                {defaultServices.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => {
                        setSelectedService(srv);
                        setStep(2);
                      }}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#C8A97E] bg-[#FDFBF7] shadow-sm ring-1 ring-[#C8A97E]'
                          : 'border-gray-200 hover:border-[#C8A97E]/50'
                      }`}
                    >
                      <img
                        src={srv.image_url}
                        alt={srv.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#181512]">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {srv.duration_minutes} دقيقة -{' '}
                          <span className="font-bold text-[#B68D52]">
                            {srv.price} جنيه
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* العمود الثاني: 2. تقويم الشهر */}
              <div className="lg:col-span-5 bg-[#FAF7F2] p-5 rounded-2xl border border-[#EFE7DA]">
                <h3 className="font-bold text-sm text-[#181512] mb-4 text-center">
                  2. اختيار الموعد
                </h3>
                <div className="flex items-center justify-between mb-4 px-2">
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm">نوفمبر 2025</span>
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-gray-500 font-semibold mb-2">
                  <span>السبت</span>
                  <span>الأحد</span>
                  <span>الاثنين</span>
                  <span>الثلاثاء</span>
                  <span>الأربعاء</span>
                  <span>الخميس</span>
                  <span>الجمعة</span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                  {daysInMonth.map((day) => {
                    const isSelected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`h-9 rounded-lg font-medium transition-colors ${
                          isSelected
                            ? 'bg-[#2A2520] text-white font-bold shadow'
                            : 'hover:bg-[#E8DFD1] text-gray-700'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* العمود الثالث: قائمة الساعات المتاحة والمحجوزة */}
              <div className="lg:col-span-3 space-y-2.5">
                <div className="text-xs font-bold text-[#181512] mb-3 text-center bg-[#FAF7F2] py-2 rounded-lg border border-[#EFE7DA]">
                  السبت {selectedDay} نوفمبر 2025
                </div>

                {initialSlots.map((slot) => {
                  const isSelected = selectedTime === slot.time && slot.available;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        !slot.available
                          ? 'bg-red-50/60 border-red-200 text-gray-400 cursor-not-allowed'
                          : isSelected
                          ? 'bg-[#2A2520] text-white border-[#2A2520] shadow-sm'
                          : 'bg-white border-gray-200 hover:border-[#C8A97E] text-[#181512]'
                      }`}
                    >
                      <span>{slot.time}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] ${
                          !slot.available
                            ? 'bg-red-100 text-red-600'
                            : isSelected
                            ? 'bg-[#C8A97E] text-[#181512]'
                            : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {slot.label}
                      </span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full mt-4 bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold py-3 rounded-xl text-xs shadow transition-colors"
                >
                  متابعة لبيانات الحجز
                </button>
              </div>
            </div>
          </div>
        )}

        {/* الخطوة 3: إدخال بيانات العميلة */}
        {step === 3 && (
          <form
            onSubmit={handleConfirmBooking}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8DFD1] max-w-xl mx-auto space-y-5"
          >
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EFE7DA] flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-[#181512] text-sm">{selectedService.title}</p>
                <p className="text-gray-600 mt-0.5">
                  الموعد: {selectedDay} نوفمبر 2025 - الساعة {selectedTime}
                </p>
              </div>
              <span className="font-bold text-base text-[#B68D52]">
                {selectedService.price} جنيه
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2">الاسم بالكامل *</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="مثال: سارة محمد"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8A97E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-2">رقم الهاتف (واتساب) *</label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="010xxxxxxxx"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8A97E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-2">
                ملاحظات صحية أو حساسية من منتجات معينة (اختياري)
              </label>
              <textarea
                rows={3}
                value={healthNotes}
                onChange={(e) => setHealthNotes(e.target.value)}
                placeholder="أخبرينا إذا كنتِ تستخدمين أدوية معينة للبشرة..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8A97E]"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-xl border border-gray-300 text-xs font-bold hover:bg-gray-50"
              >
                رجوع
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold py-3 rounded-xl text-sm shadow"
              >
                {isSubmitting ? 'جاري التأكيد...' : 'تأكيد الحجز الآن'}
              </button>
            </div>
          </form>
        )}

        {/* الخطوة 4: رسالة تأكيد الحجز النهائية */}
        {step === 4 && (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-[#E8DFD1] max-w-lg mx-auto space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-bold text-[#181512]">تم استلام طلب حجزك بنجاح!</h3>
            <p className="text-sm text-gray-600">
              كود الحجز الخاص بك:{' '}
              <span className="font-bold text-[#181512] bg-[#F5EFE6] px-3 py-1 rounded-lg">
                {bookingCode}
              </span>
            </p>
            <div className="bg-[#FAF7F2] p-4 rounded-2xl text-xs space-y-1.5 text-right border border-[#EFE7DA]">
              <p><strong>العميلة:</strong> {customerName}</p>
              <p><strong>الخدمة:</strong> {selectedService.title}</p>
              <p><strong>التاريخ والوقت:</strong> {selectedDay} نوفمبر 2025 - {selectedTime}</p>
              <p><strong>التكلفة:</strong> {selectedService.price} جنيه</p>
            </div>
            <a
              href={`https://wa.me/201069488778?text=${encodeURIComponent(
                `مرحباً إنجي، قمت بحجز موعد جديد:\nكود الحجز: ${bookingCode}\nالاسم: ${customerName}\nالخدمة: ${selectedService.title}\nالموعد: ${selectedDay} نوفمبر الساعة ${selectedTime}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-3.5 rounded-xl text-sm shadow"
            >
              إرسال تأكيد الحجز عبر واتساب
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
