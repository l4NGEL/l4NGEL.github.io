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
    title: 'C++ For C Programmers, Part A',
    issuer: 'University of California, Santa Cruz · Coursera',
    date: 'Eylül 2026',
    year: 2026,
    area: 'Yazılım',
    detail: 'Ira Pohl · Baskin School of Engineering',
    id: 'N1DF2GJ50ROQ',
    verify: 'https://coursera.org/verify/N1DF2GJ50ROQ',
    image: '/images/sertifikalar/coursera-cpp.webp',
  },
  {
    title: 'Build a XAML Multimedia Player with WPF',
    issuer: 'EDUCBA · Coursera',
    date: 'Eylül 2026',
    year: 2026,
    area: 'Yazılım',
    detail: 'XAML ve WPF ile masaüstü multimedya oynatıcı',
    id: 'WT4F4UYJBLGO',
    verify: 'https://coursera.org/verify/WT4F4UYJBLGO',
    image: '/images/sertifikalar/coursera-wpf.webp',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'IBM · Coursera',
    date: 'Eylül 2026',
    year: 2026,
    area: 'Yazılım',
    detail: 'Jeff Grossman, Joseph Santarcangelo, Saeed Aghabozorgi',
    id: '81UNB3QVLYZK',
    verify: 'https://coursera.org/verify/81UNB3QVLYZK',
    image: '/images/sertifikalar/coursera-ml-python.webp',
  },
  {
    title: 'İngilizce Fırsatım',
    issuer: 'Berlitz · Esas Sosyal',
    date: 'Mayıs 2024 – Haziran 2025',
    year: 2025,
    area: 'Dil',
    detail: '2 kur İngilizce ve kariyer eğitimleri, Hayırlı Sabancı desteğiyle',
    image: '/images/sertifikalar/ingilizce-firsatim.webp',
  },
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
    title: 'Oyun ve Uygulama Akademisi Mezuniyet Sertifikası',
    issuer: 'Oyun ve Uygulama Akademisi · Google',
    date: 'Aralık 2023 – Ağustos 2024',
    year: 2024,
    area: 'Yazılım',
    detail: 'Tüm eğitimler ve mezuniyet projesi, OUA-3',
    image: '/images/sertifikalar/oua-mezuniyet.webp',
  },
  {
    title: 'Yapay Zeka Destekli Flutter',
    issuer: 'Oyun ve Uygulama Akademisi · Google',
    date: 'Ağustos 2024',
    year: 2024,
    area: 'Yazılım',
    detail: '20 saat · yapay zeka eklentili uygulama geliştirme, OUA-3',
    image: '/images/sertifikalar/oua-flutter.webp',
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
    title: 'Siber Güvenlik Analisti Eğitim Programı',
    issuer: 'Akbank Gençlik Akademisi · Cisco Networking Academy · Ağ Yöneticileri Derneği',
    date: '',
    year: 0,
    area: 'Ağ ve güvenlik',
    image: '/images/sertifikalar/siber-guvenlik-analisti.webp',
  },
  {
    title: 'Yabancı Dil Eğitimi, İngilizce B2',
    issuer: 'American LIFE',
    date: 'Şubat 2026',
    year: 2026,
    area: 'Dil',
    detail: 'Okuma, dinleme, konuşma ve yazma B2',
    image: '/images/sertifikalar/american-life-b2.webp',
  },
];
