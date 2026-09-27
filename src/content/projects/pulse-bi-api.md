---
title: Pulse BI API
tagline: Çok kiracılı olay analitiği API'si — uygulamalar olay gönderir, toplu ve anlık istatistik sorgular.
categories: [web]
order: 17
period: Ağustos 2026
stack: [Node.js, Express, PostgreSQL, Redis]
highlights:
  - "Redis cache-aside ile 7 günlük toplamlar; Redis INCR ile O(1) anlık sayaçlar"
  - "Redis tabanlı rate limiting, uygulama başına API anahtarı"
---

## Mimari

- **Express** REST API; kayıtlı her uygulama kendi API anahtarıyla kimlik doğruluyor.
- **PostgreSQL** ham olayların tek doğruluk kaynağı.
- **Redis** üç ayrı iş yapıyor:
  1. **Cache-aside toplamlar** (`GET /stats`): 7 günlük toplama sorgusu pahalı olduğu için sonuç kısa TTL ile Redis'te tutuluyor; cache kaçırılınca Postgres'e düşüp yeniden dolduruluyor.
  2. **Anlık sayaçlar** (`GET /stats/realtime/:eventType`): her olay günlük bir anahtara `INCR` yapıyor, "bugün kaç satın alma oldu" sorusu Postgres'e gitmeden tek Redis okumasıyla cevaplanıyor.
  3. **Rate limiting** (`POST /events`): Redis tabanlı sabit pencere sınırlayıcı.
