$(function(){
	var panel_width = $('.slider_panel > img').width();
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	function moveSlider(index){
		var willMoveLeft = -(index*panel_width);
		$('.slider_panel').animate({left:willMoveLeft},'500');
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
	};
	var randomNumder = Math.floor(Math.random()*5);
	moveSlider(randomNumder);
});