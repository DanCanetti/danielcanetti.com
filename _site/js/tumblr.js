$.ajax({
    url: "http://api.tumblr.com/v2/blog/everyactionhasapurpose.tumblr.com/posts?api_key=1tkmmd347R1BDJqcaKXfbAjUHGkpREh6BtSfi4PIw6LAaXs2DW",
    dataType: 'jsonp',
    success: function(posts){
      var postings = posts.response.posts;
      console.log(postings);
      var text = '';

for (var i in postings) {
       var p = postings[i];
  if(p.type == 'photo'){
    text += '<div class="case-study-item">' + '<a href='+ p.post_url +' target="_blank">' + '<img src=' +  p.photos[0].original_size.url + '>' + '</a></div>';
  }
    if(p.type == 'video'){
    text += '<div class="video-container">' + p.player[0].embed_code + '</div>' +'<p></p>' + p.caption;
  }
      if(p.type == 'text'){
    text += p.body + p.caption;
  }
      }
      $('#tumblrfeed').append(text);
    }
});