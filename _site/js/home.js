// Zoom on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom").css({
		transform: 'translate3d(0, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/1)/100+')',
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