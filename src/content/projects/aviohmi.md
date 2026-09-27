---
title: AvioHMI
tagline: Aviyonik görev bilgisayarı ve HMI paketi — Java çekirdek, Flutter kokpit MFD, React yer kontrol, C++/CUDA görüntü işleme.
categories: [sys, web, cv]
featured: true
order: 3
period: Temmuz – Ağustos 2026
stack: [Java 17, C++, CUDA, JNI, FFmpeg, Flutter, React, TypeScript, WebXR, PostGIS, Docker]
highlights:
  - "OpenSky Network üzerinden <b>canlı ADS-B</b> — Türkiye üzerinde ~30 gerçek uçak"
  - "FFmpeg → C++/CUDA Sobel kenar tespiti, JNI ile Java çekirdeğe bağlı, canlı HUD katmanı"
  - "Gömülü Linux hedefli Flutter dokunmatik MFD; WebXR ile AR/VR görünüm"
  - "PostgreSQL/PostGIS ile kayıt ve tekrar oynatma · GitHub Actions, GitLab CI ve Jenkins"
repo: https://github.com/l4NGEL/AvioHMI
cover:
  src: /images/aviohmi/fleet-map.webp
  alt: Yer kontrol — OpenSky'dan canlı çekilen gerçek uçak trafiği ve filo listesi
gallery:
  - src: /images/aviohmi/dashboard.webp
    alt: Yer kontrol paneli — filo KPI'ları, durum dağılımı, son uyarılar
  - src: /images/aviohmi/pfd.webp
    alt: Kokpit MFD — PFD sayfası, yapay ufuk ve hız/irtifa bantları
---

## Ne yapıyor

Bir uçak filosunu — 3 uçaklık simülasyon ya da **OpenSky Network'ten canlı çekilen gerçek ADS-B trafiği** — yöneten bir görev bilgisayarı ve yer kontrol paketi. Konum, hız, yön, duruş ve yakıt durumu WebSocket üzerinden web tabanlı yer kontrol paneline, dokunmatik kokpit ekranına ve AR (telefon kamerası + pusula) / VR (WebXR) 3B görünümlere akıyor.

Paralelde bir FFmpeg → CUDA hattı gerçek bir sensör videosunu çözüp GPU üzerinde Sobel kenar tespitinden geçiriyor ve sonucu canlı HUD katmanına basıyor.

## Mimari

- **Çekirdek (Java 17):** katmanlı alan mantığı, bileşenler arasında gerçek bir ağ protokolü, PostGIS'e kayıt ve tekrar oynatma.
- **Görüntü (C++/CUDA + JNI):** Sobel çekirdeği GPU'da; Java tarafı JNI köprüsüyle çağırıyor.
- **Kokpit MFD (Flutter):** PFD / NAV / SYS sayfaları, gömülü Linux hedefli dokunmatik arayüz.
- **Yer kontrol (React + TypeScript):** harita, panel, uyarılar, raporlar, AR/VR görünümleri.
- **Zarif bozulma:** bağlantı, GPU, veritabanı ya da API anahtarı yoksa sistem çökmeden devam ediyor.
- **CI:** her modül GitHub Actions, GitLab CI ve Jenkins'te derleniyor.
