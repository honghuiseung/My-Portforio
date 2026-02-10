$(function(){	
	var login_tab = $('#section_contents_title>li');
	
	$('#section_contents ul.tab').hide();
	$('#section_contents ul.tab').eq(2).show();
	
	login_tab.each(function(){
		
		$(this).click(function(){
			login_tab.removeClass('active');
			$(this).addClass('active');
			var cont= $(this).find('a').attr('class');
			cont = cont.replace('title_','#');
			$('#section_contents ul.tab').hide();
			$('#section_contents').find(cont).show();
		});
	})
	
	var guideClass = 'guide';
				
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		// guideText = "이름을 입력해주세요"
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){//포커스가 되고 텍스트를 바꾸지않은 상태
				//주소까지 완전히 같은 것
				element.val('');
				element.removeClass(guideClass);
				if(element.attr('id')==='user_PWD'){
					element.attr('type','password');
				}
			}
		}).blur(function(){
			if(element.val()===''){
				if(element.attr('id')==='user_PWD'){
					element.attr('type','text');
				}
				element.val(guideText);
				element.addClass(guideClass);
				/* element.attr('type','text'); */
			}
		});
		if(element.val()===guideText){
			element.addClass(guideClass);	
		}
	});
});