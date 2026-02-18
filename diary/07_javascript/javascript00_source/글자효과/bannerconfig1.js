// bannerconfig.js

var NS4 = (document.layers) ? true : false;
var IE4 = (document.all) ? true : false;

var interval = 20;
var increment = 1;
var pause = 1300;
var bannerColor = "ffffff";
var leftPadding = 2;
var topPadding = 1;

var bannerLeft = (NS4) ? document.images.holdspace.x :
  holdspace.offsetLeft;
var bannerTop = (NS4) ? document.images.holdspace.y :
  holdspace.offsetTop;
var bannerWidth = (NS4) ? document.images.holdspace.width :
  holdspace.width;
var bannerHeight = (NS4) ? document.images.holdspace.height :
  holdspace.height;

var ar = new Array(
  '<center><tt><font color="#23238e" size=2><b>2001년1월9일</B> : 공지 사항을 표시하기에 좋습니다.</center>',
  '<center><tt><font color="#23238e" size=2><font color="red"><b>2001년1월10일</B></font> : 자유롭게 내용을 수정할 수 있습니다.</center>',
  '<center><tt><font color="#23238e" size=2><b>2001년1월11일</B> : 멋진 효과 입니다. </center>', 
  '<center><tt><font color="#23238e" size=2><b>2001년1월12일</B> : 내용은 언제라도 추가할 수 있습니다.</center>'
);