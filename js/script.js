$(document).ready(function(){
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");
	//$('a.gallery').colorbox();

	var options = { 
	'speed' : 500, 
	// 스피드
	'initTop': 250, 
	// 기본 top 위치
	'alwaysTop' : false, 
	// 항상고정 true , false 이동
	'default_x' : '#wrap' 
	//레어아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}
	
	//툴팁
	$('.tool_tip').tooltip();
	
	
	
	var scroll_top_cnt = [
		$('#main').offset().top-0,
		$('#profile').offset().top-0,
		$('#hybrid').offset().top-0,
		$('#figma').offset().top-0,
		$('#jQuery').offset().top-0,
		$('#springboot').offset().top-0,
		$('#css').offset().top+1,
		$('#git').offset().top+1,
		$('#epilogue').offset().top+1,
	]
	
	$('#floatdiv').Floater(options);
	
	float_btn = $('#floatdiv ul li');
	
	float_btn.each(
		function(i){
			$(this).hover(
				function(){
					if($('html,body').scrollTop()==scroll_top_cnt[i])return
					$(this).addClass('hover');
				},
				function(){
					$(this).removeClass('hover');
				}
			)
	})
	
	$('#btn01').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[0])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[0]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
															    
	});
	$('#btn02').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[1])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[1]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn03').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[2])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[2]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn04').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[3])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[3]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn05').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[4])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[4]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn06').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[5])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[5]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn07').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[6])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[6]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn08').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[7])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[7]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn09').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[8])return
		$('#floatdiv .block').show();
		$('html,body').animate({scrollTop : scroll_top_cnt[8]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	$('#btn10').click(function(){
		if($('html,body').scrollTop()==scroll_top_cnt[8])return
		$('html,body').animate({scrollTop : scroll_top_cnt[9]},800,function(){
		//컨턴츠 높이조절
			$('#floatdiv .block').hide();
		});
	});
	
	var menu = $('#menuWrap > ul > li');
	var contents = $('#contents > div');
	var btn = $('#floatdiv ul li');
	
	menu.click(function(){
		event.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		var tt = scroll_top_cnt[i];
		$('html,body').stop().animate({scrollTop : tt},800);
	});
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if(tg.offset().top <= sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		})
	});
	
	var current = 1;
	var thumbListSize = 4;
	var thumbnail = $('#graphicBox');
	var prev = thumbnail.find('> .left');
	var next = thumbnail.find('> .right');
	var graphicImg = thumbnail.find('> .graphicImg > ul');
	var graphicImgWidth = thumbnail.find('> .graphicImg').width();
	var thumb = graphicImg.find('> .thumb');
	var maxSize = thumb.size();
	var image = $('.graphicImgBox #graphicImage > p');
	
	listMove();
	
	next.on('click', function(){
		if(current == maxSize / thumbListSize - 1) alert('마지막 페이지입니다.');
		if(current < maxSize / thumbListSize - 1) current++;
		listMove();
	});
	
	prev.on('click', function(){
		if(current==0)alert('첫번째 페이지입니다.');
		if(current > 0) current--;
		listMove();
	});
	
	//하단 작은이미지 버튼 동작
	function listMove(){
		var tl = graphicImgWidth * current * -1;
		graphicImg.stop().animate({left: tl}, {duratin:400, easing:'easeOutCubic'});
	}
	
	//썸네일 클릭시 이미지 보이기
	thumb.on('click', function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	});
	
	//썸네일 마우스 올릴시 동작
	thumb.hover(function(){
		var tg = $(this);
		tg.css('opacity','0.3');
	},function(){
		var tg = $(this);
		tg.css('opacity','1');
	});
	
	//프로필
	var $btn = $('.slide_btn');
	var $slider_wrap = $('.profile_slider_wrap');
	var $slider = $('.profile_slider');
	var current = 0;
	var set_timer_ID;
	
	function move_slider(i){
		var $current = $slider.eq(current);
		var $next = $slider.eq(i);
		$current.css({left:'0%'}).stop().animate({left:'-100%'});
		$next.css({left:'100%'}).stop().animate({left:'0%'});
		current = i;
	}
	
	function set_timer(){
		set_timer_ID = setInterval(function(){
			var i = current + 1;
			if(i==$slider.size()){i=0;}
			$btn.eq(i).trigger('click');			
		},3000);
	}
	
	function delete_timer(){
		clearInterval(set_timer_ID);
	}
	
	$btn = $('.slide_btn').on({'click':
		function(){
			var tg = $(this);
			var i = tg.index();
			if(current == tg.index()){return;}
			$btn.removeClass('active');
			tg.addClass('active');
			move_slider(i);
			return false;
		}
	});
	
	$slider_wrap.hover(
		function(){
			delete_timer();
		},
		function(){
			set_timer();
		}
	);
	
	set_timer();
	
	//hybrid
	var $app_slide_wrap = $('.iphone .iphone_cont>ul');
	var $app_slide = $('.iphone .iphone_cont>ul>li');
	var $app_slide_img = $('.iphone .iphone_cont>ul>li>p');
	var $description = $('#mobile_text .description>ul.text>li');
	var $description_btn = $('#mobile_text .description>ul.page_button>li');
	var $mobile_btn_gr = $('.description ul.page_button >li');
	
	var mobile_timer;
	var mobile_index = 0;
	var mobile_img_size = 1;
	var startNumder = 0;
	
	function setting(){
		$app_slide.each(function(i){
			$(this).css({top:100*i+'%'});
			$(this).find('p').each(function(j){
				$(this).css({left:100*j+'%'});
			});
		});
		$mobile_btn_gr.each(function(){
			$(this).find('p').eq(0).addClass('active');
		})
	}
	setting();
	$mobile_sub_btn = $('.mobile_sub_index >li.ms');
	$mobile_sub_thumb = $('.mobile_sub_thumb >a');
	
	//메뉴버튼 클릭
	$mobile_sub_btn.on('click',function(){
		mobile_index = $(this).index()-2;
		var index_p = 0;
		startNumder = 0;
		
		end_timer();
		start_timer();
		mobile_img_size = $mobile_btn_gr.eq(mobile_index).find('p').size();
		
		$mobile_sub_btn.removeClass('active');
		$(this).addClass('active');
		$mobile_btn_gr.eq(mobile_index).find('p').eq(0).trigger('mouseenter');
		$app_slide_wrap.stop(true).animate({left:0}).animate({top:-100*mobile_index+'%'},500);
		$description.hide().eq(mobile_index).show();
		$description_btn.hide().eq(mobile_index).show();
		
	});
	
	//화면 자동이동
	start_timer();
	
	function start_timer(){
		mobile_timer = setInterval(function(){
			startNumder++;
			if(startNumder>=(mobile_img_size)){startNumder=0;}
			move_mobile_slider(startNumder);
		}, 2000);
	}
	
	function end_timer(){
		clearInterval(mobile_timer);
	}
	
	function move_mobile_slider(index){
		$app_slide_wrap.stop(false,true).animate({left:-100*index+'%'},500);
		$mobile_btn_gr.eq(mobile_index).find('p').removeClass('active');
		$mobile_btn_gr.eq(mobile_index).find('p').eq(index).addClass('active');
	}
	
	//작은버튼 선택
	
	$mobile_btn_gr.each(function(){
		var $mobile_btn = $(this).find('p');
		$mobile_btn.on('mouseenter',function(){
			var index = $(this).index();
			startNumder = index;
			move_mobile_slider(index);
		});
	});
	
	$app_slide_img.hover(
		function(){
			var img = $(this).find('img');
			end_timer();
			if(img.size() >= 2)
			{
				var height = -(img.eq(0).css('height').replace('px','')-img.eq(1).css('height').replace('px',''))+'px';
				img.eq(0).stop(true).animate({top:height},1000);
			}
		},
		function(){
			var img = $(this).find('img');
			start_timer();
			if(img.size() >= 2)
			{
				var height = -(img.eq(0).css('height').replace('px','')-img.eq(1).css('height').replace('px',''))+'px';
				img.eq(0).stop(true).animate({top:0},500);
			}
		}
	);
	/* figma */
	var loc = 0;
	var $fig_slide_gr = $('#figma .iphone_cont ul.app_pre_slide');
	var max_num = $fig_slide_gr.find('li').size();
	$arrow = $('.arrow');
	
	$arrow.eq(0).click(function(){
		loc--;
		if(loc<0)loc = max_num -1;
		move_figma_slider();
	});
	$arrow.eq(1).click(function(){
		loc++;
		if(loc>max_num)loc = 0;
		move_figma_slider();
	});
	
	function move_figma_slider(index){
		$fig_slide_gr.stop(false,true).animate({left:-100*loc+'%'},500);
	}
	
	function setting_fig(){
		$fig_slide_gr.find('li').each(function(i){
			$(this).css({left:100*i+'%'});
		});
	}
	setting_fig();
	
	/* jQuery */
	var gr_wrap=$('.gr_subs');
	var gr_sub1=$('.gr_subs .sub1_wrap');
	var gr_sub2=$('.gr_subs .sub2_wrap');
	var gr_sub3=$('.gr_subs .sub3_wrap');
	var gr_sub4=$('.gr_subs .sub4_wrap');
	
 	gr_sub2.each(function(i){
		var num = gr_wrap.eq(i).children().size();
		/* console.log("2:"+num); */
		$(this).hover(
			function(){
				gr_sub2.eq(i).stop().animate({'left':'64px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			},
			function(){
				gr_sub2.eq(i).stop().animate({'left':'297px'},{duration:600,queue:false,easeing:'easeOutCubic'});			
			}
		);
	})
	gr_sub3.each(function(i){
		var num = gr_wrap.eq(i).children().size();
		/* console.log("3:"+num); */
		$(this).hover(
			function(){
				gr_sub2.eq(i).stop().animate({'left':'64px'},{duration:600,queue:false,easeing:'easeOutCubic'});
				gr_sub3.eq(i).stop().animate({'left':(64*(num-2))+'px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			},
			function(){
				gr_sub2.eq(i).stop().animate({'left':'297px'},{duration:600,queue:false,easeing:'easeOutCubic'});			
				gr_sub3.eq(i).stop().animate({'left':'361px'},{duration:600,queue:false,easeing:'easeOutCubic'});			
			}
		);
	})
	gr_sub4.each(function(i){
		var num = gr_wrap.eq(i).children().size();
		/* console.log("4:"+num); */
		$(this).hover(
			function(){
				gr_sub2.eq(i).stop().animate({'left':'64px'},{duration:600,queue:false,easeing:'easeOutCubic'});
				gr_sub3.eq(i).stop().animate({'left':(64*(num-2))+'px'},{duration:600,queue:false,easeing:'easeOutCubic'});
				gr_sub4.eq(i).stop().animate({'left':(64*(num-1))+'px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			},
			function(){
				gr_sub2.eq(i).stop().animate({'left':'297px'},{duration:600,queue:false,easeing:'easeOutCubic'});			
				gr_sub3.eq(i).stop().animate({'left':'361px'},{duration:600,queue:false,easeing:'easeOutCubic'});			
				gr_sub4.eq(i).stop().animate({'left':'425px'},{duration:600,queue:false,easeing:'easeOutCubic'});			
			}
		);
	})
	
	$('.pc_img_wrap a').hover(
		function(){
			$('.pc_img_wrap a>img').stop().animate({'margin-top':'-512px'},{duration:7000,queue:false,easeing:'easeOutCubic'})	
		},
		function(){
			$('.pc_img_wrap a>img').stop().animate({'margin-top':'0px'},{duration:1000,queue:false,easeing:'easeOutCubic'})	
		}
	);
	
});







