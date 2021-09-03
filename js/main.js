$(document).ready(function(){

  //stick-up js
  $(".sticky-section").waypoint(function(direction){
    if(direction == "down"){
    $(".menu").addClass("sticky");
  } else{
    $(".menu").removeClass("sticky");
  }
  });
  
  //back to top
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

 // One Page Nav
    var top_offset = $('.nav-area').height() - 10;
    $('.menu nav ul').onePageNav({
      currentClass: 'active',  
      scrollOffset: top_offset,
});

  //  slick-testimonial
 $('.testimonial-active').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.testimonial-img'
   });
   $('.testimonial-img').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.testimonial-active',
     dots: false,
     arrows: false,
     centerMode: true,
     focusOnSelect: true,
     centerPadding: '0px',
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
   });  
   $('.sponsor-active').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     centerPadding: '0px',
     autoplaySpeed: 2000,
     arrows: false, 
   });
  
        
});
