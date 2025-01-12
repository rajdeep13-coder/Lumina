document
  .getElementById("forgot-password-form")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email-input");

    if (!emailInput.value) {
      alert("Please enter your email address.");
      event.preventDefault();
    } else {
      alert("If the email is registered, a reset link will be sent.");
    }
  });
