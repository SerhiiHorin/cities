


   

/* 

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 5000});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });

    $(".btn").click(function(){
        $("#myCarousel").carousel(0);
    });  
});





   
   jQuery(function ($) {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});
  
   */

/*owlCarousel*/   
 $(document).ready(function () {
    $("#owl-demo").owlCarousel({
        
        itemsCustom : [
        [0, 2],
        [450, 2],
        [600, 3],
        [700, 3],
        [1000, 4],
        [1200, 4],
        [1400, 5],
        [1600, 7]
      ],
        navigation: true,
        navigationText: [
      "<span class='glyphicon glyphicon-menu-left'></span>",
      "<span class='glyphicon glyphicon-menu-right'></span>"
      ],
        pagination: true,
        slideSpeed : 700,
        paginationSpeed : 700
    });
});	    


$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, #heading a, #heading1 a, footer a[href='#myCity']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})