$(document).ready(function() {

	$(function(){
		$('#myCarousel').carousel()
    });
	// (window.jQuery)
    $('#ip_advanced').hide();


    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var btnSelected = '';
    var mobileMenuOpen = false;

    //  Caroufredsel | Responsive layout, resizing the items
    //  http://caroufredsel.dev7studios.com/
    //.................................................................................. 
    $('#caroufredsel').carouFredSel({
        responsive: true,
        width: '100%',
        scroll: 2,
        items: {
            width: 140,
        //  height: '30%',  //  optionally resize item-height
            visible: {
                min: 2,
                max: 6
            }
        }
    });
   

    // Re-arrange Columns & Pillars
    //.................................................................................. 
    $.fn.moveTo = function(selector){
            return this.each(function(){
                var cl = $(this).clone();
                $(cl).appendTo(selector);
                $(this).remove();
            });
        };


    // Rollovers
    //.................................................................................. 
    $('.header-bot #search-btn').mouseover(function() {
        btnSelected = 'search-btn';
        $(this).data('over',true);
            hoverEffects($(this));
    }).mouseout(function() {
        $(this).data('over',false);
            hoverEffects($(this));
    });

    $('.header-bot #advanced').mouseover(function() {
        btnSelected = 'advanced';
        $(this).data('over',true);
            hoverEffects($(this));
    }).mouseout(function() {
        $(this).data('over',false);
            hoverEffects($(this));
    });

    $('.header-bot #concierge').mouseover(function() {
        btnSelected = 'concierge';
        $(this).data('over',true);
            hoverEffects($(this));
    }).mouseout(function() {
        $(this).data('over',false);
            hoverEffects($(this));
    });

    function hoverEffects(elem) {

        if (btnSelected === 'advanced') {
            if (elem.data('over')) {
                elem.attr('src','img/btn-header-advanced-roll.png');
            } else {
                elem.attr('src','img/btn-header-advanced.png');
            }
        } else if (btnSelected === 'concierge') {
            if (elem.data('over')) {
                elem.attr('src','img/btn-header-concierge-roll.png');
            } else {
                elem.attr('src','img/btn-header-concierge.png');
            }
        } else if (btnSelected === 'search-btn') {
            if (elem.data('over')) {
                elem.attr('src','img/btn-header-search-roll.png');
            } else {
                elem.attr('src','img/btn-header-search.png');
            }
        }
        
    }

    // Mobile Menu button clicks | When Mobile Menu is showing
    //..................................................................................
    $('#mobile-menu-btn').click(function () {
        mobileMenuOpen = true;
        $('.close-mobile-menu').show();
        $('.mobile-menu').show();
        $('.logo-mobile-nav').hide();
    });

    $('#close-menu-btn').click(function () {
        mobileMenuOpen = false;
        $('.close-mobile-menu').hide();
        $('.mobile-menu').hide();
        $('.logo-mobile-nav').show();
    });

    // Adaptive Resize Function
    //..................................................................................
    function checkWidth() {

        var windowsize = $window.width();

        //console.log('windowsize = '+windowsize);

        if (windowsize > 768) {
            $('.col-latest').moveTo('.pillar1');
            $('.col-industry').moveTo('.pillar2');
            $('.chip-estimator-banner').moveTo('.pillar3');
            $('.chip-estimator-banner img').attr("src","img/banner_chip_esitmator_320.gif");
        }
        if (windowsize < 768) {
            $('.col-latest').addClass('column').moveTo('.adaptive-pillar1');
            $('.col-industry').addClass('column').moveTo('.adaptive-pillar2');
            $('.chip-estimator-banner').addClass('column').moveTo('.adaptive-pillar3');
            $('.chip-estimator-banner img').attr("src","img/banner_chip_esitmator_710.png");
            $('.header .logo-mobile-nav').hide();
        }
        if (windowsize > 624) {

            // If window is larger then 640 then hide mobile menu and show normal menu
            $('.header .header-nav').show();
            if (mobileMenuOpen === true) {
                $('.close-mobile-menu').hide();
                $('.mobile-menu').hide();
                $('.header .logo-mobile-nav').hide();
            } else if (mobileMenuOpen === false) {
                $('.header .logo-mobile-nav').hide();
            }
        }
        if (windowsize < 624) {
            
            // If window is smaller then 640 then show mobile menu and hide normal menu
            if (mobileMenuOpen === true) {
                $('.close-mobile-menu').hide();
                $('.mobile-menu').hide();
                $('.header .logo-mobile-nav').show();
            }
            if (mobileMenuOpen === false) {
                $('.header .logo-mobile-nav').show();
                $('.header .header-nav').hide();
            }

            $('.chip-estimator-banner img').attr("src","img/banner_chip_esitmator_580.png");
        }

        if (windowsize < 447) {
            $('.chip-estimator-banner img').attr("src","img/banner_chip_esitmator_410.png");
        }
        if (windowsize < 321) {
            $('.chip-estimator-banner img').attr("src","img/banner_chip_esitmator_280.png");
        }
    }

    // Adaptive Function : Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);
    
});


// The Advanced Dropdowns
//..................................................................................
$('.dropdown-toggle').dropdown();

function checkboxChange() {
    //alert('hi')
    if ($('#IP').prop('checked')) {

    	   $('#ip_advanced').show();
    	}
    	else {
    	   $('#ip_advanced').hide();
    	}
}