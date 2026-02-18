$(function(){
	$('.tabSet').each(function(){//메모리에 상주하기 때문에 새탭에서 열어야함
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;
		//같은 탭이라면 중단
		
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(e){
			
			e.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			if(currentAnchor.get(0) === lastAnchor.get(0)){
				return;
			} 
			
			lastPanel.stop().slideUp(200,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop().slideDown(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			});
			
		});
		
	});
});