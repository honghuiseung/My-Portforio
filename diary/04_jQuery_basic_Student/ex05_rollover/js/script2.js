$(function(){
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace('_off','_on');
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
		/* a.bind('mouseenter focus',function(){
			img.attr('src',src_on);
		});
		a.bind('mouseleave blur',function(){
			img.attr('src',src_off);
		}); */
		$('<img />').attr('src', src_on);
		//이미지를 서버에서 가져올 때마다 리퀘스트해야하므로
		//이미지를 미리 한꺼번에 가져와 메모리에 저장
		a.on('mouseenter focus',function(){
			img.attr('src',src_on).attr('alt',"마우스엔터 이미지");
		}).on('mouseleave blur',function(){
			img.attr('src',src_off).attr('alt',"마우스리브 이미지");
		});
	});
});





















