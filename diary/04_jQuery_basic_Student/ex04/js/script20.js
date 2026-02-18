$(function(){
	$('#div1').mouseenter(function(){
		$('#div1').text('마우스 포인터가 위에 있습니다.');
	});
	$('#div1').mouseleave(function(){
		$('#div1').text('마우스 포인터가 벗어 났습니다.');
	});
	//$('#div1').click(function(){});//이벤트 메소드: 사용자의 동작을 받음
});

/* 
$(function(){});//문법1 문서를 다 읽고 실행
$('#header').hide(); //문법2 메서드를 쓰기위해 셀렉터 사용
$('<img src="images/img1.gif" alt=""/>'); //문법3 동적할당
*/