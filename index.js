var logo = document.getElementById('logo');
var isLogoVisible = true;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0) { // Check if at the top of the page
    logo.style.opacity = '1';
    logo.style.display = 'block';
    isLogoVisible = true;
  } else if (currentScrollPos > 0 && isLogoVisible) { // Hide logo when scrolling down
    logo.style.opacity = '0';
    isLogoVisible = false;
    setTimeout(function() {
      logo.style.display = 'none';
    }, 300);
  } else if (currentScrollPos === 0 && !isLogoVisible) { // Show logo when scrolling up to the top
    logo.style.opacity = '1';
    logo.style.display = 'block';
    isLogoVisible = true;
  }
});
