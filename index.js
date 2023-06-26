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




// Function to activate underline for HOME button
function activateContactButtonUnderline() {
  var sectionTop = homeSection.offsetTop - (homeSection.offsetHeight * 0.1);
  var sectionBottom = sectionTop + (homeSection.offsetHeight * 1.4);
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    homeButton.classList.add('text-decoration-underline');
  } else {
    homeButton.classList.remove('text-decoration-underline');
  }
}

// Activate underline for contact button on scroll
window.addEventListener('scroll', activateContactButtonUnderline);


/// /////////// under line for SKILLS button

function activateSkillsButtonUnderline() {
  var sectionTop = skillsSection.offsetTop - (skillsSection.offsetHeight * 1);
  var sectionBottom = sectionTop + (skillsSection.offsetHeight * 1);
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    skillsButton.classList.add('text-decoration-underline');
  } else {
    skillsButton.classList.remove('text-decoration-underline');
  }
}

window.addEventListener('scroll', activateSkillsButtonUnderline);




/// /////////// under line for PORTFOLIO button

function activatePortfolioButtonUnderline() {
  var sectionTop = portfolioSection.offsetTop - (portfolioSection.offsetHeight * 0.8);
  var sectionBottom = sectionTop + (portfolioSection.offsetHeight * 1);
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    portfolioButton.classList.add('text-decoration-underline');
  } else {
    portfolioButton.classList.remove('text-decoration-underline');
  }
}

window.addEventListener('scroll', activatePortfolioButtonUnderline);


// Function to activate underline for contact button
function activateContactButtonUnderline() {
  var sectionTop = portfolioSection.offsetTop - (portfolioSection.offsetHeight * 0.01);
  var sectionBottom = sectionTop + (portfolioSection.offsetHeight * 3);
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    contactButton.classList.add('text-decoration-underline');
  } else {
    contactButton.classList.remove('text-decoration-underline');
  }
}

// Activate underline for contact button on scroll
window.addEventListener('scroll', activateContactButtonUnderline);
