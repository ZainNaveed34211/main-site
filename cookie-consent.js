(function () {
  var KEY = 'kluzar_cookie_consent';
  function applyConsent(v) {
    if (window.gtag) { try { gtag('consent', 'update', { analytics_storage: v === 'accepted' ? 'granted' : 'denied', ad_storage: v === 'accepted' ? 'granted' : 'denied' }); } catch (e) {} }
  }
  function setDefault() {
    if (window.gtag) { try { gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' }); } catch (e) {} }
  }
  setDefault();
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored) { applyConsent(stored); return; }
  var bar = document.createElement('div');
  bar.id = 'kluzar-cookie-banner';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookie consent');
  bar.innerHTML = '<p>We use cookies to improve your experience and to show ads and measure traffic. You can accept or decline — see our <a href="/privacy.html">Privacy Policy</a> for details.</p><div><button type="button" data-cc="accept">Accept</button><button type="button" data-cc="decline">Decline</button></div>';
  var css = '#kluzar-cookie-banner{position:fixed;left:16px;bottom:16px;z-index:9999;max-width:420px;background:#141272;color:#fff;border-radius:12px;padding:16px 18px;box-shadow:0 8px 30px rgba(0,0,0,.35);font:14px/1.5 system-ui,sans-serif}'
    + '#kluzar-cookie-banner p{margin:0 0 12px}'
    + '#kluzar-cookie-banner a{color:#b7a8ff;text-decoration:underline}'
    + '#kluzar-cookie-banner div{display:flex;gap:8px}'
    + '#kluzar-cookie-banner button{border:0;border-radius:8px;padding:9px 16px;cursor:pointer;font:600 14px system-ui,sans-serif}'
    + '#kluzar-cookie-banner button[data-cc="accept"]{background:#7c5cff;color:#fff}'
    + '#kluzar-cookie-banner button[data-cc="decline"]{background:rgba(255,255,255,.16);color:#fff}'
    + '@media (max-width:640px){#kluzar-cookie-banner{left:12px;right:12px;bottom:12px;max-width:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  document.body.appendChild(bar);
  var pill = document.querySelector('.framer-3ek784-container');
  var origBottom = pill ? pill.style.bottom : '';
  if (pill) { pill.style.bottom = (bar.offsetHeight + 28) + 'px'; }
  function choose(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    applyConsent(v);
    bar.remove();
    if (pill) { pill.style.bottom = origBottom; }
  }
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-cc]');
    if (b) choose(b.getAttribute('data-cc'));
  });
})();
