$(function(){	

	$(".gnb_list").css({left:"-70%"});

	$(".gnb_btn").click(function(){
		$(".gnb_list").animate({left:0});
	});

	$(".gnb .close").click(function(){
		$(".gnb_list").animate({left:"-70%"});
	});

});