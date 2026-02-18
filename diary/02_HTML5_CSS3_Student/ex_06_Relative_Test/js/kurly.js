jQuery(document).ready(function(){
	btn = 1;
	$('#total_btn, #total_close').click(function(){
		if(btn==1){
			$('#total_menu').slideDown();
			btn = 0;
		}else{
			$('#total_menu').slideUp();
			btn = 1;
		};
	});
});
