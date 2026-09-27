---
title: Telaffuz Testi
tagline: İnternetsiz çalışan Android telaffuz uygulaması — her fonem için ayrı güven skoru.
categories: [ai, web]
order: 11
period: Temmuz – Ağustos 2026
stack: [Android, wav2vec2, CTC, ONNX]
highlights:
  - "Cihaz üstü wav2vec2 fonem modeli + CTC forced alignment"
  - "Ses cihazdan çıkmıyor; sunucu yok"
cover:
  src: /images/telaffuz/app.webp
  alt: Uygulama ekranı — okunacak metin ve kayıt butonu
---

## Neden farklı

Çoğu telaffuz uygulaması konuşmayı metne çevirip hedef cümleyle karşılaştırıyor; bu da "kelimeyi doğru söyledin mi" gibi kaba bir sonuç veriyor. Bu uygulama bunun yerine:

- Sesi doğrudan **fonem olasılıklarına** çeviren akustik modelin ham çıktısını kullanıyor,
- Bu çıktıyı hedef metnin beklenen fonem dizisiyle zaman ekseninde **hizalıyor** (CTC forced alignment),
- Her fonem için modelin o sesi ne kadar net "duyduğunu" gösteren bir güven skoru üretiyor.

Hepsi telefonun içinde oluyor; ses kaydı cihazdan çıkmıyor.
