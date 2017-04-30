/* global $ */
/* global navigator */


/* owlCarousel */   
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


/* Smooth scrolling */ 
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
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/* Slideanim */ 
$(document).ready(function(){ 
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});


/* Change Navbar li */ 
$(document).ready(function(){ 
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop() + 50;
        var objectSelect = $("#heading1");
        var objectPosition = objectSelect.offset().top;
    if (scroll > objectPosition) {
        $('.first-nav-home, .first-nav-users, .first-nav-contacts').css('display','none');
        $('.second-nav-home, .second-nav-profile, .hideMessage').css('display','block');
    } else {
        $('.first-nav-home, .first-nav-users, .first-nav-contacts').css('display','block');
        $('.second-nav-home, .second-nav-profile, .hideMessage').css('display','none');
    }
    });
});

/* Contact form */ 
$(document).ready(function() {
    $('#contact-form').submit(function(e) {
                 
        var regExname = /^[a-zA-Z]{2,35}$/i;
        var windowith = $(window);
        var name = $('#name');
        var surname = $('#surname');
        var message = $('#message');
        
    if (name.val() == "" && windowith.width() >= 992) {
        $('.name-fail').fadeToggle(600);
        return false;
    }
    else if (name.val() == "" && windowith.width() < 992) {
        $('.buttonForm').animate({margin:'0 0 9px 0'},600);
        $('#sing').animate({margin:'15px 0 35px 0'},600);
        $('.name-fail').fadeToggle(600);
        return false;
    }  
    else if (name.val() != "" && !name.val().match(regExname) && windowith.width() >= 992) {
        $('.correct-name').fadeToggle(600);
         return false;
    }     
    else if (name.val() != "" && !name.val().match(regExname) && windowith.width() < 992) {
        $('.buttonForm').animate({margin:'0 0 9px 0'},600);
        $('#sing').animate({margin:'15px 0 35px 0'},600);
        $('.correct-name').fadeToggle(600);
        return false;
    }
    else if (surname.val() == "" && windowith.width() >= 992) {
        $('.surname-fail').fadeToggle(600);
        return false;
    }
    else if (surname.val() == "" && windowith.width() < 992) {
        $('.buttonForm').animate({margin:'0 0 9px 0'},600);
        $('#surname').animate({margin:'21px 0 0 0'},600);
        $('.surname-fail').fadeToggle(600);
        return false;
    }
    else if (surname.val() != "" && !surname.val().match(regExname) && windowith.width() >= 992) {
        $('.correct-surname').fadeToggle(600);
        return false;
    } 
    else if (surname.val() != "" && !surname.val().match(regExname) && windowith.width() < 992) {
        $('.buttonForm').animate({margin:'0 0 9px 0'},600);
        $('#surname').animate({margin:'21px 0 0 0'},600);
        $('.correct-surname').fadeToggle(600);
        return false;
    }
    else if (message.val() == "" && windowith.width() >= 992) {
        $('.submit-fail').fadeToggle(600);
        return false;
    }
    else if (message.val() == "" && windowith.width() < 992) {
        $('.buttonForm').animate({margin:'0 0 9px 0'},600);
        $('#message').animate({margin:'0 0 21px 0'},600);
        $('.submit-fail').fadeToggle(600);
        return false;
    }
    else if (message.val().length > 5000 && windowith.width() >= 992) {
        $('.long-message').fadeToggle(600);
        return false;
    }
    else if (message.val().length > 5000 && windowith.width() < 992) {
        $('.buttonForm').animate({margin:'0 0 9px 0'},600);
        $('#message').animate({margin:'0 0 21px 0'},600);
        $('.long-message').fadeToggle(600);
        return false;
    }
    else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/gorin.sergij@gmail.com',
          data: $('#contact-form').serialize(),
          dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.contact-link').fadeOut("slow", function () {
        $(this).css({display:"none"});
    });
        $('.submit-success').fadeIn("slow", function () {
        $(this).css({display:"block"});
    });
        $('html, body').animate({
         scrollTop: $(".run-here").offset().top
    }, 2000);
    return false;
    }
});
});

 
$('.close-success, #contact-form').click(function() {
    $('.submit-success').slideUp("slow", function () {
    $(this).css({display:"none"});
    });
    $('.contact-link').slideDown("slow", function () {
    $(this).css({display:"block"});
    });
});
  

/* Hide input errors */ 
$(document).ready(function() {
    $('.name-fail, .correct-name').click(function() {
    var $window = $(window);
    if ($window.width() < 992) {
        $('.name-fail').hide(600);
        $('.correct-name').hide(600);
        $('.buttonForm').animate({margin:'4px 0 25px 0'},600);
        $('#sing').animate({margin:'15px 0 15px 0'},600);
    } else if ($window.width() >= 992) {
        $('.name-fail').hide(600);
        $('.correct-name').hide(600);
        $('.buttonForm').css('margin-bottom','35px');
        $('#sing').css('margin-bottom','40px');
    }
    });
});
         
$(document).ready(function() {
    $('#name').click(function() {
    var $window = $(window);
    if ($window.width() < 992) {
        $('.name-fail').hide(600);
        $('.correct-name').hide(600);
        $('.buttonForm').animate({margin:'4px 0 25px 0'},600);
        $('#sing').animate({margin:'15px 0 15px 0'},600);
    } else if ($window.width() >= 992) {
        $('.name-fail').hide(600);
        $('.correct-name').hide(600);
        $('.buttonForm').css('margin-bottom','35px');
        $('#sing').css('margin-bottom','40px');
    }
    });
});
 
$(document).ready(function() {
    $('.surname-fail, .correct-surname').click(function() {
    var $window = $(window);
    if ($window.width() < 992) {
        $('.surname-fail').hide(600);
        $('.correct-surname').hide(600);
        $('.buttonForm').animate({margin:'4px 0 25px 0'},600);
        $('#surname').animate({margin:'0'},600);
    } else if ($window.width() >= 992) {
        $('.surname-fail').hide(600);
        $('.correct-surname').hide(600);
        $('.buttonForm').css('margin-bottom','35px');
    }
    });
});
 
$(document).ready(function() {
    $('#surname').click(function() {
    var $window = $(window);
    if ($window.width() < 992) {
        $('.surname-fail').hide(600);
        $('.correct-surname').hide(600);
        $('.buttonForm').animate({margin:'4px 0 25px 0'},600);
        $('#surname').animate({margin:'0'},600);
    } else if ($window.width() >= 992) {
        $('.surname-fail').hide(600);
        $('.correct-surname').hide(600);
        $('.buttonForm').css('margin-bottom','35px');
    }
    });
}); 
 
$(document).ready(function() {
    $('.submit-fail, .long-message').click(function() {
    var $window = $(window);
    if ($window.width() < 992) {
        $('.submit-fail').fadeOut( 1600, "linear");
        $('.long-message').fadeOut( 1600, "linear");
        $('.buttonForm').animate({margin:'4px 0 25px 0'},600);
        $('#message').animate({margin:'0'},600);
    } else if ($window.width() >= 992) {
        $('.submit-fail').fadeOut( 600, "linear");
        $('.long-message').fadeOut( 600, "linear");
        $('.buttonForm').css('margin-bottom','35px');
    }
    });
});
 
$(document).ready(function() {
    $('#message').click(function() {
    var $window = $(window);
    if ($window.width() < 992) {
        $('.submit-fail').fadeOut( 600, "linear");
        $('.long-message').fadeOut( 600, "linear");
        $('.buttonForm').animate({margin:'4px 0 25px 0'},600);
        $('#message').animate({margin:'0'},600);
    } else if ($window.width() >= 992) {
        $('.submit-fail').fadeOut( 600, "linear");
        $('.long-message').fadeOut( 600, "linear");
        $('.buttonForm').css('margin-bottom','35px');
    }
    });
});
 

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}


$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() === input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() === '' || input.val() === input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur().parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() === input.attr('placeholder')) {
      input.val('');
    }
  });
});
