document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", function () {
      alert("Redirecting to contact page 🚀");
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const whatsappNumber = "8668820077"; // your number

      const text =
        `Hello Patil WebTech 👋%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📧 Email: ${email}%0A` +
        `💬 Message: ${message}`;

      const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${text}`;

      window.open(whatsappURL, "_blank");
    });
  }
});

