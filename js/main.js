const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll(".carousel img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 0; // Bắt đầu từ ảnh đầu tiên
let intervalId;

// Hàm tự động chạy slider
const autoSlide = () => {
  intervalId = setInterval(() => {
    imageIndex++;
    slideImage();
  }, 2000);
};

// Hàm cập nhật vị trí ảnh
const slideImage = () => {
  // Đảm bảo index không vượt quá số ảnh
  if (imageIndex >= images.length) imageIndex = 0;
  if (imageIndex < 0) imageIndex = images.length - 1;

  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
};

// Xử lý sự kiện khi click nút chuyển ảnh
const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage();
  autoSlide(); // Khởi động lại sau khi click
};

// Gán sự kiện click cho 2 nút
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Tạm dừng khi rê chuột vào
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

// Chạy lại khi rời chuột khỏi vùng slider
wrapper.addEventListener("mouseleave", autoSlide);

// Gọi slide đầu tiên và khởi động auto
slideImage();
autoSlide();

console.log("JS đã load");

document.querySelectorAll('.div-box').forEach(box => {
  const id = box.getAttribute('data-id');
  if (id) {
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
      window.location.href = `product-detail.html?id=${id}`;
    });
  }
});
document.querySelectorAll('.div-box-1').forEach(box => {
  const id = box.getAttribute('data-id');
  if (id) {
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
      window.location.href = `product-detail.html?id=${id}`;
    });
  }
});
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
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelector(".categories");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".menu .nav");
  let isMobile = window.innerWidth <= 768;

  // Xử lý resize window
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
  });

  // Xử lý menu toggle
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Xử lý dropdown categories
  categories.addEventListener('click', (e) => {
    if (isMobile) {
      e.preventDefault();
      const content = categories.querySelector(".categories-content");
      content.classList.toggle("active");
    }
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', (e) => {
    if (!categories.contains(e.target)) {
      categories.querySelector(".categories-content").classList.remove("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".menu .nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
