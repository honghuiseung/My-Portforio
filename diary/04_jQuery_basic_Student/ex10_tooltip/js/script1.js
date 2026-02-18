$(function(){
	var balloon = $('<div class="balloon">.</div>').appendTo('body');
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
	
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX, event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
});