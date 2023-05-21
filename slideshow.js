let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fade");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add("fade");
  setTimeout(showSlides, 3000);
}

showSlides();
