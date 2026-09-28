// Sertifikalar. `verify` resmî doğrulama adresi (belgenin üzerindeki link ya da QR kodu),
// `image` belgenin kendisi. Kişisel kimlik numarası içeren belgeler (ör. e-Devlet barkodlu olanlar)
// buraya görsel olarak eklenmez.
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  year: number;
  area: 'Ağ ve güvenlik' | 'Yazılım' | 'Yönetim' | 'Dil';
  detail?: string;
  id?: string;
  verify?: string;
  image?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy · Akbank Akademi',
    date: 'Mayıs 2025',
    year: 2025,
    area: 'Ağ ve güvenlik',
    detail: 'Güvenlik operasyonları, ağ trafiği ve olay analizi, saldırı tespiti',
    image: '/images/sertifikalar/cyberops.webp',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy · Akbank Akademi',
    date: 'Mart 2025',
    year: 2025,
    area: 'Ağ ve güvenlik',
    detail: 'IP adresleme, alt ağlar, Ethernet, anahtarlama ve yönlendirme temelleri',
    image: '/images/sertifikalar/ccna-itn.webp',
  },
  {
    title: 'Adli Bilişim Mobil İnceleme Eğitimi',
    issuer: 'Türk Hava Kurumu Üniversitesi, Sürekli Eğitim Merkezi',
    date: 'Aralık 2024 – Mart 2025',
    year: 2025,
    area: 'Ağ ve güvenlik',
    detail: '90 saat · e-Devlet ile doğrulanabilir belge',
  },
  {
    title: 'Bilgi Güvenliği Yönetim Sistemi',
    issuer: 'BTK Akademi',
    date: 'Şubat 2025',
    year: 2025,
    area: 'Ağ ve güvenlik',
    id: 'OKMhqGjdqA',
    verify: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=OKMhqGjdqA',
    image: '/images/sertifikalar/btk-bgys.webp',
  },
  {
    title: 'Google Proje Yönetimi Profesyonel Sertifikası',
    issuer: 'Google · Coursera',
    date: 'Ağustos 2024',
    year: 2024,
    area: 'Yönetim',
    detail: '6 kurs: proje başlatma, planlama, yürütme, çevik proje yönetimi ve bitirme projesi',
    id: 'P8HPLF77J7RO',
    verify: 'https://coursera.org/verify/professional-cert/P8HPLF77J7RO',
    image: '/images/sertifikalar/google-pm.webp',
  },
  {
    title: 'Versiyon Kontrolleri: Git ve GitHub',
    issuer: 'BTK Akademi',
    date: 'Mart 2024',
    year: 2024,
    area: 'Yazılım',
    id: 'rKjhGbN06W',
    verify: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=rKjhGbN06W',
    image: '/images/sertifikalar/btk-git.webp',
  },
  {
    title: 'Google Oyun ve Uygulama Akademisi',
    issuer: 'Google',
    date: '',
    year: 0,
    area: 'Yazılım',
    detail: 'Flutter ve Unity ile uygulama ve oyun geliştirme',
  },
  {
    title: 'Yabancı Dil Eğitimi, İngilizce B2',
    issuer: 'American LIFE',
    date: '',
    year: 0,
    area: 'Dil',
  },
];
