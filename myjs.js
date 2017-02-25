



/*owlCarousel*/   
 $(document).ready(function () {
    $("#owl-demo").owlCarousel({
        
        itemsCustom : [
        [0, 1],
        [375, 1],
        [425, 2],
        [600, 3],
        [700, 3],
        [1000, 3],
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






$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, #heading a, #heading1 a, #myCity a, footer a[href='#myCity']").on('click', function(event) {
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
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})




if(window.matchMedia('(max-width: 1366px)').matches)
    {
    $(window).scroll(function(){
      if($(window).scrollTop() < 1700){
          $('#navSecond').css('display','none');
          $('#navFirst').css('display','block');
       } else{
          $('#navSecond').css('display','block');
          $('#navFirst').css('display','none');
       }
 
       return false;
    });
}  

if(window.matchMedia('(max-width: 1200px)').matches)
    {
    $(window).scroll(function(){
      if($(window).scrollTop() < 1250){
          $('#navSecond').css('display','none');
          $('#navFirst').css('display','block');
       } else{
          $('#navSecond').css('display','block');
          $('#navFirst').css('display','none');
       }
 
       return false;
    });
}  




if(window.matchMedia('(max-width: 992px)').matches)
    {
    $(window).scroll(function(){
      if($(window).scrollTop() < 1350){
          $('#navSecond').css('display','none');
          $('#navFirst').css('display','block');
       } else{
          $('#navSecond').css('display','block');
          $('#navFirst').css('display','none');
       }
 
       return false;
    });
}  


   if(window.matchMedia('(max-width: 768px)').matches)
    {
    $(window).scroll(function(){
      if($(window).scrollTop() < 1100){
          $('#navSecond').css('display','none');
          $('#navFirst').css('display','block');
       } else{
          $('#navSecond').css('display','block');
          $('#navFirst').css('display','none');
       }
 
       return false;
    });
}  
  
  if(window.matchMedia('(max-width : 480px)').matches)
    {
    $(window).scroll(function(){
      if($(window).scrollTop() < 700){
          $('#navSecond').css('display','none');
          $('#navFirst').css('display','block');
       } else{
          $('#navSecond').css('display','block');
          $('#navFirst').css('display','none');
       }
 
       return false;
    });
}  
if(window.matchMedia('(max-width : 320px)').matches)
    {
    $(window).scroll(function(){
      if($(window).scrollTop() < 1465){
          $('#navSecond').css('display','none');
          $('#navFirst').css('display','block');
       } else{
          $('#navSecond').css('display','block');
          $('#navFirst').css('display','none');
       }
 
       return false;
    });
}  
  



 
 $(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#name')
      var surname = $('#surname')
      var message = $('#message')
    
      if (name.val() == "") {
        $('.name-fail').fadeToggle(600);
        return false;
      }
      
      else if (surname.val() == "") {
        $('.surname-fail').fadeToggle(600);
        return false;
      }
      else if (message.val() == "") {
        $('.submit-fail').fadeToggle(600);
        return false;
      }
      
       else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/gorin.sergij@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(600);
        $('.hideMessage').show();
        $('html, body').animate({
         scrollTop: $(".submit-success").offset().top
    }, 2000);
    return false;
        
      }
    });
  
  $('.submit-fail, .name-fail, .surname-fail, .submit-success').click(function() {
    $(this).hide(600);
  })
  
   $('.submit-success').click(function() {
    $('.hideMessage').hide(600);
  })
  
 $('#name').click(function() {
    $('.name-fail').hide(600);
  })
  
  $('#surname').click(function() {
    $('.surname-fail').hide(600);
  })
  
   $('#message').click(function() {
    $('.submit-fail').hide(600);
  })
  
  
});
  
 
 /*
 $(document).ready(function(){ 
   $(function() {
    if($(window).width() >= 1920) {
    $("#bigSlade").append("#largesl");
     $("#mediumsl").remove();
    }
   });
 });
   $(document).ready(function(){ 
    $(function() {
     if($(window).width() < 1920) {
    $("#bigSlade").append("#mediumsl");
     $("#largesl").remove();
    }
   });
   });

 */ 
 /*
   if(window.matchMedia('(max-width: 1920px)').matches) {
    
   
      if($(window).width() >= 1920){
          $('.budlargexl').css('display','none');
          $('.budlarge').css('display','block');
       } else {
          $('.budlarge').css('display','block');
          $('.budlargexl').css('display','none');
       }
 
}  
 */
   
/*  
$(function() {
  if($(window).width() >= 1920) {
    $("img").each(function() {
      $(this).attr("src", $(this).attr("src").replace("image/645*352/", "image/960*395/"));
    });
  }
});


var $window = $(window),
    $budlarge = $('.budlarge');
    $budlargexl = $('.budlargexl');

function resize() {
    if ($window.width() < 1920) {
        $budlargexl.hide()
        $budlarge.show()
    } else if ($window.width() >= 1920) {
        $budlargexl.show()
        $budlarge.hide()
    }
}
*/
/* 
var imageBgs = document.querySelectorAll('[data-bg]');
var screenWidth = window.innerWidth;

for(var i=0; i<imageBgs.length; i++) {
    if( screenWidth < 1024 ){
        // Load mobile image
        imageBgs[i].style.backgroundImage = 'url('+imageBgs[i].getAttribute('data-bg-img-mobile')+')';
    } else if( screenWidth >= 1024 && screenWidth <= 1366 ) {
        // Ipad
        imageBgs[i].style.backgroundImage = 'url('+imageBgs[i].getAttribute('data-bg-img-tablet')+')';
    } else {
        // desktop image
        imageBgs[i].style.backgroundImage = 'url('+imageBgs[i].getAttribute('data-bg-img-desktop')+')';
    }
}

*/
/*
var $window = $(window),
    $img = $('#bigSlade');

function resize() {
    if ($window.width() < 1920) {
        $img.attr('src', 'image/645*352/budlarge.jpg');
    }
    else if ($window.width() > 1920) {
        $img.attr('src', 'image/960*395/budapest-xl.jpg');
    }
}
*/