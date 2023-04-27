$(function(){


    //이미지 불러오기
    for (i=0; i<=101; i++){
        $(".movie").append("<img src='mohenic_sequence/"+i+".jpg'>");
    }
    $(".movie img:first").css({visibility:"visible"});

    //애니메이션 시키기
    let frameNum=0;
    
    // resizing
    let W = $(window).width();
    let H = $(window).height();
    
    function aniNext(){
        
        let inc = frameNum++;

        // if (frameNum > 177) {
        // 	frameNum=0;			
        // }

        $(".movie img").css({visibility:"hidden"});
        // $(".logo_intro").css({height:H});
        // $(".movie img").css({width:W});
        // $(".movie img").css({height:H});
        $(".movie img:eq("+inc+")").css({visibility:"visible"});
        // $(".movie img:eq("+inc+")").css({width:W});
        // $(".movie img:eq("+inc+")").css({height:H});
        // $(".movie img:eq("+frameNum+")").css({height:H});

        $(".movie").animate(
            {center:101},
            2019.8,
            function(){
            clearInterval(k);
        });
        
        
        console.log(inc);
        // $(".movie").fadeOut(500); //로딩표시영역 사라짐

        // $('body').fadeIn(1000);
        // $('body').css({display:"block"});

        
        if(inc >=101){ //로딩이 완료되면
            clearInterval(k); //setInterval종료					
            $(".movie img").hide(); //로딩표시영역 사라짐
            $('body').css({overflow:"auto"});//body스크롤없앰}
            $("#wrap").css({display:"block"}); 
            $("header").fadeIn(4000); 
            $("section").fadeIn(4000); 
            $("footer").fadeIn(4000);
        }
        else {
            $('body').css({overflow:"hidden"});//body스크롤없앰}
            $("header").hide(); 
            $("section").hide(); 
            $("footer").hide(); 

        }
    }
    // alert(H)
    
    
    let k = setInterval(aniNext,25.25); //aniNext 함수 실행

    
    let t = 0;
    function time(){
        t = t + 1;
        console.log(t);
        $(".time").text(t);
        if(t == 3){
            $(".movie img").fadeOut(1000); //로딩표시영역 사라짐
            $('body').css({overflow:"auto"});
            $("body").css({background:"white"}); 
            $("#wrap").css({display:"block"}); 
        }
        if(t == 4){
            $("body").css({background:"white"}); 
            $("#wrap").css({display:"block"}); 
            $("header").fadeIn(1000); 
            $("section").fadeIn(1000); 
            $("footer").fadeIn(1000);

            $(".movie").hide(); 

            $(function(){
                var mySwiper1 = new Swiper ('#visual_inner', { 
                    loop: true, //순환유무	 
                    grabCursor: true, //커서 손모양
                    autoplay: 6000, //자동진행
                    effect: 'fade', //효과
                })
            });
            //intro에 swiper가 영향 받으므로 이곳에 배치

            clearInterval(t);
        }
    }

    setInterval(time,1000); //0.1초마다 aniNext 함수 실행

});