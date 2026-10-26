import { TimeSlot } from '@/types';

export const WORKING_HOURS = [
  '10:00 ص',
  '11:00 ص',
  '12:00 م',
  '01:00 م',
  '02:00 م',
  '03:00 م',
  '04:00 م',
  '05:00 م',
  '06:00 م',
  '07:00 م',
];

export function generateDailySlots(
  bookedTimes: string[] = [],
  blockedTimes: string[] = []
): TimeSlot[] {
  return WORKING_HOURS.map((time) => {
    const isUnavailable = bookedTimes.includes(time) || blockedTimes.includes(time);
    return {
      time,
      label: isUnavailable ? 'محجوز' : 'متاح',
      available: !isUnavailable,
    };
  });
}
