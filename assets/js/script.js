$(document).ready(function(){
  $('.carousel.carousel-slider').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
  $('.tabs').tabs();

  $('.aboutus').hover(function(){
    $(".aboutus.dropdown-con").toggleClass('hide');
  });
  $('.whyxelerate').hover(function(){
    $(".whyxelerate.dropdown-con").toggleClass('hide');
  });
  $('.programs').hover(function(){
    $(".programs.dropdown-con").toggleClass('hide');
  });

});


// autoplay()
// function autoplay() {
//     $('.carousel.carousel-slider').carousel('next');
//     setTimeout(autoplay, 4500);
// }
