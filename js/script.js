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
    strings: [
      'Web Developer',
      'Responsive Design',
      'Modern Javascript-Based Architecture'
    ],
    typeSpeed: 90,
    loop: true,
    startDelay: 1200,
    showCursor: false
  });
  $('[data-fancybox').fancybox();

  //Smooth Scrolling Navigation
  $('#navigation li a').click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 35 }, 'slow');
  });

  // Fixed Navigation
  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {
    var body = $('body');

    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px');
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }
});
