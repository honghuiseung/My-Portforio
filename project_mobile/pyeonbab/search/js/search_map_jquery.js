$(document).ready(function(){
	/* $("#fakeLoader").fakeLoader({
		timeToHide:100000000, // 로딩중에 걸리는 시간, 1000은 1초
		bgColor:"#f8f8f8", // 배경색
		spinner:"spinner2" // 로딩중으로 원하는 로딩이미지타입
	}); */
	
	
	
	(() => {
		var guideClass = 'guide';
	
		$('#input_location').each(function(){
			var guideText = this.defaultValue;
			var element = $(this);
			var $clear_bt = $('#clear');
			element.on('input',function(){
				if(element.val()==='')
					$clear_bt.hide();
				else
					$clear_bt.show();
			});
			element.focus(function(){
				if(element.val()===guideText){//포커스가 되고 텍스트를 바꾸지않은 상태
					//주소까지 완전히 같은 것
					element.val('');
					element.removeClass(guideClass);
				}else{
					$clear_bt.show();
				}
			}).blur(function(){
				if(element.val()===''){
					if(element.attr('id')==='userPWD'){
						element.attr('type','text');
						$clear_bt.hide();
					}
					element.val(guideText);
					element.addClass(guideClass);
					/* element.attr('type','text'); */
				}
			});
			if(element.val()===guideText){
				element.addClass(guideClass);	
			}
			$clear_bt.click(function(){
				element.val(guideText);
				element.addClass(guideClass);
				$(this).hide();
			})
		});
	})();
	
	//담기 버튼
	(()=>{
		var prev_clicked = false
		var clicked_num = 0;
		var $push_product = $('#popup_push_product');
		var $push_product = $('#popup_push_product');
		var popup_text = $push_product.html();
		var $push_product_btn = $('#search_map_page span.push');
		
		async function push_product() {
			var is_clicked = prev_clicked;
			
			$push_product.fadeIn()
			await delay(1000);
			is_clicked = true;
			if(!is_clicked)return
			$push_product.fadeOut()
			prev_clicked = is_clicked;	
		}
		
		$push_product_btn.click(function(){
			push_product();
		})
		
		function delay(ms) {
			return new Promise(resolve => {
				setTimeout(() => {
					//console.log(`${ms} 밀리초가 지났습니다.`);
					resolve()
				}, ms);
			});
		}
		 
	})();
});
