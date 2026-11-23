(function () {
  function init() {
    var inputs = document.querySelectorAll('input[data-site-search]');
    if (!inputs.length) return;
    var index = null, loading = null;
    function loadIndex() {
      if (index) return Promise.resolve(index);
      if (!loading) {
        loading = fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (j) { index = j.pages || j; return index; }).catch(function () { return []; });
      }
      return loading;
    }
    inputs.forEach(function (input) {
      var box = document.createElement('div');
      box.className = 'kluzar-search-results';
      box.style.cssText = 'position:absolute;z-index:10000;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.15);max-width:340px;width:100%;overflow:hidden;display:none;text-align:left';
      var wrap = input.parentElement;
      if (wrap) { if (getComputedStyle(wrap).position === 'static') wrap.style.position = 'relative'; wrap.appendChild(box); }
      input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        if (q.length < 2) { box.style.display = 'none'; return; }
        loadIndex().then(function (pages) {
          var hits = pages.filter(function (p) { return (p.title + ' ' + p.description + ' ' + p.url).toLowerCase().indexOf(q) > -1; }).slice(0, 8);
          if (!hits.length) { box.innerHTML = '<div style="padding:10px 14px;color:#6b7280;font:14px system-ui,sans-serif">No results found.</div>'; box.style.display = 'block'; return; }
          box.innerHTML = hits.map(function (p) { return '<a href="' + p.url + '" style="display:block;padding:10px 14px;text-decoration:none;color:#111827;font:14px system-ui,sans-serif;border-top:1px solid #f3f4f6"><strong>' + p.title + '</strong><br><span style="color:#6b7280;font-size:12px">' + p.description + '</span></a>'; }).join('');
          box.style.display = 'block';
        });
      });
      document.addEventListener('click', function (e) { if (!box.contains(e.target) && e.target !== input) box.style.display = 'none'; });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
