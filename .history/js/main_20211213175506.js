window.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.offer__slides'),
        prev = document.querySelector('.button__btn-prev'),
        next = document.querySelector('.button__btn-next');
  let slideIndex = 1;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
  }



});