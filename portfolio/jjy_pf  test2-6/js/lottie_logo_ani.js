
$(function(){
    
    let t = 0;
    function time(){
        t = t + 1;
        console.log(t);
        $(".time").text(t);
        if(t >= 5){
            $("lottie-player").css({display:"none"}); //로딩표시영역 사라짐
            // $("lottie-player").css({display:"block"}); //로딩표시영역 사라짐
            $('body').css({overflow:"auto"});//body스크롤없앰}
            $("header").fadeIn(2000);
            $(".wrapper").fadeIn(2000); 
            $("section").fadeIn(2000); 
            $("footer").fadeIn(2000);

            $("header").css('visibility', 'visible');
            $(".wrapper").css('visibility', 'visible');
            $("section").css('visibility', 'visible');
            $("footer").css('visibility', 'visible');
            $('body').css('backgroundColor', 'white');

            clearInterval(t);
        }
        else {
            $("header").hide();
            $(".wrapper").hide(); 
            $("section").hide(); 
            $("footer").hide(); 
        }
    }
    setInterval(time,1000); //0.1초마다 aniNext 함수 실행

});
