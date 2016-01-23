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
jQuery(document).ready(function($){
	//open menu
	$('.cd-menu-trigger').on('click', function(event){
		event.preventDefault();
		$('#cd-main-content').addClass('move-out');
		$('#main-nav$').addClass('is-visible');
		$('.cd-shadow-layer').addClass('is-visible');
	});
	//close menu
	$('.cd-close-menu').on('click', function(event){
		event.preventDefault();
		$('#cd-main-content').removeClass('move-out');
		$('#main-nav').removeClass('is-visible');
		$('.cd-shadow-layer').removeClass('is-visible');
	});

	//clipped image - blur effect
	set_clip_property();
	$(window).on('resize', function(){
		set_clip_property();
	});

	function set_clip_property() {
		var $header_height = $('.cd-header').height(),
			$window_height = $(window).height(),
			$header_top = $window_height - $header_height,
			$window_width = $(window).width();
		$('.cd-blurred-bg').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
	}
});
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 950, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.scrollspy'
});
