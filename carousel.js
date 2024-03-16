document.addEventListener("DOMContentLoaded", function() {
    // Hide all images except the first one
    const slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  });
  
  let slideIndex = 0;
  
  function moveSlide(n) {
    const slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
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
  }
  