(function () {
  var index = null, loading = null;
  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (j) { index = j.pages || j; return index; }).catch(function () { return []; });
    }
    return loading;
  }
  function boxFor(input) {
    var box = input._kluzarSearchBox;
    if (box && box.isConnected) return box;
    box = document.createElement('div');
    box.className = 'kluzar-search-results';
    box.style.cssText = 'position:absolute;z-index:10000;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.15);max-width:340px;width:100%;overflow:hidden;display:none;text-align:left';
    var wrap = input.parentElement;
    if (wrap) { if (getComputedStyle(wrap).position === 'static') wrap.style.position = 'relative'; wrap.appendChild(box); }
    input._kluzarSearchBox = box;
    return box;
  }
  function renderHits(box, hits) {
    box.innerHTML = hits.map(function (p) { return '<a href="' + p.url + '" style="display:block;padding:10px 14px;text-decoration:none;color:#111827;font:14px system-ui,sans-serif;border-top:1px solid #f3f4f6"><strong>' + p.title + '</strong><br><span style="color:#6b7280;font-size:12px">' + p.description + '</span></a>'; }).join('');
    box.style.display = 'block';
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
      var head = '<div style="padding:10px 14px 4px;color:#6b7280;font:12px system-ui,sans-serif;text-transform:uppercase;letter-spacing:.05em">Popular searches</div>';
      box.innerHTML = head + popular.map(function (p) { return '<a href="' + p.url + '" style="display:block;padding:10px 14px;text-decoration:none;color:#111827;font:14px system-ui,sans-serif;border-top:1px solid #f3f4f6"><strong>' + p.title + '</strong><br><span style="color:#6b7280;font-size:12px">' + p.description + '</span></a>'; }).join('');
      box.style.display = 'block';
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
      if (!hits.length) { box.innerHTML = '<div style="padding:10px 14px;color:#6b7280;font:14px system-ui,sans-serif">No results found.</div>'; box.style.display = 'block'; return; }
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
    document.querySelectorAll('input[data-site-search]').forEach(function (input) {
      var box = input._kluzarSearchBox;
      if (box) box.style.display = 'none';
    });
  });
})();
