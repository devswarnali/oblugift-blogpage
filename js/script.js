 // Sticky Nav
    
 $(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 100) { 
        $(".header").addClass("fixed"); 
    } 
    else {
    $(".header").removeClass("fixed"); 
    }
  })

// scroll to top

function scrollTop() {
  if ($(window).scrollTop() > 200) {
    $(".scrool-to-top").addClass("active");
  } else {
    $(".scrool-to-top").removeClass("active");
  }
}
$(function () {
  scrollTop();
  $(window).on("scroll", scrollTop);

  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});


// add class

$('.navbar-toggler').on('click', function(){
  // $('.my_heading').addClass('red_text');
  $('body').toggleClass('overflow-hidden');
})
  