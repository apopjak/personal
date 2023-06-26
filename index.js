var logo = document.getElementById('logo');
var isLogoVisible = true;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var logoAppearPos = window.innerHeight * 0.1; // 10% of the window's height

  if (currentScrollPos === 0) {
    logo.style.opacity = '1';
    logo.style.display = 'block';
    isLogoVisible = true;
  } else if (currentScrollPos > logoAppearPos && isLogoVisible) {
    logo.style.opacity = '0';
    isLogoVisible = false;
    setTimeout(function() {
      logo.style.display = 'none';
    }, 300);
  } else if (currentScrollPos <= logoAppearPos && !isLogoVisible) {
    logo.style.opacity = '1';
    logo.style.display = 'block';
    isLogoVisible = true;
  }
});


// HOME BUTTON ANIMATIO 
var homeButton = document.querySelector("#home");
var homeSection = document.querySelector("#home-window");

homeButton.addEventListener("click", function(){
  homeSection.scrollIntoView({behavior: "smooth", block: "start"});
});




// SKILLS BUTTON REDIRECT ANIMATION
var skillsButton = document.querySelector("#skills");

var skillsSection = document.querySelector("#skills-window");

skillsButton.addEventListener("click", function(){
  skillsSection.scrollIntoView({behavior: "smooth", block: "center"});
})


// PORTFOLIO BUTTON REDIRECT ANIMATION
var portfolioButton = document.querySelector("#portfolio");
var portfolioSection = document.querySelector("#portfolio-window");

portfolioButton.addEventListener("click", function(){
  var scrollOptions = {
    behavior: "smooth",
    block: "center"
  };
  portfolioSection.scrollIntoView(scrollOptions);
});

// CONTACT BUTTON REDIRECT ANIMATION
var contactButton = document.querySelector("#contacts");
var contactSection = document.querySelector("#contact-window");

contactButton.addEventListener("click", function(){
  contactSection.scrollIntoView({behavior: "smooth", block: "center"})
})

