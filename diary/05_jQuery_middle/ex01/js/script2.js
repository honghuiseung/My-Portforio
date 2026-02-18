$(function(){
	$('#nav>ul>#springBtn').bind('click',function(){
		$('#image').removeClass().addClass('spring');	
	});
	
	$('#nav>ul>#summerBtn').bind('click',function(){
		$('#image').removeClass().addClass('summer');	
	});
	
	$('#nav>ul>#fallBtn').bind('click',function(){
		$('#image').removeClass().addClass('fall');	
	});
	
	$('#nav>ul>#winterBtn').bind('click',function(){
		$('#image').removeClass().addClass('winter');	
	});
});