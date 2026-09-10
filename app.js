(function(){
  const header = document.getElementById('topbar');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('backdrop');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }, {passive:true});

  function closeMenu(){
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  menuBtn.addEventListener('click', () => {
    const open = !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  backdrop.addEventListener('click', closeMenu);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.16, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el => {
    if(reduce) el.classList.add('in'); else io.observe(el);
  });

  const nums = document.querySelectorAll('[data-count]');
  const nio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      nio.unobserve(e.target);
      const target = +e.target.dataset.count;
      if(reduce){ e.target.textContent = target.toLocaleString(); return; }
      const start = performance.now();
      const dur = 900;
      const tick = (now) => {
        const t = Math.min(1, (now-start)/dur);
        const eased = 1 - Math.pow(1-t, 3);
        e.target.textContent = Math.round(target * eased).toLocaleString();
        if(t<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, {threshold:0.4});
  nums.forEach(n => nio.observe(n));

  const form = document.getElementById('appForm');
  const err = document.getElementById('formErr');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if(!data.parentName || !data.email || !data.phone || !data.childName || !data.intake || !data.campus){
      err.classList.add('show'); return;
    }
    err.classList.remove('show');
    const id = 'CHC-26-' + Math.random().toString(36).slice(2,7).toUpperCase();
    const record = {id, ...data, submittedAt: new Date().toISOString()};
    const all = JSON.parse(localStorage.getItem('chc-applications') || '[]');
    all.push(record);
    localStorage.setItem('chc-applications', JSON.stringify(all));
    form.classList.add('hide');
    document.getElementById('success').classList.add('show');
    document.getElementById('successCopy').textContent =
      'Thank you, ' + data.parentName + '. We have logged an application for ' + data.childName +
      ' (' + data.intake + ', ' + data.campus + '). Quote this reference:';
    document.getElementById('refCode').textContent = id;
  });
})();
