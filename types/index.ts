export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'no_show' | 'completed';

export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description?: string;
  price: number;
  duration_minutes: number;
  image_url: string;
  category: string;
  is_active: boolean;
}

export interface Booking {
  id: string;
  booking_code: string;
  customer_id?: string;
  service_id: string;
  customer_name: string;
  customer_phone: string;
  booking_date: string; // YYYY-MM-DD
  booking_time: string; // "10:00 ص"
  status: BookingStatus;
  total_price: number;
  deposit_paid: boolean;
  health_notes?: string;
  created_at: string;
  services?: Pick<Service, 'title' | 'price' | 'duration_minutes'>;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'كل الأعمال' | 'تنظيف البشرة' | 'الترطيب' | 'علاج المشاكل' | 'النضارة';
  before_image_url: string;
  after_image_url: string;
}

export interface TimeSlot {
  time: string;
  label: string;
  available: boolean;
}
