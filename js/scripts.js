$(document).ready(function() {
    $('.top-slider, .top-slider-mobile').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
    });
});

$('.products-slider, .popular-slider').slick({
    arrows: true,
    slidesToShow: 4,
    speed: 800,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1180,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.slider-pics').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    speed: 600,
    cssEase: 'linear'
});