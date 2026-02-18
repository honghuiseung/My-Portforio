$(function(){
	$('.tabSet').each(function(){//메모리에 상주하기 때문에 새탭에서 열어야함
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;
		
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(event){ //매개변수는 이름을 사용해도 상관없음, 주로 event나 e를 사용함
			event.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			lastAnchor.removeClass('on');
			currentAnchor.addClass('on');
			lastPanel.hide();
			currentPanel.show();
			lastAnchor = currentAnchor;
			lastPanel = currentPanel;
		});
	});
});