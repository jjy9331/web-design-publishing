$(function(){	

	//초기설정
	$(".gnb_list").css({left:"-70%"});

	//햄버거버튼 클릭했을 때
	$(".gnb_btn").click(function(){
		$(".gnb_list").animate({left:0},600);
	});

	//취소버튼 클릭했을 때
	$(".close").click(function(){
		$(".gnb_list").animate({left:"-70%"},300);
	});

});