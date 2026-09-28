export const CATEGORIES = {
  cv: 'Bilgisayarlı Görü',
  ai: 'Yapay Zekâ / ML',
  sys: 'Savunma & Sistem',
  web: 'Full-Stack & Mobil',
  sec: 'Güvenlik',
  edu: 'Akademik',
} as const;

export type Category = keyof typeof CATEGORIES;
