$(function(){
	$('.clickTest').click(function(){
		$('.clickTest').text('클릭되었습니다.');
	});
	
	//$('#div1').click(function(){});//이벤트 메소드: 사용자의 동작을 받음
});

/* 
$(function(){});//문법1 문서를 다 읽고 실행
$('#header').hide(); //문법2 메서드를 쓰기위해 셀렉터 사용
$('<img src="images/img1.gif" alt=""/>'); //문법3 동적할당
*/