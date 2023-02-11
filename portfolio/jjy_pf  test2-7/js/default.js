

$(function(){
    // header mousewheel
    $("header .inner .logo").click(function(){
                $('html,body').animate({ scrollTop:0},2100); return false;	    
    })

    $("header .inner ul li:eq(0) a, h1 a").click(function(){
            $('html,body').animate({ scrollTop:0},2100); return false;	    
    })
    $("header .inner ul li:eq(1) a").click(function(){
            $('html,body').animate({ scrollTop:14775},2100); return false;
    })
    $("header .inner ul li:eq(2) a").click(function(){
            $('html,body').animate({ scrollTop:63996},2100); return false;
    })
    $("header .inner ul li:eq(3) a").click(function(){
            $('html,body').animate({ scrollTop:218740},2100); return false;
    })

    $(window).scroll(function(){
        var b = $(document).scrollTop(); 
        if((b >=0) && (b < 13284)) {
            $('header ul li:nth-child(1) .hr_d1').css("visibility","visible");

            $('header ul li:nth-child(2) .hr_d2').css("visibility","hidden");
            $('header ul li:nth-child(2) .hr_d3').css("visibility","hidden");
            $('header ul li:nth-child(2) .hr_d4').css("visibility","hidden");
            $('header ul li:nth-child(2) .hr_d5').css("visibility","hidden");

            $('header ul li:nth-child(3) .hr_d6').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d7').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d8').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d9').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d10').css("visibility","hidden");

            $('header ul li:nth-child(4) .hr_d11').css("visibility","hidden");
            $('header ul li:nth-child(4) .hr_d12').css("visibility","hidden");
            $('header ul li:nth-child(4) .hr_d13').css("visibility","hidden");
        }
        if((b >=14775) && (b < 53435)) {
            $('header ul li:nth-child(1) .hr_d1').css("visibility","hidden");

            $('header ul li:nth-child(2) .hr_d2').css("visibility","visible");
            $('header ul li:nth-child(2) .hr_d3').css("visibility","visible");
            $('header ul li:nth-child(2) .hr_d4').css("visibility","visible");
            $('header ul li:nth-child(2) .hr_d5').css("visibility","visible");

            $('header ul li:nth-child(3) .hr_d6').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d7').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d8').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d9').css("visibility","hidden");
            $('header ul li:nth-child(3) .hr_d10').css("visibility","hidden");

            $('header ul li:nth-child(4) .hr_d11').css("visibility","hidden");
            $('header ul li:nth-child(4) .hr_d12').css("visibility","hidden");
            $('header ul li:nth-child(4) .hr_d13').css("visibility","hidden");

        }
        if((b >=63996) && (b < 202085)) {

            $('header ul li:nth-child(1) .hr_d1').css("visibility","hidden");

            $('header ul li:nth-child(2) .hr_d2').css("visibility","hidden");
            $('header ul li:nth-child(2) .hr_d3').css("visibility","hidden");
            $('header ul li:nth-child(2) .hr_d4').css("visibility","hidden");
            $('header ul li:nth-child(2) .hr_d5').css("visibility","hidden");

            $('header ul li:nth-child(3) .hr_d6').css("visibility","visible");
            $('header ul li:nth-child(3) .hr_d7').css("visibility","visible");
            $('header ul li:nth-child(3) .hr_d8').css("visibility","visible");
            $('header ul li:nth-child(3) .hr_d9').css("visibility","visible");
            $('header ul li:nth-child(3) .hr_d10').css("visibility","visible");

            $('header ul li:nth-child(4) .hr_d11').css("visibility","hidden");
            $('header ul li:nth-child(4) .hr_d12').css("visibility","hidden");
            $('header ul li:nth-child(4) .hr_d13').css("visibility","hidden");

        }
        if((b >=209507) && (b < 463831)) {

        $('header ul li:nth-child(1) .hr_d1').css("visibility","hidden");

        $('header ul li:nth-child(2) .hr_d2').css("visibility","hidden");
        $('header ul li:nth-child(2) .hr_d3').css("visibility","hidden");
        $('header ul li:nth-child(2) .hr_d4').css("visibility","hidden");
        $('header ul li:nth-child(2) .hr_d5').css("visibility","hidden");

        $('header ul li:nth-child(3) .hr_d6').css("visibility","hidden");
        $('header ul li:nth-child(3) .hr_d7').css("visibility","hidden");
        $('header ul li:nth-child(3) .hr_d8').css("visibility","hidden");
        $('header ul li:nth-child(3) .hr_d9').css("visibility","hidden");
        $('header ul li:nth-child(3) .hr_d10').css("visibility","hidden");

        $('header ul li:nth-child(4) .hr_d11').css("visibility","visible");
        $('header ul li:nth-child(4) .hr_d12').css("visibility","visible");
        $('header ul li:nth-child(4) .hr_d13').css("visibility","visible");

        }
    });

    // $(window).scroll(function(){
    //     var b = $(document).scrollTop(); 
    //     if((b >=0) && (b < 13284)) {
    //         $('header ul li:nth-child(1) a').text('"홈"');
    //         $('header ul li:nth-child(2) a').text('자기소개');
    //         $('header ul li:nth-child(3) a').text('포트폴리오');
    //         $('header ul li:nth-child(4) a').text('컨텍스트');
    //     }
    //     if((b >=14775) && (b < 53435)) {
    //         $('header ul li:nth-child(1) a').text('홈');
    //         $('header ul li:nth-child(2) a').text('"자기소개"');
    //         $('header ul li:nth-child(3) a').text('포트폴리오');
    //         $('header ul li:nth-child(4) a').text('컨텍스트');
    //     }
    //     if((b >=63996) && (b < 202085)) {
    //         $('header ul li:nth-child(1) a').text('홈');
    //         $('header ul li:nth-child(2) a').text('자기소개');
    //         $('header ul li:nth-child(3) a').text('"포트폴리오"');
    //         $('header ul li:nth-child(4) a').text('컨텍스트');
    //     }
    // });


    ///////////////////////////////////////////////////////////////////////////////
    // portfolio back & next

    $("#pf1back").click(function(){
                $('html,body').animate({ scrollTop:63996},2100); return false;	    
    })
    $("#pf1next").click(function(){   
                $('html,body').animate({ scrollTop:107499},2100); return false;
    })
    $("#pf2back").click(function(){
                $('html,body').animate({ scrollTop:87999},2100); return false;	    
    })
    $("#pf2next").click(function(){   
                $('html,body').animate({ scrollTop:137370},2100); return false;
    })
    $("#pf3back").click(function(){
                $('html,body').animate({ scrollTop:114495},2100); return false;	    
    })
    $("#pf3next").click(function(){   
                $('html,body').animate({ scrollTop:165492},2100); return false;
    })
    $("#pf4back").click(function(){
                $('html,body').animate({ scrollTop:135999},2100); return false;	    
    })
    $("#pf4next").click(function(){   
                $('html,body').animate({ scrollTop:186503},2100); return false;
    })
    $("#pf5back").click(function(){
                $('html,body').animate({ scrollTop:170482},2100); return false;	    
    })
    $("#pf5next").click(function(){   
        $('html,body').animate({ scrollTop:204717},2100); return false;
    })
    $("#pfmback").click(function(){
                $('html,body').animate({ scrollTop:193502},2100); return false;	    
    })
    $("#pfmnext").click(function(){   
                $('html,body').animate({ scrollTop:218740},2100); return false;
    })

    $(window).scroll(function(){
        var b = $(document).scrollTop(); 

        if((b >=86419) && (b < 91499)) { 
            // pf1
            $('#pf1back').css("visibility","visible");
            $('#pf1next').css("visibility","visible");

        }
        else{
            $('#pf1back').css("visibility","hidden");
            $('#pf1next').css("visibility","hidden");
        }
        if((b >=107499) && (b < 114499)) {
            // pf2
            $('#pf2back').css("visibility","visible");
            $('#pf2next').css("visibility","visible");
        }
        else{
            $('#pf2back').css("visibility","hidden");
            $('#pf2next').css("visibility","hidden");
        }
        if((b >=137370) && (b < 144370)) {
            // pf3
            $('#pf3back').css("visibility","visible");
            $('#pf3next').css("visibility","visible");
        }
        else{
            $('#pf3back').css("visibility","hidden");
            $('#pf3next').css("visibility","hidden");
        }
        if((b >=163483) && (b < 170483)) {
            // pf4
            $('#pf4back').css("visibility","visible");
            $('#pf4next').css("visibility","visible");
        }
        else{
            $('#pf4back').css("visibility","hidden");
            $('#pf4next').css("visibility","hidden");
        }
        
        if((b >=186503) && (b < 193503)) {
            // pf5
            $('#pf5back').css("visibility","visible");
            $('#pf5next').css("visibility","visible");
        }
        else{
            $('#pf5back').css("visibility","hidden");
            $('#pf5next').css("visibility","hidden");
        }
        if((b >=204717) && (b < 211717)) {
            // pfmore
            $('#pfmback').css("visibility","visible");
            $('#pfmnext').css("visibility","visible");
        }
        else{
            $('#pfmback').css("visibility","hidden");
            $('#pfmnext').css("visibility","hidden");
        }

    });





    ///////////////////////////////////////////////////////////////////////////////

    // pf2 zerolab eye animation 

    var pf2m = document.querySelector('.pf2_monitor');
    var eye = document.querySelector('.pf2_eye');

    pf2m.addEventListener('mouseover', () => {
        eye.style.bottom = '0%'
        eye.style.left = '0%'
        eye.style.left = '0%'
        // eye.style.transition = "ease-in-out 0.2s";
        eye.style.transition = "0.3s ease-in-out 0.2s";
    });

    pf2m.addEventListener('mouseout',() => mouseout());

    function mouseout() {
        eye.style.bottom = '-44%'
        eye.style.left = '-26%'
    }

    /////////////////////////////////////////////////////////////////




    // pf3 mohenic intro


    //이미지 불러오기
    // for (i=0; i<=101; i++){
    //     $(".movie1").append("<img src='mohenic_sequence3/"+i.toString().padStart(3, '0')+".png'>");
    // }
    // $(".movie1 img:first").css({visibility:"visible"});

    // //애니메이션 시키기
    // var frameNum=0;
        
    // // var pf3m = document.querySelector('.pf3');
    // var pf3m = document.querySelector('.pf3_monitor');
    // // var pf3m = document.querySelector('.movie1');

    // var k1;
    // var k2;
    // var inc1;
    // var wy = window.scrollY;

    // pf3m.addEventListener('mouseover',() => {
    //     function aniNext1(){   
    //         var inc1 = frameNum++;

    //         $(".movie1 img").css({visibility:"hidden"});

    //         $(".movie1 img:eq("+inc1+")").css({visibility:"visible"});

    //         $(".movie1").animate(
    //             {center:101},
    //             2019.8,
    //             function(){
    //             clearInterval(k1);
    //         });
            
    //         console.log("inc1:"+inc1);
    //         console.log("mouseover")
    //         if(inc1 >=101){ //로딩이 완료되면
    //             clearInterval(k1); //setInterval종료					
    //             frameNum = 101;
    //         }
    //         else if (frameNum > 0) {
    //             clearInterval(k2); //mouseout 중 mouseover할때 mouseout, mouseover setInteval 충돌방지  
    //         }

    //         // window.addEventListener('scroll', function(e) {
    //         //     if(((wy <=121432) && (wy >= 146508))) {	
    //         //         inc1 = 0;
    //         //         frameNum = 0;
    //         //         console.log("inc1:"+inc1);
    //         //         console.log("frameNum:"+frameNum);
    //         //         // pf3m.removeEventListener('mouseover',() => {aniNext1();})
    //         //         pf3m.removeEventListener('mouseover', aniNext1);

    //         //     }   
    //         // }, {passive: false});   


    //     }
    //     var k1 = setInterval(aniNext1,12.5); //aniNext1 함수 실행

    //     // window.addEventListener('scroll', function(e) {

    //     //     var wy = window.scrollY;
    //     //     if(((wy <=121432) && (wy >= 146508))) {	
    //     //         inc1 = 0;
    //     //         frameNum = 0;
    //     //         console.log("inc1:"+inc1);
    //     //         console.log("frameNum:"+frameNum);
    //     //         // pf3m.removeEventListener('mouseover',() => {aniNext1();})
    //     //         pf3m.removeEventListener('mouseover', aniNext1);

    //     //     }   

    //     // }, {passive: false});   
        
        
    



    // });

    // var k1;
    // var k2;
    // var inc2;
    //     pf3m.addEventListener('mouseout',() => aniBack1());
    //     function aniBack1() {
    //             let inc2 = frameNum--;

    //             $(".movie1 img").css({visibility:"hidden"});

    //             $(".movie1 img:eq("+inc2+")").css({visibility:"visible"});

    //             $(".movie1").animate(
    //                 {center:101},
    //                 1000,
    //                 function(){
    //                 clearInterval(k2);
    //             }
    //             );

    //             console.log("inc2:"+inc2);
    //                 console.log("mouseout")
    //             if(inc2 >= 101){
    //                 // k2 = setInterval(aniBack1,12.5); //setInterval종료
    //                 k2 = setInterval(aniBack1,14.5); //setInterval종료
    //                 clearInterval(k1);
    //             }

    //             else if (inc2 <= 0 ) {
    //                 frameNum = 0;
    //                 if( inc2 == 0){
    //                     console.log("minor")
    //                     clearInterval(k2);
    //                 }
    //             }
    
    //         }
    //         var k2 = setInterval(aniBack1,12.5)
            // window.addEventListener('scroll', function(e) {

            //     var sY = window.scrollY;
            //     if((sY >= 146508)) {	
            //         // inc2 = 0;
            //         frameNum = 0;
            //     }   

            // }, {passive: false});    


    ////////////////////////////////////////////////////////////////////////////////////////////////

    // pf4 happysocks intro

    var pf4p = document.querySelector('.pf4_iphone');
    var wbox1 = document.querySelector('.ypaint_hide1');
    var wbox2 = document.querySelector('.ypaint_hide2');
    var pf4subp = document.querySelector('.pf4_subp');
    var smile = document.querySelector('.smile');
    var smile2p = document.querySelector('.cls-3');
    var smile2 = document.querySelector('#smile2');
    var blind= document.querySelector('.blind');

    pf4p.addEventListener('mouseover', () => {
        wbox1.style.left = '100%'
        wbox2.style.left = '100%'
        wbox1.style.transition = "0.35s ease-out 0.28s";
        wbox2.style.transition = "0.6s ease-out 0.4s";
        pf4subp.style.opacity = '0.7';
        pf4subp.style.transition = "0.6s ease-out 0.38s";
        smile.style.transition = "0.5s ease-out 0.38s";
        smile2.style.animation = "growsmile 1.5s ease-in-out";
        smile.style.top = '35.7%'

    });

    pf4p.addEventListener('mouseout',() => pf4_mouseout());

    function pf4_mouseout() {
        wbox1.style.left = '16%'
        wbox2.style.left = '16%'
        pf4subp.style.opacity = '0.3';
        wbox1.style.transition = "0.45s ease-out 0.35s";
        wbox2.style.transition = "0.6s ease-out 0.6s";
        smile.style.transition = "0.35s ease-out 0.24s";
        smile2.style.animation = "backsmile 0.9s ease-in-out";
        smile.style.top = '46.2%'

    }





    //////////////////////////////////////////////////////////

    // pf_more

    var pfmore = document.querySelector('.pf_more_iphone');
    var pfmore_img = document.querySelector('.pf_more_img');
    


    pfmore.addEventListener('mouseover', () => {
        pfmore_img.src="images/more_view.gif"
    });

    pfmore.addEventListener('mouseout',() => pf_more_mouseout());

    function pf_more_mouseout() {
        pfmore_img.src="images/more_bg.png"
    }


    //////////////////////////////////////////////////////////


    let hfm_toggle = "0";

    $(".hfm_btn").click(function(){//버튼을 클릭했을 때
        
        
        if (hfm_toggle == "0") {
            hfm_toggle = "1";

            $(".hfm_list").css('display','block');

            $("http, body").click(function(e){//버튼을 클릭했을 때
                var c_target = $(e.target).parent().attr("class");
                var menu_hide = $(e.target).attr("class");
                if(c_target != $(".hfm_btn").attr("class")){
                    hfm_toggle = "0";
                    $(".hfm_list").css('display','none');
                }
                if(c_target == $(".hfm_list").attr("class")){
                    hfm_toggle = "1";
                    $(".hfm_list").css('display','block');
                }
                if (menu_hide == $(".menu_hide").attr("class")) {
                    hfm_toggle = "0";
                    $(".hfm_list").css('display','none');
                }


                
                console.log("c_target: "+c_target);
            });
        }
        else{
            hfm_toggle = "0";
            $(".hfm_list").css('display','none');
        }



    });

    $(".menu_hide").click(function(){//버튼을 클릭했을 때

        let mdh_toggle = "0";
        
        $(".hfm_list").toggle();
        $('header').animate({ top:"-10vh"},1000); 
        $('footer').animate({ bottom:"-10vh"},1000); 
        $('.mbh_h').css('display','block');
        $('.mbh_f').css('display','block');
        $('header').animate({ top:"-10vh"},1000); 
        $('footer').animate({ bottom:"-10vh"},1000);

    });


    $('.mbh_f').on('mouseover', () => {
        $('header').animate({ top:"0vh"},1000); 
        $('footer').animate({ bottom:"0vh"},1000); 
    });


    // //////////////////////////////////////////////////////////


    // darkmode


    let toggle = "0";

    $(".darkmode").click(function(){//버튼을 클릭했을 때
        if(toggle=="0"){
        toggle = "1";
        $("body").css("background","black");
        $("body").css("background-color","black");
        $("header").css({filter: "invert(100)"}); 
        $("footer").css({filter: "invert(100)"});
        $(".home").css("background-color","black");
        $(".home h2").css("color","white");
        $(".home .sec1 .visual img").css({filter: "invert(100)"});
        $(".home .sec1 .typo h3").css("color","white");
        $(".home .sec1 .typo p").css('color','rgba(255,255,255,0.4)');
        $(".portfolio").css("background-color","black");
        $(".sec2 .typo2 h3").css("color","white");
        $(".sec2 .typo2 p").css('color','rgba(255,255,255,0.4)');
        $(".sec2 .typo2 .d1").css("background-color","white");
        $(".sec2 .typo2 .d2").css("background-color","white");
        $(".sec2 .typo2 .d3").css("background-color","white");
        $(".sec2 .typo2 .d4").css("background-color","white");
        $(".sec2 .typo2 .d5").css('background-color','rgba(255,255,255,0.4)');
        $(".sec2 .typo2 .d6").css('background-color','rgba(255,255,255,0.4)');
        $(".bkbox").css("background-color","white");
        $("#screen").css({filter: "invert(100)"});
        $("#pf1back").css("color","white");
        $("#pf2back").css("color","white");
        $("#pf3back").css("color","white");
        $("#pf4back").css("color","white");
        $("#pf5back").css("color","white");
        $("#pfmback").css("color","white");
        $("#pf1next").css("color","white");
        $("#pf2next").css("color","white");
        $("#pf3next").css("color","white");
        $("#pf4next").css("color","white");
        $("#pf5next").css("color","white");
        $("#pfmnext").css("color","white");
        $(".eye_hide1").css("background-color","black");
        $(".eye_hide2").css("background-color","black");
        $(".pf4 .pf4_bg .ypaint_hide3").css("background-color","black");
        $("#screen2").css({filter: "invert(100)"});
        $(".pop_h").css({filter: "invert(100)"});
        $(".pop_f").css({filter: "invert(100)"});
        $(".hfm_list li").css({filter: "invert(100)"});
        $(".pop_h_inner h3").css('font-weight', "400");  
        $(".close").css('font-weight', "400");  
        $(".pop_f_inner ").css('font-weight', "400");  
        $(".darkmode").text('Dark mode on');
        
        }
        else{
        toggle = "0";
        $("body").css("background","white");
        $("body").css("background-color","white");
        $("header").css({filter: "invert(0)"}); 
        $("footer").css({filter: "invert(0)"});
        $(".home").css("background-color","white");
        $(".home h2").css("color","black");
        $(".home .sec1 .visual img").css({filter: "invert(0)"});
        $(".home .sec1 .typo h3").css("color","black");
        $(".home .sec1 .typo p").css('color','rgba(0,0,0,0.4)');
        $(".portfolio").css("background-color","white");
        $(".sec2 .typo2 h3 ").css("color","black");
        $(".sec2 .typo2 p").css('color','rgba(0,0,0,0.4)');
        $(".sec2 .typo2 .d1").css("background-color","black");
        $(".sec2 .typo2 .d2").css("background-color","black");
        $(".sec2 .typo2 .d3").css("background-color","black");
        $(".sec2 .typo2 .d4").css("background-color","black");
        $(".sec2 .typo2 .d5").css('background-color','rgba(0,0,0,0.4)');
        $(".sec2 .typo2 .d6").css('background-color','rgba(0,0,0,0.4)');
        $(".bkbox").css("background-color","black");
        $("#screen").css({filter: "invert(0)"});
        $("#pf1back").css("color","black");
        $("#pf2back").css("color","black");
        $("#pf3back").css("color","black");
        $("#pf4back").css("color","black");
        $("#pf5back").css("color","black");
        $("#pfmback").css("color","black");
        $("#pf1next").css("color","black");
        $("#pf2next").css("color","black");
        $("#pf3next").css("color","black");
        $("#pf4next").css("color","black");
        $("#pf5next").css("color","black");
        $("#pfmnext").css("color","black");
        $(".eye_hide1").css("background-color","white");
        $(".eye_hide2").css("background-color","white");
        $(".pf4 .pf4_bg .ypaint_hide3").css("background-color","white");
        $("#screen2").css({filter: "invert(0)"});
        $(".pop_h").css({filter: "invert(0)"});
        $(".pop_f").css({filter: "invert(0)"});
        $(".hfm_list li").css({filter: "invert(0)"});
        $(".darkmode").text('Dark mode off');
        $(".pop_h_inner h3").css('font-weight', "300");  
        $(".close").css('font-weight', "300");  
        $(".pop_h_inner").css('font-weight', "300");  
        }
    });


    /////////////////////////////////////////////////////////


    //popup

    // const targetElement = document.querySelector('.pop');
    // var position = $(".pop").offset().top;



    var position = $('.menu').parent().next().offset().top;

    $('.menu').click(function menu() {
        $(this).parent().next().fadeIn(300);
        $('header').css('display','none');
        $('header').css({visibility:"hidden"});
        $('footer').css('display','none');
        $('footer').css({visibility:"hidden"});
        $('html,body').css("overflow", "hidden");

        $('.mbh_h').css('display','none');
        $('.mbh_f').css('display','none');

        position = $(this).parent().next().offset().top;
        console.log("position: "+position);

        $('.pop').animate({ scrollTop:0},0); return false;

    });


    $('.close').click(function () {
        $('.pop').fadeOut(100);
        // $('.pop').css('display','none');
        $('.header').css('display','block');
        $('.header').css({visibility:"visible"});
        $('footer').css('display','block');
        $('footer').css({visibility:"visible"});
        $('html,body').animate({ scrollTop:position},0); 
        $('html,body').css("overflow", "auto");

        $('.mbh_f').css('display','block');
        
        console.log("position: "+position);

        $('.pop').animate({ scrollTop:0},0); return false;


    });

    $(".pop .pop_h_inner h3").click(function(){
        $('.pop').animate({ scrollTop:0},2100); return false;
    })





    /////////////////////////////////////////////////////////

    // sound

    // var scroll =new AudioFade('#scrollsound', 8000).init();

    var audio = new Audio('sound/JJ_pf_beat.mp3');
    

    $('#bgmstart').click(function () {
        $('.startpop').fadeOut(100);
        // $('.pop').css('display','none');
        $('.header').css('display','block');
        $('.header').css({visibility:"visible"});
        $('footer').css('display','block');
        $('footer').css({visibility:"visible"});
        $('html,body').animate({ scrollTop:position},0); 
        $('html,body').css("overflow", "auto");
        $("section").fadeIn(2000); 

        $('body').css({overflow:"auto"});//body스크롤없앰}
        $('body').css({position:"static"});

        $(".sound_toggle").text('Sound on');
        // $('.darkmode').click();

        audio.play();
        audio.autoplay = true;
        // audio.currentTime = 20;
        audio.loop = true;
        audio.volume = 0.5;

        let sound_toggle = "0";

        $(".sound_toggle").click(function(){//버튼을 클릭했을 때
            if(sound_toggle=="0"){
                sound_toggle = "1";
                audio.pause();
                $(".sound_toggle").text('Sound off');
            }
            else{
                sound_toggle = "0"; 
                audio.play();
                audio.autoplay = true;
                audio.loop = true;
                audio.volume = 0.5;
                $(".sound_toggle").text('Sound on');
            }
        });
    });
    

    $('#closepop').click(function () {
        $('.startpop').fadeOut(100);
        // $('.pop').css('display','none');
        $('.header').css('display','block');
        $('.header').css({visibility:"visible"});
        $('footer').css('display','block');
        $('footer').css({visibility:"visible"});
        $('html,body').animate({ scrollTop:position},0); 
        $('html,body').css("overflow", "auto");
        $("section").fadeIn(2000); 

        $('body').css({overflow:"auto"});//body스크롤없앰}
        $('body').css({position:"static"});

        $(".sound_toggle").text('Sound off');

        let sound_toggle = "0";

        $(".sound_toggle").click(function(){//버튼을 클릭했을 때
            if(sound_toggle=="0"){
                sound_toggle = "1";
                audio.play();
                audio.autoplay = true;
                audio.loop = true;
                audio.volume = 0.5;
                $(".sound_toggle").text('Sound on');
            }
            else{
                sound_toggle = "0"; 
                audio.pause();
                $(".sound_toggle").text('Sound off');
            }
        });

        // $('.darkmode').click();
    });


    /////////////////////////////////////////////////////////

    // more perspective click animation

    // $(".more").click(function(){//버튼을 클릭했을 때
    //     $('#pfmback').css('display','none');
    //     $('#pfmnext').css('display','none');
    //     $('header').animate({ top:"-10vh"},500); 
    //     $('footer').animate({ bottom:"-10vh"},500); 

    //     var frameNumm = 0;
    //     var targetFN = 0;

    //     function incZ(){
    //         frameNumm = Math.floor(frameNumm+1);
            
    //         // frameNumm = frameNumm + 1*(targetFN - frameNumm); 
    //         $(".pf_more_iphone").css({"transform":"translateZ("+frameNumm+"vw)"});
    //         $(".pf_more_img").css({"transform":"translateZ("+frameNumm+"vw)"});
    //         if(frameNumm > 398){
    //             clearInterval(expz);
    //         }
    //         console.log("frameNumm:"+frameNumm);
    //     }
    //     var expz = setInterval(incZ,1);

        // function incZ(){
        //     frameNumm = Math.floor(frameNumm+1);
            
        //     frameNumm = frameNumm + 1*(targetFN - frameNumm); 
        //     $(".pf_more_iphone").animation = "phgrow 1.5s ease-in-out";
        //     $(".pf_more_img").animation = "congrow 1.5s ease-in-out";
        //     console.log("frameNumm:"+frameNumm);
        // }
        // var expz = setInterval(incZ,1);

    // });

    var more = document.querySelector('.more');
    var pfmback = document.querySelector('#pfmback');
    var pfmnext = document.querySelector('#pfmnext');

    var morephone = document.querySelector('.pf_more_iphone');
    var moreplus = document.querySelector('.pf_more_img');

    var header = document.querySelector('header');
    var footer = document.querySelector('footer');


    more.addEventListener('click', () => {

        pfmback.style.display='none'
        pfmnext.style.display='none'
        morephone.style.animation = "phgrow 1.0s ease-in-out";
        morephone.style.animationFillMode = "forwards";
        moreplus.style.animation = "congrow 1.1s ease-in-out";
        moreplus.style.animationFillMode = "forwards";

        header.style.animation = "header_ani 0.5s ease-in-out";
        header.style.animationFillMode = "forwards";
        footer.style.animation = "footer_ani 0.5s ease-in-out";
        footer.style.animationFillMode = "forwards";

    });



});
