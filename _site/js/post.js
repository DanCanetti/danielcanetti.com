// Hide zoom layer behind body after x scroll 
$(window).scroll(function(){
    // Scrol Top
    if ($(window).scrollTop() >= 500) {
      $('.affiliate').addClass('show');
    }
    else {
      $('.affiliate').removeClass('show');
    }
    // Scroll Bottom
    if($(window).scrollTop() + 500 > $(document).height() - $(window).height() ){
        $('.affiliate').removeClass('show');
    }
});

// Randomize Affiliate 
var random = Math.floor(Math.random() * $('.affiliate').length);
$('.affiliate').hide().eq(random).show();