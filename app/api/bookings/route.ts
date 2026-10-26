import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      service_id,
      total_price,
      booking_date,
      booking_time,
      customer_name,
      customer_phone,
      health_notes,
    } = body;

    const booking_code = `EA-${Math.floor(1000 + Math.random() * 9000)}`;

    // إذا تم ربط مفاتيح Supabase يتم الحفظ الفعلي في قاعدة البيانات
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createClient();
      await supabase.from('bookings').insert([
        {
          booking_code,
          service_id,
          total_price,
          booking_date,
          booking_time,
          customer_name,
          customer_phone,
          health_notes,
          status: 'pending',
        },
      ]);
    }

    return NextResponse.json({ success: true, booking_code }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'حدث خطأ أثناء حفظ الحجز' },
      { status: 500 }
    );
  }
}
