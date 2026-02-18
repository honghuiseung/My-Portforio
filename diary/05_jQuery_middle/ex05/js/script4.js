$(function(){
	var panel_width = $('.slider_panel > img').width();
	var panel_height = $('.slider_panel > img').height();
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
		end_timer();
		start_timer();
	})
	function moveSlider(index){
		var willMoveLeft = -(index%3*panel_width);
		var willMoveTop = -(Math.floor(index/3)*panel_height);
		$('.slider_panel').animate({left:willMoveLeft},'500');
		$('.slider_panel').animate({top:willMoveTop},'500');
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
		randomNumder = index;
		//클릭했을때 다음 이미지부터 시작
	};
	var timer;
	var size = $('.slider_text').size();
	var randomNumder = Math.floor(Math.random()*(size-1));
	
	function start_timer(){
		timer = setInterval(function(){
			randomNumder++;
			if(randomNumder==(size)){randomNumder=0;}
			moveSlider(randomNumder);
			//$('control_button').eq(randomNumder).trigger('click');
		}, 1000);
		
	}
	
	function end_timer(){
		clearInterval(timer);
	}
	
	$('.slider_panel').hover(function(){
		end_timer();
	},function(){
		start_timer();
	});
	start_timer();
});











