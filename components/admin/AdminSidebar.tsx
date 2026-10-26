'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Calendar,
  Users,
  Sparkles,
  Package,
  Image as ImageIcon,
  ShieldAlert,
  Settings,
  Clock,
} from 'lucide-react';

const adminLinks = [
  { name: 'الرئيسية', href: '/admin/dashboard', icon: Home },
  { name: 'المواعيد والحجوزات', href: '/admin/bookings', icon: Calendar },
  { name: 'الجدول الزمني', href: '/admin/calendar', icon: Clock },
  { name: 'العملاء', href: '/admin/customers', icon: Users },
  { name: 'الخدمات', href: '/admin/services', icon: Sparkles },
  { name: 'الباقات والعروض', href: '/admin/packages', icon: Package },
  { name: 'معرض الأعمال', href: '/admin/gallery', icon: ImageIcon },
  { name: 'سياسة المواعيد', href: '/admin/policies', icon: ShieldAlert },
  { name: 'الإعدادات', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#181512] text-white flex flex-col justify-between p-5 shrink-0 min-h-screen">
      <div>
        <div className="text-center pb-6 border-b border-white/10">
          <Link href="/">
            <span
              className="text-3xl font-bold text-[#C8A97E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              EA
            </span>
          </Link>
          <p className="text-xs text-gray-400 mt-1">لوحة إدارة العيادة</p>
        </div>

        <nav className="mt-6 space-y-1.5 text-sm">
          {adminLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'bg-[#C8A97E] text-[#181512] font-bold shadow'
                    : 'text-gray-300 hover:bg-white/5 hover:text-[#C8A97E]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="text-xs text-gray-400 border-t border-white/10 pt-4 text-center">
        Engy Ahmed Allam © {new Date().getFullYear()}
      </div>
    </aside>
  );
}
