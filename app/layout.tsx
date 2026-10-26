import type { Metadata } from 'next';
import { Cairo, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Engy Ahmed Allam | خبيرة العناية بالبشرة بطنطا',
  description: 'جلسات متخصصة للعناية بالبشرة بمستوى احترافي في بيئة مريحة وخاصة بطنطا. تنظيف عميق، ترطيب، علاج مشاكل البشرة، وجلسات النضارة.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#221E1A] antialiased">
        {children}
      </body>
    </html>
  );
}
