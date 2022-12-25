
$(function(){


    //이미지 불러오기
    for (i=0; i<=119; i++){
        $(".logo_ani").append("<img src='logo_sequence6/"+i.toString().padStart(3, '0')+".png'>");
    }
    $(".logo_ani img:first").css({visibility:"visible"});

    //애니메이션 시키기
    let frameNum=0;
    
    // resizing
    let W = $(window).width();
    let H = $(window).height();
    
    function aniNext(){
        
        let inc = frameNum++;

        // if (frameNum > 119) {
        // 	frameNum=0;			
        // }

        $(".logo_ani img").css({visibility:"hidden"});
        // $("#portfolio .inner").css({visibility:"hidden"});
        // $(".logo_intro").css({height:H});
        // $(".logo_ani img").css({width:W});
        // $(".logo_ani img").css({height:H});
        $(".logo_ani img:eq("+inc+")").css({visibility:"visible"});
        // $(".logo_ani img:eq("+inc+")").css({width:W});
        // $(".logo_ani img:eq("+inc+")").css({height:H});
        // $(".logo_ani img:eq("+frameNum+")").css({height:H});

        $(".logo_ani").animate(
            {center:119},
            3540,
            function(){
            clearInterval(k);
        });
        
        
        console.log(inc);
        // $(".logo_ani").fadeOut(500); //로딩표시영역 사라짐

        // $('body').fadeIn(3000);
        $('body').css({display:"block"});

        
        if(inc >=119){ //로딩이 완료되면
            clearInterval(k); //setInterval종료					
            $(".logo_ani img").css({display:"none"}); //로딩표시영역 사라짐
            $("#portfolio .inner").css({visibility:"visible"});
            $('body').css({overflow:"auto"});//body스크롤없앰}
            // $("#wrap").fadeIn(3000); 
            $("header").fadeIn(3000); 
            $("section").fadeIn(3000); 
            $("footer").fadeIn(3000);
            // $("#wrap").show(); 
            // $("header").show();
            // $("section").show(); 
            // $("footer").show(); 

        }
        else {
            $('body').css({overflow:"hidden"});//body스크롤없앰}
            $("#wrap").hide(); 
            $("header").hide(); 
            $("section").hide(); 
            $("footer").hide(); 

        }
    }
    // alert(H)
    
    
    let k = setInterval(aniNext,25); //0.1초마다 aniNext 함수 실행

    
    let t = 0;
    function time(){
        t = t + 1;
        // console.log(t);
        $(".time").text(t);
        if(t == 4){
            $(".logo_ani img").css({display:"none"}); //로딩표시영역 사라짐
            $('body').css({overflow:"auto"});//body스크롤없앰}
            // $("#wrap").fadeIn(3000); 
            $("header").fadeIn(3000); 
            $("section").fadeIn(3000); 
            $("footer").fadeIn(3000);
            // $("#wrap").show(); 
            // $("header").show(); 
            // $("section").show(); 
            // $("footer").show();
            

            clearInterval(t);
        }
    }
    // for (i=0; i<=4; i++){
    //     t = t + 1
    //     $(".time").text(t);
    // }
    setInterval(time,1000); //0.1초마다 aniNext 함수 실행

});
