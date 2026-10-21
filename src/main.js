import './style.css';
import C from './content.js';
import T from './translations.js';

let lang = localStorage.getItem('lang') || (navigator.language.startsWith('ar') ? 'ar' : 'en');
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pick = v => (v && typeof v === 'object') ? (v[lang] || v.en || '') : (v || '');
const img = (src, alt) => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : `<div class="ph" aria-hidden="true"></div>`;
const wa = msg => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
const fmtDate = d => { const x = new Date(d); return isNaN(x) ? d : x.toLocaleDateString(lang === 'ar' ? 'ar-AE' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' }); };

function render() {
  const t = T[lang], name = pick(C.name);
  document.documentElement.lang = lang; document.documentElement.dir = t.dir;
  document.title = `${name} | ${pick(C.tagline)}`;
  $('meta[name=description]').content = pick(C.intro);
  const logo = C.logo ? `<img src="${esc(C.logo)}" alt="">` : '';
  const socials = Object.entries(C.social).filter(([, u]) => u)
    .map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${{instagram:'Instagram',facebook:'Facebook',linkedin:'LinkedIn',youtube:'YouTube',x:'X'}[k]}</a>`).join('');
  const has = a => a && a.length;
  const featured = C.services.filter(s => s.featured);
  const links = [['home', t.home], ['services', t.services], ['about', t.about], ...(has(C.clients) || has(C.testimonials) ? [['clients', t.navClients]] : []), ...(has(C.news) ? [['news', t.navNews]] : []), ['contact', t.contact]];
  const navLinks = links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('');
  $('#app').innerHTML = `
  <header><div class="wrap">
    <a class="brand" href="#home">${logo}<span>${esc(name)}</span></a>
    <button id="lang" type="button">${t.other}</button>
    <button id="menu" type="button" aria-expanded="false" aria-controls="nav" aria-label="${t.menu}"><span></span><span></span><span></span></button>
    <nav id="nav" aria-label="Main">${navLinks}</nav>
  </div></header>
  <main>
  <section id="home" class="hero" ${C.heroImage ? `style="background-image:linear-gradient(rgba(11,42,91,.85),rgba(11,42,91,.6)),url('${esc(C.heroImage)}')"` : ''}><div class="wrap">
    <p class="eyebrow">${esc(name)}</p>
    <h1>${esc(pick(C.tagline))}</h1><p>${esc(pick(C.intro))}</p>
    <div class="actions"><a class="btn light" href="#contact">${t.contact}</a><a class="btn outline" href="${wa(name)}" target="_blank" rel="noopener">${t.whatsapp}</a></div>
    ${has(C.stats) ? `<dl class="stats">${C.stats.map(s => `<div><dt>${esc(s.value)}</dt><dd>${esc(pick(s.label))}</dd></div>`).join('')}</dl>` : ''}
  </div></section>

  <section id="services" class="alt"><div class="wrap"><h2>${t.services}</h2><p class="lead">${t.servicesSub}</p><div class="grid">
    ${C.services.map((s, i) => `<article class="card svc"><div class="body"><span class="num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h3>${esc(pick(s.title))}</h3><p>${esc(pick(s.text))}</p></div></article>`).join('')}
  </div></div></section>

  <section id="about"><div class="wrap"><div class="two about">
    <div><h2>${t.about}</h2><p>${esc(pick(C.about.story))}</p></div>
    <div class="vm"><div><h3>${t.vision}</h3><p>${esc(pick(C.about.vision))}</p></div><div><h3>${t.mission}</h3><p>${esc(pick(C.about.mission))}</p></div></div>
  </div>
    ${has(C.about.team) ? `<h3 class="sub">${t.team}</h3><div class="grid team">${C.about.team.map(m => `<div class="card">${img(m.image, pick(m.name))}<div class="body"><h3>${esc(pick(m.name))}</h3><p class="small">${esc(pick(m.role))}</p></div></div>`).join('')}</div>` : ''}
  </div></section>

  ${has(featured) ? `<section id="featured" class="alt"><div class="wrap"><h2>${t.featured}</h2><p class="lead">${t.featuredSub}</p>
    ${featured.map(s => `<article class="feature">${img(s.image, pick(s.title))}<div><h3>${esc(pick(s.title))}</h3><p>${esc(pick(s.details || s.text))}</p>
    <a class="btn" href="${wa(pick(s.title))}" target="_blank" rel="noopener">${t.request}</a></div></article>`).join('')}
  </div></section>` : ''}

  ${has(C.clients) || has(C.testimonials) ? `<section id="clients"><div class="wrap">
    ${has(C.clients) ? `<h2>${t.clientsTitle}</h2><ul class="logos">${C.clients.map(c => `<li>${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(pick(c.name))}" loading="lazy">` : `<span>${esc(pick(c.name))}</span>`}</li>`).join('')}</ul>` : ''}
    ${has(C.testimonials) ? `<h2 ${has(C.clients) ? 'class="gap"' : ''}>${t.clients}</h2><div class="grid">${C.testimonials.map(r => `<figure class="card quote"><div class="body"><blockquote>${esc(pick(r.quote))}</blockquote><figcaption><strong>${esc(pick(r.name))}</strong><span class="small">${esc(pick(r.role))}</span></figcaption></div></figure>`).join('')}</div>` : ''}
  </div></section>` : ''}

  ${has(C.news) ? `<section id="news" class="alt"><div class="wrap"><h2>${t.news}</h2><div class="grid">${C.news.map(n => `<article class="card">${img(n.image, pick(n.title))}<div class="body"><time class="small" datetime="${esc(n.date)}">${esc(fmtDate(n.date))}</time><h3>${esc(pick(n.title))}</h3><p>${esc(pick(n.text))}</p></div></article>`).join('')}</div></div></section>` : ''}

  <section class="cta"><div class="wrap"><div><h2>${esc(pick(C.cta.title))}</h2><p>${esc(pick(C.cta.text))}</p></div>
    <div class="actions"><a class="btn light" href="#contact">${t.contact}</a><a class="btn outline" href="tel:${esc(C.phone)}">${t.callNow}</a><a class="btn outline" href="${wa(name)}" target="_blank" rel="noopener">${t.whatsapp}</a></div>
  </div></section>

  <section id="contact"><div class="wrap"><h2>${t.contact}</h2><div class="contact-grid">
    <div><dl>
      <div><dt>${t.address}</dt><dd>${esc(pick(C.address))}</dd></div>
      <div><dt>${t.phone}</dt><dd><a href="tel:${esc(C.phone)}" dir="ltr">${esc(C.phone)}</a> · <a href="${wa(name)}" target="_blank" rel="noopener">${t.whatsapp}</a></dd></div>
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
    <div><strong class="fname">${esc(name)}</strong><p>${esc(pick(C.intro))}</p></div>
    <div><h4>${t.quickLinks}</h4><ul>${links.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ul></div>
    <div><h4>${t.reachUs}</h4><ul>
      <li>${esc(pick(C.address))}</li>
      <li><a href="tel:${esc(C.phone)}" dir="ltr">${esc(C.phone)}</a></li>
      <li><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></li>
      <li>${esc(pick(C.hours))}</li></ul></div>
    ${socials ? `<div><h4>${t.follow}</h4><div class="social">${socials}</div></div>` : ''}
  </div><div class="wrap legal"><small>© ${new Date().getFullYear()} ${esc(name)} · ${t.rights}</small></div></footer>`;
  $('#lang').onclick = () => { lang = lang === 'ar' ? 'en' : 'ar'; localStorage.setItem('lang', lang); render(); };
  $('#form').onsubmit = submit;
  const menu = $('#menu'), nav = $('#nav');
  const setMenu = open => { menu.setAttribute('aria-expanded', open); nav.classList.toggle('open', open); };
  menu.onclick = () => setMenu(menu.getAttribute('aria-expanded') !== 'true');
  nav.onclick = e => { if (e.target.closest('a')) setMenu(false); };
  document.onkeydown = e => { if (e.key === 'Escape') setMenu(false); };
  reveal();
}

// ظهور الأقسام بلطف عند التمرير / Sections ease in as they scroll into view
let io;
function reveal() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  io?.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  document.querySelectorAll('main section:not(.hero) .wrap > *, .grid > *, .logos > li, footer .cols > *').forEach(el => {
    if (el.matches('.grid, .logos')) return;
    const i = [...el.parentElement.children].indexOf(el);
    if (el.parentElement.matches('.grid, .logos, .cols')) el.style.transitionDelay = `${(i % 4) * 90}ms`;
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
