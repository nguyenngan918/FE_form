$(document).ready(function () {
  // $(".owl-carousel").owlCarousel({
  //   items: 1,
    
  //   margin: 10,
  //   loop: true,
  //   nav: true,
  //   navText: ['<img src="https://picsum.photos/50/50">','<img src="https://picsum.photos/50/51">']
  // });

  // var owl = $('.owl-carousel');
  // owl.owlCarousel();
  // // Go to the next item
  // $('.next').click(function () {
  //   owl.trigger('next.owl.carousel');
  // })
  // // Go to the previous item
  // $('.prev').click(function () {
  //   // With optional speed parameter
  //   // Parameters has to be in square bracket '[]'
  //   owl.trigger('prev.owl.carousel', [300]);
  // })


  $(".container > ul > li > a").click(function(e){
      e.preventDefault();
      // alert("hello");
      $(this).siblings(".dropdown")	.slideToggle();
      if($(this).find(".iconRotate").hasClass('rotate')){
        $(this).find(".iconRotate")	.removeClass('rotate');	
        // $(this).find(".iconRotate")	.addClass('rotate90');	

      }
      else{
        $(this).find(".iconRotate")	.addClass('rotate');	

      }
  });
});