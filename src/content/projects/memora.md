---
title: Memora
tagline: Etkinlik yönetim platformu — dijital davetiye, RSVP, QR ile misafir erişimi ve ortak fotoğraf/video galerisi.
categories: [web]
order: 16
period: Temmuz 2026
stack: [Node.js, Express, PostgreSQL, Flutter, Vite, WebSocket, Docker]
highlights:
  - "Node.js + PostgreSQL REST API; JWT ve imza doğrulamalı Google/Apple girişi"
  - "Flutter ev sahibi uygulaması + uygulama gerektirmeyen Vite misafir web portalı"
  - "WebSocket ile canlı slayt gösterisi · iyzico ödeme"
---

## Bileşenler

- **Backend (Node.js + Express + PostgreSQL):** 14 REST endpoint; access + refresh token ile JWT; Google ve Apple girişinde ID token imzası sunucuda doğrulanıyor; iyzico ödeme entegrasyonu.
- **Ev sahibi uygulaması (Flutter, iOS & Android):** etkinlik oluşturma, RSVP ve medya paneli, masonry galeri, QR kod yönetimi, WebSocket ile canlı slayt gösterisi.
- **Misafir portalı (Vite):** misafir QR kodu okutarak uygulama indirmeden davetiyeye ulaşıyor, RSVP formunu dolduruyor, fotoğraf/video yüklüyor.
- **Docker Compose** ile tüm yığın tek komutla ayağa kalkıyor.
