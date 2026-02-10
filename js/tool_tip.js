$.fn.tooltip = function(options){
	options = $.extend({is_timer:false},options);
	//툴팁
	var balloon = $('<div class="balloon">.</div>').appendTo('body');
	
	//balloon.append($('<img src="images/logo.png" class="fl" />'));
	if(options.is_timer)set_balloon();
	
	function set_balloon(){
		balloon.text(ddaycount())
		balloon.append($('<img src="images/main_icon.png" class="fl" width="20"/>'));
	}
	function updateBalloonPosition(x, y){
		balloon.css({ left: x + 10, top: y });
		//left: x -마우스가 툴팁을 선택해서 오류가 일어남
	}
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},1000);
	}
	function hideBalloon(){
		balloon.stop().animate({opacity:0},1000,function(){balloon.hide();});
	}
	function Tooltip(obj){
		
		var element = $(obj);
		if(!options.is_timer){
			var text = element.attr('title');
			element.attr('title','');
			element.hover(
				function(event){
					balloon.text(text);
					balloon.append($('<img src="icon.png" class="fl" width="20"/>'));
					updateBalloonPosition(event.pageX, event.pageY);
					showBalloon();
					
				},
				function(){
					hideBalloon();
				}
			);	
		}else{
			var timer;
			element.hover(
				function(event){
					set_balloon();
					timer = setInterval(function(){
						set_balloon()
					},1000)
					updateBalloonPosition(event.pageX, event.pageY);
					showBalloon();
				},
				function(){
					clearInterval(timer);
					hideBalloon();
				}
			);
		}
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	}
	
	$(this).each(function(){
		Tooltip(this);
	});
	
	if(!options.is_timer){
		return this;
	}
};
