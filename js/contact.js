document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    function validateContactForm() {
        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        let isValid = true;

        // Xóa các thông báo lỗi cũ nếu có
        document.querySelectorAll(".contact-error-message").forEach(e => e.remove());

        // Hàm tạo và hiển thị thông báo lỗi
        function showError(inputElement, message) {
            const error = document.createElement("div");
            error.className = "contact-error-message";
            error.style.color = "red";
            error.style.fontSize = "1.2rem";
            error.textContent = message;
            inputElement.parentNode.appendChild(error);
        }

        if (name === "") {
            console.log("Tên không hợp lệ");
            showError(nameInput, "Vui lòng nhập tên của bạn.");
            isValid = false;
        }

        if (phone === "") {
            console.log("Số điện thoại không hợp lệ");
            showError(phoneInput, "Vui lòng nhập số điện thoại của bạn.");
            isValid = false;
        }

        if (email === "" || !validateEmail(email)) {
            console.log("Email không hợp lệ");
            showError(emailInput, "Vui lòng nhập một địa chỉ email hợp lệ.");
            isValid = false;
        }

        if (subject === "") {
            console.log("Tiêu đề không hợp lệ");
            showError(subjectInput, "Vui lòng nhập tiêu đề.");
            isValid = false;
        }

        if (message === "") {
            console.log("Lời nhắn không hợp lệ");
            showError(messageInput, "Vui lòng nhập lời nhắn.");
            isValid = false;
        }

        if (isValid) {
            console.log("Gửi lời nhắn thành công!");
            alert("Gửi lời nhắn thành công!");
            contactForm.reset();
        }
    }

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    // Gắn hàm xử lý submit
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("Đang kiểm tra form...");
        validateContactForm();
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".menu .nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
