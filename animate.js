$(document).ready(function() {

  // Create a variable
  var $header = $('.content');
  var $overlay = $('.overlay'); 

  var tween = TweenLite.to($overlay, 1.33, {
    opacity: 0,
    ease: Power4.easeOut,
    delay: .33,
    autoCSS: true
  });

  $('a').click(function(e) {
    var url = $(this).attr("href");
    e.preventDefault();

    var tl = new TimelineLite();
    //tl.add(TweenLite.to($header, 1, {opacity: 0, scale: 1.05}));
    tl.add(TweenLite.to($overlay, 1, { opacity: 1 }));
    setTimeout(function() {
        window.location = url;
    }, 1000);
  });

});