$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.welcome__image_img').toggleClass('blur');
    })
    $('.header__menu_item').click(function(eVent) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
        $('.welcome__image_img').removeClass('blur');
    })
})