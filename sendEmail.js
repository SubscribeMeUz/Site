document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector("#name-field").value;
    const email = form.querySelector("#email-field").value;
    const subject = form.querySelector("#subject-field").value;
    const message = form.querySelector("#message-field").value;
    const submitButton = form.querySelector('button[type="submit"]');
    const spinner = form.querySelector(".spinner");
    const successCard = form.querySelector(".card-success");
    const errorCard = form.querySelector(".card-error");

    submitButton.classList.add("loading");
    submitButton.disabled = true;
    spinner.style.display = "block";

    emailjs
      .send("service_en118vv", "template_blevpbo", {
        name,
        email,
        message,
        subject,
      })
      .then(
        function (response) {
          successCard.textContent =
            response.status + " Сообщение успешно отправлено!";
          successCard.style.display = "block";
          submitButton.classList.remove("loading");
          submitButton.disabled = false;
          spinner.style.display = "none";
          setTimeout(() => (successCard.style.display = "none"), 3000);
          form.reset();
        },
        function (error) {
          errorCard.textContent = "Ошибка: " + error.message;
          errorCard.style.display = "block";
          submitButton.classList.remove("loading");
          submitButton.disabled = false;
          spinner.style.display = "none";
          setTimeout(() => (errorCard.style.display = "none"), 3000);
        }
      );
  });
