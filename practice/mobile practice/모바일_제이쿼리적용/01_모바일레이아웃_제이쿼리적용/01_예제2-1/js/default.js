$(function(){	

	$(".gnb_list").hide();

	$(".gnb_btn").click(function(){
		// $(".gnb_list").show();
		// $(".gnb_list").slideDown();
		$(".gnb_list").fadeIn();
	});

	$(".close").click(function(){
		// $(".gnb_list").hide();
		// $(".gnb_list").slideUp();
		$(".gnb_list").fadeOut();
	});

});