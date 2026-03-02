// Form Validation with Regular Expressions (Alphanumeric Only)

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop submit until we validate

    const value = inputField.value.trim();

    // Alphanumeric only (letters and numbers), must be at least 1 character
    const pattern = /^[A-Za-z0-9]+$/;

    if (pattern.test(value)) {
      message.textContent = "✅ Valid input! Form would submit successfully.";
      message.style.color = "green";
    } else {
      message.textContent = "❌ Error: Please enter only letters and numbers (no spaces or symbols).";
      message.style.color = "red";
    }
  });
});