$(function(){
	$('.popup').hide();
	
	var menu = $('.gnb_wrap>ul>li');
	var depth2 = $('.depth2');
	var depth2_bg = $('.gnb_bg');
	depth2.hide();
	depth2_bg.hide();
	menu.hover(
		function(){
			depth2.stop(false, false).slideDown();
			depth2_bg.stop(false, false).slideDown();
		},
		function(){
			depth2.stop(false, false).slideUp();
			depth2_bg.stop(false, false).slideUp();
		}
	);
	
});