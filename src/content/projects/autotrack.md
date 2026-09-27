---
title: AutoTrack
tagline: Çoklu hedef tespit ve takip sistemi — YOLOv8, Kalman ve OSNet Re-ID'yi sahneye göre ağırlıklandıran adaptif ilişkilendirme.
categories: [cv, ai]
featured: true
order: 1
period: Ağustos – Eylül 2026
stack: [Python, PyTorch, YOLOv8, OSNet, Kalman, motmetrics, Gradio]
highlights:
  - "OSNet Re-ID Market-1501'de eğitildi: <b>Rank-1 %88.6, mAP %72.0</b>; ardından MOT17'ye domain-adaptif fine-tune"
  - "7 MOT17 sekansında eleme temelli kök neden analizi — takip hatası kalabalık yoğunluğuyla <b>r = 0.892</b> korele"
  - "VisDrone ile hava görüntüsüne genişletme; ayrı train/validation/test sahneleriyle değerlendirme"
  - "<b>188 test</b> · Gradio arayüzü: video, webcam ve IP kamera"
cover:
  src: /images/autotrack/demo.webp
  alt: MOT17-04 sekansında canlı takip çıktısı — kişi ve araç kutuları, track ID'leri
---

## Ne yapıyor

Bir video akışında (sabit kamera, drone kamerası, IP kamera) birden fazla nesneyi tespit ediyor, kare kare takip ediyor ve tanımlı kurallara göre hangi hedefin öncelikli olduğunu gerekçesiyle belirliyor: **algıla → takip et → karar ver**.

Takipçinin kendi katkısı `AdaptiveTracker`: IoU, Kalman hareket modeli ve Re-ID görünüm benzerliğini sabit ağırlıklarla değil, her iz için örtülme, hız ve kırpıntı kalitesine göre değişen ağırlıklarla birleştiriyor. Örneğin örtülen bir kişide IoU güvenilmez olduğu için Re-ID'nin ağırlığı artıyor.

## Araştırma süreci

Proje "YOLO'ya bir takipçi bağladım" seviyesinde kalmadı; gerçek MOT17 benchmark verisi üzerinde çok fazlı bir kök neden araştırmasına dönüştü. Her iddia bir sonraki fazda daha geniş ya da hiç görülmemiş veriyle test edildi:

- **Re-ID eğitimi:** OSNet Market-1501'de eğitildi (Rank-1 %88.6, mAP %72.0), sonra MOT17'nin ayrı sekanslarından çıkarılan kişi kırpıntılarıyla domain-adaptif fine-tune edildi. Değerlendirme sekansları eğitimde hiç kullanılmadı.
- **Eleme zinciri:** Bir ID-switch şikayetinden başlayıp sırayla ilişkilendirme algoritması (elendi), tespit recall'u (zayıfladı) ve sonunda metriğin kendi sınır-karesi tanımı (kök neden) test edildi. Bu etkinin kalabalık yoğunluğuyla ilişkisi 7 sekansta ölçüldü: **r = 0.892**. İkinci, ayrı bir hata modu (uzun süreli kısmi görünürlük) **r = 0.935** ile korele çıktı.
- **Önce küçük test:** Önerilen düzeltmeler gerçek koda alınmadan önce izole prototiplerde denendi; iki tanesi sıfır etki gösterdi ve alınmadı.
- **Kendi kodunda bulunan hatalar:** tek karede 685 px'lik imkânsız sıçramaya yol açan mesafe kapısı hatası, kare hızına kör mesafe bütçesi (bir sekansta MOTA'yı %−10.6'ya düşürüyordu, düzeltmeyle %+10.1), sessizce ikinci bir güven eşiği uygulayan parametre ve NumPy 2.0 / PyTorch 2.6 uyumluluk kırılmaları.

## Hava görüntüsü (VisDrone)

COCO ile eğitilmiş dedektör drone görüntüsündeki küçük insanları hiç tespit edemedi (ham YOLO çıktısıyla doğrulandı). VisDrone verisiyle `imgsz=1280` fine-tune sonrası yoğun sahnede tespit recall'u **%15.1 → %68.9** çıktı; seyrek sahnede ise iyileşme olmadı. Sonrasında 3 yeni sahneyle gerçek bir train/validation/test ayrımı kuruldu. Validasyonda seçilen ayar final testte keşif amaçlı seçimden daha kötü çıktı, bu da raporda olduğu gibi yazıldı.

## Arayüz

Gradio tabanlı arayüz `main.py`'nin kullandığı aynı sınıfları kullanıyor: video yükleme, PC kamerası ve RTSP/HTTP IP kamera. Takip edilecek sınıflar (kişi, araç, bisiklet…) seçilebiliyor.

## Bilinen sınırlamalar

- Mutlak MOTA (%20–31) düşük; amaç SOTA doğruluk değil, sağlam bir ölçüm ve kök neden metodolojisi.
- RTX 2080'de ~9–14 FPS; gerçek zamanlı/gömülü çalışma için optimize edilmedi.
- Drone görüntüsündeki ilerleme kısmi ve sahneye özgü; genelleme iddiası yok.
