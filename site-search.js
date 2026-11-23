(function () {
  var index = null, loading = null;
  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (j) { index = j.pages || j; return index; }).catch(function () { return []; });
    }
    return loading;
  }
  function safeUrl(u) {
    if (typeof u !== 'string') return null;
    if (u.charAt(0) === '/') {
      if (u.charAt(1) === '/') return null;
      return u;
    }
    if (u.indexOf('https://kluzar.com/') === 0) return u;
    if (u.indexOf('https://tech.kluzar.com/') === 0) return u;
    if (u.indexOf('https://blog.kluzar.com/') === 0) return u;
    return null;
  }
  function boxFor(input) {
    var box = input._kluzarSearchBox;
    if (box && box.isConnected) return box;
    box = document.createElement('div');
    box.className = 'kluzar-search-results';
    box.style.cssText = 'position:fixed;z-index:10000;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.15);max-width:340px;overflow:hidden;display:none;text-align:left';
    box._kluzarInput = input;
    document.body.appendChild(box);
    input._kluzarSearchBox = box;
    return box;
  }
  function positionBox(box) {
    var input = box._kluzarInput;
    if (!input) return false;
    var r = input.getBoundingClientRect();
    if (!r || r.width === 0 || r.height === 0) return false;
    var w = Math.min(r.width, 340);
    var left = Math.min(r.left, window.innerWidth - w - 8);
    if (left < 8) left = 8;
    box.style.width = w + 'px';
    box.style.left = left + 'px';
    box.style.top = (r.bottom + 8) + 'px';
    return true;
  }
  function showBox(box) {
    if (!positionBox(box)) { box.style.display = 'none'; return; }
    box.style.display = 'block';
  }
  function hideAllBoxes() {
    document.querySelectorAll('input[data-site-search]').forEach(function (input) {
      var box = input._kluzarSearchBox;
      if (box) box.style.display = 'none';
    });
  }
  function clearBox(box) {
    while (box.firstChild) box.removeChild(box.firstChild);
  }
  function resultLink(p) {
    var url = safeUrl(p.url);
    if (!url) return null;
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('style', 'display:block;padding:10px 14px;text-decoration:none;color:#111827;font:14px system-ui,sans-serif;border-top:1px solid #f3f4f6');
    var strong = document.createElement('strong');
    strong.textContent = p.title || '';
    a.appendChild(strong);
    a.appendChild(document.createElement('br'));
    var span = document.createElement('span');
    span.setAttribute('style', 'color:#6b7280;font-size:12px');
    span.textContent = p.description || '';
    a.appendChild(span);
    return a;
  }
  function renderHits(box, hits) {
    clearBox(box);
    hits.forEach(function (p) {
      var link = resultLink(p);
      if (link) box.appendChild(link);
    });
    showBox(box);
  }
  function showMessage(box, text) {
    clearBox(box);
    var div = document.createElement('div');
    div.setAttribute('style', 'padding:10px 14px;color:#6b7280;font:14px system-ui,sans-serif');
    div.textContent = text;
    box.appendChild(div);
    showBox(box);
  }
  function scoreEntry(p, q) {
    var t = (p.title || '').toLowerCase();
    var d = (p.description || '').toLowerCase();
    var u = (p.url || '').toLowerCase();
    if (t.indexOf(q) === 0) return 4;
    if (t.indexOf(q) > -1) return 3;
    if (d.indexOf(q) > -1) return 2;
    if (u.indexOf(q) > -1) return 1;
    return 0;
  }
  function showPopular(input) {
    var box = boxFor(input);
    loadIndex().then(function (pages) {
      var popular = pages.filter(function (p) { return p.popular; }).slice(0, 8);
      if (!popular.length) { box.style.display = 'none'; return; }
      clearBox(box);
      var head = document.createElement('div');
      head.setAttribute('style', 'padding:10px 14px 4px;color:#6b7280;font:12px system-ui,sans-serif;text-transform:uppercase;letter-spacing:.05em');
      head.textContent = 'Popular searches';
      box.appendChild(head);
      popular.forEach(function (p) {
        var link = resultLink(p);
        if (link) box.appendChild(link);
      });
      showBox(box);
    });
  }
  function runSearch(input) {
    var box = boxFor(input);
    var q = input.value.trim().toLowerCase();
    if (!q) { showPopular(input); return; }
    loadIndex().then(function (pages) {
      var scored = [];
      pages.forEach(function (p, i) {
        var s = scoreEntry(p, q);
        if (s > 0) scored.push({ p: p, s: s, pop: p.popular ? 1 : 0, i: i });
      });
      scored.sort(function (a, b) {
        if (b.s !== a.s) return b.s - a.s;
        if (b.pop !== a.pop) return b.pop - a.pop;
        return a.i - b.i;
      });
      var hits = scored.slice(0, 8).map(function (x) { return x.p; });
      if (!hits.length) { showMessage(box, 'No results found.'); return; }
      renderHits(box, hits);
    });
  }
  document.addEventListener('input', function (e) {
    var input = e.target;
    if (!input || !input.matches || !input.matches('input[data-site-search]')) return;
    runSearch(input);
  });
  document.addEventListener('focusin', function (e) {
    var input = e.target;
    if (!input || !input.matches || !input.matches('input[data-site-search]')) return;
    if (!input.value.trim()) showPopular(input);
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('input[data-site-search]').forEach(function (input) {
      var box = input._kluzarSearchBox;
      if (box && box.style.display !== 'none') {
        if (!box.contains(e.target) && e.target !== input) box.style.display = 'none';
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    hideAllBoxes();
  });
  document.addEventListener('scroll', function () { hideAllBoxes(); }, true);
  window.addEventListener('resize', function () {
    document.querySelectorAll('input[data-site-search]').forEach(function (input) {
      var box = input._kluzarSearchBox;
      if (box && box.style.display !== 'none') positionBox(box);
    });
  });
})();
