let dots = document.getElementsByClassName("dots__item"),
  dotsArea = document.getElementsByClassName("dots__block")[0],
  slider = document.getElementsByClassName("slide"),
  slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slider.length;
  } else if (n > slider.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slider[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

setInterval(() => {
  dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        e.target.classList.contains("dots__item") &&
        e.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  };
});
