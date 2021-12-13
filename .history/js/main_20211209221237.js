$(document).ready(function(){
    $('.btn-menu').click(function(){ 
    $('.menu').toggleClass('open');
    });
});

$('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  });