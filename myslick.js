

$(document).ready(function(){
 function createSlick() { 
 $('.slider').not('.slick-initialized').slick({
  
    // the magic
  responsive: [{
        
        breakpoint: 3841,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: true,
        fade: true,
        speed: 500
      }

    },{
        
        breakpoint: 2561,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: true,
        fade: true,
        speed: 500
      }

    }, {
        
        
        breakpoint: 1921,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: true,
        fade: true,
        speed: 500
      }

    }, {

        breakpoint: 1440,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: true,
        fade: true,
        speed: 600
      }

    }, {

        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: true,
        fade: true,
        speed: 600
      }

    }, {

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: false,
        fade: true,
        speed: 500
        
      }
      }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.slider-nav-thumbnails',
        draggable: false,
        fade: true,
        speed: 500
      }
      }
    
    ]
});


$('.slider-nav-thumbnails').not('.slick-initialized').slick({
  
  responsive: [{

        breakpoint: 3841,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: true,
        focusOnSelect: true
        }},{

        breakpoint: 2561,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: true,
        focusOnSelect: true
        }}, {

        breakpoint: 1921,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: true,
        focusOnSelect: true
        }}, {
     

        breakpoint: 1440,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: true,
        focusOnSelect: true
        }
        }, {

        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: true,
        focusOnSelect: true
        }}, {

        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: false,
        focusOnSelect: true
        }}, {

        breakpoint: 768,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease',
        arrows: false
        
        }}, {

        breakpoint: 426,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '37px',
        cssEase: 'ease',
        arrows: false
        }},  {

        breakpoint: 375,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '65px',
        cssEase: 'ease',
        arrows: false
        }},{

        breakpoint: 321,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: true,
        centerMode: true,
        centerPadding: '5px',
        cssEase: 'ease',
        arrows: false
        }}
     
     ]
    
});
}

createSlick();


//Now it will not throw error, even if called multiple times.
$(window).on('resize', createSlick);

 //remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

//UPDATED 
  
$('.slider').on('afterChange', function(event, slick, currentSlide){   
  $('.content').hide();
  $('.content[data-id=' + (currentSlide + 1) + ']').show();
});
});




$(document).ready(function(){
    $(".back-to-view").click(function(){
        $('.slider').slick('slickGoTo',0);
    });
});




