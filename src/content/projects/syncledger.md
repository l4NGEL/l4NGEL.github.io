---
title: SyncLedger
tagline: Offline-first gelir/gider uygulaması — telefon ve web arasında gerçek zamanlı senkron ve çakışma çözümü.
categories: [web]
order: 14
period: Ağustos 2026
stack: [React Native, Expo, TypeScript, Firebase Firestore]
highlights:
  - "Outbox kuyruğu + optimistic concurrency ile çakışma çözümü"
  - "Offline'ken tam işlevsel; bağlantı gelince kuyruk boşalıyor"
repo: https://github.com/l4NGEL/SyncLedger
---

## Çözdüğü problem

Çoğu portföy uygulaması "API'den veri çek, listele" seviyesinde kalıyor. SyncLedger gerçek mobil uygulamaların karşılaştığı zor soruya odaklanıyor: **kullanıcı offline'ken yaptığı değişiklik, başka bir cihazdan gelen değişiklikle çakışırsa ne olur?**

## Nasıl

- Her yazma önce yerel depoya ve bir **outbox kuyruğuna** gidiyor; arayüz anında güncelleniyor.
- Bağlantı geldiğinde kuyruk sırayla Firestore'a gönderiliyor.
- Her kayıt bir sürüm numarası taşıyor. Gönderim bir Firestore transaction'ı içinde yapılıyor; sunucudaki sürüm, cihazın bildiği sürümden farklıysa yazma reddediliyor (**optimistic concurrency**).
- Çakışmada iki sürüm (bu cihaz / sunucu) kullanıcıya yan yana gösteriliyor ve hangisinin kalacağını kullanıcı seçiyor.
- `onSnapshot` dinleyicisiyle başka cihazdan gelen değişiklikler anında görünüyor.
