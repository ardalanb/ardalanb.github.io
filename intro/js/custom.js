/*

Template: Xamin:
Author: iqonicthemes.in
Version: 1.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

Page Loader
Back To Top
Header
Scrolling
counter
Owl Carousel
Progress Bar
Parallax
Wow Animation

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
         Page Loader
        --------------------------*/
        jQuery("#load").fadeOut();
        jQuery("#loading").delay(0).fadeOut("slow");


        $(".navbar a").on("click", function(event) {
            if (!$(event.target).closest(".nav-item.dropdown").length) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        /*------------------------
         Back To Top
        --------------------------*/
        $('#back-to-top').fadeOut();
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $('#back-to-top').fadeIn(1400);
            } else {
                $('#back-to-top').fadeOut(400);
            }
        });
        // scroll body to 0px on click
        $('#top').on('click', function() {
            $('top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


    /*------------------------
    Header
    --------------------------*/
    $('.navbar-nav li a').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });




$(document).ready(function(){
    $('.navbar-nav li a').on('click',function() {
    $('.navbar-nav li a.active').removeClass('active');
    $(this).addClass('active');
});
});




    /*------------------------
    Owl Carousel
    --------------------------*/
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
             navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });






    /*------------------------
        Wow Animation
    --------------------------*/
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();


    /*------------------------
            3 Parallax
    --------------------------*/
    if ($("#scene").length) {
        var scene = document.getElementById('scene');

        var parallaxInstance = new Parallax(scene);
    }

    if ($("#scenetwo").length) {
        var scene1 = document.getElementById('scenetwo');
        var parallaxInstance = new Parallax(scene1);
    }

    if ($("#scenethree").length) {
        var scene2 = document.getElementById('scenethree');
        var parallaxInstance = new Parallax(scene2);
    }
     if ($("#scenefour").length) {
        var scene3 = document.getElementById('scenefour');
        var parallaxInstance = new Parallax(scene3);
    }


});

