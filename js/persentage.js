$(function () {
	//profileºÎºÐ
	var Scene_move = true;
	var $content = $('#scene-3-content'), $charts = $content.find('.chart');
	
	$(window).on("scroll",
		function(){
			var profile_top = $('#profile').offset().top;
			var profile_bottom = $('#hybrid').offset().top;
			var scroll = $(window).scrollTop();
			
			if(scroll>=profile_top*1 && scroll<profile_bottom){
				if(Scene_move){
					activateScene2();
					Scene_move =false;
				}
			}else{
				$content.stop(true).animate({
					right: '-100%'
				}, 1200, 'easeInOutQuint');
				
				Scene_move =true;
			}
		}
	);
	
	$charts.each(function(){
		$percentNumber = $(this).find('.percent-number');
		var percentData = $percentNumber.text();
		$(this).attr('percent',percentData);
	});

	function activateScene2(){
        
        $content.stop(true).animate({
            right: '5%'
        }, 1200, 'easeInOutQuint');
		$charts.each(function(){
			
			var $chart = $(this),
	            $circleLeft = $chart.find('.left  .circle-mask-inner')
                .css({ transform: 'rotate(0)' }),
				$circleRight = $chart.find('.right  .circle-mask-inner')
                .css({ transform: 'rotate(0)' }),	

            $percentNumber = $chart.find('.percent-number');
			var percentData = $chart.attr('percent');	
			
			$percentNumber.text(0);
			
			$({ percent: 0 }).delay(1000).animate({ percent: percentData }, {
				duration: 1500,
                progress: function(){
                    var now = this.percent,  
                    deg = now * 360 / 100,
                    degRight = Math.min(Math.max(deg, 0), 180),
                    degLeft  = Math.min(Math.max(deg - 180, 0), 180);
                    $circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
                    $circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
                    $percentNumber.text(Math.floor(now));
				}				
			});
		});
	}; 
});




























