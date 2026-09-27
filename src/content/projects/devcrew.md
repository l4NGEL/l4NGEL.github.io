---
title: devcrew
tagline: Çok ajanlı yazılım ekibi — bir spec'ten çalışan ve testleri geçen bir Python paketi üreten ajan döngüsü.
categories: [ai]
order: 12
period: "2026"
status: erken aşama
stack: [Python, Claude API, pytest]
highlights:
  - "Path-traversal korumalı sandbox; \"yeşil\" kararını ajandan bağımsız pytest veriyor"
  - "Orkestratör LLM'siz, bağımlılık enjeksiyonuyla test ediliyor"
---

## Fikir

Rollere ayrılmış ajanların bir görevi birlikte bitirdiği "yapay zekâ yazılım ekibi" konsepti. Buradaki fark gerçek bir çalışma alanı ve doğrulama döngüsü: ajan kodu diske yazıyor, `pytest` koşuyor, hata çıktısını okuyup düzeltiyor; testler yeşile dönene ya da bütçe bitene kadar. "Yeşil" kararının tek kaynağı, orkestratörün ajandan **bağımsız** olarak koşturduğu pytest.

## Şu anki durum (M1)

- Tek yazılımcı ajan + izole sandbox + test döngüsü çalışıyor.
- Araçlar: `write_file`, `read_file`, `list_dir`, `run_tests`.
- Bütçe dolarsa insan onayına düşüyor.

## Yol haritası

Planlayıcı ve eleştirmen ajanlar (M2), paralel ajanlar (M3), değerlendirme altyapısı (M4).

## Dürüst sınırlar

Testleri de ajan yazdığı için "testler geçti" her zaman "kod doğru" anlamına gelmiyor; M2'deki eleştirmen bu boşluğu daraltmak için planlandı.
