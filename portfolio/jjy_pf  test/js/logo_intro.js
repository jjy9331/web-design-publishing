
$(function(){


    //이미지 불러오기
    for (i=0; i<=178; i++){
        $(".movie").append("<img src='logo_sequence2/"+i+".png'>");
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
            {center:178},
            3540,
            function(){
            clearInterval(k);
        });
        
        
        console.log(inc);
        // $(".movie").fadeOut(500); //로딩표시영역 사라짐

        $('body').fadeIn(1000);//body스크롤없앰}
        $('#portfolio').css({display:"hide"});
        if(inc >=177){ //로딩이 완료되면
            clearInterval(k); //setInterval종료					
            $(".movie img").hide(); //로딩표시영역 사라짐
            $('body').css({overflow:"auto"});//body스크롤없앰}
            $("header").fadeIn(1000); 
            $(".group").fadeIn(1000); 
            $("footer").fadeIn(1000); 
        }
        else {
            $('body').css({overflow:"hidden"});//body스크롤없앰}
            $("header").hide(); 
            $(".group").hide(); 
            $("footer").hide(); 
        }
    }
    // alert(H)
    
    
    let k = setInterval(aniNext,20); //0.1초마다 aniNext 함수 실행

    
    let t = 0;
    function time(){
        t = t + 1;
        console.log(t);
        $(".time").text(t);
        if(t == 4){
            $(".movie img").hide(); //로딩표시영역 사라짐
            $('body').css({overflow:"auto"});//body스크롤없앰}
            $("header").fadeIn(1000); 
            $(".group").fadeIn(1000); 
            $("footer").fadeIn(1000); 
            clearInterval(t);
        }
    }
    // for (i=0; i<=4; i++){
    //     t = t + 1
    //     $(".time").text(t);
    // }
    setInterval(time,1000); //0.1초마다 aniNext 함수 실행

});
