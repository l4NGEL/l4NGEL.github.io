---
title: Stereo 3D MOT
tagline: Sıfırdan C++17 stereo görü hattı — disparite, metrik derinlik, 3B çoklu hedef takibi, görsel odometri ve ROS2 düğümü.
categories: [cv, sys]
featured: true
order: 2
period: Eylül 2026
stack: [C++17, OpenCV, Eigen, ONNX Runtime, CUDA, ROS2, Docker, GoogleTest, CI]
highlights:
  - "Gerçek KITTI tracking ve odometry sekanslarında uçtan uca çalışıyor"
  - "ONNX Runtime CUDA ile tespit <b>~52 ms → 12–17 ms</b> (RTX 2080)"
  - "Kendi CLEAR-MOT / IDF1 hesaplayıcısı, py-motmetrics'e karşı doğrulandı"
  - "Önceden sabitlenen hedeflere karşı bağımsız değerlendirme — tutmayan hedefler raporda açıkça"
repo: https://github.com/l4NGEL/stereo-3d-mot
cover:
  src: /images/stereo-3d-mot/demo.webp
  alt: Sol kamera karesi, tahmini disparite, renklendirilmiş derinlik ve gerçek disparite
---

## Ne yapıyor

İki kameradan (sol + sağ) gelen görüntülerle şu sorulara cevap veriyor: her pikselin uzaklığı ne, bir nesne 3B uzayda nerede, bu karedeki nesne önceki karedeki hangisi ve kameranın kendisi nasıl hareket ediyor?

```
Stereo çift → Rektifikasyon → Eşleştirme (BM/SGBM) → Disparite
  → Metrik derinlik Z = fB/(d + doffs) → 3B yeniden izdüşüm
  → 2B tespit (YOLOv8/v5, ONNX Runtime) → 3B'ye yükseltme
  → Takip: tahmin → kapı → ilişkilendirme → güncelleme
  → Track ID + X, Y, Z + hız → CSV / PLY çıktısı
```

8 fazın hepsi uygulandı: stereo derinlik, YOLO çıkarımı, 3B MOT, KITTI değerlendirmesi, görünüm-destekli ilişkilendirme, gerçek zamanlı optimizasyon, stereo görsel odometri (ORB) ve ROS2 sarmalayıcısı. Linux öncelikli, Docker içinde çalışıyor; CI her push'ta derleyip testleri koşuyor.

## Doğrulama

- CLEAR-MOT (MOTA, MOTP, ID switch, fragmentasyon) ve IDF1 sıfırdan yazıldı; rastgele denemeler ve elle kurulmuş uç durumlarla py-motmetrics'e karşı doğrulandı.
- Görsel odometrideki poz/ölçek matematiği, C++'a geçmeden önce Python'da bilinen sentetik kamera hareketiyle kontrol edildi.
- CUDA ölçümü: ilk karşılaştırma tüm karelerin ortalamasıyla "hızlanma yok" diyordu. Isınma karelerini ayırınca kararlı durumda CUDA tespiti 12–17 ms, CPU ~52 ms çıktı; hata raporda düzeltildi.

## Bağımsız değerlendirme ve sınırlamalar

Her bileşen, hedefleri önceden sabitlenmiş, hiç kullanılmamış veride yeniden ölçüldü. Metrik kodu ve sayılar birebir tekrarlanıyor, ancak **hedeflerin çoğu tutmadı**:

- 3B takip, derinlik kullanmayan bir SORT tabanından daha iyi değil.
- Görsel odometri standart KITTI metriğiyle %14 sürükleniyor.
- Hattın tamamı ~6 FPS'te çalışıyor, hedef 20 FPS'ti (optimizasyonlarla 4.9 → 7.8 FPS).

Önceki bazı açıklamaların yanlış olduğu anlaşıldı; README'de yerinde düzeltildi.
