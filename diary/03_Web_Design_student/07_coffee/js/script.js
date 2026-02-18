$(function(){
	/* 2depth 메뉴 */
	$('.nav>ul>li').hover(
		function(){
			$(this).find('.sub').stop(true, true).slideDown();
		},
		function(){
			$(this).find('.sub').stop(false, false).slideUp();
		}
	);
	$('.pop').show();
	$('.pop_box>button').click(function(){
		$('.pop').hide();
	});
});