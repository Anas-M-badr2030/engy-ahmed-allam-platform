import React from 'react';

export default function AdminGalleryPage() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">إدارة معرض الأعمال (قبل وبعد)</h1>
        <button className="bg-[#C8A97E] text-[#181512] font-bold px-4 py-2 rounded-xl text-xs">
          + رفع حالة قبل/بعد جديدة
        </button>
      </div>
      <p className="text-xs text-gray-500">
        يمكنكِ من هنا رفع صور الحالات قبل وبعد الجلسات وتصنيفها تحت (تنظيف البشرة، الترطيب، علاج المشاكل، النضارة).
      </p>
    </div>
  );
}
