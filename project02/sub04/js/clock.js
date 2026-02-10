$(function(){
	var count = 1;
	var num_distance = 42;
	var current;
	var day_hours, day_minutes, day_seconds, day_ms;
	var bg_day_x;
	var bg_night_x;
	var clock_timer; //시계 인터벌객체
	var is_changed_bg = [false,false,false]; //낮 밤 저녁
	
	var $clock_day_bg = $('.clock_day_bg');
	var $clock_night_bg = $('.clock_night_bg');
	var $clock_sunset_bg = $('.clock_sunset_bg');
	var $hand_hour = $('.hand_hour_wrap');
	var $hand_min = $('.hand_min_wrap');
	var $hand_sec = $('.hand_sec_wrap');
	var $num = $('#clock .cl_num');
	
	var reset_hours = 0, reset_minutes = 0, reset_seconds = 0;
	
	function start_timer(){
			clock_timer = setInterval(rotate_clock);	
		}
	function end_timer(){
			clearInterval(clock_timer);
		}
	start_timer();
	
	//숫자 위치 지정하는 부분
	$num.each(function(){
		var pos_x = Math.sin(Math.PI / 6 * count)*num_distance+50+"%";
		var pos_y = Math.cos(Math.PI / 6 * count++)*num_distance+50+"%";
		$(this).css('left',pos_x).css('bottom',pos_y);
	});
	
	//시간 바꾸기
	$('#change_day_btn').click(function(){
		set_change_day();
	});
	$('#change_night_btn').click(function(){
		set_change_night();
	});
	$('#change_sunset_btn').click(function(){
		set_change_sunset();
	});
	$('#reset_btn').click(function(){
		reset_all();
		is_changed_bg = [false,false,false];
	});
	
	//시계바늘 회전시키는 함수
	function rotate_clock(){
		current = new Date()
		day_seconds = current.getSeconds() + reset_seconds;
		day_minutes = current.getMinutes() + reset_minutes;
		day_hours = (current.getHours() + reset_hours) % 24;
		if(day_seconds>=60){day_seconds %= 60; day_minutes++;}
		if(day_minutes>=60){day_minutes %= 60; day_hours++;}
		//배경 움직임
		day_ms = current.getMilliseconds();
		bg_day_x = -500/840*((day_hours-5)*60+day_minutes);
		bg_night_x = (day_hours<5)?-500/540*((day_hours+4)*60+day_minutes):-500/540*((day_hours-20)*60+day_minutes);
		
		$hand_hour.css({'transform':'rotate('+(day_hours*30+day_minutes/2+day_seconds/120)+'deg)'});
		$hand_min.css({'transform':'rotate('+(day_minutes*6+day_seconds/10)+'deg)'});
		$hand_sec.css({'transform':'rotate('+(day_seconds*6+day_ms*6/1000)+'deg)'});
		
		change_bg();
	}
	
	function set_change_night(){
		default_set();
		var _hours = current.getHours();
		var _minutes = current.getMinutes();
		var _seconds = current.getSeconds();
		reset_hours = (24 + 19 - _hours) % 24;
		reset_minutes = (60 +  59 - _minutes) % 60;
		reset_seconds = (60 +  56 - _seconds) % 60;	
	}
	function set_change_day(){
		default_set();
		var _hours = current.getHours();
		var _minutes = current.getMinutes();
		var _seconds = current.getSeconds();
		reset_hours = (24 +  4 - _hours) % 24;
		reset_minutes = (60 +  59 - _minutes) % 60;
		reset_seconds = (60 +  56 - _seconds) % 60;
	}
	function set_change_sunset(){
		default_set();
		var _hours = current.getHours();
		var _minutes = current.getMinutes();
		var _seconds = current.getSeconds();
		reset_hours = (24 +  18 - _hours) % 24;
		reset_minutes = (60 +  59 - _minutes) % 60;
		reset_seconds = (60 +  56 - _seconds) % 60;
	}
	function reset_all(){
		default_set();
		reset_hours = 0;
		reset_minutes = 0;
		reset_seconds = 0;
	}
	function default_set(){
		$clock_night_bg.stop(true, true);
		$clock_day_bg.stop(true, true);
		$clock_sunset_bg.stop(true, true);
		is_changed_bg = [false,false,false];
	}
	
	//시계 배경설정
	rotate_clock();
	
	function change_bg(){
		$clock_night_bg.css({'left': bg_night_x+'px'});
		$clock_day_bg.css({'left': bg_day_x+'px'});
		if(day_hours<5 || day_hours>=20){ //밤
			$clock_night_bg.css('z-index','3').show();
			$clock_day_bg.css('z-index','2');
			$clock_sunset_bg.css('z-index','1');
			
			//밤종료 낮시작
			if(day_hours == 4 && day_minutes == 59 && day_seconds >56 && !is_changed_bg[0] ){
				$clock_night_bg.fadeOut(3000);
				$clock_day_bg.show();
				is_changed_bg[0] = true;
				is_changed_bg[1] = false;
				is_changed_bg[2] = false;
			}
		}else if(day_hours<19){ //낮
			$clock_day_bg.css('z-index','3').show();
			$clock_sunset_bg.css('z-index','2');
			$clock_night_bg.css('z-index','1');
		
			//낮종료 저녁시작
			if(day_hours == 18 && day_minutes == 59 && day_seconds >56 && !is_changed_bg[1] ){
				$clock_day_bg.fadeOut(3000);
				$clock_sunset_bg.show();
				is_changed_bg[0] = false;
				is_changed_bg[1] = true;
				is_changed_bg[2] = false;
			}
		}else{ //저녁
			$clock_sunset_bg.css('z-index','3').show();
			$clock_night_bg.css('z-index','2');
			$clock_day_bg.css('z-index','1');
			 //저녁종료 밤시작
			if(day_hours == 19 && day_minutes == 59 && day_seconds >56 && !is_changed_bg[2] ){
				$clock_sunset_bg.fadeOut(3000);
				$clock_night_bg.show();
				is_changed_bg[0] = false;
				is_changed_bg[1] = false;
				is_changed_bg[2] = true;
			}
		}
	}
});















