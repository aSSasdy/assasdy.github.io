window.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.offer__slides'),
        prev = document.querySelector('.button__btn-prev'),
        next = document.querySelector('.button__btn-next');
  let slideIndex = 1;

  showSlides(slideIndex);

  if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
  } else {
      total.textContent = slides.length;
  }

  function showSlides(n) {
      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');

      slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
      
      if (slides.length < 10) {
          current.textContent =  `0${slideIndex}`;
      } else {
          current.textContent =  slideIndex;
      }
  }

  function plusSlides (n) {
      showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function(){
      plusSlides(-1);
  });

  next.addEventListener('click', function(){
      plusSlides(1);
  });



});