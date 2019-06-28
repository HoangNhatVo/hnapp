(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  
  
$(window).on('load',activetitle);
function activetitle(e){
  $('#title').addClass('active');
  $('#title2').addClass('active');

  if ( $("html,body").scrollTop() < $(window).height() ) {
    $("#back-to-top").addClass("hidden")
} else {
    $("#back-to-top").removeClass("hidden")
}

$(window).scroll(function(){
  var introheight= $('.intro-text').outerHeight();
  if(this.window.scrollY<400){
    $('#title').addClass('active');
  $('#title2').addClass('active');
  }
  else{
    $('#title').removeClass('active');
  $('#title2').removeClass('active');
  }
    if ( $("html,body").scrollTop() < $(window).height() ) {
        $("#back-to-top").addClass("hidden")
    } else {
        $("#back-to-top").removeClass("hidden")
    }
});


$("#back-to-top").click(function(){
    $("html,body").animate({
        scrollTop: "0"
    }, 500);
});
}
$(".items").isotope({
  itemSelector:'.portfolio-item',
  layoutMode:'fitRows'
});
$('.menu button').click(function(){
  $('.menu button').removeClass('act');
  $(this).addClass('act');
  var Selector=$(this).attr('data-filter');
  $('.items').isotope({
    filter:Selector
  });
  return false;
})

})(jQuery); // End of use strict
