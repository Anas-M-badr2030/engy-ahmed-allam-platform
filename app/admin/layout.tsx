import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F1EA] flex text-[#181512]" dir="rtl">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-[#E8DFD1] px-8 py-4 flex items-center justify-between">
          <h2 className="font-bold text-lg">إدارة منصة Engy Ahmed Allam</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">مرحباً، إنجي</span>
            <div className="w-9 h-9 rounded-full bg-[#C8A97E] text-[#181512] font-bold flex items-center justify-center text-sm">
              EA
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
