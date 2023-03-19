

$(function(){

    var pf_hb = $("html,body");
    var pf_cr = $('#container');
    let m_hr = $('header');
    let m_hr_in = $('header .inner');
    let m_fr = $('footer');
    var logo = $('.logo');


    // JQ header evnet delegation nav

    function header_click(e){
        let h_elem = $(e.target)
        let h_elem_c = $(e.target).attr("class");

        if(h_elem_c == logo.attr("class")){
            h_elem_c = logo.parent().attr("class");
            h_elem = logo.parent();
        }

        // click event not working area control
        if(!h_elem.hasClass("h_btn")){
            h_elem = null;
            return
        }

        c_hide();
        c_quick();
        c_fi();

        function c_hide(){
            pf_cr.css('display','none');
        }

        function c_quick(){
            pf_hb.stop(false,true).scrollTop(h_elem.data('value'));
        }

        function c_fi(){
            pf_cr.delay(1000).fadeIn( 1000 );
        }

        console.log(h_elem_c);
        console.log(h_elem.data('value'));
    }

    m_hr.click(header_click);


    const hr_d1 = $('.hr_d1');
    const hr_d2 = $('.hr_d2');
    const hr_d3 = $('.hr_d3');
    const hr_d4 = $('.hr_d4');
    const hr_d5 = $('.hr_d5');
    const hr_d6 = $('.hr_d6');
    const hr_d7 = $('.hr_d7');
    const hr_d8 = $('.hr_d8');
    const hr_d9 = $('.hr_d9');
    const hr_d10 = $('.hr_d10');
    const hr_d11 = $('.hr_d11');
    const hr_d12 = $('.hr_d12');
    const hr_d13 = $('.hr_d13');


    $(window).scroll(function(){
        var b = $(document).scrollTop();
        skrollr.init();
        if((b >=0) && (b < 13284)) {
            hr_d1.css("visibility","visible");

            hr_d2.css("visibility","hidden");
            hr_d3.css("visibility","hidden");
            hr_d4.css("visibility","hidden");
            hr_d5.css("visibility","hidden");

            hr_d6.css("visibility","hidden");
            hr_d7.css("visibility","hidden");
            hr_d8.css("visibility","hidden");
            hr_d9.css("visibility","hidden");
            hr_d10.css("visibility","hidden");

            hr_d11.css("visibility","hidden");
            hr_d12.css("visibility","hidden");
            hr_d13.css("visibility","hidden");
        }
        else if((b >=14775) && (b < 53435)) {
            hr_d1.css("visibility","hidden");

            hr_d2.css("visibility","visible");
            hr_d3.css("visibility","visible");
            hr_d4.css("visibility","visible");
            hr_d5.css("visibility","visible");

            hr_d6.css("visibility","hidden");
            hr_d7.css("visibility","hidden");
            hr_d8.css("visibility","hidden");
            hr_d9.css("visibility","hidden");
            hr_d10.css("visibility","hidden");

            hr_d11.css("visibility","hidden");
            hr_d12.css("visibility","hidden");
            hr_d13.css("visibility","hidden");

        }
        else if((b >=63996) && (b < 202085)) {

            hr_d1.css("visibility","hidden");

            hr_d2.css("visibility","hidden");
            hr_d3.css("visibility","hidden");
            hr_d4.css("visibility","hidden");
            hr_d5.css("visibility","hidden");

            hr_d6.css("visibility","visible");
            hr_d7.css("visibility","visible");
            hr_d8.css("visibility","visible");
            hr_d9.css("visibility","visible");
            hr_d10.css("visibility","visible");

            hr_d11.css("visibility","hidden");
            hr_d12.css("visibility","hidden");
            hr_d13.css("visibility","hidden");

        }
        else if((b >=209507) && (b < 463831)) {

            hr_d1.css("visibility","hidden");
            hr_d2.css("visibility","hidden");
            hr_d3.css("visibility","hidden");
            hr_d4.css("visibility","hidden");
            hr_d5.css("visibility","hidden");

            hr_d6.css("visibility","hidden");
            hr_d7.css("visibility","hidden");
            hr_d8.css("visibility","hidden");
            hr_d9.css("visibility","hidden");
            hr_d10.css("visibility","hidden");

            hr_d11.css("visibility","visible");
            hr_d12.css("visibility","visible");
            hr_d13.css("visibility","visible");

        }
    });



    ///////////////////////////////////////////////////////////////////////////////
    // portfolio back & next

    var jq_pf1b = $("#pf1back")
    var jq_pf2b = $("#pf2back")
    var jq_pf3b = $("#pf3back")
    var jq_pf4b = $("#pf4back")
    var jq_pf5b = $("#pf5back")
    var jq_pfmb = $("#pfmback")

    var jq_pf1n = $("#pf1next")
    var jq_pf2n = $("#pf2next")
    var jq_pf3n = $("#pf3next")
    var jq_pf4n = $("#pf4next")
    var jq_pf5n = $("#pf5next")
    var jq_pfmn = $("#pfmnext")

    jq_pf1b.click(function(e){
                pf_hb.animate({ scrollTop:63996},1000);
                e.preventDefault(); 	    
    })
    jq_pf1n.click(function(e){   
                pf_hb.animate({ scrollTop:107499},1000);
                e.preventDefault(); 
    })
    jq_pf2b.click(function(e){
                pf_hb.animate({ scrollTop:87999},1000);
                e.preventDefault(); 	    
    })
    jq_pf2n.click(function(e){   
                pf_hb.animate({ scrollTop:137370},1000);
                e.preventDefault(); 
    })
    jq_pf3b.click(function(e){
                pf_hb.animate({ scrollTop:114495},1000);
                e.preventDefault(); 	    
    })
    jq_pf3n.click(function(e){   
                pf_hb.animate({ scrollTop:165492},1000);
                e.preventDefault(); 
    })
    jq_pf4b.click(function(e){
                pf_hb.animate({ scrollTop:135999},1000);
                e.preventDefault(); 	    
    })
    jq_pf4n.click(function(e){   
                pf_hb.animate({ scrollTop:186503},1000);
                e.preventDefault(); 
    })
    jq_pf5b.click(function(e){
                pf_hb.animate({ scrollTop:170482},1000);
                e.preventDefault(); 	    
    })
    jq_pf5n.click(function(e){   
        pf_hb.animate({ scrollTop:204717},1000);
        e.preventDefault(); 
    })
    jq_pfmb.click(function(e){
                pf_hb.animate({ scrollTop:193502},1000);
                e.preventDefault(); 	    
    })
    jq_pfmn.click(function(e){   
                pf_hb.animate({ scrollTop:218740},1000);
                e.preventDefault(); 
    })

    $(window).scroll(function(){
        var b = $(document).scrollTop(); 

        if((b >=86419) && (b < 91499)) { 
            // pf1
            jq_pf1b.css("visibility","visible");
            jq_pf1n.css("visibility","visible");

        }
        else{
            jq_pf1b.css("visibility","hidden");
            jq_pf1n.css("visibility","hidden");
        }
        if((b >=107499) && (b < 114499)) {
            // pf2
            jq_pf2b.css("visibility","visible");
            jq_pf2n.css("visibility","visible");
        }
        else{
            jq_pf2b.css("visibility","hidden");
            jq_pf2n.css("visibility","hidden");
        }
        if((b >=137370) && (b < 144370)) {
            // pf3
            jq_pf3b.css("visibility","visible");
            jq_pf3n.css("visibility","visible");
        }
        else{
            jq_pf3b.css("visibility","hidden");
            jq_pf3n.css("visibility","hidden");
        }
        if((b >=163483) && (b < 170483)) {
            // pf4
            jq_pf4b.css("visibility","visible");
            jq_pf4n.css("visibility","visible");
        }
        else{
            jq_pf4b.css("visibility","hidden");
            jq_pf4n.css("visibility","hidden");
        }
        
        if((b >=186503) && (b < 193503)) {
            // pf5
            jq_pf5b.css("visibility","visible");
            jq_pf5n.css("visibility","visible");
        }
        else{
            jq_pf5b.css("visibility","hidden");
            jq_pf5n.css("visibility","hidden");
        }
        if((b >=204717) && (b < 211717)) {
            // pfmore
            jq_pfmb.css("visibility","visible");
            jq_pfmn.css("visibility","visible");
        }
        else{
            jq_pfmb.css("visibility","hidden");
            jq_pfmn.css("visibility","hidden");
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
    let hfm_bt = $(".hfm_btn")
    let hfm_li = $(".hfm_list")
    let mn_h = $(".menu_hide")

    hfm_bt.click(function(){//버튼을 클릭했을 때
        
        
        if (hfm_toggle == "0") {
            hfm_toggle = "1";

            hfm_li.css('display','block');

            pf_hb.click(function(e){//버튼을 클릭했을 때
                var c_target = $(e.target).parent().attr("class");
                var menu_hide = $(e.target).attr("class");
                if(c_target != hfm_bt.attr("class")){
                    hfm_toggle = "0";
                    hfm_li.css('display','none');
                }
                if(c_target == hfm_li.attr("class")){
                    hfm_toggle = "1";
                    hfm_li.css('display','block');
                }
                if (menu_hide == mn_h.attr("class")) {
                    hfm_toggle = "0";
                    hfm_li.css('display','none');
                }

                e.preventDefault();
                
                console.log("c_target: "+c_target);
            });
        }
        else{
            hfm_toggle = "0";
            hfm_li.css('display','none');
        }



    });

    let mdh_toggle = "0";
    let mbh_h = $('.mbh_h');
    let mbh_f = $('.mbh_f');

    mn_h.click(function(){//버튼을 클릭했을 때

        mdh_toggle = "1";
        
        hfm_li.toggle();
        m_hr.animate({ top:"-10vh"},1000); 
        m_fr.animate({ bottom:"-10vh"},1000); 
        mbh_h.css('display','block');
        mbh_f.css('display','block');
        m_hr.animate({ top:"-10vh"},1000); 
        m_fr.animate({ bottom:"-10vh"},1000);

    });


    mbh_f.on('mouseover', () => {

        mdh_toggle = "0";

        m_hr.animate({ top:"0vh"},1000); 
        m_fr.animate({ bottom:"0vh"},1000); 
    });


    // //////////////////////////////////////////////////////////


    // darkmode


    let toggle = "0";
    let dkm = $(".darkmode");
    var pp = $('.pop');
    var p_dkm = $(".pop_darkmode");
    var p_h = $(".pop_h");
    var p_f = $(".pop_f");
    var sec_hm = $(".home");
    var sec_hm_h2 = $(".home h2");
    var sec1_vimg = $(".home .sec1 .visual img");
    var sec1_ty_h3 = $(".home .sec1 .typo h3");
    var sec1_ty_p =  $(".home .sec1 .typo p");
    var sec2_ty2_h3 = $(".sec2 .typo2 h3");
    var sec2_ty2_p = $(".sec2 .typo2 p");
    var sec2_ty2_d1 = $(".sec2 .typo2 .d1");
    var sec2_ty2_d2 = $(".sec2 .typo2 .d2");
    var sec2_ty2_d3 = $(".sec2 .typo2 .d3");
    var sec2_ty2_d4 = $(".sec2 .typo2 .d4");
    var sec2_ty2_d5 = $(".sec2 .typo2 .d5");
    var sec2_ty2_d6 = $(".sec2 .typo2 .d6");
    var m_pf =  $(".portfolio");
    var bkb = $(".bkbox");
    var sc1 = $("#screen");
    var sc2 = $("#screen2");
    var eh_1 = $(".eye_hide1");
    var eh_2 = $(".eye_hide2");
    var pf4_yh3= $(".pf4 .pf4_bg .ypaint_hide3");
    var hfm_lt_li = $(".hfm_list li");
    var ph_in = $(".pop_h_inner");
    var ph_in_h3 = $(".pop_h_inner h3");
    var pf_in = $(".pop_f_inner");
    var ce = $(".close");
    var pfm_bg = $(".pfmore_bg");
    var pfm_img = $(".pf_more_img");
    var hr_rn = $(".hover_runner");
    var skr_by = $("#skrollr-body");







    dkm.click(function(e){//버튼을 클릭했을 때

        var id_target = $(e.target).attr("id");

        if(toggle=="0"){

            toggle = "1";
            pf_hb.css("background","black");
            pf_hb.css("background-color","black");
            skr_by.css("background","black");
            m_hr.css({filter: "invert(100)"}); 
            m_fr.css({filter: "invert(100)"});
            sec_hm.css("background-color","black");
            sec_hm_h2.css("color","white");
            sec1_vimg.css({filter: "invert(100)"});
            sec1_ty_h3.css("color","white");
            sec1_ty_p.css('color','rgba(255,255,255,0.4)');
            m_pf.css("background-color","black");
            sec2_ty2_h3.css("color","white");
            sec2_ty2_p.css('color','rgba(255,255,255,0.4)');
            sec2_ty2_d1.css("background-color","white");
            sec2_ty2_d2.css("background-color","white");
            sec2_ty2_d3.css("background-color","white");
            sec2_ty2_d4.css("background-color","white");
            sec2_ty2_d5.css('background-color','rgba(255,255,255,0.4)');
            sec2_ty2_d6.css('background-color','rgba(255,255,255,0.4)');
            bkb.css("background-color","white");
            sc1.css({filter: "invert(100)"});
            jq_pf1b.css("color","white");
            jq_pf2b.css("color","white");
            jq_pf3b.css("color","white");
            jq_pf4b.css("color","white");
            jq_pf5b.css("color","white");
            jq_pfmb.css("color","white");
            jq_pf1n.css("color","white");
            jq_pf2n.css("color","white");
            jq_pf3n.css("color","white");
            jq_pf4n.css("color","white");
            jq_pf5n.css("color","white");
            jq_pfmn.css("color","white");
            eh_1.css("background-color","black");
            eh_2.css("background-color","black");
            pf4_yh3.css("background-color","black");
            sc2.css({filter: "invert(100)"});
            p_h.css({filter: "invert(100)"});
            p_f.css({filter: "invert(100)"});
            hfm_lt_li.css({filter: "invert(100)"});
            ph_in_h3.css('font-weight', "400");  
            ce.css('font-weight', "400");  
            pf_in.css('font-weight', "400");  
            dkm.text('Dark mode on');

            pfm_bg.css("background-color","black");
            pfm_img.css({filter: "invert(100)"});
            hr_rn.css({filter: "invert(100)"});

            // if(id_target != p_dkm.attr("id")){
            //     toggle = "1";
            //     dkm.text('Dark mode on');
            // }
            // else{
            //     toggle = "0";
            //     $(".pop_darkmode a").append("<img src='images/contrast.svg' alt='contrast'>");
            // }
        
            // console.log("id_target: "+id_target);

        }
        else{
            toggle = "0";
            pf_hb.css("background","white");
            pf_hb.css("background-color","white");
            skr_by.css("background","white");
            m_hr.css({filter: "invert(0)"}); 
            m_fr.css({filter: "invert(0)"});
            sec_hm.css("background-color","white");
            sec_hm_h2.css("color","black");
            sec1_vimg.css({filter: "invert(0)"});
            sec1_ty_h3.css("color","black");
            sec1_ty_p.css('color','rgba(0,0,0,0.4)');
            m_pf.css("background-color","white");
            sec2_ty2_h3.css("color","black");
            sec2_ty2_p.css('color','rgba(0,0,0,0.4)');
            sec2_ty2_d1.css("background-color","black");
            sec2_ty2_d2.css("background-color","black");
            sec2_ty2_d3.css("background-color","black");
            sec2_ty2_d4.css("background-color","black");
            sec2_ty2_d5.css('background-color','rgba(0,0,0,0.4)');
            sec2_ty2_d6.css('background-color','rgba(0,0,0,0.4)');
            bkb.css("background-color","black");
            sc1.css({filter: "invert(0)"});
            jq_pf1b.css("color","black");
            jq_pf2b.css("color","black");
            jq_pf3b.css("color","black");
            jq_pf4b.css("color","black");
            jq_pf5b.css("color","black");
            jq_pfmb.css("color","black");
            jq_pf1n.css("color","black");
            jq_pf2n.css("color","black");
            jq_pf3n.css("color","black");
            jq_pf4n.css("color","black");
            jq_pf5n.css("color","black");
            jq_pfmn.css("color","black");
            eh_1.css("background-color","white");
            eh_2.css("background-color","white");
            pf4_yh3.css("background-color","white");
            sc2.css({filter: "invert(0)"});
            p_h.css({filter: "invert(0)"});
            p_f.css({filter: "invert(0)"});
            hfm_lt_li.css({filter: "invert(0)"});
            ph_in_h3.css('font-weight', "300");  
            ce.css('font-weight', "300");  
            ph_in.css('font-weight', "300");  
            dkm.text('Dark mode off');

            pfm_bg.css("background-color","white");
            pfm_img.css({filter: "invert(0)"});
            hr_rn.css({filter: "invert(0)"});

            // if(id_target != p_dkm.attr("id")){
            //     toggle = "0";
            //     dkm.text('Dark mode off');
            // }
            // else{
            //     toggle = "1";
            //     $(".pop_darkmode a").append("<img src='images/contrast.svg' alt='contrast'>");
            // }
        
            // console.log("id_target: "+id_target);
        }
    });

    p_dkm.click(function(e){//버튼을 클릭했을 때

        e.preventDefault();

        if(toggle=="0"){
            toggle = "1";
            pf_hb.css("background","black");
            pf_hb.css("background-color","black");
            m_hr.css({filter: "invert(100)"}); 
            m_fr.css({filter: "invert(100)"});
            sec_hm.css("background-color","black");
            sec_hm_h2.css("color","white");
            sec1_vimg.css({filter: "invert(100)"});
            sec1_ty_h3.css("color","white");
            sec1_ty_p.css('color','rgba(255,255,255,0.4)');
            m_pf.css("background-color","black");
            sec2_ty2_h3.css("color","white");
            sec2_ty2_p.css('color','rgba(255,255,255,0.4)');
            sec2_ty2_d1.css("background-color","white");
            sec2_ty2_d2.css("background-color","white");
            sec2_ty2_d3.css("background-color","white");
            sec2_ty2_d4.css("background-color","white");
            sec2_ty2_d5.css('background-color','rgba(255,255,255,0.4)');
            sec2_ty2_d6.css('background-color','rgba(255,255,255,0.4)');
            bkb.css("background-color","white");
            sc1.css({filter: "invert(100)"});
            jq_pf1b.css("color","white");
            jq_pf2b.css("color","white");
            jq_pf3b.css("color","white");
            jq_pf4b.css("color","white");
            jq_pf5b.css("color","white");
            jq_pfmb.css("color","white");
            jq_pf1n.css("color","white");
            jq_pf2n.css("color","white");
            jq_pf3n.css("color","white");
            jq_pf4n.css("color","white");
            jq_pf5n.css("color","white");
            jq_pfmn.css("color","white");
            eh_1.css("background-color","black");
            eh_2.css("background-color","black");
            pf4_yh3.css("background-color","black");
            sc2.css({filter: "invert(100)"});
            p_h.css({filter: "invert(100)"});
            p_f.css({filter: "invert(100)"});
            hfm_lt_li.css({filter: "invert(100)"});
            ph_in_h3.css('font-weight', "400");  
            ce.css('font-weight', "400");  
            pf_in.css('font-weight', "400");  
            dkm.text('Dark mode on');

            pfm_bg.css("background-color","black");
            pfm_img.css({filter: "invert(100)"});
            hr_rn.css({filter: "invert(100)"});
            
        }
        else{
            toggle = "0";
            pf_hb.css("background","white");
            pf_hb.css("background-color","white");
            m_hr.css({filter: "invert(0)"}); 
            m_fr.css({filter: "invert(0)"});
            sec_hm.css("background-color","white");
            sec_hm_h2.css("color","black");
            sec1_vimg.css({filter: "invert(0)"});
            sec1_ty_h3.css("color","black");
            sec1_ty_p.css('color','rgba(0,0,0,0.4)');
            m_pf.css("background-color","white");
            sec2_ty2_h3.css("color","black");
            sec2_ty2_p.css('color','rgba(0,0,0,0.4)');
            sec2_ty2_d1.css("background-color","black");
            sec2_ty2_d2.css("background-color","black");
            sec2_ty2_d3.css("background-color","black");
            sec2_ty2_d4.css("background-color","black");
            sec2_ty2_d5.css('background-color','rgba(0,0,0,0.4)');
            sec2_ty2_d6.css('background-color','rgba(0,0,0,0.4)');
            bkb.css("background-color","black");
            sc1.css({filter: "invert(0)"});
            jq_pf1b.css("color","black");
            jq_pf2b.css("color","black");
            jq_pf3b.css("color","black");
            jq_pf4b.css("color","black");
            jq_pf5b.css("color","black");
            jq_pfmb.css("color","black");
            jq_pf1n.css("color","black");
            jq_pf2n.css("color","black");
            jq_pf3n.css("color","black");
            jq_pf4n.css("color","black");
            jq_pf5n.css("color","black");
            jq_pfmn.css("color","black");
            eh_1.css("background-color","white");
            eh_2.css("background-color","white");
            pf4_yh3.css("background-color","white");
            sc2.css({filter: "invert(0)"});
            p_h.css({filter: "invert(0)"});
            p_f.css({filter: "invert(0)"});
            hfm_lt_li.css({filter: "invert(0)"});
            ph_in_h3.css('font-weight', "300");  
            ce.css('font-weight', "300");  
            ph_in.css('font-weight', "300");  
            dkm.text('Dark mode off');

            pfm_bg.css("background-color","white");
            pfm_img.css({filter: "invert(0)"});
            hr_rn.css({filter: "invert(0)"});
    
        }

    });


    /////////////////////////////////////////////////////////


    //popup

    // const targetElement = document.querySelector('.pop');
    // var position = pp.offset().top;

    
    var mu = $('.menu');
    var curs = $('.cursor');    
    var pf3_4mp = $('.pf3_4map');
    var pf3_4_img = $(".pf3_4 .pf3_4_img");
    var pf5_2mp = $('.pf5_2map');
    var pf5_2_img = $(".pf5 .pf5_2_img");
    var pf5_1v = $('.pop .sheet .pf5_1v');
    var position = mu.parent().next().offset().top;

    mu.click(function menu(e) {
        // $(this).parent().next().fadeIn(1000);
        $(this).parent().next().css('display','block');
        // pp.css('display','block');
        m_hr.css('display','none');
        m_hr.css({visibility:"hidden"});
        m_fr.css('display','none');
        m_fr.css({visibility:"hidden"});
        pf_hb.css("overflow", "hidden");

        mbh_h.css('display','none');
        mbh_f.css('display','none');

        hfm_li.css('display','none');

        position = $(this).parent().next().offset().top;
        // console.log("position: "+position);

        e.preventDefault();

        pp.animate({scrollTop:0},0); 
        pp.stop(false,true);
        pf_hb.animate({ scrollTop:position},0); 


        // $('img[usemap]').rwdImageMaps();

        $(document).ready(function(e) {
            $('img[usemap]').rwdImageMaps();
    
            pf3_4mp.on('mouseover', function() {

                pf3_4_img.attr("src","images/md4_hover.png");
                pf3_4mp.css('cursor', 'none');
                curs.addClass('cursor-grow');
    
            });
    
            pf3_4mp.on('mouseout', function() {

                pf3_4_img.attr("src","images/md4.png");
                pf3_4mp.css('cursor', 'none');
                curs.removeClass('cursor-grow') 
            });

            pf5_2mp.on('mouseover', function() {

                pf5_2_img.attr("src","images/sec2_hover.png");
                pf5_2mp.css('cursor', 'none');
                curs.addClass('cursor-grow');
    
            });
    
            pf5_2mp.on('mouseout', function() {

                pf5_2_img.attr("src","images/sec2.png");
                pf5_2mp.css('cursor', 'none');
                curs.removeClass('cursor-grow') 
            });
        });

        for(var i = 0; i < 6; i++ ){
            $('video').get(i).currentTime = 0;
        }

        // pf5_1v.trigger('play');
        
        // function jvolvo_v1py() {
            // pf5_1v.trigger('play');
        // }
        // 
        // if (jvolvo_v1py() !== undefined) {
            // jvolvo_v1py().then((_) => {}).catch((error) => {});
        // }

    });

    // $('#volvo_pop').click(function() {
    //     $('.volvo').css('display','block');

    //     m_hr.css('display','none');
    //     m_hr.css({visibility:"hidden"});
    //     m_fr.css('display','none');
    //     m_fr.css({visibility:"hidden"});
    //      pf_hb.css("overflow", "hidden");

    //     mbh_h.css('display','none');
    //     mbh_f.css('display','none');

    //     hfm_li.css('display','none');

    //     position = $(this).parent().next().offset().top;
    //     // console.log("position: "+position);

    //     e.preventDefault();

    //     pp.animate({ scrollTop:0},0); 
    //     pp.stop(false,true);

    //     pf5_1v.trigger('play');
    // });





    ce.click(function (e) {
        // pp.fadeOut(100);
        pp.css('display','none');
        // pp.css('display','none');
        m_hr.css('display','block');
        m_hr.css({visibility:"visible"});
        m_fr.css('display','block');
        m_fr.css({visibility:"visible"});
        pf_hb.animate({ scrollTop:position},0); 
        pf_hb.css("overflow", "auto");

        mbh_f.css('display','block');
        
        hfm_li.css('display','none');

        curs.removeClass('pf_cursor');

        e.preventDefault();

        // console.log("position: "+position);

        pp.animate({ scrollTop:0},0); 


        // $('.pop .sheet video').trigger('pause');

        // function jvolvo_v1pe() {
            // $('.pop .sheet video').trigger('pause');
        // }
        // 
        // if (jvolvo_v1pe() !== undefined) {
            // jvolvo_v1pe().then((_) => {}).catch((error) => {});
        // }

        


    });

    let sct_ani = "0"; 
    

    $(".pop .pop_h_inner h3").click(function(){
        pp.animate({ scrollTop:0},700,"swing"); 
        pp.css("scroll-snap-type", "none");
        sct_ani = "1";

        // pf5_1v.trigger('play');

        // var volvo_v1 = document.querySelector('.pf5_1v');

        // function volvo_v1py(){ return volvo_v1.play(); }
        // if (volvo_v1py() !== undefined) {
        //     volvo_v1py().then((_) => {}).catch((error) => {});
        // }

    })

    // h3 클릭 시, scrollTop 애니메이션 충돌 방지
    pp.on("mousewheel",function(e,delta) {

        if(delta < 0) { //휠을 아래로 돌렸을때
            // console.log("sheet num: "+delta);
            pp.stop();
            pp.css("scroll-snap-type", "y mandatory");
            sct_ani = "1";
        } 
        else { //휠을 위로 돌렸을때
            // console.log("sheet num: "+delta);
            pp.css("scroll-snap-type", "y mandatory");
            pp.stop();
            sct_ani = "1";
        }
    });


    function scrollanimate(){
        var target_c = document.querySelector('.v_circle');
        var circle_position = target_c.getBoundingClientRect().top;
        var screen_position = window.innerHeight / 2;

        var c1 = parseInt(circle_position)
        var c2 = parseInt(screen_position)

        // console.log("c1: "+c1);
        // console.log("c2: "+c2);

        if( c1 < c2) {
            target_c.classList.add('vb_circle');
            // target_c.classList.add('circle_big');
        }
        else if ( c1 > c2) {
            target_c.classList.remove('vb_circle');
            target_c.classList.add('v_circle');
        }

        if ( c1 < 0) {
            target_c.classList.remove('vb_circle');
            target_c.classList.add('v_circle');
        }

    }
    window.addEventListener('scroll',scrollanimate);

    
    // pop video play

    // var popmenu = document.querySelector('.menu');

    // popmenu.addEventListener('click', () => {

        // function pop_vpy(){

        //     var hss_v1 = document.querySelector('.main_v');
        //     var hss_v2 = document.querySelector('.sub_v');
        //     var hss_v3 = document.querySelector('.menu_v');

        //     var volvo_v1 = document.querySelector('.pf5_1v');
        //     var volvo_v2 = document.querySelector('.pf5_2v');
        //     var volvo_v3 = document.querySelector('.pf5_6v');

        //     // var target_v = $('video');

        //     var hvideo_position1 = hss_v1.getBoundingClientRect().top;
        //     var hvideo_position2 = hss_v2.getBoundingClientRect().top;
        //     var hvideo_position3 = hss_v3.getBoundingClientRect().top;

        //     var video_position1 = volvo_v1.getBoundingClientRect().top;
        //     var video_position2 = volvo_v2.getBoundingClientRect().top;
        //     var video_position3 = volvo_v3.getBoundingClientRect().top;
            
        //     var vscreen_position = window.innerHeight / 2;
    

        //     var h1 = parseInt(hvideo_position1)
        //     var h2 = parseInt(hvideo_position2)
        //     var h3 = parseInt(hvideo_position3)

        //     var v1 = parseInt(video_position1)
        //     var v2 = parseInt(video_position2)
        //     var v3 = parseInt(video_position3)
        //     var vp = parseInt(vscreen_position)


        //     function hss_v1py(){ return hss_v1.play(); }
        //     function hss_v2py(){ return hss_v2.play(); }
        //     function hss_v3py(){ return hss_v3.play(); }

        //     function hss_v1pe(){ return hss_v1.pause(); }
        //     function hss_v2pe(){ return hss_v2.pause(); }
        //     function hss_v3pe(){ return hss_v3.pause(); }

        //     function volvo_v1py(){ return volvo_v1.play(); }
        //     function volvo_v2py(){ return volvo_v2.play(); }
        //     function volvo_v3py(){ return volvo_v3.play(); }

        //     function volvo_v1pe(){ return volvo_v1.pause(); }
        //     function volvo_v2pe(){ return volvo_v2.pause(); }
        //     function volvo_v3pe(){ return volvo_v3.pause(); }


        //     if (hss_v1py() !== undefined) {
        //         hss_v1py().then((_) => {}).catch((error) => {});
        //     }
        //     if(hss_v2py() !== undefined){
        //         hss_v2py().then((_) => {}).catch((error) => {});
        //     }
        //     if(hss_v3py() !== undefined){
        //         hss_v3py().then((_) => {}).catch((error) => {});
        //     }
        //     if(hss_v1pe() !== undefined){
        //         hss_v1pe().then((_) => {}).catch((error) => {});
        //     }
        //     if(hss_v2pe() !== undefined){
        //         hss_v2pe().then((_) => {}).catch((error) => {});
        //     }
        //     if(hss_v3pe() !== undefined){
        //         hss_v3pe().then((_) => {}).catch((error) => {});
        //     }



        //     if (volvo_v1py() !== undefined) {
        //         volvo_v1py().then((_) => {}).catch((error) => {});
        //     }
        //     if(volvo_v2py() !== undefined){
        //         volvo_v2py().then((_) => {}).catch((error) => {});
        //     }
        //     if(volvo_v3py() !== undefined){
        //         volvo_v3py().then((_) => {}).catch((error) => {});
        //     }
        //     if(volvo_v1pe() !== undefined){
        //         volvo_v1pe().then((_) => {}).catch((error) => {});
        //     }
        //     if(volvo_v2pe() !== undefined){
        //         volvo_v2pe().then((_) => {}).catch((error) => {});
        //     }
        //     if(volvo_v3pe() !== undefined){
        //         volvo_v3pe().then((_) => {}).catch((error) => {});
        //     }

        //     // console.log("h1: "+h1);
        //     // console.log("h2: "+h2);
        //     // console.log("h3: "+h3);


        //     // console.log("v1: "+v1);
        //     // console.log("v2: "+v2);
        //     // console.log("v3: "+v3);
        //     // console.log("vp: "+vp);

        //     if( h1 < vp) {
        //         hss_v1py();
        //         hss_v2pe();
        //         hss_v3pe();
        //         // hss_v1.play();
        //         // hss_v2.pause();
        //         // hss_v3.pause();
        //     }
        //     else if ( h1 > vp) {
        //         hss_v1pe();
        //         // hss_v1.pause();
        //     }
        //     if ( h1 <= 0) {
        //         hss_v1pe();
        //         // hss_v1.pause();
        //     }

        //     if( h2 < vp) {
        //         hss_v1pe();
        //         hss_v2py();
        //         hss_v3pe();
        //         // hss_v1.pause();
        //         // hss_v2.play();
        //         // hss_v3.pause();
        //     }
        //     else if ( h2 > vp) {
        //         hss_v2pe();
        //         // hss_v2.pause();
        //     }
        //     if ( h2 <= 0) {
        //         hss_v2pe();
        //         // hss_v2.pause();
        //     }

        //     if( h3 < vp) {
        //         hss_v1pe();
        //         hss_v2pe();
        //         hss_v3py();
        //         // hss_v1.pause();;
        //         // hss_v2.pause();
        //         // hss_v3.play();
        //     }
        //     else if ( h3 > vp) {
        //         hss_v3pe();
        //         // hss_v3.pause();
        //     }
        //     if ( h3 <= 0) {
        //         hss_v3pe();
        //         // hss_v3.pause();
        //     }



                
        //     if( v1 < vp) {
        //         volvo_v1py();
        //         volvo_v2pe();
        //         volvo_v3pe();
        //         // volvo_v1.play();
        //         // volvo_v2.pause();
        //         // volvo_v3.pause();
        //     }
        //     if ( v1 <= 0) {
        //         volvo_v1pe();
        //         // volvo_v1.pause();
        //     }
    
        //     if( v2 < vp) {
        //         volvo_v1pe();
        //         volvo_v2py();
        //         volvo_v3pe();
        //         // volvo_v1.pause();
        //         // volvo_v2.play();
        //         // volvo_v3.pause();
        //     }
        //     else if ( v2 > vp) {
        //         volvo_v2pe();
        //         // volvo_v2.pause();
        //     }
        //     if ( v2 <= 0) {
        //         volvo_v2pe();
        //         // volvo_v2.pause();
        //     }

        //     if( v3 < vp) {
        //         volvo_v1pe();
        //         volvo_v2pe();
        //         volvo_v3py();
        //         // volvo_v1.pause();
        //         // volvo_v2.pause();
        //         // volvo_v3.play();
        //     }
        //     else if ( v3 > vp) {
        //         volvo_v3pe();
        //         // volvo_v3.pause();
        //     }
        //     if ( v3 <= 0) {
        //         volvo_v3pe();
        //         // volvo_v3.pause();
        //     }
    
        // }
        // window.addEventListener('scroll',pop_vpy);

        // chrome video tag exption handling
    
        // var playPromise = video.play();
        // if (playPromise !== undefined) { playPromise.then((_) => {}).catch((error) => {}); }

    // });


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


    var sdwv = $('.soundwave');
    var stpp = $('.startpop');
    var bgm_if_h3 = $('.bgm_info h3');
    var btwp = $('.btwrap');
    var sn = $('section');
    var sd_tg = $(".sound_toggle");
    var p_sd_tg_img = $(".pop_sound_toggle img");

    $('#bgmstart').click(function () {

        sound_toggle = "0"; 

        sdwv.delay(1500).fadeOut(100)
        stpp.delay(2000).fadeOut(100);
        bgm_if_h3.fadeOut(500);

        curs.fadeOut(500);
        curs.delay(2000).fadeIn(500);

        // var md = new MobileDetect(navigator.userAgent);
        // let curs = document.querySelector(".cursor");


        // if( md.mobile() != null ){
        //     curs.style.display = 'none'
        // }

        // $('.cursor ').delay(2000).css('display','block');
        btwp.fadeOut(500);
        // pp.css('display','none');
        // m_hr.delay(2000).css('display','block');
        m_hr.delay(1000).css({visibility:"visible"});
        // m_fr.delay(2000).css('display','block');
        m_fr.delay(1000).css({visibility:"visible"});
        m_hr.delay(1000).fadeIn(100); 
        m_fr.delay(1000).fadeIn(100); 

        pf_hb.delay(2000).animate({ scrollTop:position},0); 
        pf_hb.delay(2000).css("overflow", "auto");
        sn.css('display','block');
        sec_hm_h2.delay(2000).fadeIn(3500); 

        pf_hb.delay(2000).css({overflow:"auto"});//body스크롤없앰}
        pf_hb.delay(2000).css({position:"static"});

        sd_tg.text('Sound on');
        p_sd_tg_img.attr("src","images/volume.svg");
        // $('.darkmode').click();


        function soundpy() {
            audio.play();
            audio.autoplay = true;
            audio.loop = true;
            audio.volume = 0.5;
        }
        if (soundpy() !== undefined) {
            soundpy().then((_) => {}).catch((error) => {});
        }

        
        // audio.play();
        soundpy();
        // audio.autoplay = true;
        // audio.loop = true;
        // audio.volume = 0.5;
        // audio.currentTime = 20;

        // let sound_toggle = "0";

        // sd_tg.click(function(){//버튼을 클릭했을 때
        //     if(sound_toggle=="0"){
        //         sound_toggle = "1";
        //         audio.pause();
        //         sd_tg.text('Sound off');
        //         p_sd_tg_img.attr("src","images/volume_mute.svg");
        //     }
        //     else{
        //         sound_toggle = "0"; 
        //         audio.play();
        //         audio.autoplay = true;
        //         audio.loop = true;
        //         audio.volume = 0.5;
        //         sd_tg.text('Sound on');
        //         p_sd_tg_img.attr("src","images/volume.svg");
        //     }
        // });



        

    });


    sd_tg.click(function(){//버튼을 클릭했을 때

        function soundpy() {
            audio.play();
            audio.autoplay = true;
            audio.loop = true;
            audio.volume = 0.5;
        }
        if (soundpy() !== undefined) {
            soundpy().then((_) => {}).catch((error) => {});
        }

        function soundpe() {
            audio.pause();
        }
        if (soundpe() !== undefined) {
            soundpe().then((_) => {}).catch((error) => {});
        }

        if(sound_toggle=="0"){
            sound_toggle = "1";
            // audio.pause();
            soundpe();
            sd_tg.text('Sound off');
            p_sd_tg_img.attr("src","images/volume_mute.svg");
        }
        else{
            sound_toggle = "0"; 
            // audio.play();
            soundpy();
            // audio.autoplay = true;
            // audio.loop = true;
            // audio.volume = 0.5;
            sd_tg.text('Sound on');
            p_sd_tg_img.attr("src","images/volume.svg");
        }
    });
    

    $('#closepop').click(function () {

        sound_toggle = "1"; 

        sdwv.fadeOut(50)
        stpp.delay(500).fadeOut(100);
        // pp.css('display','none');

        bgm_if_h3.fadeOut(500);
        btwp.fadeOut(500);

        m_hr.css('display','block');
        m_hr.css({visibility:"visible"});
        m_fr.css('display','block');
        m_fr.css({visibility:"visible"});
        pf_hb.animate({ scrollTop:position},0); 
        pf_hb.css("overflow", "auto");
        sn.css('display','block');
        sec_hm_h2.fadeIn(4500); 

        pf_hb.css({overflow:"auto"});//body스크롤없앰}
        pf_hb.css({position:"static"});

        sd_tg.text('Sound off');
        p_sd_tg_img.attr("src","images/volume_mute.svg");


        // sd_tg.click(function(){//버튼을 클릭했을 때
        //     if(sound_toggle=="0"){
        //         sound_toggle = "1";
        //         audio.play();
        //         audio.autoplay = true;
        //         audio.loop = true;
        //         audio.volume = 0.5;
        //         sd_tg.text('Sound on');
        //         p_sd_tg_img.attr("src","images/volume.svg");
        //     }
        //     else{
        //         sound_toggle = "0"; 
        //         audio.pause();
        //         sd_tg.text('Sound off');
        //         p_sd_tg_img.attr("src","images/volume_mute.svg");
        //     }
        // });

        // $('.darkmode').click();
    });


    $(".pop_sound_toggle").click(function(){//버튼을 클릭했을 때

        function soundpy() {
            audio.play();
            audio.autoplay = true;
            audio.loop = true;
            audio.volume = 0.5;
        }
        if (soundpy() !== undefined) {
            soundpy().then((_) => {}).catch((error) => {});
        }

        function soundpe() {
            audio.pause();
        }
        if (soundpe() !== undefined) {
            soundpe().then((_) => {}).catch((error) => {});
        }

        
        if(sound_toggle=="0"){
            sound_toggle = "1";
            soundpe();
            // audio.pause();
            p_sd_tg_img.attr("src","images/volume_mute.svg");
            sd_tg.text('Sound off');
        }
        else{
            sound_toggle = "0"; 
            soundpy();
            // audio.play();
            // audio.autoplay = true;
            // audio.loop = true;
            // audio.volume = 0.5;
            p_sd_tg_img.attr("src","images/volume.svg");
            sd_tg.text('Sound on');
        }
        
    });

    // fullscreen toggle 
    

    var toggleFullscreen = document.querySelector('.pop_fullscreen_toggle')
    var toggleFullscreenBtn = document.querySelectorAll('.pop_fullscreen_toggle')
    // var container = document.querySelector('#skrollr-body')
    var container = document.querySelector('#skrollr-body')
    // var container2 = document.querySelector('body')
    var pp_fc_tgg_img = $(".pop_fullscreen_toggle img");
    var sc_tg = $(".screen_toggle");
    var screen_toggle = "0"; 

    $(".pop_fullscreen_toggle").click(function(){//버튼을 클릭했을 때

        toggleFullScreen(container);

        if(screen_toggle=="0"){
            screen_toggle = "1";
            pp_fc_tgg_img.attr("src","images/fullscreen_exit.svg");
            pf_hb.mousewheel(function(event, delta) {
                if (!(navigator.appVersion.indexOf("Mac") != -1)) { 
                    $(this).stop().animate({ scrollTop: (this.scrollTop - (delta * 880)) }, 830, "swing");
                }
                else if (navigator.appVersion.indexOf("Mac") != -1) {
                    $(this).stop().animate({ scrollTop: (this.scrollTop - (delta * 880)) }, 830, "swing");
                }
            });
            sc_tg.text('Full screen on');
            // var container = document.querySelector('#skrollr-body')
            // toggleFullScreen(container);
        }
        else{
            screen_toggle = "0"; 
            pp_fc_tgg_img.attr("src","images/fullscreen.svg");
            pf_hb.mousewheel(function(event, delta) {
                if (!(navigator.appVersion.indexOf("Mac") != -1)) { 
                    $(this).stop().animate({ scrollTop: (this.scrollTop - (delta * 1)) }, 830, "swing");
                }
                else if (navigator.appVersion.indexOf("Mac") != -1) {
                    $(this).stop().animate({ scrollTop: (this.scrollTop - (delta * 440)) }, 830, "swing");
                }
                
            });
            sc_tg.text('Full screen off');
            // var container2 = document.querySelector('body')
            // toggleFullScreen(container2);
        }
        
    });


    var fullscreen = element => {
        if (element.requestFullscreen) return element.requestFullscreen()
        if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen()
        if (element.mozRequestFullScreen) return element.mozRequestFullScreen()
        if (element.msRequestFullscreen) return element.msRequestFullscreen()
    }

    function toggleFullScreen(element) {
        if (!document.fullscreenElement) {
            if (element.requestFullscreen) return element.requestFullscreen()
            if (element.webkitRequestFullscreen)
                return element.webkitRequestFullscreen()
            if (element.mozRequestFullScreen) return element.mozRequestFullScreen()
            if (element.msRequestFullscreen) return element.msRequestFullscreen()
            // if (screen_toggle=="0"){}
        } else {
            if (document.exitFullscreen) return document.exitFullscreen()
            if (document.webkitCancelFullscreen)
                return document.webkitCancelFullscreen()
            if (document.mozCancelFullScreen) return document.mozCancelFullScreen()
            if (document.msExitFullscreen) return document.msExitFullscreen()
            // if (screen_toggle=="1"){}
        }
    }


    /////////////////////////////////////////////////////////

    // more perspective click animation

    // $(".more").click(function(){//버튼을 클릭했을 때
    //     pfmb.css('display','none');
    //     pfmn.css('display','none');
    //     m_hr.animate({ top:"-10vh"},500); 
    //     m_fr.animate({ bottom:"-10vh"},500); 

    //     var frameNumm = 0;
    //     var targetFN = 0;

    //     function incZ(){
    //         frameNumm = Math.floor(frameNumm+1);
            
    //         // frameNumm = frameNumm + 1*(targetFN - frameNumm); 
    //         $(".pf_more_iphone").css({"transform":"translateZ("+frameNumm+"vw)"});
    //         pfm_img.css({"transform":"translateZ("+frameNumm+"vw)"});
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
        //     pfm_img.animation = "congrow 1.5s ease-in-out";
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
    let mohenic = document.querySelectorAll(".mohenic .sheet");
    let happysocks = document.querySelectorAll(".happysocks .sheet");
    let volvo = document.querySelectorAll(".volvo .sheet");
    

    let gebiscon_h = document.querySelector(".gebiscon .pop_h");
    let gebiscon_f = document.querySelector(".gebiscon .pop_f");

    let zerolab_h = document.querySelector(".zerolab .pop_h");
    let zerolab_f = document.querySelector(".zerolab .pop_f");

    let mohenic_h = document.querySelector(".mohenic .pop_h");
    let mohenic_f = document.querySelector(".mohenic .pop_f");

    let hss_h = document.querySelector(".happysocks .pop_h");
    let hss_f = document.querySelector(".happysocks .pop_f");

    let volvo_h = document.querySelector(".volvo .pop_h");
    let volvo_f = document.querySelector(".volvo .pop_f");

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


    // JQ port remote control

    let pf_rm = $('.pf-nav');
    
    function port_remote(e){
        let pf_elem = $(e.target);

        if(!$('span')){
            pf_elem = null;
            return
        }

        port_move();

        function port_move(){
            pf_hb.animate({ scrollTop: pf_elem.data('value')},1000); 
            e.preventDefault();
            ck_toggle = "1";
        }

        // console.log(pf_elem.data('value'));
    }

    m_fr.click(port_remote);



    var pfnv_li0_sn = $('#pf-nav ul li:eq(0) span');
    var pfnv_li1_sn = $('#pf-nav ul li:eq(1) span');
    var pfnv_li2_sn = $('#pf-nav ul li:eq(2) span');
    var pfnv_li3_sn = $('#pf-nav ul li:eq(3) span');
    var pfnv_li4_sn = $('#pf-nav ul li:eq(4) span');
    var pfnv_li5_sn = $('#pf-nav ul li:eq(5) span');

    $(window).scroll(function(){
        var b = $(document).scrollTop(); 
        if((b >=63996) && (b < 86420)) {
            pfnv_li0_sn.removeClass("pf_nav_active");
            pfnv_li1_sn.removeClass("pf_nav_active");
            pfnv_li2_sn.removeClass("pf_nav_active");
            pfnv_li3_sn.removeClass("pf_nav_active");
            pfnv_li4_sn.removeClass("pf_nav_active");
            pfnv_li5_sn.removeClass("pf_nav_active");
        }
        if((b >=86420) && (b < 91499)) {
            pfnv_li0_sn.addClass("pf_nav_active");
            pfnv_li1_sn.removeClass("pf_nav_active");
            pfnv_li2_sn.removeClass("pf_nav_active");
            pfnv_li3_sn.removeClass("pf_nav_active");
            pfnv_li4_sn.removeClass("pf_nav_active");
            pfnv_li5_sn.removeClass("pf_nav_active");
        }
        if((b >=107499) && (b < 114499)) {
            pfnv_li0_sn.removeClass("pf_nav_active");
            pfnv_li1_sn.addClass("pf_nav_active");
            pfnv_li2_sn.removeClass("pf_nav_active");
            pfnv_li3_sn.removeClass("pf_nav_active");
            pfnv_li4_sn.removeClass("pf_nav_active");
            pfnv_li5_sn.removeClass("pf_nav_active");

        }
        if((b >=137370) && (b < 144370)) {
            pfnv_li0_sn.removeClass("pf_nav_active");
            pfnv_li1_sn.removeClass("pf_nav_active");
            pfnv_li2_sn.addClass("pf_nav_active");
            pfnv_li3_sn.removeClass("pf_nav_active");
            pfnv_li4_sn.removeClass("pf_nav_active");
            pfnv_li5_sn.removeClass("pf_nav_active");
        }
        if((b >=163483) && (b < 170483)) {
            pfnv_li0_sn.removeClass("pf_nav_active");
            pfnv_li1_sn.removeClass("pf_nav_active");
            pfnv_li2_sn.removeClass("pf_nav_active");
            pfnv_li3_sn.addClass("pf_nav_active");
            pfnv_li4_sn.removeClass("pf_nav_active");
            pfnv_li5_sn.removeClass("pf_nav_active");
        }
        if((b >=186502) && (b < 193503)) {
            pfnv_li0_sn.removeClass("pf_nav_active");
            pfnv_li1_sn.removeClass("pf_nav_active");
            pfnv_li2_sn.removeClass("pf_nav_active");
            pfnv_li3_sn.removeClass("pf_nav_active");
            pfnv_li4_sn.addClass("pf_nav_active");
            pfnv_li5_sn.removeClass("pf_nav_active");
        }
        if((b >=204717) && (b < 211717)) {
            pfnv_li0_sn.removeClass("pf_nav_active");
            pfnv_li1_sn.removeClass("pf_nav_active");
            pfnv_li2_sn.removeClass("pf_nav_active");
            pfnv_li3_sn.removeClass("pf_nav_active");
            pfnv_li4_sn.removeClass("pf_nav_active");
            pfnv_li5_sn.addClass("pf_nav_active");
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


    // cursor mouse control

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

    for(var i = 0; i < 4; i++ ){
        mohenic[i].addEventListener("mouseover", () => {
            mouseCursor.classList.add("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            // hover_toggle = "1";
            pop_hover = "1";
        });
    }

    for(var i = 0; i < 7; i++ ){
        happysocks[i].addEventListener("mouseover", () => {
            mouseCursor.classList.add("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            // hover_toggle = "1";
            pop_hover = "1";
        });
    }

    for(var i = 0; i < 6; i++ ){
        volvo[i].addEventListener("mouseover", () => {
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

    // gebiscon_h.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });

    // gebiscon_f.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });

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


    // zerolab_h.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });

    // zerolab_f.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });



    mohenic_h.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });
    mohenic_f.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });

    // mohenic_h.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });

    // mohenic_f.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });


    hss_h.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });
    hss_f.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });

    // hss_h.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });

    // hss_f.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });


    volvo_h.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });
    volvo_f.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.style.zIndex = "1100";
        // hover_toggle = "1";
        pop_hover = "1";
    });

    // volvo_h.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });

    // volvo_f.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.add("pf_cursor");
    //     mouseCursor.style.zIndex = "1100";
    //     // hover_toggle = "1";
    //     pop_hover = "1";
    // });




    // function changeImg_m(obj,img){
    //     var mapimg_m = document.getElementById('mcmap');
    //     mapimg_m.src = img;
    //     // alert("img_change")
    //     console.log("img_change");
    // }



    

    


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

    // chrome left bottom a tag tooltip remove

    pf_hb.on('mouseover', 'a', function (e) {
            var $link = $(this),
                href = $link.attr('href') || $link.data("href");
    
            $link.off('click.chrome');
            $link.on('click.chrome', function () {
            window.location.href = href;
            }).attr('data-href', href) //href에 지정된 링크 연결을 유지 시킵니다.
            // .css({ cursor: 'pointer' })
            .removeAttr('href'); // 이 부분이 브라우저에서 뜨는 Url 상태바를 안보이게 처리합니다.
            // mouseCursor.classList.remove("pf_cursor");
    });


});
