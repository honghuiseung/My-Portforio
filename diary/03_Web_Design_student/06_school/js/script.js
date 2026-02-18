$(function(){
	/* 메뉴 */
	$('.nav>li').hover(
		function(){
			$(this).find('.sub').stop(false).slideDown();
		},
		function(){
			$(this).find('.sub').stop(false).slideUp();
		}
		
	);
	$('.modal').show();
	$('.btn').click(function(){
		$('.modal').hide();
	});
});