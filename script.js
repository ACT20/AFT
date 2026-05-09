window.onload = function () {

  emailjs.init({
    publicKey: "j5haE352j26Q8ja_-",
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {

      event.preventDefault();

      const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      emailjs.send(
        "service_t3gac33",
        "template_vjbb26o",
        templateParams
      )
      .then(function () {
        alert("Message sent successfully!");
      })
      .catch(function (error) {
        console.error(error);
        alert("Failed to send message.");
      });

    });

};