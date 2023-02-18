

$(function(){
    // header mousewheel
    $("header .inner .logo").click(function(e){
                $('html,body').animate({ scrollTop:0},2100); 
                e.preventDefault();
    })
    $("header .inner ul li:eq(0) a, h1 a").click(function(e){
            $('html,body').animate({ scrollTop:0},2100);
            e.preventDefault(); 
    })
    $("header .inner ul li:eq(1) a").click(function(e){
            $('html,body').animate({ scrollTop:14775},2100);
            e.preventDefault();
    })
    $("header .inner ul li:eq(2) a").click(function(e){
            $('html,body').animate({ scrollTop:63996},2100);
            e.preventDefault(); 
    })
    $("header .inner ul li:eq(3) a").click(function(e){
            $('html,body').animate({ scrollTop:218740},2100);
            e.preventDefault(); 
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

    $("#pf1back").click(function(e){
                $('html,body').animate({ scrollTop:63996},2100);
                e.preventDefault(); 	    
    })
    $("#pf1next").click(function(e){   
                $('html,body').animate({ scrollTop:107499},2100);
                e.preventDefault(); 
    })
    $("#pf2back").click(function(e){
                $('html,body').animate({ scrollTop:87999},2100);
                e.preventDefault(); 	    
    })
    $("#pf2next").click(function(e){   
                $('html,body').animate({ scrollTop:137370},2100);
                e.preventDefault(); 
    })
    $("#pf3back").click(function(e){
                $('html,body').animate({ scrollTop:114495},2100);
                e.preventDefault(); 	    
    })
    $("#pf3next").click(function(e){   
                $('html,body').animate({ scrollTop:165492},2100);
                e.preventDefault(); 
    })
    $("#pf4back").click(function(e){
                $('html,body').animate({ scrollTop:135999},2100);
                e.preventDefault(); 	    
    })
    $("#pf4next").click(function(e){   
                $('html,body').animate({ scrollTop:186503},2100);
                e.preventDefault(); 
    })
    $("#pf5back").click(function(e){
                $('html,body').animate({ scrollTop:170482},2100);
                e.preventDefault(); 	    
    })
    $("#pf5next").click(function(e){   
        $('html,body').animate({ scrollTop:204717},2100);
        e.preventDefault(); 
    })
    $("#pfmback").click(function(e){
                $('html,body').animate({ scrollTop:193502},2100);
                e.preventDefault(); 	    
    })
    $("#pfmnext").click(function(e){   
                $('html,body').animate({ scrollTop:218740},2100);
                e.preventDefault(); 
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
    var hover_runner = document.querySelector('.hover_runner');


    pfmore.addEventListener('mouseover', () => {
        // pfmore_img.src="images/more_view.gif"
        hover_runner.style.display = 'block'
    });

    pfmore.addEventListener('mouseout',() => pf_more_mouseout());

    function pf_more_mouseout() {
        // pfmore_img.src="images/more_bg.png"
        hover_runner.style.display = 'none'
    }


    //////////////////////////////////////////////////////////


    let hfm_toggle = "0";

    $(".hfm_btn").click(function(){//버튼을 클릭했을 때
        
        
        if (hfm_toggle == "0") {
            hfm_toggle = "1";

            $(".hfm_list").css('display','block');

            $("html, body").click(function(e){//버튼을 클릭했을 때
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

                e.preventDefault();
                
                console.log("c_target: "+c_target);
            });
        }
        else{
            hfm_toggle = "0";
            $(".hfm_list").css('display','none');
        }



    });

    let mdh_toggle = "0";

    $(".menu_hide").click(function(){//버튼을 클릭했을 때

        mdh_toggle = "1";
        
        $(".hfm_list").toggle();
        $('header').animate({ top:"-10vh"},1000); 
        $('footer').animate({ bottom:"-10vh"},1000); 
        $('.mbh_h').css('display','block');
        $('.mbh_f').css('display','block');
        $('header').animate({ top:"-10vh"},1000); 
        $('footer').animate({ bottom:"-10vh"},1000);

    });


    $('.mbh_f').on('mouseover', () => {

        mdh_toggle = "0";

        $('header').animate({ top:"0vh"},1000); 
        $('footer').animate({ bottom:"0vh"},1000); 
    });


    // //////////////////////////////////////////////////////////


    // darkmode


    let toggle = "0";

    $(".darkmode").click(function(e){//버튼을 클릭했을 때

        var id_target = $(e.target).attr("id");

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

        $(".pfmore_bg").css("background-color","black");
        $(".pf_more_img").css({filter: "invert(100)"});
        $(".hover_runner").css({filter: "invert(100)"});

            // if(id_target != $(".pop_darkmode").attr("id")){
            //     toggle = "1";
            //     $(".darkmode").text('Dark mode on');
            // }
            // else{
            //     toggle = "0";
            //     $(".pop_darkmode a").append("<img src='images/contrast.svg' alt='contrast'>");
            // }
        
            // console.log("id_target: "+id_target);

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
        $(".pop_h_inner h3").css('font-weight', "300");  
        $(".close").css('font-weight', "300");  
        $(".pop_h_inner").css('font-weight', "300");  
        $(".darkmode").text('Dark mode off');

        $(".pfmore_bg").css("background-color","white");
        $(".pf_more_img").css({filter: "invert(0)"});
        $(".hover_runner").css({filter: "invert(0)"});

            // if(id_target != $(".pop_darkmode").attr("id")){
            //     toggle = "0";
            //     $(".darkmode").text('Dark mode off');
            // }
            // else{
            //     toggle = "1";
            //     $(".pop_darkmode a").append("<img src='images/contrast.svg' alt='contrast'>");
            // }
        
            // console.log("id_target: "+id_target);
        }
    });

    $(".pop_darkmode").click(function(e){//버튼을 클릭했을 때

        e.preventDefault();

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

            $(".pfmore_bg").css("background-color","black");
            $(".pf_more_img").css({filter: "invert(100)"});
            $(".hover_runner").css({filter: "invert(100)"});
            
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
            $(".pop_h_inner h3").css('font-weight', "300");  
            $(".close").css('font-weight', "300");  
            $(".pop_h_inner").css('font-weight', "300");  
            $(".darkmode").text('Dark mode off');

            $(".pfmore_bg").css("background-color","white");
            $(".pf_more_img").css({filter: "invert(0)"});
            $(".hover_runner").css({filter: "invert(0)"});
    
        }

    });


    /////////////////////////////////////////////////////////


    //popup

    // const targetElement = document.querySelector('.pop');
    // var position = $(".pop").offset().top;



    var position = $('.menu').parent().next().offset().top;

    $('.menu').click(function menu(e) {
        $(this).parent().next().fadeIn(1000);
        $('header').css('display','none');
        $('header').css({visibility:"hidden"});
        $('footer').css('display','none');
        $('footer').css({visibility:"hidden"});
        $('html,body').css("overflow", "hidden");

        $('.mbh_h').css('display','none');
        $('.mbh_f').css('display','none');

        $(".hfm_list").css('display','none');

        position = $(this).parent().next().offset().top;
        console.log("position: "+position);

        e.preventDefault();

        $('.pop').animate({ scrollTop:0},0); 
        $('.pop').stop(false,true);

    });


    $('.close').click(function (e) {
        $('.pop').fadeOut(100);
        // $('.pop').css('display','none');
        $('.header').css('display','block');
        $('.header').css({visibility:"visible"});
        $('footer').css('display','block');
        $('footer').css({visibility:"visible"});
        $('html,body').animate({ scrollTop:position},0); 
        $('html,body').css("overflow", "auto");

        $('.mbh_f').css('display','block');
        
        $(".hfm_list").css('display','none');

        e.preventDefault();

        console.log("position: "+position);

        $('.pop').animate({ scrollTop:0},0); 


    });

    let sct_ani = "0"; 
    

    $(".pop .pop_h_inner h3").click(function(){
        $('.pop').animate({ scrollTop:0},700,"swing"); 
        $('.pop').css("scroll-snap-type", "none");
        sct_ani = "1";

    })

    // h3 클릭 시, scrollTop 애니메이션 충돌 방지
    $(".pop").on("mousewheel",function(e,delta) {

        if(delta < 0) { //휠을 아래로 돌렸을때
            console.log("sheet num: "+delta);
            $(".pop").stop();
            $('.pop').css("scroll-snap-type", "y mandatory");
            sct_ani = "1";
        } 
        else { //휠을 위로 돌렸을때
            console.log("sheet num: "+delta);
            $('.pop').css("scroll-snap-type", "y mandatory");
            $(".pop").stop();
            sct_ani = "1";
        }
    });



    /////////////////////////////////////////////////////////

    // sound

    // var scroll =new AudioFade('#scrollsound', 8000).init();

    var audio = new Audio('sound/JJ_pf_beat.mp3');

    let sound_toggle = "0";



    let bgmst = document.querySelector('#bgmstart');
    let sdwave = document.querySelector('.soundwave');

    bgmst.addEventListener('click', () => {
        // sdwave.addEventListener("play", () => {
        //     console.log("bgmstart");
        // });
        sdwave.play();
    });


    

    $('#bgmstart').click(function () {

        

        sound_toggle = "0"; 

        $('.soundwave').delay(1500).fadeOut(100)
        $('.startpop').delay(2000).fadeOut(100);
        $('.bgm_info h3 ').fadeOut(500);

        $('.cursor ').fadeOut(500);
        $('.cursor ').delay(2000).fadeIn(500);
        // $('.cursor ').delay(2000).css('display','block');
        $('.btwrap').fadeOut(500);
        // $('.pop').css('display','none');
        // $('.header').delay(2000).css('display','block');
        $('.header').delay(1000).css({visibility:"visible"});
        // $('footer').delay(2000).css('display','block');
        $('footer').delay(1000).css({visibility:"visible"});
        $('.header').delay(1000).fadeIn(100); 
        $('footer').delay(1000).fadeIn(100); 

        $('html,body').delay(2000).animate({ scrollTop:position},0); 
        $('html,body').delay(2000).css("overflow", "auto");
        $("section").delay(2000).fadeIn(3500); 

        $('body').delay(2000).css({overflow:"auto"});//body스크롤없앰}
        $('body').delay(2000).css({position:"static"});

        $(".sound_toggle").text('Sound on');
        $(".pop_sound_toggle img").attr("src","images/volume.svg");
        // $('.darkmode').click();

        audio.play();
        audio.autoplay = true;
        // audio.currentTime = 20;
        audio.loop = true;
        audio.volume = 0.5;

        // let sound_toggle = "0";

        // $(".sound_toggle").click(function(){//버튼을 클릭했을 때
        //     if(sound_toggle=="0"){
        //         sound_toggle = "1";
        //         audio.pause();
        //         $(".sound_toggle").text('Sound off');
        //         $(".pop_sound_toggle img").attr("src","images/volume_mute.svg");
        //     }
        //     else{
        //         sound_toggle = "0"; 
        //         audio.play();
        //         audio.autoplay = true;
        //         audio.loop = true;
        //         audio.volume = 0.5;
        //         $(".sound_toggle").text('Sound on');
        //         $(".pop_sound_toggle img").attr("src","images/volume.svg");
        //     }
        // });



        

    });


    $(".sound_toggle").click(function(){//버튼을 클릭했을 때
        if(sound_toggle=="0"){
            sound_toggle = "1";
            audio.pause();
            $(".sound_toggle").text('Sound off');
            $(".pop_sound_toggle img").attr("src","images/volume_mute.svg");
        }
        else{
            sound_toggle = "0"; 
            audio.play();
            audio.autoplay = true;
            audio.loop = true;
            audio.volume = 0.5;
            $(".sound_toggle").text('Sound on');
            $(".pop_sound_toggle img").attr("src","images/volume.svg");
        }
    });
    

    $('#closepop').click(function () {

        sound_toggle = "1"; 

        $('.soundwave').fadeOut(50)
        $('.startpop').delay(500).fadeOut(100);
        // $('.pop').css('display','none');

        $('.bgm_info h3 ').fadeOut(500);
        $('.btwrap').fadeOut(500);

        $('.header').css('display','block');
        $('.header').css({visibility:"visible"});
        $('footer').css('display','block');
        $('footer').css({visibility:"visible"});
        $('html,body').animate({ scrollTop:position},0); 
        $('html,body').css("overflow", "auto");
        $("section").fadeIn(4500); 

        $('body').css({overflow:"auto"});//body스크롤없앰}
        $('body').css({position:"static"});

        $(".sound_toggle").text('Sound off');
        $(".pop_sound_toggle img").attr("src","images/volume_mute.svg");


        // $(".sound_toggle").click(function(){//버튼을 클릭했을 때
        //     if(sound_toggle=="0"){
        //         sound_toggle = "1";
        //         audio.play();
        //         audio.autoplay = true;
        //         audio.loop = true;
        //         audio.volume = 0.5;
        //         $(".sound_toggle").text('Sound on');
        //         $(".pop_sound_toggle img").attr("src","images/volume.svg");
        //     }
        //     else{
        //         sound_toggle = "0"; 
        //         audio.pause();
        //         $(".sound_toggle").text('Sound off');
        //         $(".pop_sound_toggle img").attr("src","images/volume_mute.svg");
        //     }
        // });

        // $('.darkmode').click();
    });


    $(".pop_sound_toggle").click(function(){//버튼을 클릭했을 때

        
        if(sound_toggle=="0"){
            sound_toggle = "1";
            audio.pause();
            $(".pop_sound_toggle img").attr("src","images/volume_mute.svg");
            $(".sound_toggle").text('Sound off');
        }
        else{
            sound_toggle = "0"; 
            audio.play();
            audio.autoplay = true;
            audio.loop = true;
            audio.volume = 0.5;
            $(".pop_sound_toggle img").attr("src","images/volume.svg");
            $(".sound_toggle").text('Sound on');
        }
        
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

    var hover_runner = document.querySelector('.hover_runner');


    

    more.addEventListener('click', () => {

        // e.preventDefault();

        pfmback.style.display='none'
        pfmnext.style.display='none'
        morephone.style.animation = "phgrow 1.0s ease-in-out";
        morephone.style.animationFillMode = "both";
        moreplus.style.animation = "congrow 1.15s ease-in-out";
        moreplus.style.animationFillMode = "both";

        // morephone.src="images/ph_stroke.png"
        // morephone.style.transition = "0.1s ease-out 0.1s";

        header.style.animation = "header_ani 0.5s ease-in-out";
        header.style.animationFillMode = "both";
        footer.style.animation = "footer_ani 0.5s ease-in-out";
        footer.style.animationFillMode = "both";

        hover_runner.style.opacity = '0';
        hover_runner.style.transition = "0.1s ease-out 0.1s";

        mouseCursor.style.opacity = '0';
        mouseCursor.style.transition = "0.1s ease-out 0.1s";


        if (mdh_toggle == "1") {
            header.style.display='none'
            footer.style.display='none'
        }

        setTimeout(() => {
            location.replace('overview.html') 
        }, 1500);

    });


    /////////////////////////////////////////////////////////

    // mouse cursor


    let mouseCursor = document.querySelector(".cursor");
    let mCursor = document.querySelector("#cursor"); 
    let allLinks = document.querySelectorAll("body a,button,li"); //링크
    // let hspan = document.querySelectorAll(".pf_ani span");
    let pf_nav = document.querySelectorAll("#pf-nav ul li");
    let pf_nav_click = document.querySelector("#pf-nav ul li span");
    let hspan = document.querySelector("span");

    // let pf_ani = document.querySelector(".pf_ani");
    let pf_ani = document.querySelectorAll(".pf_ani");

    let gebiscon = document.querySelectorAll(".gebiscon .sheet");
    let zerolab = document.querySelectorAll(".zerolab .sheet");
    

    let gebiscon_h = document.querySelector(".gebiscon .pop_h");
    let gebiscon_f = document.querySelector(".gebiscon .pop_f");

    let zerolab_h = document.querySelector(".zerolab .pop_h");
    let zerolab_f = document.querySelector(".zerolab .pop_f");

    let pop = document.querySelector(".pop");

    // let pf1 = document.querySelector(".pf1");
    // let pf2 = document.querySelector(".pf2");
    // let pf3 = document.querySelector(".pf3");
    // let pf4 = document.querySelector(".pf4");
    // let pf5 = document.querySelector(".pf5");
    // let pf_more = document.querySelector(".pf_more");

    let pf1b = document.querySelector("#pf1back");
    let pf1n = document.querySelector("#pf1next");
    let pf2b = document.querySelector("#pf2back");
    let pf2n = document.querySelector("#pf2next");
    let pf3b = document.querySelector("#pf3back");
    let pf3n = document.querySelector("#pf3next");
    let pf4b = document.querySelector("#pf4back");
    let pf4n = document.querySelector("#pf4next");
    let pf5b = document.querySelector("#pf5back");
    let pf5n = document.querySelector("#pf5next");
    let pfmb = document.querySelector("#pfmback");
    let pfmn = document.querySelector("#pfmnext");

    let eye_hide1 = document.querySelector(".eye_hide1");
    let eye_hide2 = document.querySelector(".eye_hide2");



    let ypaint_hide3 = document.querySelector(".ypaint_hide3");

    let pftotal = document.querySelector("html,body");
    //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
    function cursor(e) {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY - scrollY + "px";
    }

    let hover_toggle = "0";

    let pf_ani_toggle = "0";

    allLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "1";
            pf_ani_toggle = "0";
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "0";
            pf_ani_toggle = "0";
            
        });
    });

    for(var i = 0; i < 6; i++ ){
        pf_nav[i].addEventListener("mouseover", () => {
            mouseCursor.classList.remove("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "1";
        });

        // pf_nav[i].addEventListener("click", () => {
        //     pf_nav_click.classList.add("pf_nav_active");
        // });
    }

    // pf_nav_click.addEventListener("click", () => {
    //     pf_nav_click.classList.add("pf_nav_active");
    // });

    let ck_toggle = "0";


    // $('#pf-nav ul li:eq(0)').on('mouseover', () => {
    //     $('.pf-tooltip').style.transition = "0.3s ease-in-out 0.2s";
    //     $('.pf-tooltip').style.opacity = '1';
    // })

    $('#pf-nav ul li:eq(0)').click(function(e){
        $('html,body').animate({ scrollTop:86420},2100); 
        e.preventDefault();
        ck_toggle = "1";
    })
    $('#pf-nav ul li:eq(1)').click(function(e){
        $('html,body').animate({ scrollTop:107499},2100); 
        e.preventDefault();
        ck_toggle = "1";
    })
    $('#pf-nav ul li:eq(2)').click(function(e){
        $('html,body').animate({ scrollTop:137370},2100); 
        e.preventDefault();
        ck_toggle = "1";
    })
    $('#pf-nav ul li:eq(3)').click(function(e){
        $('html,body').animate({ scrollTop:163483},2100); 
        e.preventDefault();
        ck_toggle = "1";
    })
    $('#pf-nav ul li:eq(4)').click(function(e){
        $('html,body').animate({ scrollTop:186503},2100); 
        e.preventDefault();
        ck_toggle = "1";
    })
    $('#pf-nav ul li:eq(5)').click(function(e){
        $('html,body').animate({ scrollTop:204717},2100); 
        e.preventDefault();
        ck_toggle = "1";
    })


    $(window).scroll(function(){
        var b = $(document).scrollTop(); 
        if((b >=63996) && (b < 86420)) {
            $('#pf-nav ul li:eq(0) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').removeClass("pf_nav_active");
        }
        if((b >=86420) && (b < 91499)) {
            $('#pf-nav ul li:eq(0) span').addClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').removeClass("pf_nav_active");
        }
        if((b >=107499) && (b < 114499)) {
            $('#pf-nav ul li:eq(0) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').addClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').removeClass("pf_nav_active");

        }
        if((b >=137370) && (b < 144370)) {
            $('#pf-nav ul li:eq(0) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').addClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').removeClass("pf_nav_active");
        }
        if((b >=163483) && (b < 170483)) {
            $('#pf-nav ul li:eq(0) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').addClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').removeClass("pf_nav_active");
        }
        if((b >=186502) && (b < 193503)) {
            $('#pf-nav ul li:eq(0) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').addClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').removeClass("pf_nav_active");
        }
        if((b >=204717) && (b < 211717)) {
            $('#pf-nav ul li:eq(0) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(1) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(2) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(3) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(4) span').removeClass("pf_nav_active");
            $('#pf-nav ul li:eq(5) span').addClass("pf_nav_active");
        }
    });

    

    for(var i = 0; i < 6; i++ ){
        pf_ani[i].addEventListener("mouseover", () => {
            mouseCursor.classList.add("pf_cursor");
            // mouseCursor.classList.remove("cursor");
            mouseCursor.classList.add("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "1";

        });
        pf_ani[i].addEventListener("mouseleave", () => {
            // mouseCursor.classList.add("cursor");
            mouseCursor.classList.remove("pf_cursor");
            mouseCursor.classList.remove("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "0";
        });
    }




    pf1b.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    pf1n.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });

    pf2b.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    pf2n.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });


    eye_hide1.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.classList.remove("cursor-grow");
        // mouseCursor.style.cursor = "none";
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    eye_hide2.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.style.cursor = "none";
        mouseCursor.classList.remove("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    // eye_hide2.addEventListener("mouseover", () => {
    //     mouseCursor.style.cursor = "none";
    // });


    pf3b.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    pf3n.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });

    pf4b.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    pf4n.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";    
    });

    ypaint_hide3.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.classList.remove("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });

    pf5b.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    pf5n.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });

    pfmb.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });
    pfmn.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    });


    let pop_hover = "0";
    
    for(var i = 0; i < 6; i++ ){
        gebiscon[i].addEventListener("mouseover", () => {
            mouseCursor.classList.add("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            // hover_toggle = "1";
            pop_hover = "1";
        });
        
    }

    for(var i = 0; i < 6; i++ ){
        zerolab[i].addEventListener("mouseover", () => {
            mouseCursor.classList.add("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            // hover_toggle = "1";
            pop_hover = "1";
        });
        
    }

    
    gebiscon_h.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });
    gebiscon_f.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });

    zerolab_h.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });
    zerolab_f.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });


    pftotal.addEventListener("click", () => {
        mouseCursor.style.zIndex = "1100";
        mouseCursor.classList.add("click_ani");
        setTimeout(() => {
            mouseCursor.classList.remove("click_ani");
        }, 500);

        if(hover_toggle == "1"){
            mouseCursor.classList.remove("click_ani");
        }

        else{
            hover_toggle = "0";
            mouseCursor.classList.add("click_ani");
        }


    });


});
