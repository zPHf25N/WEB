document.addEventListener('DOMContentLoaded', () => {
  const districts = document.querySelectorAll('.seoul-map .district');
  const label = document.getElementById('district-label');

  // 구 이름 라벨 표시
  districts.forEach(d => {
    d.addEventListener('mouseenter', () => {
      const name = d.dataset.name || '';
      if (name && label) {
        label.textContent = name;
        label.classList.add('visible');
      }
    });

    d.addEventListener('mouseleave', () => {
      if (label) {
        label.classList.remove('visible');
      }
    });

    // 클릭하면 data-link로 이동
    d.addEventListener('click', () => {
      const link = d.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });
});
