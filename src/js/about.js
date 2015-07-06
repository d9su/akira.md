(function () {
    'use strict';

    $('header button.-signup').on('click', function() {
        window.location.href = 'index.html#signup';
    });

    $('.menu-overlay li').each(function (index, item) {
        var currentDelay = $(item).css('transition-delay');
        var transitionDelay = currentDelay === '0s' ? '0.1s' : currentDelay;
        var delaySecond = transitionDelay.slice(0, -1);

        $(item).css('transition-delay', parseFloat(delaySecond) + 0.1 + 's');
        $(item).next().css('transition-delay', parseFloat(delaySecond) + 0.1 + 's');
    });

    /*
        Menu overlay
    */
    $('header ._menu').on('click', function () {
        $('body').addClass('-no-scroll');
        $('.menu-overlay').removeClass('-hidden');
    });

    $('.menu-overlay button, .menu-overlay a').on('click', function() {
        $('body').removeClass('-no-scroll');
        $('.menu-overlay').addClass('-hidden');
    });

    /*
        Career tiles
    */
    $('.tiles ._big-tile').on('click', function() {
        window.open($(this).data('href'));
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

    function scrollHandler() {
        var scrollTop = $(window).scrollTop(),
            viewportHeight = $(window).height(),
            totalScrollMark = scrollTop + viewportHeight;

        /*
            Sticky menu
        */
        if (scrollTop > $('.nav-bar').offset().top) {
            $('.nav-bar').addClass('-sticky');
        } else {
            $('.nav-bar').removeClass('-sticky');
        }

        if (totalScrollMark > $('#on-demand').offset().top + 200) {
            $('.nav-bar ._on-demand').addClass('-active');
            $('.nav-bar ._on-demand').siblings().removeClass('-active');
        }

        if (totalScrollMark > $('#features').offset().top + 200) {
            $('.nav-bar ._features').addClass('-active');
            $('.nav-bar ._features').siblings().removeClass('-active');
        }

        if (totalScrollMark > $('#assistant').offset().top + 200) {
            $('.nav-bar ._assistant').addClass('-active');
            $('.nav-bar ._assistant').siblings().removeClass('-active');
        }

        if (totalScrollMark > $('#records').offset().top + 200) {
            $('.nav-bar ._records').addClass('-active');
            $('.nav-bar ._records').siblings().removeClass('-active');
        }

        if (totalScrollMark > $('#careers').offset().top + 200) {
            $('.nav-bar ._careers').addClass('-active');
            $('.nav-bar ._careers').siblings().removeClass('-active');
        }

        /*
            Scroll animation
        */
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
    }

    scrollHandler();

    $(window).on('scroll', debounce(scrollHandler), 500);

    /*
            Footer map
    */
    $('footer .location ._map').on('click', function () {
        window.open('https://www.google.ca/maps/place/340+King+St+E,+Toronto,+ON+M5A+1K8/@43.6531013,-79.362876,17z/data=!3m1!4b1!4m2!3m1!1s0x89d4cb3eb70fef23:0x357cb8348e835660');
    });
})();
