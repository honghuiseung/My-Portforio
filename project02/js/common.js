$(function(){	
	//툴팁
	$('#gnb_left a img').tooltip();
	$('#gnb_center .one_depth>li h2').tooltip();
	
	//로그인 타임아웃
	mouseout = true;
	$login = $('#top_nb_right a#login');
	//window.onload = $login.tooltip({txt:ddaycount()});
	$login.tooltip({is_timer:true});
	$('#section_top_right').tooltip({is_timer:true});
});



















