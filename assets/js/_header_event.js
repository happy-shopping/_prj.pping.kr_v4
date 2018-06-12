$(document).ready(function() {
    $('.isearch').on('focus', function() {
        $('.search-auto-result').removeClass('off').addClass('on');
    });

    $('.isearch').on('blur', function() {
        $('.search-auto-result').removeClass('on').addClass('off');
    });
    $('.isearch').blur();
});
