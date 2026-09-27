---
title: GeoCommand
tagline: Harita tabanlı görev ve olay takip simülasyonu — canlı araç konumları, çizilebilir bölgeler, görev atama, konum geçmişi.
categories: [sys, web]
order: 5
period: Eylül 2026
stack: [C#, .NET 10, WPF, ASP.NET Core, SignalR, EF Core, PostGIS, Serilog, Testcontainers]
highlights:
  - "WPF masaüstü + ASP.NET Core API + SignalR ile canlı yayın"
  - "Bölge giriş/çıkış hesapları WGS84 üzerinde (PostGIS), ekran pikseliyle değil"
  - "Bağlantı kopunca uyarı, otomatik yeniden bağlanma ve REST ile eşitleme"
  - "<b>86 test</b> — Testcontainers ile gerçek PostGIS üzerinde entegrasyon"
cover:
  src: /images/geocommand/gorev-atama.webp
  alt: Görev atama — araç listesi, harita, seçili araç ayrıntıları ve canlı olay listesi
gallery:
  - src: /images/geocommand/konum-gecmisi.webp
    alt: Seçili aracın tarih aralığındaki konum geçmişi ve izi
  - src: /images/geocommand/bolge-cizimi.webp
    alt: Haritaya tıklayarak çokgen bölge çizimi
  - src: /images/geocommand/baglanti-koptu.webp
    alt: API bağlantısı koptuğunda uyarı bandı ve durum göstergesi
---

## Ne yapıyor

Operatör, simüle araçların anlık konumlarını haritada izliyor, kendi çizdiği bölgelere giriş/çıkış olaylarını takip ediyor, araçlara görev atıyor ve seçili aracın belirli bir tarih aralığındaki konum geçmişini sorguluyor.

> Eğitim/portföy simülasyonudur; hiçbir gerçek sisteme, cihaza veya kurumsal veriye bağlanmaz.

## Mimari

Temiz mimari katmanları: `Domain` (varlıklar, iş kuralları, bölge değerlendirici) → `Application` (konum alma hattı, sorgular, görev/bölge servisleri) → `Infrastructure` (EF Core + PostGIS, simülatör, CSV oynatıcı) → `Api` (Minimal API, SignalR hub, arka plan hizmetleri) ve `Desktop` (WPF/MVVM, Mapsui harita).

- Konum bildirimleri doğrulanıyor, PostGIS'e yazılıyor ve SignalR ile yayınlanıyor.
- Simülatör ayrı bir arka plan hizmeti; seed'e bağlı, tekrar üretilebilir senaryolar.
- Aynı `IPositionSource` arayüzünü uygulayan iki kaynak: simülatör ve CSV kayıt dosyası.
- Görev durum geçiş kuralları; araç başına tek aktif görev.
- Yeniden bağlanınca REST'ten eşitleme ve yinelenen olay önleme.
- Türkçe ProblemDetails ile girdi doğrulama, Serilog ile yapılandırılmış log, repoda parola yok.

## Bilinen sınırlamalar

- Tek API örneği varsayılıyor; çoklu örnek için dağıtık kilit ve SignalR backplane gerekir.
- Kimlik doğrulama yok, yalnızca yerel demo içindir.
- Nokta-çokgen testi düzlemsel; çok büyük bölgelerde kenarlar jeodezik değil.
- WPF istemcinin durum mantığı birim testli, ekran akışları UI Automation betiğiyle doğrulandı.
