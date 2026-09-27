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
  components/              Figure (numaralı şekil), Metrics, Table
  pages/index.astro        ana sayfa: seçili çalışmalar + filtreli proje dizini
  pages/projeler/[slug]    proje sayfaları (otomatik üretilir, içindekiler menüsüyle)
  pages/hakkimda.astro     deneyim, eğitim, beceriler
  layouts/Base.astro       ortak şablon
  styles/global.css        tasarım: Archivo + Newsreader + IBM Plex Mono
public/images/             ekran görüntüleri (webp)
```

## Yeni proje eklemek

`src/content/projects/` altına bir `.mdx` dosyası ekle. Alanlar `src/content.config.ts` içinde tanımlı.
İki nokta içeren metinleri tırnak içine al:

```yaml
---
title: "Proje adı"
tagline: "Dizinde görünen tek satırlık açıklama"
summary: "Proje sayfasının ve seçili çalışmalar bloğunun giriş paragrafı"
categories: [cv, ai, sys, web, sec]
featured: false          # true ise ana sayfada büyük blok olarak
order: 18
period: Ekim 2026
year: 2026
status: geliştiriliyor   # opsiyonel
stack: [Python, ...]
metrics:                 # opsiyonel, büyük rakamlar
  - { value: '%90', label: 'açıklama' }
repo: https://github.com/...   # opsiyonel
cover: { src: /images/x/y.webp, alt: Şekil açıklaması }   # opsiyonel
diagram: autotrack       # opsiyonel; ana sayfada kapak yerine şema (src/diagrams/index.ts)
---
import Figure from '../../components/Figure.astro';

## Başlık

Metin... Görsel için:

<Figure n={2} src="/images/x/z.webp" caption="Açıklama" bare />
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
