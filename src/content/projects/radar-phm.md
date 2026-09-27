---
title: Radar T/R Modül PHM
tagline: AESA radar T/R modülleri için sentetik BIT telemetrisi üzerinde arıza tespiti, teşhis ve kestirimci bakım.
categories: [ai, sys]
order: 7
period: Ağustos 2026
stack: [Python, scikit-learn, pandas, MATLAB]
highlights:
  - "Random Forest: <b>%93.3 tespit, %0.9 yanlış alarm</b> — kural tabanlı ve IsolationForest'ı geçti"
  - "Arıza izolasyon doğruluğu <b>%96.8</b> (4 sınıf, 1384 test örneği)"
  - "Modül bazlı, arıza moduna göre stratifiye, sızıntısız train/test ayrımı"
---

## Ne yapıyor

AESA radar dizisindeki verici-alıcı (T/R) modülleri için **arıza tespiti, teşhis/lokalizasyon, yanlış alarm tahmini ve kalan ömür (RUL)** hattı. Sistem hata yönetimi ve test edilebilirlik (PHM) mühendisliğine odaklanıyor.

## Sonuçlar (test split, 12 modül / 4800 örnek)

| Yöntem | Tespit | Yanlış alarm |
|---|---|---|
| Kural tabanlı (\|z\| > 3) | %91.5 | %1.2 |
| IsolationForest (denetimsiz) | %86.3 | %7.6 |
| **Random Forest (denetimli)** | **%93.3** | **%0.9** |

Arıza izolasyonunda 4 sınıfta %96.8 doğruluk elde edildi.

## Tasarım kararları

- Bir modülün zaman serisi ya tamamen train'de ya tamamen test'te; üstüne arıza moduna göre stratifikasyon eklendi, yoksa bazı arıza tipleri test'ten tamamen dışarıda kalabiliyordu.
- MATLAB tarafına küçük ama çalıştırılıp doğrulanabilir bir simülasyon betiği eklendi.

## Sınırlamalar

- Telemetri sentetik; gerçek bir T/R modülünün gürültü yapısı muhtemelen daha karmaşık.
- FMEA genel literatürden esinlenerek sentezlendi; gizli/tescilli veri içermiyor.
- Yanlış alarm sınıflandırıcısı küçük bir olay setinde (51 test olayı) değerlendirildi.
