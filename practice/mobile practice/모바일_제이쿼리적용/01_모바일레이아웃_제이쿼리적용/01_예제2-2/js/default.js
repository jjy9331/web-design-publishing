$(function(){	

	//초기설정
	$(".gnb_list").css({left:"-70%"});

	$("#wrap").css({position:"relative",left:0});

	//햄버거버튼 클릭했을 때
	$(".gnb_btn").click(function(){
		$(".gnb_list").animate({left:0},600); //보이는 위치
		$("#wrap").animate({left:"60%"},600); 
	});

	//취소버튼 클릭했을 때
	$(".close").click(function(){
		$(".gnb_list").animate({left:"-70%"},600); //안보이는 위치
		$("#wrap").animate({left:0},600); 
	});

});