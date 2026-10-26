export function getAdminWhatsAppAlertUrl(customerPhone: string, customerName: string, date: string, time: string) {
  const cleanPhone = customerPhone.startsWith('0') ? `2${customerPhone}` : customerPhone;
  const text = `أهلاً بكِ يا ${customerName} في عيادة Engy Ahmed Allam 🌸\nتم تأكيد موعد جلستك يوم ${date} الساعة ${time}.\nالعنوان: طنطا - شارع عثمان محمد من ميدان الساعة - برج الفيروز.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
