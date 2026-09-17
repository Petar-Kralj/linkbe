(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.reveal-group').forEach(function (group) {
    var items = group.querySelectorAll('.reveal');
    if (!items.length) return;
    gsap.to(items, {
      opacity: 1, y: 0, duration: .85, ease: 'expo.out', stagger: .09,
      scrollTrigger: { trigger: group, start: 'top 85%' }
    });
  });

  document.querySelectorAll('.reveal').forEach(function (el) {
    if (el.closest('.reveal-group')) return;
    gsap.to(el, {
      opacity: 1, y: 0, duration: .85, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
})();

/* rotating "who we serve" ticker */
(function () {
  var list = document.querySelector('[data-ticker]');
  if (!list) return;
  var items = list.querySelectorAll('li');
  var i = 0;
  items[0] && items[0].classList.add('active');
  setInterval(function () {
    items[i].classList.remove('active');
    i = (i + 1) % items.length;
    items[i].classList.add('active');
  }, 1700);
})();
