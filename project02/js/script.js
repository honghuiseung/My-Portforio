$(function(){
	//자주찾는 검색 변수
	var banner_slide;
	var arrow_btn;
	var btn_click;
	var arrow_down;
	var arrow_up;
	
	//자주찾는 서비스 변수
	
	//보조금24 애니메이션 변수
	var menu;
	var tc;
	var menu_image;
	var menu_image_fixed;
	var image_width_px;
	var image_width;
	
	//자주찾는 검색
	banner_slide = $('#search_option .select_wrap');
	arrow_btn = $('#search_option .select_wrap .select img');
	btn_click = true;
	arrow_down = arrow_btn.attr('src');
	arrow_up = arrow_down.replace('down','up');
	
	arrow_btn.click(function(){
		
		if(btn_click){
			arrow_btn.attr('src', arrow_up);
			banner_slide.find('.select_menu').stop(true,true).slideDown();
			btn_click = false;
		}else{
			arrow_btn.attr('src', arrow_down);
			banner_slide.find('.select_menu').stop(false,false).slideUp();
			btn_click = true;
		}
		
		/* $(this).find('.select_menu').stop(false,false).slideUp(); */
	});
	
	var current = 0;
	var banner = $('.select_left a');
	
	var timer;
		
	function start_timer(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0%','-100%');
			current++;
			if(current == banner.size()) current=0;
			var next = banner.eq(current);
			move(next,'100%','0%');
		},3000);
	}
		
	function stop_timer(){
		clearInterval(timer);
	}
		
	function move(tg,start,end){
		tg.css('left' , start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
	}
		
	banner.hover(stop_timer,start_timer);
	start_timer();
	
	//로그인
	var $login_yet_page = $("#section_top #section_top_right .login_yet");
	var $login_done_page = $("#section_top #section_top_right .login_done");
	var $login_btn = $("#section_top #section_top_right .login_button");
	var $logout_btn = $("#section_top #section_top_right .logout_button");
	var $login_extent_btn = $("#section_top #section_top_right .login_button");
	
	$logout_btn.click(function(){
		$login_yet_page.show();
		$login_done_page.hide();
		reset_count();
	});
	
	$login_btn.click(function(){
		$login_yet_page.hide();
		$login_done_page.show();
		start_count();
		show_login_time();
	});
	
	//로그인(카운트)
	var $login_m_10 = $("#section_top #section_top_right .num_m .tenth");
	var $login_m_1 = $("#section_top #section_top_right .num_m .unit");
	var $login_s_10 = $("#section_top #section_top_right .num_s .tenth");
	var $login_s_1 = $("#section_top #section_top_right .num_s .unit");
	
	function show_login_time(){
		var end_login_time = logout_count();
		$login_m_10.text(end_login_time.m_10);
		$login_m_1.text(end_login_time.m_1);
		$login_s_10.text(end_login_time.s_10);
		$login_s_1.text(end_login_time.s_1);
		
		if(end_login_time.is_start)
		setTimeout(show_login_time,1000);
		
	}
	
	//자주찾는 서비스 변수
	
		
	var move_slider_col1= function(){
		var $slider_group = $('#contents_col1 .slide_group');
		var $slider = $slider_group.find('li');
		var count = 0;
		
		$slider.each(function(i){
			$(this).css('left',170*i+'px');
		});
		
		var $slider_prev_btn = $('#contents_col1 .button_prev');
		var $slider_next_btn = $('#contents_col1 .button_next');
		var is_changed = true;
		var slider_num;
		
		$slider_next_btn.click(function(){
			var direction = 1;
			
			if(is_changed && count < 9){
				is_changed = false;
			}else{
				return false;
			}
			
			var first = $slider.eq(0);
			first.appendTo($slider_group);
			$slider = $slider_group.find('li');
			
			if(first.find('a').hasClass("red"))
				direction = -1;
			first.animate({top:-100*direction+'%',opacity:0},1000,
				function(){
					$(this).css({opacity:1, top:0, left:-170});
					
					is_changed = true;
				}
			);
			
			$slider.each(function(i){
				if(i<=7){
					$(this).animate({left:170*i},1000);
				}else if(i==8){
					$(this).css({left:170*i});
				}
					
			});
			count++;
			
			return false
		});
		
		$slider_prev_btn.click(function(){
			var direction = 1;
			
			if(is_changed && count > 0){
				is_changed = false;
			}else{
				return false;
			}
			var first = $slider.eq(16);
			var last = $slider.eq(7);
			first.prependTo($slider_group);
			$slider = $slider_group.find('li');
			if(first.find('a').hasClass("red"))
				direction = -1;
			last.animate({top:-100*direction+'%',opacity:0},1000,
				function(){
					$(this).css({opacity:1, top:0, left:170*8});
					
					is_changed = true;
				}
			);
			
			$slider.each(function(i){
				if(i<=7){
					$(this).animate({left:170*i},1000);
				}
			});
			count--;
			
			return false
		});
	}
	move_slider_col1();
	
	//메뉴 슬라이드업다운
	$('#contents_col4_left .box_right').each(function(){//메모리에 상주하기 때문에 새탭에서 열어야함
		var topDiv = $(this);
		var anchors = topDiv.find('ul.title li');
		var panelDivs = topDiv.find('.content');
		var lastAnchor;
		var lastPanel;
		//같은 탭이라면 중단

		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.find('a').attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(e){
			
			e.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.find('a').attr('href'));
			
			
			if(currentAnchor.get(0) === lastAnchor.get(0)){
				return;
			} 
			
			lastPanel.stop().slideUp(200,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop().slideDown(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			});
			
		});
		
	});
	
	//원스톱 서비스
	
	//보조금24 애니메이션
	menu =  $('#contents_col3_left ul li');
	tc = $('#contents_col3_left ul li').eq(0);
	menu_image = tc.find('.img');
	menu_image_fixed = tc.find('.img_ec');
	image_width_px = menu_image.css('width');
	image_width = image_width_px.replace('px','');
	
	function open(){
		menu_image.animate({width:image_width},{duration:600,queue:false,easing:'easeOutCubic'});		
		menu_image_fixed.animate({width:0},{duration:600,queue:false,easing:'easeOutCubic'});	
	}
	
	function close(){
		menu_image.animate({width:0},{duration:600,queue:false,easing:'easeOutCubic'});
		menu_image_fixed.animate({width:image_width},{duration:600,queue:false,easing:'easeOutCubic'});
	}
	
	function close_all(){
		menu.each(function(){
			$(this).find('.img').css('width','0');
		})
	}
	
	close_all();
	open();
	
	menu.each(function(){
		tc = $(this);
		var menu_image = tc.find('.img');	
		var menu_image_fixed = tc.find('.img_ec');	
		
		tc.hover(
			function(){
				close();
				image_width = menu_image.css('width');	
				image_width = image_width_px.replace('px','');
				menu_image.animate({width:image_width},{duration:600,queue:false,easing:'easeOutCubic'});	
				menu_image_fixed.animate({width:0},{duration:600,queue:false,easing:'easeOutCubic'});				
			}, 
			function(){			
				menu_image.animate({width:0},{duration:600,queue:false,easing:'easeOutCubic'});	
				menu_image_fixed.animate({width:image_width},{duration:600,queue:false,easing:'easeOutCubic'});	
				open();
			}
		);
	});
	
	//날씨
	$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1846898&appid=5fe50d652c1a79fd2f3faad347805e67&units=metric',function(data){
		//alert(data.list[0].main.temp_min);
		var min_temp = data.list[0].main.temp_min+'&#8451;';
		var max_temp = data.list[0].main.temp_max+'&#8451;';
		var feels_like = data.list[0].main.feels_like+'&#8451;';
		var humidity = data.list[0].main.humidity+'&#37;';
		var c_temp = data.list[0].main.temp+'&#8451;';
		var now = new Date(Date.now());
		var month = now.getMonth()+1;
		var c_date = now.getFullYear()+'년 '+ month + '월' + now.getDate()+'일 ' + now.getHours()+'시 ' + now.getMinutes()+'분'; 
		var wIcon = data.list[0].weather[0].icon;
		
		$('.gb_temp').append(c_temp);
		$('.gb_lowtemp span').append(min_temp);
		$('.gb_hightemp span').append(max_temp);
		$('.gb_feels_like span').append(feels_like);
		$('.gb_humidity span').append(humidity);
		$('.gb_date').append(c_date);
		$('.gb_icon').append('<img src="https://openweathermap.org/img/wn/'+wIcon+'@2x.png"/>');
	});
	
	//하단배너
	var btm_banner = $('#contents_col4_right .banner');
	//var btm_banner_width = banner.width();
	var count = 0;
	
	var btm_prev = $('#contents_col4_right .prev');
	var btm_next = $('#contents_col4_right .next');
	
	function slide_banner(banner, is_next){
		var btm_cnt = banner.eq(count);
		if(is_next){
			count++;
			if (count == banner.size()){
				count = 0;
			}
			var btm_next = banner.eq(count);
			btm_cnt.css('left', '0%').stop().animate({left:'-100%'},{duration:500, ease:'easeOutCubic'});
			btm_next.css('left', '100%').stop().animate({left:'0%'},{duration:500, ease:'easeOutCubic'});
		}else{
			count--;
			if (count == -1){
				count = banner.size()-1;
			}
			var btm_next = banner.eq(count);
			btm_cnt.css('left', '0%').stop().animate({left:'100%'},{duration:500, ease:'easeOutCubic'});
			btm_next.css('left', '-100%').stop().animate({left:'0%'},{duration:500, ease:'easeOutCubic'});
		}
	}
	
	var btm_banner_timer;
	
	function banner_start(){
		btm_banner_timer = setInterval(function(){
			slide_banner(btm_banner, true);
		}, 1000);
	}
	function banner_end(){
		clearInterval(btm_banner_timer);
	}
	
	banner_start();
	
	btm_banner.hover(
		function(){
			banner_end();
		},
		function(){
			banner_start();
		}
	);
	
	btm_prev.click(function(){
		banner_end();
		slide_banner(btm_banner, false);
		banner_start();
	});
	
	btm_next.click(function(){
		banner_end();
		slide_banner(btm_banner, true);
		banner_start();
	});
	
	
});

window.open("sub05/popup.html", "","resizable=no, toolbar=no, width=464, height=698");



















