$(function() {
    $('.accordion__head').click(function() {
        const elm = $(this).next('.accordion__body');
        elm.toggleClass('active')
        if(elm.hasClass('active')) {
            elm.css({maxHeight: elm[0].scrollHeight + 'px'});
            $(this).find('span').text('-');
        } else {
            elm.css({maxHeight: 0});
            $(this).find('span').text('+');
        }
    });

    $('.hero-section__menu li').click(function() {
        $('.hero-section__menu li').removeClass('active');
        $(this).addClass('active');
    });
})

$('.patient-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

