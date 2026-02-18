$(function(){
	$('.animal').each(function(){
		var name = $(this).text();
		alert(name);
	});
});

/* 
$(function(){});//문법1 문서를 다 읽고 실행
$('#header').hide(); //문법2 메서드를 쓰기위해 셀렉터 사용
$('<img src="images/img1.gif" alt=""/>'); //문법3 동적할당
*/