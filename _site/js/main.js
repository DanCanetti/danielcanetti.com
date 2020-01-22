// Current Year
$(".curr-year").text( (new Date).getFullYear() );

// Add class to nav on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $("nav").addClass("scroll");
    } else {
        $("nav").removeClass("scroll");
    }
});

// Rotate the circle
$(window).scroll(function() {
  var theta = $(window).scrollTop() / 250 % Math.PI;
  $('#mainlogo').css({ transform: 'rotate(' + theta + 'rad)' });
});

// If Logo Grid has class `case-study-coming-soon` or `no-case-study-link` remove href
$(".case-study-coming-soon").removeAttr("href");
$(".no-case-study").removeAttr("href");

// Project Images Slick Slider
$('.project-images').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true
});

// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
