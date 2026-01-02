const scriptURL = "https://script.google.com/macros/s/AKfycbzNw_aj0A86t7cG_fY6mI3sSlrIBKYIenS49yfF16Vy76rxeIJQ1lQbjoVjtgk46bLk/exec";
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form)})
    .then(() => {
      status.innerHTML = "✅ Thank you! We will contact you soon.";
      form.reset();
    })
    .catch(() => {
      status.innerHTML = "❌ Error! Try again.";
    });
});