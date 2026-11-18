/* Brightvane — interactions & animation */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var A = 'assets/products/';

  /* ------------------------------------------------------------------
     Product data — every screen shown on the page comes from here.
     ------------------------------------------------------------------ */
  var PRODUCTS = [
    {
      id: 'talora', name: 'Talora', logo: A + 'talora/logo.webp', color: '#023C69', bg: '#E9EEEA',
      meta: ['Android', 'Consumer app'], status: 'live',
      tagline: 'A tailored, ATS-ready CV for every job.',
      desc: 'Paste a job link and Talora rewrites your résumé around it, so you stop sending one generic CV to every opening.',
      points: ['Paste a job URL and Talora reads the listing', 'ATS match score that shows exactly what is missing', 'CV rewritten in about 30 seconds, PDF or Word export', 'Built-in application tracker'],
      link: { href: 'https://play.google.com/store/apps/details?id=ai.talora.app', label: 'Get it on Google Play' },
      slides: [
        { type: 'duo', label: 'One CV, every job', items: [{ type: 'store', src: A + 'talora/store-1.webp' }, { type: 'store', src: A + 'talora/store-3.webp' }, { type: 'store', src: A + 'talora/store-4.webp' }] },
        { type: 'duo', label: 'Rewrite, preview, export', items: [{ type: 'store', src: A + 'talora/store-5.webp' }, { type: 'store', src: A + 'talora/store-6.webp' }, { type: 'store', src: A + 'talora/store-2.webp' }] },
        { type: 'duo', label: 'Tracker & Pro plan', items: [{ type: 'store', src: A + 'talora/store-7.webp' }, { type: 'store', src: A + 'talora/store-8.webp' }] },
        { type: 'wide', src: A + 'talora/feature.webp', label: 'Google Play feature graphic' }
      ]
    },
    {
      id: 'recipia', name: 'Recipia', logo: A + 'recipia/logo.webp', color: '#E8532B', bg: '#FBEEE3',
      meta: ['Web', 'Android', 'Consumer web'], status: 'live',
      tagline: 'Cook anything. In any language.',
      desc: 'Turn a photo, a link or a handwritten note into a step-by-step recipe, then cook it with guided timers.',
      points: ['Photo, link or note to a clean recipe', 'Guided cook mode with step timers', 'Nutrition per serving', 'Translations into Arabic, Urdu and 13 more'],
      link: { href: 'https://recipia.site', label: 'Visit recipia.site' },
      slides: [
        { type: 'browser', src: A + 'recipia/home.webp', url: 'recipia.site', label: 'Live site', noPan: true },
        { type: 'browser', src: A + 'recipia/nutrition.webp', url: 'recipia.site/recipe', label: 'Recipe & nutrition', noPan: true },
        { type: 'browser', src: A + 'recipia/cook-mode.webp', url: 'recipia.site/cook', label: 'Guided cook mode', noPan: true },
        { type: 'browser', src: A + 'recipia/urdu.webp', url: 'recipia.site/recipe?lang=ur', label: 'Translated to Urdu', noPan: true },
        { type: 'duo', label: 'Mobile web', items: [{ type: 'phone', src: A + 'recipia/home-mobile.webp', tall: true }, { type: 'post', src: A + 'recipia/post.webp' }] }
      ]
    },
    {
      id: 'revive', name: 'Revive', logo: A + 'revive/logo.webp', color: '#F0715A', bg: '#17121D',
      meta: ['Android', 'Consumer app'], status: 'live',
      tagline: 'Bring your old photos back to life.',
      desc: 'Revive restores damaged photos, brings back faded faces, colourises black & white and upscales to 4×. Drag the slider to see it.',
      points: ['AI analysis detects scratches, fading and noise', 'Restores faces and colourises B&W', 'AI upscaling to 4× resolution', 'Creative edits and short videos from one photo'],
      link: { href: 'https://play.google.com/store/apps/details?id=com.revive.revive', label: 'Get it on Google Play' },
      slides: [
        { type: 'compare', before: A + 'revive/before.webp', after: A + 'revive/after.webp', label: 'Before / after', thumb: A + 'revive/after.webp' },
        { type: 'duo', label: 'The app', items: [{ type: 'phone', src: A + 'revive/app-4.webp' }, { type: 'phone', src: A + 'revive/app-2.webp' }, { type: 'phone', src: A + 'revive/app-3.webp' }] },
        { type: 'duo', label: 'Upload & profile', items: [{ type: 'phone', src: A + 'revive/app-3.webp' }, { type: 'phone', src: A + 'revive/app-1.webp' }] },
        { type: 'browser', src: A + 'revive/home.webp', url: 'revive app', label: 'Landing page', noPan: true },
        { type: 'photo', src: A + 'revive/story-1.webp', label: 'Memories, restored' },
        { type: 'duo', label: 'Campaign posts', items: [{ type: 'post', src: A + 'revive/post.webp' }, { type: 'post', src: A + 'revive/post-2.webp' }] }
      ]
    },
    {
      id: 'propclips', name: 'PropClips', logo: A + 'propclips/logo.svg', color: '#F97316', bg: '#16110D',
      meta: ['Web', 'SaaS'], status: 'live',
      tagline: 'Turn listings into stories people actually love.',
      desc: 'Add any property listing and get scroll-stopping captions, story cards and video reels for every platform in under 10 seconds.',
      points: ['Listing photos to cinematic video reels', 'AI twin and avatar presenters for walkthroughs', 'Captions for Instagram, Facebook, X, WhatsApp, Snapchat & TikTok', 'Built for agents in the US, UK, Gulf and Africa'],
      link: { href: 'https://propclips.live', label: 'Visit propclips.live' },
      slides: [
        { type: 'browser', src: A + 'propclips/home.webp', url: 'propclips.live', label: 'Live site', noPan: true },
        { type: 'duo', label: 'Made with PropClips', items: [{ type: 'video', src: A + 'propclips/drone-villa.mp4', poster: A + 'propclips/drone-villa.webp' }, { type: 'video', src: A + 'propclips/ai-twin.mp4', poster: A + 'propclips/ai-twin.webp' }, { type: 'video', src: A + 'propclips/penthouse-walkthrough.mp4', poster: A + 'propclips/penthouse-walkthrough.webp' }] },
        { type: 'browser', src: A + 'propclips/pricing.webp', url: 'propclips.live/pricing', label: 'Pricing', noPan: true },
        { type: 'duo', label: 'Mobile & social', items: [{ type: 'phone', src: A + 'propclips/home-mobile.webp', tall: true }, { type: 'post', src: A + 'propclips/post.webp' }] },
        { type: 'duo', label: 'One listing, six platforms', items: [{ type: 'post', src: A + 'propclips/slide-1.webp' }, { type: 'post', src: A + 'propclips/slide-2.webp' }] }
      ]
    },
    {
      id: 'grovana', name: 'Grovana', logo: A + 'grovana/logo.svg', color: '#6E62F5', bg: '#0E0D1B',
      meta: ['Web', 'SaaS'], status: 'live',
      tagline: 'The AI marketing strategist that rebuilds your plan every 30 days.',
      desc: 'Not a one-shot AI plan. Grovana turns strategy into tracked tasks, then re-evaluates from what actually happened.',
      points: ['Budget-aware 30-day strategy', 'Every recommendation becomes a tracked task', '30-day check-in on real results', 'AI re-evaluation every cycle'],
      link: { href: 'https://grovana.tech', label: 'Visit grovana.tech' },
      slides: [
        { type: 'browser', src: A + 'grovana/home.webp', url: 'grovana.tech', label: 'Live site', noPan: true },
        { type: 'browser', src: A + 'grovana/pricing.webp', url: 'grovana.tech/pricing', label: 'Pricing', noPan: true },
        { type: 'duo', label: 'Mobile & reel', items: [{ type: 'phone', src: A + 'grovana/home-mobile.webp', tall: true }, { type: 'video', src: A + 'grovana/reel.mp4', poster: A + 'grovana/reel-poster.webp' }] },
        { type: 'duo', label: 'Launch carousel', items: [{ type: 'post', src: A + 'grovana/slide-1.webp' }, { type: 'post', src: A + 'grovana/slide-2.webp' }] }
      ]
    },
    {
      id: 'ticketing', name: 'Ticketing platform', short: 'Ticketing', color: '#0369A1', bg: '#E3F1FA',
      icon: '<svg viewBox="0 0 24 24" width="55%" height="55%" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4Z"/><path d="M14 6v12" stroke-dasharray="2 2.5"/></svg>',
      meta: ['iOS', 'Android', 'Web'], status: 'platform',
      tagline: 'Stadium-scale ticketing, from the on-sale rush to the turnstile.',
      desc: 'We built a full ticketing platform for cricket, concerts and comedy: consumer apps on iOS, Android and the web, plus everything organizers and venue staff need to run the event.',
      points: ['Virtual waiting room for high-demand on-sales', 'Interactive seat maps with live seat holds', 'Rotating QR tickets that work offline', 'Organizer portal, box office and gate-scanning app', 'Transfers, resale, refunds and settlements'],
      link: { href: '#contact', label: 'Talk to us about it', local: true },
      slides: [
        { type: 'duo', label: 'Discover & queue', items: [{ type: 'phone', src: A + 'ticketing/c05-home.webp', tall: true }, { type: 'phone', src: A + 'ticketing/c09-waiting.webp' }, { type: 'phone', src: A + 'ticketing/c10-stadium.webp', tall: true }] },
        { type: 'duo', label: 'Seats & live ticket', items: [{ type: 'phone', src: A + 'ticketing/c11-enclosure.webp', tall: true }, { type: 'phone', src: A + 'ticketing/c12-view.webp' }, { type: 'phone', src: A + 'ticketing/c20-ticket.webp' }] },
        { type: 'browser', src: A + 'ticketing/w01-home.webp', url: 'tickets · web app', label: 'Web: home' },
        { type: 'browser', src: A + 'ticketing/w07-seats.webp', url: 'tickets · seat selection', label: 'Web: seat selection' },
        { type: 'browser', src: A + 'ticketing/w05-match.webp', url: 'tickets · match', label: 'Web: match page' },
        { type: 'browser', src: A + 'ticketing/a02-onsale.webp', url: 'admin · on-sale monitor', label: 'Admin: on-sale monitor' },
        { type: 'browser', src: A + 'ticketing/a01-dashboard.webp', url: 'admin · dashboard', label: 'Admin: dashboard' },
        { type: 'browser', src: A + 'ticketing/a10-seatmap.webp', url: 'admin · seat map builder', label: 'Admin: seat map builder', noPan: true },
        { type: 'browser', src: A + 'ticketing/a14-queue.webp', url: 'admin · queue console', label: 'Admin: live queue console', noPan: true }
      ]
    },
    {
      id: 'cart', name: 'Cart recovery', short: 'Cart recovery', color: '#B58A12', bg: '#FFF4D4',
      icon: '<svg viewBox="0 0 24 24" width="55%" height="55%" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3.5h2.6l2.4 11.2a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.2l1.6-6.8H6.3"/></svg>',
      meta: ['Web', 'SaaS'], status: 'build',
      tagline: 'Win back the revenue abandoned carts leave behind.',
      desc: 'An eCommerce cart recovery tool. It finds abandoned checkouts and sends each shopper a recovery message written for them.',
      points: ['Detects abandoned carts in real time', 'Personalised AI recovery across email, SMS and on-site', 'Recovery funnel, campaigns and customer segments', 'Recovered-revenue dashboard with AI insights'],
      link: { href: '#contact', label: 'Ask for early access', local: true },
      slides: [
        { type: 'browser', src: A + 'cart/dashboard.webp', url: 'cart recovery · dashboard', label: 'Dashboard', noPan: true },
        { type: 'browser', src: A + 'cart/analytics.webp', url: 'cart recovery · analytics', label: 'Recovery analytics', noPan: true },
        { type: 'browser', src: A + 'cart/campaigns.webp', url: 'cart recovery · campaigns', label: 'Recovery campaigns', noPan: true },
        { type: 'browser', src: A + 'cart/customers.webp', url: 'cart recovery · customers', label: 'Customer segments', noPan: true }
      ]
    }
  ];
  var byId = {};
  PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  /* ---------- helpers ---------- */
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function logoHTML(p, cls) {
    return p.logo ? '<img src="' + p.logo + '" alt="" class="' + (cls || '') + '">' :
      '<span class="sc-logo ' + (cls || '') + '" style="background:' + p.color + '">' + (p.icon || p.letter) + '</span>';
  }
  function slideImages(s) {
    if (s.type === 'duo') return s.items.filter(function (i) { return i.src && i.type !== 'video'; }).map(function (i) { return i.src; });
    if (s.type === 'compare') return [s.before, s.after];
    return s.src ? [s.src] : [];
  }

  /* ---------- Theme ---------- */
  var themeMeta = $('meta[name="theme-color"]');
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    if (themeMeta) themeMeta.setAttribute('content', t === 'dark' ? '#0A0D18' : '#F8F8F4');
    $('#themeToggle').setAttribute('aria-pressed', t === 'dark');
  }
  applyTheme(document.documentElement.dataset.theme || 'light');
  $('#themeToggle').addEventListener('click', function () {
    var t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(t);
    try { sessionStorage.setItem('bv-theme', t); } catch (e) {}
  });
  // Follow live OS/browser theme changes unless the visitor picked one this visit
  var darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (darkMQ) {
    var onScheme = function (e) {
      var picked = null;
      try { picked = sessionStorage.getItem('bv-theme'); } catch (err) {}
      if (!picked) applyTheme(e.matches ? 'dark' : 'light');
    };
    if (darkMQ.addEventListener) darkMQ.addEventListener('change', onScheme);
    else if (darkMQ.addListener) darkMQ.addListener(onScheme);
  }

  /* ---------- Nav ---------- */
  var nav = $('#nav');
  window.addEventListener('scroll', function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); }, { passive: true });
  var burger = $('#burger'), mobileMenu = $('#mobileMenu');
  burger.addEventListener('click', function () {
    var open = mobileMenu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('a', mobileMenu).forEach(function (a) { a.addEventListener('click', function () { mobileMenu.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); }); });

  var navLinks = $$('.nav__links a');
  var secIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['work', 'showcase', 'capabilities', 'approach', 'founder', 'studio'].forEach(function (id) { var s = document.getElementById(id); if (s) secIO.observe(s); });

  /* ---------- Reveal on scroll ---------- */
  var revIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); revIO.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(function (n) { revIO.observe(n); });

  /* ---------- Count up ---------- */
  var cIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      cIO.unobserve(e.target);
      var node = e.target, end = +node.dataset.count, t0 = null, dur = 1400;
      if (reduceMotion) { node.textContent = end; return; }
      (function tick(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / dur), v = 1 - Math.pow(1 - k, 3);
        node.textContent = Math.round(end * v);
        if (k < 1) requestAnimationFrame(tick);
      })(performance.now());
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach(function (n) { cIO.observe(n); });

  /* ---------- Hero plan grid + Grovana heatmap ---------- */
  function buildCells(host, n, classes, interval, count) {
    if (!host) return;
    var cells = [];
    for (var i = 0; i < n; i++) { var c = el('i'); host.appendChild(c); cells.push(c); }
    function shuffle() {
      cells.forEach(function (c) { c.className = ''; });
      for (var j = 0; j < count; j++) {
        var c = cells[Math.floor(Math.random() * n)];
        c.className = classes[Math.random() < 0.45 ? 1 : 0];
      }
    }
    shuffle();
    if (!reduceMotion) setInterval(shuffle, interval);
  }
  buildCells($('#planGrid'), 21, ['l1', 'l2'], 1800, 9);


  /* ---------- Hero tilt ---------- */
  var art = $('.hero__art');
  if (art && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    art.addEventListener('mousemove', function (e) {
      var r = art.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      $('.mock-browser', art).style.translate = (x * -14) + 'px ' + (y * -10) + 'px';
      $('.mock-phone', art).style.translate = (x * 18) + 'px ' + (y * 14) + 'px';
      $('.toast', art).style.translate = (x * 10) + 'px ' + (y * 8) + 'px';
    });
    art.addEventListener('mouseleave', function () { $$('.mock-browser,.mock-phone,.toast', art).forEach(function (n) { n.style.translate = ''; }); });
  }

  /* ---------- Portfolio filter ---------- */
  var tabsWrap = $('.tabs'), pill = $('.tabs__pill', tabsWrap), tabs = $$('.tab', tabsWrap);
  function movePill(t) { pill.style.left = t.offsetLeft + 'px'; pill.style.width = t.offsetWidth + 'px'; }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.toggle('is-active', x === t); x.setAttribute('aria-selected', x === t); });
      movePill(t);
      var f = t.dataset.filter;
      $$('.pcard').forEach(function (c, i) {
        var show = f === 'all' || c.dataset.cat.split(' ').indexOf(f) > -1;
        c.classList.toggle('is-hidden', !show);
        c.classList.remove('is-filtering');
        if (show) { void c.offsetWidth; c.style.animationDelay = (i % 4) * 0.06 + 's'; c.classList.add('is-filtering'); }
      });
    });
  });
  window.addEventListener('load', function () { movePill($('.tab.is-active')); });
  window.addEventListener('resize', function () { movePill($('.tab.is-active')); });
  if (document.fonts) document.fonts.ready.then(function () { movePill($('.tab.is-active')); });

  /* ---------- Card → showcase ---------- */
  $$('.pcard').forEach(function (c) {
    function go() { selectProduct(c.dataset.product, 0, true); document.getElementById('showcase').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); }
    c.addEventListener('click', go);
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });

  /* ==================================================================
     SHOWCASE
     ================================================================== */
  var scTabs = $('#scTabs'), scInfo = $('#scInfo'), scFrame = $('#scFrame'), scThumbs = $('#scThumbs'), scProgress = $('#scProgress'), stage = $('#scStage');
  var view = $('.sc-view');
  var cur = { p: null, i: 0 }, timer = null, tStart = 0, tDur = 6000, paused = false, inView = false, rafId = null;

  PRODUCTS.forEach(function (p) {
    var b = el('button', 'sc-tab', logoHTML(p) + '<span>' + (p.short || p.name) + '</span>');
    b.setAttribute('role', 'tab');
    b.dataset.id = p.id;
    b.style.setProperty('--pc', p.color);
    b.addEventListener('click', function () { selectProduct(p.id, 0, true); });
    scTabs.appendChild(b);
  });

  function frameHTML(s) {
    switch (s.type) {
      case 'browser':
        return '<div class="f-browser" data-zoom="' + s.src + '"><div class="f-browser__bar"><i></i><i></i><i></i><span>' + s.url + '</span></div><img src="' + s.src + '" alt="' + s.label + '" loading="lazy"' + (s.noPan ? ' class="no-pan"' : '') + '></div>';
      case 'phone':
        return '<div class="f-phone" data-zoom="' + s.src + '"><img src="' + s.src + '" alt="' + (s.label || 'App screen') + '" loading="lazy"' + (s.tall ? ' class="tall"' : '') + (s.contain ? ' style="object-fit:cover;object-position:center"' : '') + '></div>';
      case 'video':
        return '<div class="f-phone f-video"><video src="' + s.src + '" poster="' + s.poster + '" muted loop playsinline preload="none" aria-label="Product video"></video></div>';
      case 'store':
        return '<div class="f-store" data-zoom="' + s.src + '"><img src="' + s.src + '" alt="' + (s.label || 'App store screenshot') + '" loading="lazy"></div>';
      case 'post':
        return '<div class="f-post" data-zoom="' + s.src + '"><img src="' + s.src + '" alt="' + (s.label || 'Campaign post') + '" loading="lazy"></div>';
      case 'photo':
        return '<div class="f-photo" data-zoom="' + s.src + '"><img src="' + s.src + '" alt="' + s.label + '" loading="lazy"></div>';
      case 'wide':
        return '<div class="f-wide" data-zoom="' + s.src + '"><img src="' + s.src + '" alt="' + s.label + '" loading="lazy"></div>';
      case 'duo':
        return '<div class="f-duo">' + s.items.map(frameHTML).join('') + '</div>';
      case 'compare':
        return '<div class="f-compare" role="slider" aria-label="Before and after comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">' +
          '<img src="' + s.before + '" alt="Original faded photo"><img class="after" src="' + s.after + '" alt="Restored photo">' +
          '<span class="bar"></span><span class="knob">‹ ›</span><span class="tag tag--b">BEFORE</span><span class="tag tag--a">AFTER</span></div>';
    }
    return '';
  }

  function thumbHTML(s) {
    var first = s.type === 'duo' ? s.items[0] : s;
    var src = s.thumb || (first.type === 'video' ? first.poster : first.src);
    return src ? '<img src="' + src + '" alt="" loading="lazy">' : '<span class="sc-thumb__txt">' + s.label + '</span>';
  }

  function selectProduct(id, idx, user) {
    var p = byId[id];
    var changed = cur.p !== p;
    cur.p = p;
    $$('.sc-tab', scTabs).forEach(function (t) { var on = t.dataset.id === id; t.classList.toggle('is-active', on); t.setAttribute('aria-selected', on); });
    var active = $('.sc-tab.is-active', scTabs);
    if (active && user && scTabs.scrollWidth > scTabs.clientWidth) active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });

    if (changed) {
      stage.style.setProperty('--pc', p.color);
      view.style.setProperty('--pbg', p.bg);
      scInfo.classList.remove('is-swap'); void scInfo.offsetWidth; scInfo.classList.add('is-swap');
      scInfo.innerHTML =
        '<div class="sc-head">' + logoHTML(p) + '<div><h3>' + p.name + '</h3><div class="sc-meta">' +
        ({ live: '<span class="live">● Live</span>', build: '<span class="build">● In build</span>', platform: '<span class="plat">● Platform build</span>' })[p.status] +
        p.meta.map(function (m) { return '<span>' + m + '</span>'; }).join('') + '</div></div></div>' +
        '<p class="sc-tagline">' + p.tagline + '</p>' +
        '<p class="sc-desc">' + p.desc + '</p>' +
        '<ul class="sc-list">' + p.points.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        (p.link ? '<a class="btn btn--primary" style="background:' + p.color + ';box-shadow:none" href="' + p.link.href + '"' + (p.link.href.indexOf('http') === 0 && !p.link.local ? ' target="_blank" rel="noopener"' : '') + '>' + p.link.label + ' <span class="arrow">↗</span></a>' : '<span></span>');

      scFrame.innerHTML = '';
      scThumbs.innerHTML = '';
      p.slides.forEach(function (s, i) {
        var d = el('div', 'slide', frameHTML(s));
        d.dataset.i = i;
        scFrame.appendChild(d);
        var t = el('button', 'sc-thumb', thumbHTML(s));
        t.setAttribute('aria-label', s.label);
        t.title = s.label;
        t.addEventListener('click', function () { showSlide(i, true); });
        scThumbs.appendChild(t);
      });
      $$('.f-compare', scFrame).forEach(initCompare);
      $('#scPrev').style.visibility = $('#scNext').style.visibility = p.slides.length > 1 ? '' : 'hidden';
      cur.i = -1;
    }
    showSlide(idx || 0, user);
  }

  function showSlide(i, user) {
    var slides = $$('.slide', scFrame), n = slides.length;
    i = (i + n) % n;
    slides.forEach(function (s, k) {
      var on = k === i;
      if (!on && s.classList.contains('is-on')) { s.classList.add('is-out'); setTimeout(function () { s.classList.remove('is-out'); }, 700); }
      s.classList.toggle('is-on', on);
      $$('video', s).forEach(function (v) { if (on) { v.preload = 'auto'; var pr = v.play(); if (pr && pr.catch) pr.catch(function () { }); } else v.pause(); });
      // restart CSS animations in the newly shown slide
      if (on) $$('.f-browser img, .f-phone img.tall, .f-photo img', s).forEach(function (n) { n.style.animation = 'none'; void n.offsetWidth; n.style.animation = ''; });
    });
    $$('.sc-thumb', scThumbs).forEach(function (t, k) { t.classList.toggle('is-on', k === i); });
    cur.i = i;
    var s = cur.p.slides[i];
    tDur = s.type === 'duo' && s.items.some(function (x) { return x.type === 'video'; }) ? 12000 : (s.type === 'compare') ? 8000 : 6000;
    if (user) paused = false;
    restartTimer();
  }

  function next() {
    if (cur.i < cur.p.slides.length - 1) showSlide(cur.i + 1);
    else { var k = PRODUCTS.indexOf(cur.p); selectProduct(PRODUCTS[(k + 1) % PRODUCTS.length].id, 0); }
  }
  function restartTimer() {
    tStart = performance.now();
    cancelAnimationFrame(rafId);
    if (reduceMotion) { scProgress.style.width = '0'; return; }
    rafId = requestAnimationFrame(loop);
  }
  var pausedAt = 0;
  function loop(t) {
    if (paused || !inView || document.hidden) { if (!pausedAt) pausedAt = t; rafId = requestAnimationFrame(loop); return; }
    if (pausedAt) { tStart += t - pausedAt; pausedAt = 0; }
    var k = Math.min(1, (t - tStart) / tDur);
    scProgress.style.width = (k * 100) + '%';
    if (k >= 1) { next(); return; }
    rafId = requestAnimationFrame(loop);
  }
  stage.addEventListener('mouseenter', function () { paused = true; });
  stage.addEventListener('mouseleave', function () { paused = false; });
  stage.addEventListener('focusin', function () { paused = true; });
  stage.addEventListener('focusout', function () { paused = false; });
  $('#scPrev').addEventListener('click', function () { showSlide(cur.i - 1, true); paused = true; });
  $('#scNext').addEventListener('click', function () { showSlide(cur.i + 1, true); paused = true; });
  new IntersectionObserver(function (e) { inView = e[0].isIntersecting; }, { threshold: 0.3 }).observe(stage);

  // swipe
  var sx = null;
  scFrame.addEventListener('touchstart', function (e) { if (!e.target.closest('.f-compare')) sx = e.touches[0].clientX; }, { passive: true });
  scFrame.addEventListener('touchend', function (e) {
    if (sx == null) return;
    var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) showSlide(cur.i + (dx < 0 ? 1 : -1), true);
  });

  function initCompare(c) {
    var dragging = false, auto = true, t0 = performance.now();
    function set(pct) { pct = Math.max(2, Math.min(98, pct)); c.style.setProperty('--pos', pct + '%'); c.setAttribute('aria-valuenow', Math.round(pct)); }
    function fromEvent(e) { var r = c.getBoundingClientRect(); set(((e.clientX - r.left) / r.width) * 100); }
    c.addEventListener('pointerdown', function (e) { dragging = true; auto = false; c.setPointerCapture(e.pointerId); fromEvent(e); });
    c.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
    c.addEventListener('pointerup', function () { dragging = false; });
    c.addEventListener('keydown', function (e) {
      var v = parseFloat(getComputedStyle(c).getPropertyValue('--pos')) || 50;
      if (e.key === 'ArrowLeft') { auto = false; set(v - 5); } if (e.key === 'ArrowRight') { auto = false; set(v + 5); }
    });
    if (reduceMotion) return;
    (function sweep(t) {
      if (!c.isConnected) return;
      if (auto && c.closest('.slide').classList.contains('is-on')) set(50 + Math.sin((t - t0) / 1100) * 34);
      requestAnimationFrame(sweep);
    })(t0);
  }

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbList = [], lbIdx = 0, lastFocus = null;
  function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbIdx];
    lbImg.style.animation = 'none'; void lbImg.offsetWidth; lbImg.style.animation = '';
    lbCap.textContent = cur.p.name + ' · ' + (lbIdx + 1) + ' / ' + lbList.length;
    lbImg.alt = cur.p.name + ' screenshot ' + (lbIdx + 1);
  }
  scFrame.addEventListener('click', function (e) {
    var z = e.target.closest('[data-zoom]');
    if (!z) return;
    lbList = [];
    cur.p.slides.forEach(function (s) { slideImages(s).forEach(function (x) { if (lbList.indexOf(x) < 0) lbList.push(x); }); });
    lastFocus = document.activeElement;
    lb.hidden = false; paused = true;
    document.body.style.overflow = 'hidden';
    lbShow(Math.max(0, lbList.indexOf(z.dataset.zoom)));
    $('#lbClose').focus();
  });
  function lbClose() { lb.hidden = true; document.body.style.overflow = ''; paused = false; if (lastFocus) lastFocus.focus(); }
  $('#lbClose').addEventListener('click', lbClose);
  $('#lbPrev').addEventListener('click', function () { lbShow(lbIdx - 1); });
  $('#lbNext').addEventListener('click', function () { lbShow(lbIdx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
    if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
  });

  function fromHash() {
    var m = /^#p-([a-z]+)(?:-(\d+))?$/.exec(location.hash);
    if (m && byId[m[1]]) { selectProduct(m[1], m[2] ? m[2] - 1 : 0, true); document.getElementById('showcase').scrollIntoView(); return true; }
    return false;
  }
  if (!fromHash()) selectProduct('talora', 0);
  window.addEventListener('hashchange', fromHash);

  /* ---------- Screenshot wall ---------- */
  var wallA = [A + 'grovana/home.webp', A + 'talora/store-1.webp', A + 'ticketing/w01-home.webp', A + 'revive/app-4.webp', A + 'propclips/home.webp', A + 'cart/dashboard.webp', A + 'talora/store-3.webp', A + 'recipia/home.webp', A + 'ticketing/c20-ticket.webp', A + 'propclips/drone-villa.webp', A + 'grovana/pricing.webp'];
  var wallB = [A + 'ticketing/a02-onsale.webp', A + 'revive/app-2.webp', A + 'recipia/nutrition.webp', A + 'talora/store-6.webp', A + 'cart/analytics.webp', A + 'propclips/ai-twin.webp', A + 'ticketing/c12-view.webp', A + 'propclips/pricing.webp', A + 'talora/store-7.webp', A + 'recipia/cook-mode.webp', A + 'revive/story-5.webp'];
  function fillWall(host, list) {
    list.concat(list).forEach(function (src) { var i = el('img'); i.src = src; i.alt = ''; i.loading = 'lazy'; i.decoding = 'async'; host.appendChild(i); });
  }
  fillWall($('#wallA'), wallA);
  fillWall($('#wallB'), wallB);

  /* ---------- Statement word-lighting ---------- */
  var st = $('#statement');
  (function split(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
      if (ch.nodeType === 3) {
        var frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(function (w) {
          if (!w) return;
          if (/^\s+$/.test(w)) frag.appendChild(document.createTextNode(w));
          else frag.appendChild(el('span', 'w', w.replace(/&/g, '&amp;').replace(/</g, '&lt;')));
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1) split(ch);
    });
  })(st);
  var words = $$('.w', st);
  function lightWords() {
    var r = st.getBoundingClientRect(), vh = window.innerHeight;
    var k = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    var lit = Math.round(k * words.length);
    words.forEach(function (w, i) { w.classList.toggle('is-lit', i < lit); });
  }
  if (reduceMotion) words.forEach(function (w) { w.classList.add('is-lit'); });
  else { window.addEventListener('scroll', lightWords, { passive: true }); lightWords(); }

  /* ---------- Approach steps hover ---------- */
  $$('.step').forEach(function (s) {
    s.addEventListener('mouseenter', function () { $$('.step').forEach(function (x) { x.classList.toggle('is-active', x === s); }); });
  });
  $('#steps').addEventListener('mouseleave', function () { $$('.step').forEach(function (x) { x.classList.remove('is-active'); }); });

  /* ---------- PropClips reel plays on hover ---------- */
  $$('.sh-reel').forEach(function (r) {
    var v = $('video', r), card = r.closest('.pcard');
    if (!v || !card || reduceMotion) return;
    card.addEventListener('mouseenter', function () { var p = v.play(); if (p && p.then) p.then(function () { r.classList.add('is-playing'); }).catch(function () {}); });
    card.addEventListener('mouseleave', function () { v.pause(); r.classList.remove('is-playing'); });
  });

  /* ---------- Contact form (FormSubmit → hello@brightvane.org) ---------- */
  var cf = $('#contactForm');
  if (cf) {
    var cfStatus = $('#cfStatus'), cfBtn = $('.cform__send', cf), cfLabel = cfBtn.innerHTML;
    // "Ask for early access" style links pre-select the matching topic
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href="#contact"]');
      if (!a) return;
      var want = /early access/i.test(a.textContent) ? 'Early access' : (a.closest('#scInfo') ? 'One of our products' : null);
      if (want) { var r = $('input[name="topic"][value="' + want + '"]', cf); if (r) r.checked = true; }
    });
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cf.checkValidity()) { cf.classList.add('was-tried'); var bad = $(':invalid', cf); if (bad) bad.focus(); cfStatus.textContent = 'Please fill in your name, a valid email and a message.'; return; }
      if (cf.elements._honey.value) return;
      var data = {};
      new FormData(cf).forEach(function (v, k) { data[k] = v; });
      cfBtn.disabled = true; cfBtn.innerHTML = 'Sending…'; cfStatus.textContent = '';
      fetch('https://formsubmit.co/ajax/hello@brightvane.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok || j.success === false || j.success === 'false') throw new Error(j.message || 'Send failed');
        });
      }).then(function () {
        cf.reset(); cf.classList.remove('was-tried'); cf.classList.add('is-sent');
        cfBtn.innerHTML = 'Sent ✓';
        cfStatus.textContent = "Thanks, we've got your message and will reply soon.";
        setTimeout(function () { cf.classList.remove('is-sent'); cfBtn.innerHTML = cfLabel; cfBtn.disabled = false; }, 6000);
      }).catch(function () {
        cfBtn.disabled = false; cfBtn.innerHTML = cfLabel;
        var body = encodeURIComponent((data.message || '') + '\n\n' + (data.name || ''));
        cfStatus.innerHTML = 'That didn’t go through. Please email <a href="mailto:hello@brightvane.org?subject=' + encodeURIComponent(data.topic || 'Hello') + '&body=' + body + '">hello@brightvane.org</a> instead.';
      });
    });
  }

  $('#year').textContent = new Date().getFullYear();
})();
