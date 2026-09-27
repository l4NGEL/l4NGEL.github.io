---
title: TeknikYaz Asistanı
tagline: Türkçe teknik dokümantasyon için LLM hattı — hibrit RAG, QLoRA + DPO, halüsinasyon denetimi ve LLMOps.
categories: [ai]
order: 9
period: Temmuz – Eylül 2026
stack: [Python, Transformers, PEFT, TRL, Chroma, BM25, MLflow, FastAPI, Docker]
highlights:
  - "Qwen2.5-3B üzerinde QLoRA (parametrelerin %0.24'ü eğitildi); NLI ile 3 halüsinasyon yakalandı"
  - "4-bit NF4: <b>6.17 GB → 2.0 GB</b> · distillation ile <b>~%49</b> daha düşük gecikme"
  - "Belge sınıflandırıcı %95.45 doğruluk / 0.972 makro F1"
repo: https://github.com/l4NGEL/teknikyaz-asistan
---

## Ne yapıyor

127 dokümanlık özgün bir Türkçe teknik dokümantasyon korpusu üzerinde uçtan uca bir LLM hattı: retrieval, fine-tuning, hizalama, optimizasyon, açıklanabilirlik ve servis.

- **Hibrit RAG:** Chroma + sentence-transformers yoğun arama ile BM25'in birleşimi.
- **QLoRA:** Qwen2.5-3B-Instruct üzerinde 7.37M / 3.09B parametre eğitildi.
- **DPO:** tercih çiftleriyle hizalama.
- **Halüsinasyon denetimi:** kendi yazdığım NLI tabanlı groundedness kontrolü base modelde 3 tekrarlanabilir halüsinasyon yakaladı.
- **LLMOps:** MLflow ile deney takibi, FastAPI servis, Docker.

## Optimizasyon sonuçları

| Teknik | Sonuç |
|---|---|
| Nicemleme (4-bit NF4) | 6.17 GB → 2010 MB (~3× bellek azalması) |
| Budama (%30 büyüklük) | Yoğun çıkarımı **hızlandırmadı** — seyrek çekirdek ya da yapısal budama gerekiyor |
| Distillation (DistilBERT) | 111M → 68M parametre, gecikme ~%49 düştü |

## Yakalanan hatalar

- Belge başlıkları embedding/BM25 indeksine hiç ulaşmıyordu; düzeltilince ilgili belgeler top-20 aday havuzunda 0'dan 14'e çıktı.
- Güvenlik modülü, 5 sınıflı bir modelin çıktısını ikili sanıyordu ve sessizce işlevsizdi; 8 regresyon testiyle düzeltildi.
- Zayıf denetimli etiketlemedeki bir hata, sınıflandırıcıda "doğruluk tek başına yanıltır" örneği olarak yakalandı.
