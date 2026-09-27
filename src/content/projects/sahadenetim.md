---
title: SahaDenetim
tagline: Bağlantısız sahada çalışan kurumsal varlık denetim uygulaması — rol bazlı onay ve audit trail.
categories: [web]
order: 15
period: Ağustos 2026
stack: [React Native, Expo, TypeScript, Firebase Firestore, EAS]
highlights:
  - "Rol bazlı süpervizör onay/red, her karar için audit trail"
  - "Offline çalışma + Firestore senkronu · CI + EAS build"
---

## Ne yapıyor

Enerji, bankacılık ve ulaştırma gibi sektörlerde saha ekipleri çoğu zaman internetin olmadığı yerlerde çalışıyor: trafo merkezleri, depo sahaları, kırsal bölgeler. SahaDenetim, teknisyenlerin varlık denetimlerini (trafo merkezi, pompa istasyonu, araç filosu, ATM…) offline yapabildiği bir mobil uygulama.

- Teknisyen denetimi sahada, bağlantı olmadan dolduruyor.
- Bağlantı gelince kayıtlar Firebase Firestore'a senkronize oluyor.
- Süpervizörler rol bazlı olarak onaylıyor ya da reddediyor; her karar audit trail'e yazılıyor.
- TypeScript strict mod, CI ve EAS ile build.
