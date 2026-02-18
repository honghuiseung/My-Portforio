$(function(){
	var div1 = $('#div1');
	$('<img src="images/img1.gif" alt=""/>').appendTo(div1);
	//태그를 통째로 집어넣을 수 있음
});

/* 
$(function(){});//문법1 문서를 다 읽고 실행
$('#header').hide(); //문법2 메서드를 쓰기위해 셀렉터 사용
$('<img src="images/img1.gif" alt=""/>'); //문법3 동적할당
*/