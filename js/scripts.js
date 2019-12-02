$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="/images/left.svg" alt=""></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="/images/right.svg" alt=""></button>',
        autoplay: false,
});
});


$('.hamburger').on('click', function () {
    $('.header-holder').toggleClass('active');
    $(this).toggleClass('active');
    $('.wrapper').toggleClass('open-menu');
});


$(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

