'use client';

import React from 'react';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Service } from '@/types';
// ...باقي الكود

export const defaultServices: Service[] = [
  {
    id: '1',
    title: 'تنظيف البشرة العميق',
    slug: 'deep-facial-cleansing',
    short_description: 'تنظيف عميق وإزالة الشوائب لبشرة أكثر نقاءً',
    price: 600,
    duration_minutes: 60,
    image_url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop',
    category: 'تنظيف البشرة',
    is_active: true,
  },
  {
    id: '2',
    title: 'جلسات الترطيب والتغذية',
    slug: 'hydration-and-nutrition',
    short_description: 'ترطيب مكثف وتحسين مرونة البشرة',
    price: 700,
    duration_minutes: 60,
    image_url: 'https://images.unsplash.com/photo-1512290900672-1f80180200b9?q=80&w=600&auto=format&fit=crop',
    category: 'الترطيب',
    is_active: true,
  },
  {
    id: '3',
    title: 'علاج مشاكل البشرة',
    slug: 'skin-problems-treatment',
    short_description: 'جلسات مخصصة لحب الشباب والتصبغات',
    price: 750,
    duration_minutes: 60,
    image_url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop',
    category: 'علاج المشاكل',
    is_active: true,
  },
  {
    id: '4',
    title: 'جلسات النضارة ومقاومة علامات التقدم في العمر',
    slug: 'glow-and-anti-aging',
    short_description: 'تجديد خلايا البشرة وشد الخطوط الدقيقة',
    price: 800,
    duration_minutes: 60,
    image_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    category: 'النضارة',
    is_active: true,
  },
];

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService?: (service: Service) => void;
}) {
  return (
    <section id="services" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#C8A97E] font-semibold text-sm">خدماتي</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#181512] mt-1">
          جلسات متخصصة لبشرة صحية ومشرقة
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          كل خدمة مصممة بعناية لتناسب احتياجات بشرتك
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {defaultServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8DFD1] flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-base text-[#181512] line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 min-h-[32px]">
                  {service.short_description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="font-bold text-base text-[#B68D52]">
                  {service.price} جنيه
                </span>
                <span className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  {service.duration_minutes} دقيقة
                </span>
              </div>

              <a
                href="#booking"
                onClick={() => onSelectService && onSelectService(service)}
                className="block w-full text-center bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold py-2.5 rounded-lg text-sm transition-colors"
              >
                احجز الآن
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/services"
          className="inline-block bg-[#2A2520] hover:bg-[#181512] text-white font-semibold px-8 py-3 rounded-lg text-sm transition-colors"
        >
          عرض جميع الخدمات
        </Link>
      </div>
    </section>
  );
}
