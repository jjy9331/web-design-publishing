window.addEventListener("load",function(){//페이지의 요소들이 다 로딩된후 실행


	/// GNB 내비게이션 //////////////////////////////////////////
	/*
		.gnb:hover .sub { height:453px; }
		.gnb:hover .gnb_bgbox { height:453px; }
	*/

	const gnb = document.querySelector(".gnb");
	const sub = document.querySelectorAll(".sub");
	const gnb_bgbox = document.querySelector(".gnb_bgbox");

	let h=0;
	let target=0;

	setInterval(smoothMove,10);
	function smoothMove(){

		h = h + 0.1*(target-h);//부드러운 움직임 공식

		gnb_bgbox.style.height = h + "px";

		for ( i=0; i<=3; i++ ) {
			sub[i].style.height = h + "px";
		}

		/*
		sub[0].style.height = h + "px";
		sub[1].style.height = h + "px";
		sub[2].style.height = h + "px";
		sub[3].style.height = h + "px";
		*/
	}
	


	gnb.addEventListener("mouseover",function(){
		target=297;
	});

 	gnb.addEventListener("mouseout",function(){
		target=0;
	});



});
