---
title: Türkçe Konuşma Tanıma
tagline: Tamamen çevrimdışı mobil ses hattı — Türkçe için Whisper fine-tune, konuşmacı tanıma ve diarization.
categories: [ai]
order: 10
period: Temmuz 2026
stack: [Python, Whisper, sherpa-onnx, ONNX, INT8, Android]
highlights:
  - "Cihaz üstü INT8 ONNX: <b>WER %16.1 / CER %3.0</b> (N=100)"
  - "Fine-tune whisper-small: WER %14.03 (13.864 örnek)"
  - "Konuşmacı doğrulama eşiği gerçek telefon mikrofonuyla yeniden kalibre edildi"
---

## Ne yapıyor

İnternet olmadan telefonda çalışan bir Türkçe ses hattı: konuşmayı metne çeviriyor, konuşmacıyı tanıyor ve kimin ne zaman konuştuğunu ayırıyor (diarization).

## Sonuçlar

| Model | WER | CER |
|---|---|---|
| whisper large-v3, sıfır-atış (referans) | %7.0 | %0.9 |
| whisper-small, fine-tune | %14.03 | — |
| **INT8 ONNX, cihaz üstü (son hal)** | **%16.1** | **%3.0** |

Cihazda çalışan son hal fp32 modele karşı doğrulandı (N=100, FLEURS).

## Konuşmacı tanıma

ResNet34 tabanlı konuşmacı modeli laboratuvar kayıtlarında 0.84 eşikle çalışıyordu. Gerçek telefon mikrofonunda doğru konuşmacı skorları 0.52–0.83'e düştüğü için eşik 0.55'e yeniden kalibre edildi.

## Denendi, işe yaramadı

Aynı klasördeki İngilizce telaffuz değerlendirmesinde kelime düzeyinde "doğru/yanlış" kararı hedeflendi; precision %12–32'de kaldı. Tasarım fonem düzeyinde güven skoruna çevrildi (bkz. Telaffuz Testi).
