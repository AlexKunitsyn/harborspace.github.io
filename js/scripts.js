$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="images/right.svg" alt=""></button>',
        autoplay: true,
});
});


$('.hamburger').on('click', function () {
    $('.header-holder').toggleClass('active');
    $(this).toggleClass('active');
   /* $('.wrapper').toggleClass('open-menu');*/
});

$('.menu a').on('click', function () {
    $('.header-holder').removeClass('active');
    $('.hamburger').removeClass('active');
})


$(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top -50;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('.input-form').on('blur',function (e) {
    console.log($(this).val())
    let fakePlh = $(this).parent('label').find('.fake-placeholder');
    if($(this).val()!==''){
        $(fakePlh).addClass('to_top');
    }else {
        $(fakePlh).removeClass('to_top');
    }
});


$(function(){
    createSticky($(".header"));
});

function createSticky(sticky) {
    if (typeof sticky != "undefined") {

        var pos = sticky.offset().top + 150,
            win = $(window);

        win.on("scroll", function() {

            if( win.scrollTop() > pos ) {
                sticky.addClass("sticky");
            } else {
                sticky.removeClass("sticky");
            }
        });
    }
}

