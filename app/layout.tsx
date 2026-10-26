import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Engy Ahmed Allam | خبيرة العناية بالبشرة بطنطا',
  description: 'جلسات متخصصة للعناية بالبشرة بمستوى احترافي في بيئة مريحة وخاصة بطنطا.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Cormorant+Garamond:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#221E1A] antialiased"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
