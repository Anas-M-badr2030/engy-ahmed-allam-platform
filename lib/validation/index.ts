export function validateEgyptianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, '');
  return /^01[0125][0-9]{8}$/.test(cleaned);
}

export function validateBookingPayload(data: {
  customer_name?: string;
  customer_phone?: string;
  booking_date?: string;
  booking_time?: string;
}) {
  const errors: string[] = [];

  if (!data.customer_name || data.customer_name.trim().length < 3) {
    errors.push('يرجى إدخال الاسم بالكامل بشكل صحيح.');
  }
  if (!data.customer_phone || !validateEgyptianPhone(data.customer_phone)) {
    errors.push('يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقماً.');
  }
  if (!data.booking_date) {
    errors.push('يرجى اختيار تاريخ الجلسة.');
  }
  if (!data.booking_time) {
    errors.push('يرجى اختيار موعد الجلسة.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
