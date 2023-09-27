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
        autoplaySpeed: 1000,
    });



    // Banner slider js ended

    
});