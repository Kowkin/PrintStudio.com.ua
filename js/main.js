//$(window).load(function(){
//  $('.title').css({ 'top': 90+'px', 'opacity': 1 });
//  $('.text').css({ 'opacity': 1 });
////  $('.more').css({ 'opacity': 1, 'bottom': 90+'px' });
//});
//$('#header-carousel').on('slid.bs.carousel', function () {
//  $('.title').css({ 'top': 90+'px', 'opacity': 1 });
//  $('.text').css({ 'opacity': 1 });
////  $('.more').css({ 'opacity': 1, 'bottom': 90+'px' });
//});
//$('#header-carousel').on('slide.bs.carousel', function () {
//  $('.title').css({ 'top': 0+'px', 'opacity': 0 });
//  $('.text').css({ 'opacity': 0 });
////  $('.more').css({ 'opacity': 0, 'bottom': 0+'px' });
//});
//function carouselFix() {
//  $(".carousel.slide").carousel("pause");
//  $('.carousel.slide .item').removeClass('active');
//  $('.carousel.slide').find('.item:first').addClass('active');
//}
//$(document).ready(function() {      
//  carouselFix();
//});

//animated-MENU
jQuery(document).ready(function ($) {
    //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll', {
            previousTop: 0
        });
    }

    //open/close primary navigation
    $('.cd-primary-nav-trigger').on('click', function () {
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');

        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if ($('.cd-primary-nav').hasClass('is-visible')) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').addClass('overflow-hidden');
            });
        }
    });
    $(".cd-primary-nav  a").click(function () {
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');

        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if ($('.cd-primary-nav').hasClass('is-visible')) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').addClass('overflow-hidden');
            });
        }
    });
});


// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

//mail_to
//setup email here
$(function () {
    $('#button-send').click(function (event) {
        $('#button-send').html('Sending E-Mail...');
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'send_form_email.php',
            data: $('#contact_form').serialize(),
            success: function (html) {
                if (html.success == '1') {
                    $('#button-send').html('Send E-Mail');
                    $('#success').show();
                } else {
                    $('#button-send').html('Send E-Mail');
                    $('#error').show();
                }
            },
            error: function () {
                $('#button-send').html('Send E-Mail');
                $('#error').show();
            }
        });
    });
});