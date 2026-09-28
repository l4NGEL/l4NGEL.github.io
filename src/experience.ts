// İş deneyimi. Şirket içi projeler: kod ve ekran görüntüsü yayınlanmaz, müşteri adı geçmez.
export interface Role {
  title: string;
  company: string;
  place: string;
  when: string;
  summary: string;
  points: string[];
  stack: string[];
}

export const ROLES: Role[] = [
  {
    title: 'Junior Full-Stack Developer',
    company: 'Papilon Savunma Teknolojileri',
    place: 'Ankara',
    when: 'Ekim 2025 – bugün',
    summary:
      'Üretim denetimi ve saha takibi için geliştirilen BiYokla platformunun lead geliştiricisiyim; API, web ve mobil katmanların üçünde de çalışıyorum.',
    points: [
      'Flask + PostgreSQL ile 103 uç noktalı REST API',
      'React web konsolu; ekibin bu depodaki 48 commit’inin 38’i',
      'Flutter mobil uygulamada cihaz üstünde yüz doğrulama ve canlılık tespiti (TensorFlow Lite, ONNX Runtime)',
      'Python servislerinin dağıtım için paketlenmesi, Kotlin ve Swift ile native entegrasyonlar',
      '4 farklı dağıtım ortamı; yurt dışında bir PoC kurulumu',
    ],
    stack: ['Flask', 'PostgreSQL', 'React', 'Flutter', 'TensorFlow Lite', 'ONNX Runtime', 'Kotlin', 'Swift'],
  },
  {
    title: 'Yazılım Geliştirme Stajyeri',
    company: 'Papilon Savunma Teknolojileri',
    place: 'Ankara',
    when: 'Temmuz – Eylül 2025',
    summary: 'BiYokla’nın Flutter istemcisini başlattım ve cihaz üstünde çalışan bir kimlik doğrulama uygulaması geliştirdim.',
    points: [
      'FaceApp: 1:N ve 1:1 yüz eşleştirme, internet olmadan çalışabilme',
      'NFC ve MRZ ile kimlik belgesi okuma',
      'Uygulamanın kendi Flask API’si',
    ],
    stack: ['Flutter', 'Flask', 'NFC', 'MRZ', 'TensorFlow Lite'],
  },
];
