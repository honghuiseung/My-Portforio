$(function(){
	$('.popup').hide();
	
	var menu = $('.gnb_wrap>ul>li');
	var depth2 = $('.depth2');
	var depth2_bg = $('.gnb_bg');
	depth2.hide();
	depth2_bg.hide();
	menu.hover(
		function(){
			depth2.show();
			depth2_bg.show();
		},
		function(){
			depth2.hide();
			depth2_bg.hide();
		}
	);
	
});