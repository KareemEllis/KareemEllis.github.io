
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the carousels
  const carousels = document.querySelectorAll(".carousel-container");
  carousels.forEach(function(carousel) {
    const slides = carousel.querySelector(".carousel").getElementsByTagName("img");
    // Hide all images except the first one
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  });
});

function moveSlide(n, carouselIndex) {
  const carousels = document.querySelectorAll(".carousel-container");
  const slides = carousels[carouselIndex].querySelector(".carousel").getElementsByTagName("img");
  let slideIndex = parseInt(carousels[carouselIndex].getAttribute("data-slide-index"));
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  carousels[carouselIndex].setAttribute("data-slide-index", slideIndex);
}
