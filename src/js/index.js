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
        Toggle button
    */
    $('.signup-form-container ._form-toggle button').on('click', function () {
        $(this).addClass('-active');
        $(this).siblings().removeClass('-active');

        if ($(this).data('type') === 'company') {
            $('.signup-form-container ._form-description p._company').addClass('-active');
            $('.signup-form-container ._form-description p._individual').removeClass('-active');
        } else {
            $('.signup-form-container ._form-description p._company').removeClass('-active');
            $('.signup-form-container ._form-description p._individual').addClass('-active');
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
        Send email
    */
    $('.contact ._send-email').on('click', function () {
        window.location.href = 'mailto:support@akira.com';
    });
})();
