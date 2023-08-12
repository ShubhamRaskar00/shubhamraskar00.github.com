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

const form = document.getElementById("contactForm");
function senMsg(e) {
  e.preventDefault();
  const name = document.getElementById("name"),
    email = document.getElementById("email"),
    msg = document.getElementById("message");
  Email.send({
    SecureToken: "eea8980a-0d33-4e0a-ad8a-dfde64de83f0",
    To: "shubhamrasakar69@gmail.com",
    From: email.value,
    Subject: "Contact Form" + name.value,
    Body: msg.value,
  }).then((message) => alert(message));
}
form.addEventListener("submit", senMsg);
