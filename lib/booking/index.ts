export function generateBookingCode(): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `EA-${randomNum}`;
}

export function createWhatsAppBookingLink(params: {
  bookingCode: string;
  customerName: string;
  serviceTitle: string;
  date: string;
  time: string;
  price: number;
}): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201069488778';
  const message = [
    `مرحباً أستاذة إنجي، أود تأكيد حجزي عبر المنصة:`,
    `• كود الحجز: ${params.bookingCode}`,
    `• الاسم: ${params.customerName}`,
    `• الجلسة: ${params.serviceTitle}`,
    `• التاريخ: ${params.date}`,
    `• الوقت: ${params.time}`,
    `• التكلفة: ${params.price} جنيه`,
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
