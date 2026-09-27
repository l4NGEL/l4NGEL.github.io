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
  content/projects/*.mdx   her proje bir dosya: frontmatter + vaka çalışması metni
  diagrams/*.astro         elle çizilmiş SVG şemalar (tema renklerini kullanır)
  components/              Figure, Table
  pages/index.astro        ana sayfa: giriş + konu başlıklarına göre proje listesi
  pages/projeler/[slug]    proje sayfaları (otomatik üretilir)
  pages/hakkimda.astro     deneyim, eğitim, beceriler
  layouts/Base.astro       ortak şablon
  styles/global.css        tasarım: tek sütun, Source Serif 4
public/images/             ekran görüntüleri (webp)
```

## Yeni proje eklemek

`src/content/projects/` altına bir `.mdx` dosyası ekle. Alanlar `src/content.config.ts` içinde tanımlı.
İki nokta içeren metinleri tırnak içine al:

```yaml
---
title: "Proje adı"
description: "Listede görünen bir iki cümle"
group: goru            # goru, sistem, ses-dil, web (src/categories.ts)
order: 18              # sıralama
date: "Eki 2026"
stack: [Python, ...]
repo: https://github.com/...   # opsiyonel
thumb: /images/x/y.webp        # opsiyonel, listede sağda küçük görsel
wip: true                      # opsiyonel, "devam ediyor"
---
import Figure from '../../components/Figure.astro';

Metin...

<Figure src="/images/x/z.webp" caption="Açıklama" />
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
