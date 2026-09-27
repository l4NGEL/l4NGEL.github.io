---
title: Pasif Sonar Temas Sınıflandırma
tagline: Hidrofon sesinden gemi sınıflandırma — emin olmadığında "belirsiz, takibe devam" diyen operatör karar destek prototipi.
categories: [ai, sys]
order: 8
period: Ağustos 2026
stack: [Python, PyTorch, CNN, Sinyal işleme, Leaflet]
highlights:
  - "Gemi düzeyinde <b>%83.6 doğruluk</b> (çoğunluk tabanı %75.4), MMSI-ayrık test"
  - "Seçici mod: kabul edilen temasların <b>%92.9'u doğru</b>, kapsam %68.9"
  - "Eşikler test gemileri puanlanmadan önce validasyonda donduruldu"
repo: https://github.com/l4NGEL/passive-sonar-contact-intelligence
cover:
  src: /images/sonar/dashboard.webp
  alt: Operatör paneli — temas haritası, sınıf olasılıkları ve CONFIDENT kararı
gallery:
  - src: /images/sonar/uncertain.webp
    alt: Belirsiz temas — sistem karar vermek yerine takibe devam ediyor
---

## Fikir

10 saniyelik tek bir ses kesiti zayıf bir karar (%60.3). Aynı model bir geminin tüm pencereleri üzerinden ortalandığında %83.6'ya çıkıyor. Ürünün amacı "daha agresif tahmin" değil, bir **güven kapısı**:

| Zorunlu sınıflandırıcı | Bu sistem |
|---|---|
| Kargo 0.43 / Tanker 0.39 → **Kargo** | **BELİRSİZ — takibe devam** |
| Kargo 0.89 → Kargo | **KARGO, EMİN** |

## Hat

Hidrofon sesi → 10 sn pencereler → CNN → sınıf olasılıkları → temas izi üzerinde ortalama → güven kapısı → **EMİN** (kargo/tanker/balıkçı) ya da **BELİRSİZ** (takibe devam). En az 5 pencere birikmeden karar verilmiyor.

## Sonuçlar

61 görülmemiş gemi, MMSI çakışması 0:

| Ölçüt | Sonuç |
|---|---|
| Kesit doğruluğu | %60.3 |
| Gemi doğruluğu | **%83.6** |
| Makro-F1 | 0.719 |
| Çoğunluk tabanı | %75.4 |
| Seçici doğruluk | %92.9 (%68.9 kapsam) |

%92.9 genel test doğruluğu değil; yalnızca sistemin kabul ettiği temaslardaki performans. Temasların %31.1'i belirsiz olarak geri çevriliyor.

## Kapsam

Karar destek prototipi; sahada kullanılan bir sistem, denizaltı sınıflandırıcısı ya da hedefleme aracı değildir.
