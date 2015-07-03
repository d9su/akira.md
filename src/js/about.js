(function () {
    'use strict';

    /*
        Menu overlay
    */
    $('header .menu').on('click', function () {
        $('body').addClass('-no-scroll');
        $('.menu-overlay').removeClass('-hidden');
    });

    $('.menu-overlay button, .menu-overlay a').on('click', function() {
        $('body').removeClass('-no-scroll');
        $('.menu-overlay').addClass('-hidden');
    });

    /*
        Scroll animation
    */
    function debounce(func, wait) {
        var timeout;

        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            var callNow = !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            
            if (callNow) {
                func.apply(context, args);
            }
        };
    }

    $(window).on('scroll', debounce(function () {
        var scrollTop = $(window).scrollTop(),
            viewportHeight = $(window).height(),
            totalScrollMark = scrollTop + viewportHeight;

        if (
            $('.symptons-img').hasClass('-hidden')
            && totalScrollMark > $('.symptons-img').offset().top - $('.symptons-img').height()/8
        ) {
            $('.symptons-img').removeClass('-hidden');
        } 

        if (
            $('.health-pic-img').hasClass('-hidden')
            && totalScrollMark > $('.health-pic-img').offset().top - $('.health-pic-img').height()/8
        ) {
            $('.health-pic-img').removeClass('-hidden');
        } 

        if (
            $('.learn-img').hasClass('-hidden')
            && totalScrollMark > $('.learn-img').offset().top - $('.learn-img').height()/8
        ) {
            $('.learn-img').removeClass('-hidden');
        }
    }), 500);
})();