'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Phone, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'الخدمات', href: '/#services' },
  { name: 'الحجز', href: '/#booking' },
  { name: 'معرض الأعمال', href: '/#gallery' },
  { name: 'من أنا', href: '/#about' },
  { name: 'موقعنا', href: '/#location' },
  { name: 'سياسة المواعيد', href: '/#policies' },
  { name: 'تواصل معنا', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#181512]/95 backdrop-blur-md text-white border-b border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-3xl font-bold tracking-wider text-[#C8A97E]" style={{ fontFamily: 'var(--font-serif)' }}>
            EA
          </div>
          <div className="border-r border-[#C8A97E]/40 pr-3">
            <div className="text-lg font-semibold tracking-wide text-white leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
              Engy Ahmed Allam
            </div>
            <div className="text-[10px] tracking-[0.2em] text-[#C8A97E] uppercase mt-1">
              BEAUTY SPECIALIST
            </div>
          </div>
        </Link>

        {/* روابط سطح المكتب */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-200">
          {navLinks.slice(1, 7).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#C8A97E] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* زر الحجز بسطح المكتب */}
        <div className="hidden lg:block">
          <Link
            href="/#booking"
            className="bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-md"
          >
            احجز الآن
          </Link>
        </div>

        {/* زر الموبايل */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white p-2 hover:text-[#C8A97E]"
          aria-label="فتح القائمة"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* القائمة الجانبية للموبايل منظمة ومرتبة */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-80 max-w-full bg-[#181512] text-white h-full flex flex-col justify-between p-6 z-10 mr-auto shadow-2xl border-l border-[#C8A97E]/30 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-2xl font-bold text-[#C8A97E]" style={{ fontFamily: 'var(--font-serif)' }}>
                  EA
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 px-4 rounded-xl text-sm font-medium text-gray-200 hover:bg-[#C8A97E]/10 hover:text-[#C8A97E] border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <Link
                href="/#booking"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#C8A97E] hover:bg-[#b59469] text-[#181512] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg mb-4"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز الآن</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
