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
jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});
//jQuery(document).ready(function($){
//	//open menu
//	$('.cd-menu-trigger').on('click', function(event){
//		event.preventDefault();
//		$('#main-nav').addClass('is-visible').data('targetid');
//		$('.cd-shadow-layer').addClass('is-visible');
//	});
//	//close menu
//	$('.cd-close-menu').on('click', function(event){
//		event.preventDefault();
//		$('#main-nav').removeClass('is-visible');
//		$('.cd-shadow-layer').removeClass('is-visible');
//	});
//});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.scrollspy'
});
