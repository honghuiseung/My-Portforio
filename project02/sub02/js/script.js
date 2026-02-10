$(function(){
	
	//게시판 - 데이터베이스
	$.get('board.json', function(board_cont_data){
		var board_db = board_cont_data.board_db;
		var board_body = $('#board_body');
		//게시판 내용
		var inner_text = board_cont_data.board_inner_text;
		
		
		
		for(i=0; i<board_db.length; i++){
			var count = 1;
			var td_inner_text;
			var tr = $('<dl class=" cf" />'); //가로줄
			
			var board_cont_wrap = $('<dd class="board_cont fl cf"></dd>');
			var board_cont = $('<div class="inner_text fl cf"></div>');
			
			if(i==0){tr.addClass('first');}
			if(i!=0){
				var td = $('<dd class="fl"/>');
				for(var j in inner_text[i]){	
				var board_cont_p = $('<p></p>');
				
				board_cont_p.text(inner_text[i][j]);
				board_cont.append(board_cont_p);
				} 
			}
			
			//게시판 헤더부분
			for(var prop in board_db[i]){	
				var td = $('<dd class="fl"/>'); //세로줄
				if(i==0) {
					//게시판 제목
					var td = $('<dt class="fl"/>'); //세로줄
				}
				var td_num = 'row'+count;
				td.text(board_db[i][prop]).addClass(td_num);
				
				tr.append(td);
				if(i!=0)tr.append(board_cont_wrap);
				count++;
			}
			
			board_body.append(tr);
			
			//게시판 내용
			board_cont_wrap.append(board_cont);	
		}
		
		//게시판 동작
		var board = $('#board_body dl').not('.first');
		var board_content = board.find('.board_cont');
		board_content.hide();
		
		board.each(function(){
			console.log('a');
			$(this).click(function(){
				board_content.hide();
				board.removeClass('on');
				$(this).addClass('on').find('.board_cont').show();
			});
		});
	});
	
});