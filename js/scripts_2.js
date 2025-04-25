// МЕНЮ В ШАПКЕ
$('.push, .close').click(function(e) {
    e.preventDefault();
    $('.dropdownlist').slideToggle(600);
});

// МЕНЮ В ФУТЕРЕ

$(document).ready(function() {
    $('.toggle').on('click', openMenu);
});

function openMenu() {
    $('.toggle-menu').not($(this).next()).slideUp(800);
    $(this).next().slideToggle(800);
}

// МОБИЛЬНОЕ МЕНЮ

$(function() {
    $('.menu-icon-btn').click(function() {
        $('.top-menu-mobile').show(500);
        $('.menu-icon-btn').css({ "opacity": "0" });
    })
    $('.close-menu').click(function() {
        $('.top-menu-mobile').hide(500);
        $('.menu-icon-btn').css({ "opacity": "1" });
    })
});

// ПОИСК


$('.search-btn').click(function() {
    $('.search-field').fadeToggle(500);
    $('.search-btn').toggleClass('move_search_btn');
});