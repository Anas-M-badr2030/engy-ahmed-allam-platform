import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';
import { generateDailySlots } from '@/lib/availability';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'التاريخ مطلوب' }, { status: 400 });
  }

  try {
    let bookedTimes: string[] = [];
    let blockedTimes: string[] = [];

    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createClient();

      const { data: bookings } = await supabase
        .from('bookings')
        .select('booking_time')
        .eq('booking_date', date)
        .neq('status', 'cancelled');

      const { data: blocked } = await supabase
        .from('blocked_slots')
        .select('blocked_time')
        .eq('blocked_date', date);

      bookedTimes = bookings?.map((b) => b.booking_time) || [];
      blockedTimes = blocked?.map((b) => b.blocked_time).filter(Boolean) || [];
    } else {
      // بيانات افتراضية مطابقة للتصميم في حال عدم الاتصال بقاعدة البيانات
      bookedTimes = ['11:00 ص', '01:00 م'];
    }

    const slots = generateDailySlots(bookedTimes, blockedTimes);
    return NextResponse.json({ date, slots });
  } catch {
    return NextResponse.json({ error: 'فشل جلب المواعيد المتاحة' }, { status: 500 });
  }
}
