// Site genelindeki hareketler. "Hareketi azalt" tercihi açıksa hiçbiri çalışmaz;
// içerik her durumda JS olmadan da görünür kalır (gizleme yalnızca .js-motion sınıfıyla).
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

/* ---------- Kaydırınca beliren bloklar ---------- */
const REVEAL = [
  '.shead', '.work', '.role-row', '.index li', '.cert', '.cert-list li', '.cv-list li',
  '.p-metrics', '.p-cover', '.toc', '.prose > *', '.certs', '.next',
].join(',');

function reveal(el: Element) {
  el.classList.add('in');
  const fig = el.matches('.fig') ? el : el.querySelector('.fig');
  if (fig) drawDiagram(fig);
  el.querySelectorAll<HTMLElement>('.metric b').forEach(countUp);
}

if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      // Aynı anda görünür olanlara kısa bir sıra gecikmesi ver.
      let i = 0;
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.style.transitionDelay = `${Math.min(i++, 6) * 60}ms`;
        reveal(el);
        // Gecikme yalnızca belirme için; sonra hover geçişlerini yavaşlatmasın.
        setTimeout(() => (el.style.transitionDelay = ''), 1300);
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  document.querySelectorAll(REVEAL).forEach((el) => {
    // İlk ekrandakiler gözlemciyi beklemeden hemen gelsin.
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.92 && r.bottom > 0) reveal(el);
    else io.observe(el);
  });
  // Yedek: gözlemci tetiklenmezse (bazı gömülü/arka plan görünümleri) kaydırmada
  // doğrudan konuma bakılır; hiçbir blok gizli kalmaz.
  let last = 0;
  const sweep = () => {
    const now = Date.now();
    if (now - last < 120) return;
    last = now;
    document.querySelectorAll(`:is(${REVEAL}):not(.in)`).forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) {
        reveal(el);
        io.unobserve(el);
      }
    });
  };
  addEventListener('scroll', sweep, { passive: true });
  setTimeout(sweep, 1500);
} else {
  document.querySelectorAll(REVEAL).forEach((el) => el.classList.add('in'));
}
root.classList.add('motion-ready');

/* ---------- Sayılar: görünür olunca sayarak artar ---------- */
function countUp(el: HTMLElement) {
  if (reduce || el.dataset.counted) return;
  el.dataset.counted = '1';
  const text = el.textContent ?? '';
  // Tek bir sayı içeren değerler: "%88.6", "r = 0.892", "0,990", "127", "~30"
  const m = text.match(/^([^\d]*?)(\d+)([.,](\d+))?([^\d]*)$/);
  if (!m) return;
  const [, pre, int, , frac = '', post] = m;
  const sep = m[3]?.[0] ?? '';
  const target = parseFloat(`${int}.${frac || '0'}`);
  const decimals = frac.length;
  const t0 = performance.now();
  const dur = 1100;
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = (target * eased).toFixed(decimals);
    el.textContent = pre + (sep ? v.replace('.', sep) : v) + post;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = text;
  };
  requestAnimationFrame(step);
}

/* ---------- Şemalar: oklar çizilir, kutular sırayla belirir ---------- */
function drawDiagram(fig: Element) {
  if (reduce || fig.classList.contains('drawn')) return;
  const svg = fig.querySelector('svg.dg');
  if (!svg) return;
  fig.classList.add('drawn');
  svg.querySelectorAll<SVGRectElement>('.box, .zone').forEach((b, i) => {
    b.style.animation = `dg-fade .5s ease ${i * 45}ms both`;
  });
  svg.querySelectorAll<SVGTextElement>('text').forEach((t, i) => {
    t.style.animation = `dg-fade .5s ease ${120 + i * 12}ms both`;
  });
  svg.querySelectorAll<SVGGeometryElement>('path.ln:not(.dash), line.trend').forEach((p, i) => {
    const len = p.getTotalLength?.() ?? 0;
    if (!len || p.classList.contains('trend')) {
      p.style.animation = `dg-fade .6s ease ${300 + i * 60}ms both`;
      return;
    }
    p.style.strokeDasharray = `${len}`;
    p.style.strokeDashoffset = `${len}`;
    p.style.animation = `dg-draw .7s cubic-bezier(.3,.7,.2,1) ${250 + i * 70}ms forwards`;
  });
  svg.querySelectorAll<SVGCircleElement>('.pt').forEach((c, i) => {
    c.style.transformOrigin = `${c.getAttribute('cx')}px ${c.getAttribute('cy')}px`;
    c.style.animation = `dg-pop .5s cubic-bezier(.3,1.4,.5,1) ${400 + i * 80}ms both`;
  });
}

/* ---------- Üst menü: kaydırınca gölge; okuma ilerleme çubuğu ---------- */
const bar = document.querySelector<HTMLElement>('.progress');
const onPage = !!document.querySelector('.prose');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    root.classList.toggle('scrolled', scrollY > 8);
    if (bar && onPage) {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    }
    ticking = false;
  });
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Tema geçişi: yumuşak çapraz geçiş ---------- */
document.getElementById('theme')?.addEventListener('click', () => {
  const apply = () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch {}
  };
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (!reduce && doc.startViewTransition) doc.startViewTransition(apply);
  else apply();
});

/* ---------- Proje filtresi: satırlar yumuşakça yeniden dizilir ---------- */
const rows = [...document.querySelectorAll<HTMLElement>('.index li')];
const btns = [...document.querySelectorAll<HTMLButtonElement>('#filters button')];
for (const b of btns) {
  b.addEventListener('click', () => {
    const f = b.dataset.f!;
    btns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    let i = 0;
    rows.forEach((r) => {
      const show = f === 'all' || r.dataset.cat!.split(' ').includes(f);
      r.hidden = !show;
      if (show && !reduce) {
        r.classList.remove('refilter');
        void r.offsetWidth; // animasyonu yeniden başlat
        r.style.animationDelay = `${Math.min(i++, 10) * 35}ms`;
        r.classList.add('refilter');
      }
    });
  });
}
