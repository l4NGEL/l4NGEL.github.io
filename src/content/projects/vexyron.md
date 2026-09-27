---
title: VEXYRON
tagline: Güvenlik doğrulama platformu — kasıtlı açıklı web/API/mobil hedef ve onu tarayıp "yayına hazır mı" kararı veren tarayıcı.
categories: [sec]
order: 13
period: Ağustos 2026
stack: [Python, Flask, OWASP, APK analizi]
highlights:
  - "Yerleştirilmiş <b>22/22 açığın tamamı</b> tespit edildi"
  - "SQLi / XSS / BOLA, APK statik analiz, port tarama, smoke ve yük testi"
  - "CI kapısı kararı ve bulgu bastırma"
repo: https://github.com/l4NGEL/VEXYRON
cover:
  src: /images/vexyron/results.webp
  alt: Tarama sonucu — "production'a hazır değil" kararı ve kanıtlı bulgular
gallery:
  - src: /images/vexyron/scan.webp
    alt: Tarama ekranı — hedef, kimlik doğrulama ve kapsam seçenekleri
---

## Ne yapıyor

Kendi kendini test eden bir uygulama laboratuvarı: kasıtlı olarak güvenlik açığı barındıran bir web uygulaması, mobil backend API ve örnek APK; bir de bunları tarayan tester aracı. Tarayıcı güvenlik, smoke ve yük testlerinin sonucunu birleştirip **"production'a hazır mı"** sorusuna kanıtlı ve tekrarlanabilir bir cevap veriyor.

## Kapsam

| Alan | İçerik |
|---|---|
| Web | OWASP Top 10 tarzı açıklar: SQL injection, XSS, komut enjeksiyonu… |
| API | Kırık yetkilendirme (BOLA), kimlik doğrulama atlatma |
| Mobil | APK statik analizi |
| Ağ | Port ve servis taraması |
| Smoke test | Ağır taramadan önce "hedef ayakta mı" kontrolü |
| Yük testi | Aşamalı senaryolar, p50/p95/p99 gecikme, geçti/kaldı eşikleri |

Sonuçlar HTML, PDF ve JSON rapor olarak alınabiliyor; CI'da kapı olarak kullanılabiliyor ve bilinen bulgular gerekçesiyle bastırılabiliyor.

## Kapsam notu

Yalnızca sahibi olunan ya da test izni verilen hedefler içindir; varsayılan hedef yerel demo uygulaması.
