$(function() {
    // popup-search-box js start
    $("#openSearch").click(function() {
        $(".popup-search-box").addClass("show");
    });

    $("#closeSearch").click(function() {
        $(".popup-search-box").removeClass("show");
    });
    // popup-search-box js ended
    // Banner slider js start
    $('.banner_slider').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    // Banner slider js ended
    // New Product slider js start
    $('.new_product_slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<i class="fa-solid fa-chevron-left new_product_slider_arrow"><i>',
        nextArrow: '<i class="fa-solid fa-chevron-right new_product_slider_arrow"><i>',
        responsive: [
             {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 430,
              settings: {
                slidesToShow: 1,
                
              }
            }
        ]
    });

    // Countdown Activation
    $('#deals_countdown').countdown('2023/12/10', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div><h4>%D</h4><P>Days</P></div>  '
          +"<span>:</span>"
          + '<div><h4>%H</h4><P>Hours</P></div>  '
          +"<span>:</span>"
          + '<div><h4>%M</h4><P>Minute</P></div>  '
         + "<span>:</span>"
          + '<div><h4>%S</h4><P>Sec</P></div> '));
      });

    //   Deals Slider
    $('.deals_slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    })
    // Latest News Slider
    $('.latest_slider').slick({
        arrows:false,
        dots: true,
        slidesToShow:4,
        responsive: [
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    })

    // BackToTop Button
    $(window).on('scroll',function() {
        let scrollTop = $(window).scrollTop();

        if(scrollTop > 600){
             $('#backToTop').fadeIn(500);
        }else{
            $('#backToTop').fadeOut(500);
        }
    })
    $("#backToTop").on('click',function(){
        $('html, body').animate({
            scrollTop:0
        }, 200)
    })
    // About Page js start
    // Team slider js
    $('.team_slider').slick({
        slidesToShow: 4,
        prevArrow: '<i class="fa-solid fa-caret-left team_slider_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-caret-right team_slider_arrow"></i>',
    })

    // Instragram slider js
    $('.insta_slider').slick({
        slidesToShow:6,
        arrows:false,
        dots:true,
    })
    
});
// Activate Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))