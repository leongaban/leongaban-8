$(document).ready(function() {

    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);


    // textTruncator
    //.................................................................................. 
    // function textTruncator(copy, count, replaceThis){

    //     var truncatedCopy = jQuery.trim(copy).substring(0, count).split(" ").slice(0, -1).join(" ") + "...";

    //     $(replaceThis).text(truncatedCopy);
    // }

    

    // moveTo
    //.................................................................................. 
    (function($){
        $.fn.moveTo = function(selector){
            return this.each(function(){
                var cl = $(this).clone();
                $(cl).appendTo(selector);
                $(this).remove();
            });
        };
    })(jQuery);



    // checkWidth the Adaptive function
    //..................................................................................
    function checkWidth() {
        var windowsize = $window.width();

        if (windowsize < 1024) {
            $('.home-slider').css("width", "100%");
            // $('.header-bot #search').removeClass('span6');
        }

        if (windowsize > 768) {
            // $('.header-bot #search').addClass('span6');
            $('.home-slider').css("width", "100%");
            // $('.header-top').css('background-image','url(../img/bg_header_top_1024.png)');
            // $('.header-bot').css('background-image','url(../img/bg_header_bot_1024.png)');
            // $('.col-learn').addClass('span4');
            // $('.col-read').addClass('span4');
            // $('.col-watch').removeClass('span8').addClass('span4').moveTo('.pillar3');
            // $('.col-latest').addClass('span4');
            // $('.col-industry').addClass('span4');

            $('.thumb4').show();
            $('.thumb5').show();
            $('.thumb6').show();

            $('.col-latest').moveTo('.pillar1');
            $('.col-industry').moveTo('.pillar2');
            $('.chip-estimator-banner').moveTo('.pillar3');
            $('.chip-estimator-banner img').attr("src","../img/banner_chip_esitmator_320.gif");
            $('.chip-estimator-banner').addClass('span4').removeClass('span8');

            /* Carousels */
            $('#bottomCarousel_1024').show();
            $('#bottomCarousel_768').hide();
            $('#bottomCarousel_640').hide();
            $('#bottomCarousel_480').hide();
            $('#bottomCarousel_320').hide();
        }

        if (windowsize < 769) {

            $('.home-slider').css("width", "100%");

            // $('.col-learn').removeClass('span4');
            // $('.col-read').removeClass('span4');
            // $('.col-watch').removeClass('span4').addClass('span8');
            // $('.col-latest').removeClass('span4');
            // $('.col-industry').removeClass('span4');

            $('.col-watch-content .thumbnails').show();
            
            $('.thumb4').hide();
            $('.thumb5').hide();
            $('.thumb6').hide();

            $('.latest-ul-4').show();
            $('.latest-ul-5').show();
            $('.latest-ul-6').show();

            $('.industry-li-4').show();
            $('.industry-li-5').show();
            $('.industry-li-6').show();
            $('.industry-dashed-4').show();
            $('.industry-dashed-5').show();
            $('.industry-dashed-6').show();

            $('.col-latest').addClass('column').moveTo('.adaptive-pillar1');
            $('.col-industry').addClass('column').moveTo('.adaptive-pillar2');
            $('.chip-estimator-banner').addClass('column').moveTo('.adaptive-pillar3');
            $('.chip-estimator-banner img').attr("src","../img/banner_chip_esitmator_750.png");
            $('.chip-estimator-banner').removeClass('span4').addClass('span8');

            // $('.footer').hide();
            // $('.footer-mobile').show();

            $('#bottomCarousel_1024').hide();
            $('#bottomCarousel_768').show();
            $('#bottomCarousel_640').hide();
            $('#bottomCarousel_480').hide();
            $('#bottomCarousel_320').hide();
        }

        if (windowsize > 641) {
            $('.header-bot').css('background-image','url(../img/bg_header_bot_1024.png)');
            $('.header-bot').css('background-image','url(../img/bg_header_bot_1024.png)');

            $('.header-bot .form-search')
                .removeClass('row-fluid')

            $('.header-bot .form-search #search')
                .addClass('span6')
                .removeClass('span12');

            $('.logo-mobile-nav').hide();

            $('.home-slider').css("width", "100%");

            $('.footer').show();
            $('.footer-mobile').hide();
        }

        if (windowsize < 641) {

            // $('.content').removeClass('span9').addClass('span7');
            $('.header-top').css('background-image','url(../img/bg_header_top_640.jpg)');
            $('.header-bot').css('background-image','url(../img/bg_header_bot_640.png)');

            $('.header-bot .form-search')
                .addClass('row-fluid')

            $('.header-bot .form-search #search')
                .removeClass('span6')
                .addClass('span12');

            $('.logo-mobile-nav').show();

            $('.col-watch-content .thumbnails').show();
            $('.learn-ul-3').show();
            $('.latest-ul-4').hide();
            $('.latest-ul-5').hide();
            $('.latest-ul-6').hide();

            $('.industry-li-4').hide();
            $('.industry-li-5').hide();
            $('.industry-li-6').hide();
            $('.industry-dashed-4').hide();
            $('.industry-dashed-5').hide();
            $('.industry-dashed-6').hide();

            $('.chip-estimator-banner img').attr("src","../img/banner_chip_esitmator_620.png");

            $('.footer').hide();
            $('.footer-mobile').show();

            /* Carousels */
            $('.home-slider').css("width", "100%");

            $('#bottomCarousel_1024').hide();
            $('#bottomCarousel_768').hide();
            $('#bottomCarousel_640').show();
            $('#bottomCarousel_480').hide();
            $('#bottomCarousel_320').hide();
        }

        if (windowsize < 481) {

            // $('.content').removeClass('span7').addClass('span5');
            $('.header-bot').css('background-image','url(../img/bg_header_bot_480.png)');
            $('.learn-ul-3').hide();
            $('.col-watch-content .thumbnails').hide();
            $('.chip-estimator-banner img').attr("src","../img/banner_chip_esitmator_460.png");

            /* Carousels */
            $('.home-slider').css("width", "100%");
            // $('.our-partners-slider').css("width", "480").addClass('span5');

            // $('.footer-mobile').removeClass('span7').addClass('span5');

            $('#bottomCarousel_1024').hide();
            $('#bottomCarousel_768').hide();
            $('#bottomCarousel_640').hide();
            $('#bottomCarousel_480').show();
            $('#bottomCarousel_320').hide();
        }

        if (windowsize < 321) {

            $('.chip-estimator-banner img').attr("src","../img/banner_chip_esitmator_320.png");

            /* Carousels */
            $('.home-slider').css("width", "320");
            // $('.our-partners-slider').css("width", "320").removeClass('span5').addClass('span3');


            $('#bottomCarousel_1024').hide();
            $('#bottomCarousel_768').hide();
            $('#bottomCarousel_640').hide();
            $('#bottomCarousel_480').hide();
            $('#bottomCarousel_320').show();
        }
    }


    // Adaptive Function : Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);
    
});