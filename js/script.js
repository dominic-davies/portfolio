$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });
  $('[data-fancybox').fancybox();

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
});
