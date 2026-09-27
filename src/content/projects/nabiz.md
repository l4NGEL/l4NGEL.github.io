---
title: NABIZ
tagline: Titreşim, akustik ve telemetriyle teçhizat durum izleme ve anomali tespiti — uçta C++ çıkarım, merkezde izleme.
categories: [ai, sys]
order: 6
period: Eylül 2026
status: geliştiriliyor
stack: [Python, PyTorch, C++, ONNX Runtime, INT8, MQTT, Protobuf, FastAPI, SQLite]
highlights:
  - "DSP önyüz + 7 model ailesi; C-MAPSS üzerinde GRU ile kalan ömür (RUL) tahmini"
  - "ONNX + INT8 nicemleme; C++ ONNX Runtime yolu Python ile golden-vector paritesinde"
  - "Protobuf + MQTT → FastAPI toplayıcı, uçtan uca doğrulandı · <b>206 test</b>"
---

## Ne yapıyor

Sensör verisinden merkezi izlemeye uzanan uçtan uca bir durum izleme sistemi: **sensör verisi → YZ modeli → uç/merkez dağıtım → saha testi → raporlama**.

## Durum

| Faz | Kapsam | Durum |
|---|---|---|
| 0 | Kapsam, veri şartnamesi, sızıntısız split doğrulama, CI | tamam |
| 1 | DSP önyüz — hizalama, order/envelope analizi, 168 öznitelik | tamam |
| 2 | AUC/pAUC/ECE değerlendirme, 7 model ailesi, RUL (GRU), kalibrasyon/OOD | büyük ölçüde tamam |
| 3 | ONNX export, INT8 PTQ, gecikme ölçümü | başladı |
| 4 | C++ ONNX Runtime çıkarım yolu | başladı — parite testi geçti |
| 5 | Protobuf + MQTT + merkezi toplayıcı | büyük ölçüde tamam |
| 6 | Saha testi simülasyonu, rapor, dashboard | planlandı |

## Notlar

- C++ çıkarım yolu şu an öznitelik-vektörü modelini (DenseAE) destekliyor; mel-spektrogram tabanlı modeller ve WAV→mel çıkarımının C++'a taşınması sırada.
- Gerçek MIMII verisiyle koşum ve TensorRT/ARM ölçümleri henüz yapılmadı; şimdiki sonuçlar sentetik veri ve x86 CPU üzerinde.
