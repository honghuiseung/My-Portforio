function unit(x){ //1의 자리 숫자
	var m = x%10
	return m
}
function tenth(y){ //10의 자리 숫자
	var m = Math.floor((y%100)/10)
	return m
}
function hund(z){ //100의 자리 숫자
	var m = Math.floor(z/100)
	return m
}
var doomsday = new Date();
//start_count()

//카운트 하는중
function ddaycount(){
	
	doomstime = logout_count();
	
	if(doomstime.is_start){
		setTimeout('ddaycount()', 1000)
	} else{
		clearTimeout('ddaycount()') 
		until_logout = '로그인 해주세요.'
		return until_logout
	}
	
	
	m = doomstime.m;
	s = doomstime.s;
	
	if(m<10) {m='0'+m}
	if(s<10) {s='0'+s}
	
	until_logout = '로그아웃까지 '+m+'분 ' +s+'초 남았습니다.'
	
	return until_logout
	
}

//카운트 알고리즘
function logout_count(){
	today = new Date()
	howfar = doomsday - today
	
	hours = Math.floor(howfar/(1000*60*60))
	mins = Math.floor(howfar/(1000*60))
	secs = Math.floor(howfar/(1000))
	
	class Result {
		
		constructor(m,s,m_1,m_10,s_1,s_10,is_start) {
			this.m = mins - hours*60
			this.m_1 = (mins - hours*60)%10
			this.m_10 = Math.floor((mins - hours*60)/10)
			this.s = secs - mins*60
			this.s_1 = (secs - mins*60)%10
			this.s_10 = Math.floor((secs - mins*60)/10)
			this.is_start = (howfar>0)?true:false;
		}
	}
	
	time = new Result()
	console.log(time);
	
	return time
	
}

function start_count(){
	today = new Date()
	today.setHours(today.getHours()+1)
	doomsday = today;
}

function reset_count(){
	today = new Date()
	doomsday = today;
}