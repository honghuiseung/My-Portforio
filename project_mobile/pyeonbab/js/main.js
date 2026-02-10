$(function(){

    /* 인기레시피 Swiper */
    var swiper = new Swiper(".recipe_tab", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
    });
    var swiper = new Swiper(".recipe_conts", {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
            clickable: true,
        },
    });

    var user_btn = $('#ui_fixed li.user');
    var login_alert = $('#login_alert');
    user_btn.click(function(){
        login_alert.show();
        // 차후 로그인 여부에 따라 보여지는 페이지 다르게 수정
    });
    login_alert.each(function(){
        var btns = $('.btn_wrap a');
        btns.click(function(){
            login_alert.hide();
        });
    });

    /* login guide text */
    var guideClass = 'input_guide';
	$('.user_input').each(function(){
		var giudeText = this.defaultValue;
		var element = $(this);
        var user_id = $('#user_id');
        var user_pw = $('#user_pw');
		user_id.focus(function(){
			if(user_id.val()===giudeText){
				user_id.val('');
				user_id.removeClass(guideClass);
			}
		})

        user_pw.focus(function(){
            if(user_pw.val()===giudeText){
				user_pw.val('');
				user_pw.removeClass(guideClass);
			}
            user_pw.attr('type', 'password');
        });

        element.blur(function(){
			if(element.val()===''){
				element.val(giudeText);
				element.addClass(guideClass);
                element.attr('type', 'text');
			}
		});

		if(element.val()===giudeText){
			element.addClass(guideClass);
            
		}
    });

    $(".user_input_wrap").on("change keyup", function(){
        var box_1 = $("#user_id").val();
        var box_2 = $("#user_pw").val();
        if(box_1&&box_2){
            $(".login_btn").addClass('on');
        }else{
            $(".login_btn").removeClass('on');
        };
    });

    /* my 페이지 메뉴 toggle */
    var my_menu = $('.my .my_menu_wrap>ul>li');
    my_menu.each(function(){
        $(this).click(function(){
            if($(this).hasClass('on')){
                $(this).find('.sub_menu').slideUp(300);
                $(this).find('>a span').css({"background-position":"-20px 0"});
                $(this).removeClass('on');
            }else{
                $(this).find('.sub_menu').slideDown(300);
                $(this).find('>a span').css({"background-position":"0 0"});
                $(this).addClass('on');
            };
        });
    });

    /* list tab menu */
    var my_pick_tab = $('.my_pick .tab_menu>li');
    var my_pick_conts = $('.my_pick .list_wrap>div');
    my_pick_conts.hide().eq(0).show();
    my_pick_tab.click(function(e){
        e.preventDefault();
        var tg = $(this);
        var i = tg.index();
        my_pick_tab.removeClass('on');
        tg.addClass('on');
        my_pick_conts.hide();
        my_pick_conts.eq(i).show();
    });

    /* list text overflow... */
    var list_text_over = $('.my_pick .list_wrap .cont_info .tit');
    list_text_over.each(function(){
        var length = 28; 
        if($(this).text().length >= length){
            $(this).text($(this).text().substr(0,length)+'...');
        }
    });
});