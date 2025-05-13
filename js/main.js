document.querySelectorAll('.div-box-2').forEach(box => {
  const id = box.getAttribute('data-id');
  if (id) {
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
      window.location.href = `product-detail.html?id=${id}`;
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".menu .nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
