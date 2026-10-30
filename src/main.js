import './style.css';
import C from './content.js';
import T from './translations.js';

let lang = 'ar';
try { lang = localStorage.getItem('lang') || (navigator.language.startsWith('ar') ? 'ar' : 'en'); } catch {}
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pick = v => (v && typeof v === 'object') ? (v[lang] || v.en || '') : (v || '');
const img = (src, alt, icon) => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : `<div class="ph" aria-hidden="true">${icon ? `<span>${icon}</span>` : ''}</div>`;
const wa = (msg, num = C.whatsapp) => `https://wa.me/${String(num).replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
// زر يفتح نافذة اختيار الشخص (هاشم أو ماهر) قبل واتساب أو الاتصال. href يبقى احتياطيًا للرقم الأول.
// Button that opens the person chooser (Hashem or Maher) before WhatsApp or a call. href stays as a fallback to the first number.
const waBtn = (msg, cls, label) => `<a class="${cls}" href="${wa(msg)}" target="_blank" rel="noopener" data-contact="wa" data-msg="${esc(msg)}">${label}</a>`;
const telBtn = (cls, label) => `<a class="${cls}" href="tel:${esc(C.phone)}" data-contact="tel">${label}</a>`;
// رسالة واتساب جاهزة لطلب خدمة محددة / Prefilled WhatsApp message requesting a specific service
const waService = s => pick(s.waMessage) || T[lang].waService.replace('{service}', pick(s.title));
const fmtDate = d => { const x = new Date(d); return isNaN(x) ? d : x.toLocaleDateString(lang === 'ar' ? 'ar-SY' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' }); };
const arrow = () => `<span class="arr" aria-hidden="true">${lang === 'ar' ? '←' : '→'}</span>`;

function render() {
  const t = T[lang], name = pick(C.name), short = pick(C.shortName) || name;
  document.documentElement.lang = lang; document.documentElement.dir = t.dir;
  document.title = `${name} | ${pick(C.tagline)}`;
  $('meta[name=description]').content = pick(C.intro);
  const icons = {
    linkedin: ['LinkedIn', '<path d="M6.5 8.5h-3V20h3zM5 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M20.5 13.3c0-3-1.6-4.9-4.2-4.9-1.4 0-2.4.7-2.8 1.4V8.5h-3V20h3v-6c0-1.5.7-2.6 2-2.6s1.9 1 1.9 2.6v6h3.1z"/>'],
    instagram: ['Instagram', '<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2"/>'],
    x: ['X', '<path d="M4 3.5h4.6l4.1 5.6 5-5.6h2.1l-6.2 7 7 9.5h-4.6l-4.5-6.1-5.5 6.1H3.9l6.6-7.4z"/>'],
    facebook: ['Facebook', '<path d="M13.5 21v-7.5H16l.4-3h-2.9V8.7c0-.9.3-1.5 1.5-1.5h1.5V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.6V21z"/>'],
    youtube: ['YouTube', '<path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8M10 15V9l5.2 3z"/>'],
    tiktok: ['TikTok', '<path d="M16.6 3h-3v12.2a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.6a5.7 5.7 0 1 0 4.8 5.6V9a7 7 0 0 0 4 1.3V7.2A4 4 0 0 1 16.6 3"/>']
  };
  const socials = Object.entries(C.social).filter(([k, u]) => u && icons[k])
    .map(([k, u]) => `<a href="${esc(u)}"${u === '#' ? '' : ' target="_blank" rel="noopener"'} aria-label="${icons[k][0]}" title="${icons[k][0]}"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">${icons[k][1]}</svg></a>`).join('');
  const phones = [C.phone, C.phone2].filter(Boolean);
  const telLinks = phones.map(p => { const who = pick(C.phoneNames?.[p]); return `${who ? `<span class="pname">${esc(who)}:</span> ` : ''}<a href="tel:${esc(p)}" dir="ltr">${esc(p)}</a>`; });
  const has = a => a && a.length;
  const featured = C.services.filter(s => s.featured);
  const links = [['home', t.home], ['services', t.services], ['about', t.about], ...(has(C.clients) || has(C.testimonials) ? [['clients', t.navClients]] : []), ...(has(C.news) ? [['news', t.navNews]] : []), ['contact', t.contact]];
  const slides = has(C.heroSlides) ? C.heroSlides : [{ image: C.heroImage }];
  const navLinks = links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('');
  $('#app').innerHTML = `
  <header><div class="wrap">
    <a class="brand" href="#home" aria-label="${esc(name)}">${C.logo ? `<img src="${esc(pick(C.logo))}" alt="${esc(name)}">` : `<span>${esc(short)}</span>`}</a>
    <nav id="nav" aria-label="Main">${navLinks}</nav>
    <button id="lang" type="button">${t.other}</button>
    <button id="menu" type="button" aria-expanded="false" aria-controls="nav" aria-label="${t.menu}"><span></span><span></span><span></span></button>
  </div></header>
  <main>
  <section id="home" class="hero" aria-roledescription="carousel" aria-label="${t.slides}">
    ${slides.map((s, i) => `<div class="slide${i === 0 ? ' active' : ''}" style="--hero:url('${esc(s.image)}')" aria-roledescription="slide" aria-label="${t.slide} ${i + 1} / ${slides.length}"${i ? ' aria-hidden="true"' : ''}><div class="wrap">
      <p class="eyebrow">${esc(name)}</p>
      ${i === 0 ? `<h1>${esc(pick(s.title) || pick(C.tagline))}</h1>` : `<h2 class="h1">${esc(pick(s.title))}</h2>`}
      <p>${esc(pick(s.text) || pick(C.intro))}</p>
      <div class="actions"><a class="btn light" href="${esc(s.link || '#services')}"${i ? ' tabindex="-1"' : ''}>${s.link ? t.learn : t.explore}</a></div>
    </div></div>`).join('')}
    ${slides.length > 1 ? `<div class="dots wrap">${slides.map((_, i) => `<button type="button" aria-label="${t.slide} ${i + 1}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('')}</div>` : ''}
  </section>

  ${has(C.stats) ? `<section class="stats-band"><div class="wrap"><dl class="stats">${C.stats.map(s => `<div><dt>${esc(s.value)}</dt><dd>${esc(pick(s.label))}</dd></div>`).join('')}</dl></div></section>` : ''}

  <section id="services"><div class="wrap"><h2>${t.services}</h2><p class="lead">${t.servicesSub}</p><div class="grid svc-grid">
    ${C.services.map(s => `<article class="card svc" id="svc-${esc(s.id)}"><div class="media">${img(s.image, pick(s.title), s.icon)}</div><div class="body">
      <h3>${esc(pick(s.title))}</h3><p>${esc(pick(s.text))}</p>
      ${has(s.items) ? `<details><summary>${t.details}</summary><ul>${s.items.map(i => `<li>${esc(pick(i))}</li>`).join('')}</ul></details>` : ''}
      ${waBtn(waService(s), 'more', `${t.request} ${arrow()}`)}
    </div></article>`).join('')}
  </div></div></section>

  <section id="about" class="alt"><div class="wrap">
    <div class="about">
      <div><h2>${t.about}</h2><p>${esc(pick(C.about.story))}</p></div>
      ${C.about.image ? `<img class="about-img${/\.svg$/.test(C.about.image) ? ' logo-panel' : ''}" src="${esc(C.about.image)}" alt="${esc(name)}" loading="lazy">` : ''}
    </div>
    ${has(C.about.history) ? `<h3 class="sub">${t.journey}</h3><ol class="timeline">${C.about.history.map(h => `<li><strong>${esc(pick(h.year))}</strong><p>${esc(pick(h.text))}</p></li>`).join('')}</ol>` : ''}
    <div class="vm"><div><h3>${t.vision}</h3><p>${esc(pick(C.about.vision))}</p></div><div><h3>${t.mission}</h3><p>${esc(pick(C.about.mission))}</p></div></div>
    ${has(C.about.team) ? `<h3 class="sub">${t.team}</h3><div class="grid team">${C.about.team.map(m => `<div class="card">${img(m.image, pick(m.name))}<div class="body"><h3>${esc(pick(m.name))}</h3><p class="small">${esc(pick(m.role))}</p></div></div>`).join('')}</div>` : ''}
  </div></section>

  ${has(featured) ? `<section id="featured"><div class="wrap"><h2>${t.featured}</h2><p class="lead">${t.featuredSub}</p>
    ${featured.map(s => `<article class="feature">${img(s.featuredImage || s.image, pick(s.title), s.icon)}<div class="body"><h3>${esc(pick(s.title))}</h3><p>${esc(pick(s.details || s.text))}</p>
    ${waBtn(waService(s), 'btn', t.request)}</div></article>`).join('')}
  </div></section>` : ''}

  ${has(C.clients) || has(C.testimonials) ? `<section id="clients" class="alt"><div class="wrap">
    ${has(C.clients) ? `<h2>${t.clientsTitle}</h2><ul class="logos">${C.clients.map(c => `<li>${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(pick(c.name))}" loading="lazy">` : `<span>${esc(pick(c.name))}</span>`}</li>`).join('')}</ul>` : ''}
    ${has(C.testimonials) ? `<h2 ${has(C.clients) ? 'class="gap"' : ''}>${t.clients}</h2><div class="grid">${C.testimonials.map(r => `<figure class="card quote"><div class="body"><blockquote>${esc(pick(r.quote))}</blockquote><figcaption><strong>${esc(pick(r.name))}</strong><span class="small">${esc(pick(r.role))}</span></figcaption></div></figure>`).join('')}</div>` : ''}
  </div></section>` : ''}

  ${has(C.news) ? `<section id="news"><div class="wrap"><h2>${t.news}</h2><div class="grid">${C.news.map(n => `<article class="card news"><div class="media">${img(n.image, pick(n.title))}</div><div class="body"><time class="small" datetime="${esc(n.date)}">${esc(fmtDate(n.date))}</time><h3>${esc(pick(n.title))}</h3><p>${esc(pick(n.text))}</p></div></article>`).join('')}</div></div></section>` : ''}

  <section class="cta"><div class="wrap"><div><h2>${esc(pick(C.cta.title))}</h2><p>${esc(pick(C.cta.text))}</p></div>
    <div class="actions"><a class="btn light" href="#contact">${t.contact}</a>${telBtn('btn outline', t.callNow)}${waBtn(t.waGeneral, 'btn outline', t.whatsapp)}</div>
  </div></section>

  <section id="contact"><div class="wrap"><h2>${t.contact}</h2><div class="contact-grid">
    <div><dl>
      <div><dt>${t.address}</dt><dd>${esc(pick(C.address))}</dd></div>
      <div><dt>${t.phone}</dt><dd>${telLinks.join('<br>')}<br>${waBtn(t.waGeneral, '', t.whatsapp)}</dd></div>
      <div><dt>${t.email}</dt><dd><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></dd></div>
      <div><dt>${t.hours}</dt><dd>${esc(pick(C.hours))}</dd></div></dl>
      <iframe src="${esc(C.mapEmbed)}" title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    <form id="form" novalidate>
      <label>${t.fName}<input name="name" autocomplete="name"><span class="err"></span></label>
      <label>${t.fEmail}<input name="email" type="email" autocomplete="email" dir="ltr"><span class="err"></span></label>
      <label>${t.fPhone}<input name="phone" type="tel" autocomplete="tel" dir="ltr"><span class="err"></span></label>
      <label>${t.fSubject}<input name="subject"><span class="err"></span></label>
      <label>${t.fMsg}<textarea name="message" rows="5"></textarea><span class="err"></span></label>
      <input class="hp" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn" type="submit">${t.send}</button><div id="status" role="status"></div>
    </form></div></div></section>
  </main>
  <footer><div class="wrap cols">
    <div>${C.logoOnDark ? `<img class="flogo" src="${esc(pick(C.logoOnDark))}" alt="${esc(name)}" loading="lazy">` : `<strong class="fname">${esc(name)}</strong>`}<p>${esc(pick(C.intro))}</p></div>
    <div><h4>${t.quickLinks}</h4><ul>${links.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ul></div>
    <div><h4>${t.services}</h4><ul>${C.services.map(s => `<li><a href="#svc-${esc(s.id)}">${esc(pick(s.title))}</a></li>`).join('')}</ul></div>
    <div><h4>${t.reachUs}</h4><ul>
      <li>${esc(pick(C.address))}</li>
      ${telLinks.map(l => `<li>${l}</li>`).join('')}
      <li><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></li>
      <li>${esc(pick(C.hours))}</li></ul>
      </div>
  </div>
  ${socials ? `<div class="wrap follow"><span class="flabel">${t.follow}</span>${C.hashtag ? `<span class="tag" dir="auto">${esc(C.hashtag)}</span>` : ''}<div class="social">${socials}</div></div>` : ''}
  <div class="wrap legal"><small>© ${new Date().getFullYear()} ${esc(name)} · ${t.rights}</small></div></footer>
  <dialog id="who" aria-labelledby="who-title"><form method="dialog"><button class="x" aria-label="${t.close}">×</button></form>
    <h3 id="who-title"></h3><div class="who-list"></div></dialog>`;
  $('#lang').onclick = () => { lang = lang === 'ar' ? 'en' : 'ar'; try { localStorage.setItem('lang', lang); } catch {} render(); };
  $('#form').onsubmit = submit;
  const menu = $('#menu'), nav = $('#nav');
  const setMenu = open => { menu.setAttribute('aria-expanded', open); nav.classList.toggle('open', open); };
  menu.onclick = () => setMenu(menu.getAttribute('aria-expanded') !== 'true');
  nav.onclick = e => { if (e.target.closest('a')) setMenu(false); };
  document.onkeydown = e => { if (e.key === 'Escape') setMenu(false); };
  chooser(phones);
  reveal();
  slideshow();
}

// نافذة اختيار الشخص: عند الضغط على زر واتساب أو اتصال تظهر الأسماء، واختيار اسم يفتح رقمه
// Person chooser: WhatsApp and call buttons show the names first, and picking one opens that person's number
function chooser(phones) {
  const t = T[lang], dlg = $('#who');
  if (phones.length < 2 || !dlg.showModal) return;
  document.querySelectorAll('[data-contact]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const isWa = a.dataset.contact === 'wa';
    dlg.querySelector('h3').textContent = isWa ? t.whoWa : t.whoCall;
    dlg.querySelector('.who-list').innerHTML = phones.map(p => {
      const who = pick(C.phoneNames?.[p]) || p;
      const href = isWa ? wa(a.dataset.msg, p) : `tel:${p}`;
      return `<a class="who" href="${esc(href)}"${isWa ? ' target="_blank" rel="noopener"' : ''}><strong>${esc(who)}</strong><span dir="ltr">${esc(p)}</span><em>${isWa ? t.whatsapp : t.callNow}</em></a>`;
    }).join('');
    dlg.showModal();
  }));
  dlg.onclick = e => { if (e.target === dlg || e.target.closest('.who')) dlg.close(); };
}

// عرض شرائح الواجهة: تبديل كل 6 ثوانٍ، يتوقف عند المرور بالمؤشر أو التركيز، ولا يتحرك تلقائيًا مع تقليل الحركة
// Hero slideshow: advances every 6s, pauses on hover/focus, no autoplay when reduced motion is on
let timer;
function slideshow() {
  clearInterval(timer);
  const hero = $('.hero'), slides = [...hero.querySelectorAll('.slide')], dots = [...hero.querySelectorAll('.dots button')];
  if (slides.length < 2) return;
  let cur = 0, paused = false;
  const show = n => {
    cur = (n + slides.length) % slides.length;
    slides.forEach((s, i) => { const on = i === cur; s.classList.toggle('active', on); s.toggleAttribute('aria-hidden', !on); s.querySelectorAll('a').forEach(a => on ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')); });
    dots.forEach((d, i) => d.toggleAttribute('aria-current', i === cur));
  };
  dots.forEach((d, i) => d.onclick = () => show(i));
  hero.onmouseenter = hero.onfocusin = () => paused = true;
  hero.onmouseleave = hero.onfocusout = () => paused = false;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  timer = setInterval(() => { if (!paused && !document.hidden) show(cur + 1); }, 6000);
}

// ظهور الأقسام بلطف عند التمرير / Sections ease in as they scroll into view
let io;
function reveal() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  io?.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  document.querySelectorAll('main section:not(.hero) .wrap > *, .grid > *, .logos > li, .timeline > li, .feature, footer .cols > *').forEach(el => {
    if (el.matches('.grid, .logos, .timeline')) return;
    const i = [...el.parentElement.children].indexOf(el);
    if (el.parentElement.matches('.grid, .logos, .cols, .timeline')) el.style.transitionDelay = `${(i % 4) * 90}ms`;
    el.classList.add('reveal'); io.observe(el);
  });
}

async function submit(e) {
  e.preventDefault();
  const f = e.target, t = T[lang], st = $('#status'), v = Object.fromEntries(new FormData(f));
  let bad = false;
  const rules = { name: x => x.trim(), email: x => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x), phone: x => /^[+\d\s()-]{7,20}$/.test(x), subject: x => x.trim(), message: x => x.trim() };
  for (const [k, ok] of Object.entries(rules)) {
    const el = f.elements[k], msg = !v[k].trim() ? t.vReq : !ok(v[k]) ? (k === 'email' ? t.vEmail : t.vPhone) : '';
    el.nextElementSibling.textContent = msg; if (msg) bad = true;
  }
  if (bad || v.botcheck) return;
  const btn = f.querySelector('button'); btn.disabled = true; btn.textContent = t.sending; st.className = '';
  try {
    const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: C.web3formsKey, name: v.name, email: v.email, phone: v.phone, subject: v.subject, message: v.message }) });
    if (!(await r.json()).success) throw 0;
    f.reset(); st.textContent = t.ok; st.className = 'ok';
  } catch { st.textContent = t.fail; st.className = 'fail'; }
  btn.disabled = false; btn.textContent = t.send;
}
render();
