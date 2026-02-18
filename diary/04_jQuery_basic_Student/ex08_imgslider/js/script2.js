$(function(){
	var interver = 1000;
	$('.slideshow').each(function(){
		var timer; //이미지가 변하거나 멈추는 동작을 하는 변수
		var container = $(this);
		
		function switchImg(){
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		}
		
		function startTimer(){
			timer = setInterval(switchImg, interver);
		}
		
		function stopTimer(){
			clearInterval(timer);
		}
		startTimer();
		
		container.find('a').hover(
			function(){
				stopTimer();
			},
			function(){
				startTimer();
			}
		);
	});
});