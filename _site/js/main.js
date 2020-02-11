// Zoom on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom").css({
		transform: 'translate3d(45%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/1)/100+')',
	});
});

// Fade zoom on scroll and change bg colour
$(function() {
    var heightThreshold = $(".body").offset().top;
    var heightThreshold_end  = $(".body").offset().top +$(".body").height() ;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= heightThreshold && scroll <=  heightThreshold_end ) {
            $('.body').addClass('dark');
            $('.zoom__content').addClass('fade');
            $("nav").addClass("scroll");
            $(".scroll-hint").addClass("hide");
        } else {
            $('.body').removeClass('dark');
            $('.zoom__content').removeClass('fade');
            $("nav").removeClass("scroll");
            $(".scroll-hint").removeClass("hide");
        }
    });
})

// Hide zoom layer behind body after x scroll 
$(window).scroll(function(){
  if ($(window).scrollTop() >= 1000) {
    $('.zoom').addClass('move');
   }
   else {
    $('.zoom').removeClass('move');
   }
});

// Toggle Project Images
new Vue({
  el: '#project-list',
  data() {
    return {
      hover1: false, // Emerald Kitchens
      hover2: false, // K.B Pro
      hover3: false, // Wharncliffe
    };
  }
});

// Enable FontAwesome Pseudo
window.FontAwesomeConfig = {
  searchPseudoElements: true
}

// Toggle menu
$(document).ready(function(){
    $(".toggle-menu").click(function(){
    $(".toggle-menu").toggleClass("toggle-menu--toggle");
    $(".toggle-menu__toggle-menu-icon").toggleClass("toggle-menu-icon--toggle");
    $("body").toggleClass("body--nav-toggle");
    $(".main-nav").toggleClass("main-nav--toggle");
  });
});

// Current Year
$(".curr-year").text( (new Date).getFullYear() );


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
