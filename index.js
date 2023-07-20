$(document).scroll(function () {
  if ($(this).scrollTop() === 0) {
    $("#logo").slideDown();
  } else {
    $("#logo").slideUp();
  }
});

var homeButton = document.querySelector("#home");

homeButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// SKILLS BUTTON REDIRECT ANIMATION
var skillsButton = document.querySelector("#skills");

var skillsSection = document.querySelector("#skills-window");

skillsButton.addEventListener("click", function () {
  skillsSection.scrollIntoView({ behavior: "smooth", block: "center" });
});

// CONTACT BUTTON REDIRECT ANIMATION
var contactButton = document.querySelector("#contacts");
var contactSection = document.querySelector("#contact-window");

contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
});
