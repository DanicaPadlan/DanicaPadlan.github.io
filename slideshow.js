let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //updates all slides' display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //updates all dots to unactive
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot-active";
}