window.addEventListener("load",function(){ //페이지의 요소들이 다 로딩된후 실행

    /// 탭메뉴 //////////////////////////////////////////////
    const mn = document.getElementsByClassName("mn");
    const con1 = document.getElementById("con1");
    const con2 = document.getElementById("con2");

    mn[0].addEventListener("click",function(e){//첫번째 메뉴 클릭했을때
        e.preventDefault();
        con1.style.display="block"; //con1보이게함
        con2.style.display="none"; //con2안보이게함
        mn[0].style.backgroundColor="rgba(255,255,255,1)";
        mn[1].style.backgroundColor="rgba(255,255,255,0.5)";
    });

    mn[1].addEventListener("click",function(e){//두번째 메뉴 클릭했을때
        e.preventDefault();
        con1.style.display="none"; //con1안보이게함
        con2.style.display="block"; //con2보이게함
        mn[0].style.backgroundColor="rgba(255,255,255,0.5)";
        mn[1].style.backgroundColor="rgba(255,255,255,1)";

    });

    const gnb = document.querySelector(".gnb");
    const sub = document.querySelectorAll(".sub");
    const gnb_bgbox = document.querySelector(".gnb_bgbox");

    let h = 0;
    let target = 0;

    setInterval(smoothMove,10);
    
    function smoothMove(){

        h = h + 1*(target-h);//부드러운 움직임 공식

        for (i=0; i<=3; i++){
            gnb_bgbox.style.height = h + "px";
            sub[i].style.height = h + "px"
        }

        /*
            gnb_bgbox.style.height = h + "px";
            sub[0].style.height = h + "px"
            sub[1].style.height = h + "px"
            sub[2].style.height = h + "px"
            sub[3].style.height = h + "px"
        */ 

    }

    gnb.addEventListener("mouseover",function(){
        target = 453;
    });

    gnb.addEventListener("mouseout",function(){
        target = 0;
    });

});




