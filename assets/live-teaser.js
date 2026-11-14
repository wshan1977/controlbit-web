// LocationX 실시간 데모 안내 — 첫 방문 시 화면 오른쪽 아래에 작은 카드로 띄운다.
// 화면을 가리는 팝업 대신 비차단 카드: 3초 뒤 나타나고, 닫으면 7일 동안 다시 안 뜬다.
(function () {
  var DEMO_URL = 'https://wshan1977.github.io/locationx/live.html';
  var KEY = 'lx_live_teaser_closed';
  var HIDE_DAYS = 7;
  var en = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  var base = (document.currentScript && document.currentScript.src || '').replace(/live-teaser\.js.*$/, '');

  try {
    var t = Number(localStorage.getItem(KEY) || 0);
    if (t && Date.now() - t < HIDE_DAYS * 864e5) return;
  } catch (e) { /* 저장소를 못 쓰면 매번 보여도 무방 */ }

  var css = '' +
    '.lx-teaser{position:fixed;right:20px;bottom:20px;z-index:9999;width:340px;max-width:calc(100vw - 32px);' +
    'background:#fff;border:1px solid #e2e8f0;border-radius:16px;box-shadow:0 18px 50px rgba(10,37,64,.22);' +
    'overflow:hidden;font-family:inherit;transform:translateY(24px);opacity:0;transition:all .45s cubic-bezier(.2,.8,.2,1)}' +
    '.lx-teaser.on{transform:none;opacity:1}' +
    '.lx-teaser img{display:block;width:100%;height:150px;object-fit:cover;object-position:center;background:#0e1a2b}' +
    '.lx-teaser .lx-b{padding:14px 16px 16px}' +
    '.lx-teaser .lx-live{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:800;letter-spacing:.06em;' +
    'color:#16a34a;background:#ecfdf3;border-radius:999px;padding:3px 9px}' +
    '.lx-teaser h4{margin:8px 0 4px;font-size:16px;color:#0a2540;line-height:1.35}' +
    '.lx-teaser p{margin:0;font-size:13px;color:#64748b;line-height:1.55}' +
    '.lx-teaser .lx-row{display:flex;gap:8px;margin-top:12px}' +
    '.lx-teaser a.lx-go{flex:1;text-align:center;background:#0a2540;color:#fff;border-radius:10px;padding:9px 0;' +
    'font-size:13.5px;font-weight:700;text-decoration:none}' +
    '.lx-teaser a.lx-go:hover{background:#061a30}' +
    '.lx-teaser button.lx-x{border:1px solid #e2e8f0;background:#fff;color:#64748b;border-radius:10px;padding:0 12px;' +
    'font-size:13px;cursor:pointer}' +
    '.lx-teaser .lx-close{position:absolute;top:8px;right:8px;width:28px;height:28px;border:0;border-radius:50%;' +
    'background:rgba(255,255,255,.9);color:#334155;font-size:16px;line-height:28px;cursor:pointer}' +
    '.lx-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block;' +
    'box-shadow:0 0 0 0 rgba(34,197,94,.6);animation:lxPulse 1.6s infinite}' +
    '@keyframes lxPulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.55)}70%{box-shadow:0 0 0 8px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}' +
    '@media (max-width:600px){.lx-teaser{right:16px;left:16px;bottom:16px;width:auto}.lx-teaser img{height:110px}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var T = en ? {
    live: 'LIVE', title: 'Indoor positioning — see it running live',
    body: 'LocationX finds people and assets indoors in real time: ceiling locators track small tags. Watch our real installation right in your browser.',
    go: 'Open live demo', later: 'Later', alt: 'LocationX indoor positioning live demo'
  } : {
    live: 'LIVE', title: '실내 위치추적, 실제로 동작 중입니다',
    body: '천장의 로케이터가 사람·물건에 붙인 태그 위치를 실시간으로 찾아냅니다. 컨트롤비트에 설치된 실제 장비 화면을 지금 확인해 보세요.',
    go: '실시간 데모 보기', later: '나중에', alt: 'LocationX 실내 위치추적 실시간 데모'
  };

  function close() {
    try { localStorage.setItem(KEY, String(Date.now())); } catch (e) { /* 무시 */ }
    box.classList.remove('on');
    setTimeout(function () { box.remove(); }, 450);
  }

  var box = document.createElement('div');
  box.className = 'lx-teaser';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', T.title);
  box.innerHTML =
    '<button class="lx-close" aria-label="close">×</button>' +
    '<img src="' + base + 'live-teaser-thumb.jpg" alt="' + T.alt + '">' +
    '<div class="lx-b"><span class="lx-live"><span class="lx-dot"></span>' + T.live + '</span>' +
    '<h4>' + T.title + '</h4><p>' + T.body + '</p>' +
    '<div class="lx-row"><a class="lx-go" href="' + DEMO_URL + '" target="_blank" rel="noopener">' + T.go + ' →</a>' +
    '<button class="lx-x">' + T.later + '</button></div></div>';
  box.querySelector('.lx-close').onclick = close;
  box.querySelector('.lx-x').onclick = close;
  box.querySelector('.lx-go').addEventListener('click', function () {
    try { localStorage.setItem(KEY, String(Date.now())); } catch (e) { /* 무시 */ }
  });

  setTimeout(function () {
    document.body.appendChild(box);
    requestAnimationFrame(function () { requestAnimationFrame(function () { box.classList.add('on'); }); });
  }, 3000);
})();
