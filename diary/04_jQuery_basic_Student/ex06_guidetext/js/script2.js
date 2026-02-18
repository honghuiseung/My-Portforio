$(function(){
	//css의 input태그안에 들어간 디폴트 글자색상을 회색으로 바꿔주는 클래스
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
			}
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass(guideClass);
			}
		});
		if(element.val()===guideText){
			element.addClass(guideClass);
		}
	});
});