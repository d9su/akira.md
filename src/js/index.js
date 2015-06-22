(function () {
    'use strict';

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
})();
