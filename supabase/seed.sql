INSERT INTO services (title, slug, short_description, full_description, price, duration_minutes, image_url, category, display_order)
VALUES
  (
    'تنظيف البشرة العميق',
    'deep-facial-cleansing',
    'تنظيف عميق وإزالة الشوائب لبشرة أكثر نقاءً',
    'جلسة متكاملة لتنظيف المسام بعمق، إزالة الرؤوس السوداء والبيضاء، تقشير لطيف للجلد الميت مع ماسكات مهدئة تمنح بشرتك إشراقة فورية وتنفساً صحياً.',
    600,
    60,
    '/images/services/deep-cleansing.jpg',
    'تنظيف البشرة',
    1
  ),
  (
    'جلسات الترطيب والتغذية',
    'hydration-and-nutrition',
    'ترطيب مكثف وتحسين مرونة البشرة',
    'جلسة غنية بالهيالورونيك أسيد والفيتامينات المغذية لاستعادة حاجز البشرة الطبيعي والقضاء على الجفاف والبهتان.',
    700,
    60,
    '/images/services/hydration.jpg',
    'الترطيب',
    2
  ),
  (
    'علاج مشاكل البشرة',
    'skin-problems-treatment',
    'جلسات مخصصة لحب الشباب والتصبغات',
    'بروتوكول علاجي مخصص حسب حالة بشرتك لعلاج آثار الحبوب، التصبغات، البقع الداكنة وتوحيد لون البشرة بمنتجات طبية آمنة.',
    750,
    60,
    '/images/services/treatment.jpg',
    'علاج المشاكل',
    3
  ),
  (
    'جلسات النضارة ومقاومة علامات التقدم في العمر',
    'glow-and-anti-aging',
    'تجديد خلايا البشرة وشد الخطوط الدقيقة لإطلالة شابة',
    'جلسات تحفيز الكولاجين واستعادة النضارة الفورية ومقاومة الخطوط التعبيرية وعلامات الإرهاق بأحدث التقنيات.',
    800,
    60,
    '/images/services/anti-aging.jpg',
    'النضارة',
    4
  );

INSERT INTO gallery_items (title, category, before_image_url, after_image_url)
VALUES
  ('حالة علاج حب الشباب والتصبغات 1', 'علاج المشاكل', '/images/gallery/before-1.jpg', '/images/gallery/after-1.jpg'),
  ('حالة تنظيف عميق وتضييق المسام', 'تنظيف البشرة', '/images/gallery/before-2.jpg', '/images/gallery/after-2.jpg'),
  ('حالة استعادة النضارة وتوحيد اللون', 'النضارة', '/images/gallery/before-3.jpg', '/images/gallery/after-3.jpg'),
  ('حالة ترطيب الشفاه والبشرة الجافة', 'الترطيب', '/images/gallery/before-4.jpg', '/images/gallery/after-4.jpg');
