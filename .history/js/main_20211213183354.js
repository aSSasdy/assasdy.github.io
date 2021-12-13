window.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.offer__slides'),
        prev = document.querySelector('.button__btn-prev'),
        next = document.querySelector('.button__btn-next');
  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.classList = 'hide');

    slides[slideIndex - 1].classList = 'show';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

});