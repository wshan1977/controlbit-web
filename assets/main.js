// 모바일 메뉴 토글
document.getElementById('menuBtn').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});

// 스크롤 시 요소 서서히 나타나기
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
