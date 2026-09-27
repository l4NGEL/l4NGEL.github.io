# Portföy sitesi

Astro ile üretilen statik kişisel portföy sitesi.

## Çalıştırma

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ altına statik çıktı
```

## Yapı

```
src/
  content/projects/*.md   her proje bir dosya (frontmatter + detay metni)
  pages/index.astro       ana sayfa: öne çıkanlar + tüm projeler + filtre
  pages/projeler/[slug]   proje detay sayfaları (otomatik üretilir)
  pages/hakkimda.astro    deneyim, eğitim, beceriler
  layouts/Base.astro      ortak şablon (menü, footer, tema)
  styles/global.css       tasarım
public/images/            ekran görüntüleri (webp)
```

## Yeni proje eklemek

`src/content/projects/` altına bir `.md` dosyası ekle. Alanlar `src/content.config.ts` içinde tanımlı:

```yaml
---
title: Proje adı
tagline: Tek cümlelik açıklama
categories: [cv, ai, sys, web, sec]   # biri ya da birkaçı
featured: false                       # true ise "Öne çıkanlar"da
order: 18                             # sıralama
period: Ekim 2026
status: geliştiriliyor                # opsiyonel
stack: [Python, ...]
highlights:
  - "Kartta görünen madde; <b>kalın</b> kullanılabilir"
repo: https://github.com/...          # opsiyonel, yoksa "talep üzerine"
cover: { src: /images/x/y.webp, alt: Açıklama }   # opsiyonel
---

Detay sayfası metni (Markdown).
```

## Yayınlama

`main` dalına her push'ta `.github/workflows/deploy.yml` siteyi derleyip GitHub Pages'e yayınlar
(repo ayarlarında Pages → Source: **GitHub Actions** seçilmeli).

### Kendi domain'ini bağlamak

1. `public/CNAME` dosyası oluştur, içine yalnızca domain'i yaz (ör. `beyzanurkilic.com`).
2. `astro.config.mjs` içindeki `site` değerini `https://beyzanurkilic.com` yap.
3. Domain sağlayıcısının DNS ayarlarında:
   - kök domain için GitHub Pages'in A kayıtları: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` için CNAME → `l4ngel.github.io`
4. Repo ayarlarında Pages → Custom domain alanına domain'i yaz, "Enforce HTTPS"i işaretle.
