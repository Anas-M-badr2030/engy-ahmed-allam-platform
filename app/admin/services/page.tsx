'use client';

import React, { useState } from 'react';
import { defaultServices } from '@/components/services/ServicesSection';

export default function AdminServicesPage() {
  const [services] = useState(defaultServices);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">إدارة الخدمات والأسعار</h1>
        <button className="bg-[#C8A97E] text-[#181512] font-bold px-4 py-2 rounded-xl text-xs">
          + إضافة خدمة جديدة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((srv) => (
          <div key={srv.id} className="flex items-center gap-4 p-4 rounded-2xl border border-[#EFE7DA] bg-[#FAF7F2]">
            <img src={srv.image_url} alt={srv.title} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{srv.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{srv.short_description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-sm text-[#B68D52]">{srv.price} جنيه</span>
                <span className="text-xs text-gray-500">{srv.duration_minutes} دقيقة</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
