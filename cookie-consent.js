(function () {
  var KEY = 'kluzar_cookie_consent';
  var PERSONALIZED = { analytics_storage: 'granted', ad_storage: 'granted' };
  var NON_PERSONALIZED = { analytics_storage: 'denied', ad_storage: 'denied' };
  function isAccepted(v) { return v === 'accepted' || v === 'accept'; }
  function updateConsent(v) {
    if (window.gtag) { try { gtag('consent', 'update', isAccepted(v) ? PERSONALIZED : NON_PERSONALIZED); } catch (e) {} }
  }
  function setDefaultConsent() {
    if (window.gtag) { try { gtag('consent', 'default', NON_PERSONALIZED); } catch (e) {} }
  }
  setDefaultConsent();
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored) { updateConsent(stored); return; }
  var bar = document.createElement('div');
  bar.id = 'kluzar-cookie-banner';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookie consent');
  var title = document.createElement('p');
  title.className = 'kluzar-cookie-title';
  title.textContent = 'We value your privacy';
  bar.appendChild(title);
  var p = document.createElement('p');
  p.className = 'kluzar-cookie-text';
  p.appendChild(document.createTextNode('We use cookies to improve your experience, measure traffic, and show ads. Accept for a personalized experience, or decline — ads will still show, just not personalized. See our '));
  var a = document.createElement('a');
  a.setAttribute('href', '/privacy/');
  a.textContent = 'Privacy Policy';
  p.appendChild(a);
  p.appendChild(document.createTextNode(' for details.'));
  bar.appendChild(p);
  var btns = document.createElement('div');
  btns.className = 'kluzar-cookie-actions';
  var accept = document.createElement('button');
  accept.setAttribute('type', 'button');
  accept.setAttribute('data-cc', 'accept');
  accept.textContent = 'Accept';
  btns.appendChild(accept);
  var decline = document.createElement('button');
  decline.setAttribute('type', 'button');
  decline.setAttribute('data-cc', 'decline');
  decline.textContent = 'Decline';
  btns.appendChild(decline);
  bar.appendChild(btns);
  var css = '#kluzar-cookie-banner{position:fixed;left:16px;bottom:16px;z-index:9999;max-width:440px;background:#141272;color:#fff;border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:20px 22px;box-shadow:0 16px 48px rgba(0,0,0,.45);font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif}'
    + '#kluzar-cookie-banner .kluzar-cookie-title{margin:0 0 6px;font-size:15px;line-height:1.4;font-weight:700;color:#fff}'
    + '#kluzar-cookie-banner .kluzar-cookie-text{margin:0 0 16px;font-size:14px;line-height:1.6;color:rgba(255,255,255,.85)}'
    + '#kluzar-cookie-banner a{color:#b7a8ff;text-decoration:underline;text-underline-offset:2px}'
    + '#kluzar-cookie-banner a:hover{color:#d3c8ff}'
    + '#kluzar-cookie-banner .kluzar-cookie-actions{display:flex;gap:10px}'
    + '#kluzar-cookie-banner button{flex:1;border:0;border-radius:10px;padding:11px 16px;cursor:pointer;font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;font-size:14px;font-weight:600;line-height:1.4}'
    + '#kluzar-cookie-banner button[data-cc="accept"]{background:#7c5cff;color:#fff}'
    + '#kluzar-cookie-banner button[data-cc="accept"]:hover{background:#8a6dff}'
    + '#kluzar-cookie-banner button[data-cc="decline"]{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4)}'
    + '#kluzar-cookie-banner button[data-cc="decline"]:hover{background:rgba(255,255,255,.1)}'
    + '#kluzar-cookie-banner button:focus-visible{outline:2px solid #fff;outline-offset:2px}'
    + '@media (max-width:640px){#kluzar-cookie-banner{left:12px;right:12px;bottom:12px;max-width:none;padding:18px}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  document.body.appendChild(bar);
  var pill = document.querySelector('.framer-3ek784-container');
  var wa = document.querySelector('.wa-float');
  var pillBottom = pill ? pill.style.bottom : '';
  var waBottom = wa ? wa.style.bottom : '';
  var lift = (bar.offsetHeight + 28) + 'px';
  if (pill) { pill.style.bottom = lift; }
  if (wa) { wa.style.bottom = lift; }
  function choose(v) {
    var value = v === 'accept' ? 'accepted' : 'decline';
    try { localStorage.setItem(KEY, value); } catch (e) {}
    updateConsent(value);
    bar.remove();
    if (pill) { pill.style.bottom = pillBottom; }
    if (wa) { wa.style.bottom = waBottom; }
  }
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-cc]');
    if (b) choose(b.getAttribute('data-cc'));
  });
})();
