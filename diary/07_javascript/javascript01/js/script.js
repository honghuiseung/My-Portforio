$(function(){
	var timer;
	var count = 1;
	var num_distance = 42;
	var current;
	var day_hours;
	var day_minute;
	var day_second;
	var bg_day_x = -500/720*((day_hours-5)*60+day_minute);
	var bg_night_x = (day_hours<5)?-500/540*((day_hours+4)*60+day_minute):-500/540*((day_hours-20)*60+day_minute);
	
	var $hand_hour = $('.hand_hour_wrap');
	var $hand_min = $('.hand_min_wrap');
	var $hand_sec = $('.hand_sec_wrap');
	$('.num').each(function(){
		var pos_x = Math.sin(Math.PI / 6 * count)*num_distance+50+"%";
		var pos_y = Math.cos(Math.PI / 6 * count++)*num_distance+50+"%";
		$(this).css('left',pos_x).css('bottom',pos_y);
	});
	
	function rotate_clock(){
		current = new Date()
		day_hours = current.getHours();
		day_minute = current.getMinutes();
		day_second = current.getSeconds();
		$hand_hour.css({'transform':'rotate('+day_hours*30+'deg)'});
		$hand_min.css({'transform':'rotate('+day_minute*6+'deg)'});
		$hand_sec.css({'transform':'rotate('+day_second*6+'deg)'});
	}
	
	rotate_clock();
	
	if(day_hours<5 || day_hours>=17){
		$('#clock').css({'background':'url(images/back_night.jpg)', 'background-repeat' : 'no-repeat', 'background-position-x': bg_night_x, 'background-position-y': '-400px'});
	}else if(day_hours<17){
		$('#clock').css({'background':'url(images/back_day.jpg)', 'background-repeat' : 'no-repeat', 'background-position-x': bg_day_x, 'background-position-y': '-400px'});
	} 
	$('#clock').css({'background':'url(images/back_day.jpg)', 'background-repeat' : 'no-repeat', 'background-position-x': bg_day_x, 'background-position-y': '400px'});
	
	//start_clock();
	
	
	
	setInterval(rotate_clock,100);
	
	
	
});















