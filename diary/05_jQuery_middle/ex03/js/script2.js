$(function(){
	var menu = $('#nav > li');
	var tc = $('#nav >li').eq(2);
	var onImg = tc.find('.text_image > .on');
	var offImg = tc.find('.text_image > .off');
	var menuImage = tc.find('.menu_image');
	var imageWidth = menuImage.find('img').innerWidth();	
	
	function open(){
		onImg.css('display','block');
		offImg.css('display','none');
		menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});		
	}
	
	function close(){
		imageWidth = 0;
		onImg.css('display','none');
		offImg.css('display','block');
		menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});			
	}
	
	open();
	
	menu.each(function(){
		tc = $(this);
		var onImg = tc.find('.text_image > .on');
		var offImg = tc.find('.text_image > .off');
		var menuImage = tc.find('.menu_image');	
		
		tc.hover(
			function(){
				close();
				imageWidth = menuImage.find('img').innerWidth();			
				onImg.css('display','block');
				offImg.css('display','none');
				menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});				
			}, 
			function(){
				var imageWidth = 0;			
				onImg.css('display','none');
				offImg.css('display','block');
				menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});	
				open();
			}
		);
	});	
});