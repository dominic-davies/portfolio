$(window).on('load', function() {
  $('.portfolio-section-grid-items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
});

$(document).ready(function() {
  //superslides code
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  //typed code
  var typed = new Typed('.typed', {
    strings: ['Web Developer', '#100 days of code'],
    typeSpeed: 90,
    loop: true,
    startDelay: 1200,
    showCursor: false
  });
  $('[data-fancybox').fancybox();
});
