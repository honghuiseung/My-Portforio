$(function(){
	var interver = 3000;
	 $('.slide_banner').each(function(){
		var timer; //이미지가 변하거나 멈추는 동작을 하는 변수
		var container = $(this);
		var banner = container.find('.slide_banner_cont');
		var first = banner.eq(0);
		var second = banner.eq(0);
		
		switch_img();
		start_timer();
		
		
		function switch_banner(){
			banner = container.find('.slide_banner_cont');
			first = banner.eq(0);
			second = banner.eq(1);
			
			first.fadeOut().appendTo(container);
			switch_img();
			second.fadeIn();
		}
		
		function switch_img(){
			second.find('img').css('bottom', '-160px').animate({bottom: 0},1000);
		}
		
		function start_timer(){
			timer = setInterval(switch_banner, interver);
		}
		
		function stop_timer(){
			clearInterval(timer);
		}
		
	}); 
});