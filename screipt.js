$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$("body").scrollspy({
  target: ".navbar-fixed-top",
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const phoneField = document.getElementById('phone');

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value,
            phoneNumber: phoneField.value
        };

        try {
            // Send the form data to the API
            const response = await fetch('https://shubh-backend.onrender.com/api/contact/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            // Handle the response data
            alert('Your message has been sent successfully!');
        } catch (error) {
            // Handle errors
            alert('There was an error sending your message. Please try again later.');
        } finally {
            // Reset the form
            contactForm.reset();
        }
    });
});
