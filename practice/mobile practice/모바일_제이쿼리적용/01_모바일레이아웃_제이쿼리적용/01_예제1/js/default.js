$(function(){	

	//초기설정
	$(".gnb_list").hide();

	//햄버거버튼 눌렀을 때
	$(".gnb_btn").click(function(){
		// $(".gnb_list").toggle();
		$(".gnb_list").slideToggle();
	});

});