$(document).ready(function(){
 $('.slider-for').slick({
  
    // the magic
  responsive: [{

        breakpoint: 2560,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease',
        asNavFor: '.slider-nav',
        draggable: false
      }

    }, {

        breakpoint: 1440,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease',
        asNavFor: '.slider-nav',
        draggable: false
      }

    },
      {

        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease',
        asNavFor: '.slider-nav',
        draggable: false
      }

    }, {

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease',
        asNavFor: '.slider-nav',
        draggable: false
      }
      }, {

      breakpoint: 768,
      settings: "unslick"

    },{

      breakpoint: 425,
      settings: "unslick"
     },{

      breakpoint: 375,
      settings: "unslick"
     },{

      breakpoint: 320,
      settings: "unslick"
     }
    
    
    ]
});


$('.slider-nav').slick({
  
  responsive: [{

        breakpoint: 2560,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: false
        }}, {
     

        breakpoint: 1440,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: false
        }
        }, {

        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: false
        }}, {

        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: false
        }}, {

      breakpoint: 768,
      settings: "unslick"
     }, {

      breakpoint: 425,
      settings: "unslick"
     }, {

      breakpoint: 375,
      settings: "unslick"
     },{

      breakpoint: 320,
      settings: "unslick"
     }
     
     ]
    
});

});









$(document).ready(function(){
 $('.slider-forr').slick({
  
    // the magic
  responsive: [{

      breakpoint: 2560,
      settings: "unslick"
     },{

      breakpoint: 1440,
      settings: "unslick"
     },{

      breakpoint: 1024,
      settings: "unslick"
     },{

      breakpoint: 992,
      settings: "unslick"
     }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-navv',
        dots: false,
        centerMode: true,
        
        cssEase: 'ease',
        arrows: false
     } }, {

      breakpoint: 425,
       settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-navv',
        dots: true,
        centerMode: true,
        
        cssEase: 'ease',
        arrows: true
     } },{

      breakpoint: 375,
      settings: "unslick"
     },{

      breakpoint: 320,
      settings: "unslick"
     }
    
    
    ]
});


$('.slider-navv').slick({
  
  responsive: [{

      breakpoint: 2560,
      settings: "unslick"
     },{

      breakpoint: 1440,
      settings: "unslick"
     },{

      breakpoint: 1024,
      settings: "unslick"
     },{

      breakpoint: 992,
      settings: "unslick"
     }, {

      breakpoint: 768,
       settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-forr',
        dots: true,
        centerMode: true,
        
        cssEase: 'ease',
        arrows: true
     } }, {

      breakpoint: 425,
       settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-forr',
        dots: true,
        centerMode: true,
        
        cssEase: 'ease',
        arrows: true
     } }, {

      breakpoint: 375,
      settings: "unslick"
     },{

      breakpoint: 320,
      settings: "unslick"
     }
     
     ]
    
});

});









