// More explicit information
$.ajax('https://api.tumblr.com/v2/blog/everyactionhasapurpose.tumblr.com/posts', 
  {
    dataType:'jsonp', 
    data: { 
        limit : 10, 
        api_key : '1tkmmd347R1BDJqcaKXfbAjUHGkpREh6BtSfi4PIw6LAaXs2DW'
    }, 
    success: function(posts) { 
      var postings = posts.response.posts;
      console.log(postings);
      var text = '';

      for (var i in postings) {
        var p = postings[i];
        if(p.type == 'photo'){
          text += '<div class="case-study-item moodboard">' + '<a href='+ p.post_url +' target="_blank">' + '<img src=' +  p.photos[0].original_size.url + '>' + '</a></div>';
        }
        if(p.type == 'video'){
          text += '<div class="case-study-item moodboard">' + p.player[0].embed_code + '</div>';
        }
        if(p.type == 'text'){
          // DO NOTHING
          //text += '<div class="case-study-item moodboard">' + p.body + '</div>';
        }
      }
      $('#tumblrfeed').html();
      $('#tumblrfeed').append(text);
    }
  }
);

var calls = 10;
$(window).on('scroll', function() { 
  if ($(window).scrollTop() >= $('.body__section').offset().top + $('.body__section').outerHeight() - window.innerHeight) { 
    calls += 10;
    if(calls == 100) {
      // Do nothing
    } else {
      $.ajax('https://api.tumblr.com/v2/blog/everyactionhasapurpose.tumblr.com/posts', 
        {
          dataType:'jsonp', 
          data: { 
              limit : 10,
              offset : calls, 
              api_key : '1tkmmd347R1BDJqcaKXfbAjUHGkpREh6BtSfi4PIw6LAaXs2DW'
          }, 
          success: function(posts) { 
            var postings = posts.response.posts;
            console.log(postings);
            var text = '';
      
            for (var i in postings) {
              var p = postings[i];
              if(p.type == 'photo'){
                text += '<div class="case-study-item moodboard">' + '<a href='+ p.post_url +' target="_blank">' + '<img src=' +  p.photos[0].original_size.url + '>' + '</a></div>';
              }
              if(p.type == 'video'){
                text += '<div class="case-study-item moodboard">' + p.player[0].embed_code + '</div>';
              }
              if(p.type == 'text'){
                // DO NOTHING
                //text += '<div class="case-study-item moodboard">' + p.body + '</div>';
              }
            }
            $('#tumblrfeed').append(text);
          }
        }
      );
    }
  } 
}); 

/*
$(window).scroll(function() {
  if($(window).scrollTop() == $(document).height() - $(window).height()) {
    $.ajax('https://api.tumblr.com/v2/blog/everyactionhasapurpose.tumblr.com/posts', 
      {
        dataType:'jsonp', 
        data: { 
            limit : 10,
            offset : 10, 
            api_key : '1tkmmd347R1BDJqcaKXfbAjUHGkpREh6BtSfi4PIw6LAaXs2DW'
        }, 
        success: function(posts) { 
          var postings = posts.response.posts;
          console.log(postings);
          var text = '';
    
          for (var i in postings) {
            var p = postings[i];
            if(p.type == 'photo'){
              text += '<div class="case-study-item moodboard">' + '<a href='+ p.post_url +' target="_blank">' + '<img src=' +  p.photos[0].original_size.url + '>' + '</a></div>';
            }
            if(p.type == 'video'){
              text += '<div class="case-study-item moodboard">' + p.player[0].embed_code + '</div>';
            }
            if(p.type == 'text'){
              // DO NOTHING
              //text += '<div class="case-study-item moodboard">' + p.body + '</div>';
            }
          }
          $('#tumblrfeed').append(text);
        }
      }
    );
  }
});
*/

// Show/Hide Affiliate
$(window).scroll(function(){
    // Scroll Top
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