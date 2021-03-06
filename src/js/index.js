(function () {
    'use strict';

    $('header button.-signup, button.signup').on('click', function() {
        window.location.href = '#signup';
    });

    $('button.-to-about').on('click', function() {
        window.location.href = 'about.html';
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
        Toggle button
    */
    $('.signup-form-container ._form-toggle button').on('click', function () {
        $(this).addClass('-active');
        $(this).siblings().removeClass('-active');

        if ($(this).data('type') === 'company') {
            $('.signup-form-container ._form-description p._company').addClass('-active');
            $('.signup-form-container ._form-description p._individual').removeClass('-active');
            $('.signup-form-container ._signup-form.-company').addClass('-active');
            $('.signup-form-container ._signup-form.-individual').removeClass('-active');
        } else {
            $('.signup-form-container ._form-description p._company').removeClass('-active');
            $('.signup-form-container ._form-description p._individual').addClass('-active');
            $('.signup-form-container ._signup-form.-company').removeClass('-active');
            $('.signup-form-container ._signup-form.-individual').addClass('-active');
        }
    });

    /*
        Quote slider
    */
    function resetQuoteSlider() {
        $('.testimonials ._quotes ._quote')
            .removeClass('-prev')
            .removeClass('-current')
            .addClass('-next');

        $('.testimonials ._quotes ._quote:first-child')
            .removeClass('-next')
            .addClass('-current');
    }

    function playQuoteSlider() {
        var currentQuote = $('.testimonials ._quotes ._quote.-current');
        var nextQuote = currentQuote.next();

        currentQuote
            .removeClass('-current')
            .addClass('-prev');
        nextQuote
            .removeClass('-next')
            .addClass('-current');
    }

    setInterval(function() {
        var nextQuote = $('._quote.-current').next();

        if (nextQuote.size()) {
            playQuoteSlider();
        } else {
            resetQuoteSlider();
        }
    }, 3000);

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

        if (
            $('.explore-img').hasClass('-hidden')
            && totalScrollMark > $('.explore-img').offset().top - $('.explore-img').height()/8
        ) {
            $('.explore-img').removeClass('-hidden');
        } 

        if (
            $('.discover-img').hasClass('-hidden')
            && totalScrollMark > $('.discover-img').offset().top - $('.discover-img').height()/8
        ) {
            $('.discover-img').removeClass('-hidden');
        } 

        if (
            $('.learn-img').hasClass('-hidden')
            && totalScrollMark > $('.learn-img').offset().top - $('.learn-img').height()/8
        ) {
            $('.learn-img').removeClass('-hidden');
        }
    }

    scrollHandler();

    $(window).on('scroll', debounce(scrollHandler, 0));

    /*
        Send email
    */
    $('.contact ._send-email').on('click', function () {
        window.location.href = 'mailto:support@akira.md';
    });

    /*
            Footer map
    */
    $('footer .location ._map').on('click', function () {
        window.open('https://www.google.ca/maps/place/340+King+St+E,+Toronto,+ON+M5A+1K8/@43.6531013,-79.362876,17z/data=!3m1!4b1!4m2!3m1!1s0x89d4cb3eb70fef23:0x357cb8348e835660');
    });
})();
