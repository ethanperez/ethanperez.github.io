$(function(){
  $(".hello").typed({
    strings: ["I'm Ethan^1500, and I enjoy ^600 programming", "I'm Ethan, and I enjoy ^400 solving problems", "I'm Ethan, and I enjoy ^900 building experiences", "I'm Ethan, and I enjoy ^3000 the simple things."],
    typeSpeed: 60,
    callback: function (){
      $('.btn').fadeIn(1000, "linear");
    }
  });
});

$(function() {
  $('.jumbotron').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('.navbar-fixed-top').fadeIn("slow", "linear", function() {
          $('.navbar-fixed-bottom').fadeOut("fast", "linear");
        });
      } else if (direction == 'up') {
        $('.navbar-fixed-top').fadeOut("fast", "linear", function() {
          $('.navbar-fixed-bottom').fadeIn("slow", "linear");
        });
      }
    }
  )
});

/*
  Easing function for anchor links,
  from Start Bootstrap
 */
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1200, 'easeInOutExpo');
    event.preventDefault();
  });
});