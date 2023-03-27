

$(function(){

    var j_pf_hb = $("html,body");
    var j_pf_cr = $('#container');
    var j_m_pf =  $(".portfolio");
    let j_m_hr = $('header');
    let j_m_hr_in = $('header .inner');
    let j_m_fr = $('footer');
    var j_logo = $('.logo');

    var pf_hb = document.querySelector("html, body");
    var pf_h = document.querySelector("html");
    var pf_b = document.querySelector("body");
    var pf_cr = document.querySelector("#container");
    let m_hr = document.querySelector('header');
    var logo = document.querySelector('.logo');


    // JS header evnet delegation nav

    function header_click(e) {
        let h_elem = e.target;
        let h_elem_c = h_elem.getAttribute("class");
        let h_btn_c = !h_elem.classList.contains("h_btn");
    
        if (h_btn_c != logo.getAttribute("class")) {
            h_elem_c = logo.parentNode.getAttribute("class");
        }
    
        // click event not working area control
        if (!h_elem.classList.contains("h_btn")) {
            h_elem = null;
            return;
        }
    
        c_hide();
        c_quick();
        c_fi();
    
        function c_hide() {
            pf_cr.style.display = "none";
        }
    
        function c_quick() {
            pf_h.scrollTop = h_elem.dataset.value;
        }
    
        function c_fi() {
            setTimeout(function() {
                pf_cr.style.display = "block";
            }, 1000);
        }
    
        // console.log(h_elem_c);
        // console.log(h_elem.dataset.value);
    }
    m_hr.addEventListener("click", header_click);


    const hr_d1 = document.querySelector('.hr_d1');
    const hr_d2 = document.querySelector('.hr_d2');
    const hr_d3 = document.querySelector('.hr_d3');
    const hr_d4 = document.querySelector('.hr_d4');
    const hr_d5 = document.querySelector('.hr_d5');
    const hr_d6 = document.querySelector('.hr_d6');
    const hr_d7 = document.querySelector('.hr_d7');
    const hr_d8 = document.querySelector('.hr_d8');
    const hr_d9 = document.querySelector('.hr_d9');
    const hr_d10 = document.querySelector('.hr_d10');
    const hr_d11 = document.querySelector('.hr_d11');
    const hr_d12 = document.querySelector('.hr_d12');
    const hr_d13 = document.querySelector('.hr_d13');

    window.addEventListener('scroll', function() {
        var b = window.scrollY;
        skrollr.init();

        if((b >=0) && (b < 13284)) {

            
            hr_d1.style.visibility = "visible";

            hr_d2.style.visibility = "hidden";
            hr_d3.style.visibility = "hidden";
            hr_d4.style.visibility = "hidden";
            hr_d5.style.visibility = "hidden";

            hr_d6.style.visibility = "hidden";
            hr_d7.style.visibility = "hidden";
            hr_d8.style.visibility = "hidden";
            hr_d9.style.visibility = "hidden";
            hr_d10.style.visibility = "hidden";

            hr_d11.style.visibility = "hidden";
            hr_d12.style.visibility = "hidden";
            hr_d13.style.visibility = "hidden";
        }
        else if((b >=14775) && (b < 53435)) {
            hr_d1.style.visibility = "hidden";

            hr_d2.style.visibility = "visible";
            hr_d3.style.visibility = "visible";
            hr_d4.style.visibility = "visible";
            hr_d5.style.visibility = "visible";

            hr_d6.style.visibility = "hidden";
            hr_d7.style.visibility = "hidden";
            hr_d8.style.visibility = "hidden";
            hr_d9.style.visibility = "hidden";
            hr_d10.style.visibility = "hidden";

            hr_d11.style.visibility = "hidden";
            hr_d12.style.visibility = "hidden";
            hr_d13.style.visibility = "hidden";

        }
        else if((b >=63996) && (b < 202085)) {

            hr_d1.style.visibility = "hidden";

            hr_d2.style.visibility = "hidden";
            hr_d3.style.visibility = "hidden";
            hr_d4.style.visibility = "hidden";
            hr_d5.style.visibility = "hidden";

            hr_d6.style.visibility = "visible";
            hr_d7.style.visibility = "visible";
            hr_d8.style.visibility = "visible";
            hr_d9.style.visibility = "visible";
            hr_d10.style.visibility = "visible";

            hr_d11.style.visibility = "hidden";
            hr_d12.style.visibility = "hidden";
            hr_d13.style.visibility = "hidden";

        }
        else if((b >=209507) && (b < 463831)) {

            hr_d1.style.visibility = "hidden";
            hr_d2.style.visibility = "hidden";
            hr_d3.style.visibility = "hidden";
            hr_d4.style.visibility = "hidden";
            hr_d5.style.visibility = "hidden";

            hr_d6.style.visibility = "hidden";
            hr_d7.style.visibility = "hidden";
            hr_d8.style.visibility = "hidden";
            hr_d9.style.visibility = "hidden";
            hr_d10.style.visibility = "hidden";

            hr_d11.style.visibility = "visible";
            hr_d12.style.visibility = "visible";
            hr_d13.style.visibility = "visible";

        }

    });


    ///////////////////////////////////////////////////////////////////////////////
    // JS portfolio back & next
    
    var m_pf =  document.querySelector('.portfolio');
    var sn = document.querySelector('span');

    function port_nb(e){
        let port_elem = e.target;

        if(!sn){
            port_elem = null;
            return
        }

        portfolio_move();

        function portfolio_move(){
            window.scrollTo({top: port_elem.dataset.value, behavior: 'smooth', duration: 1000});
            e.preventDefault();
            ck_toggle = "1";
        }
        // console.log("pf_BN: "+port_elem.dataset.value);
    }

    m_pf.addEventListener('click', port_nb);

    
    const pfn_bn = ["pf1back","pf2back","pf3back","pf4back","pf5back","pf6back","pf1next","pf2next","pf3next","pf4next","pf5next","pf6next",];

    var pf1b = document.querySelector("#pf1back");
    var pf2b = document.querySelector("#pf2back");
    var pf3b = document.querySelector("#pf3back");
    var pf4b = document.querySelector("#pf4back");
    var pf5b = document.querySelector("#pf5back");
    var pfmb = document.querySelector("#pf6back");

    var pf1n = document.querySelector("#pf1next");
    var pf2n = document.querySelector("#pf2next");
    var pf3n = document.querySelector("#pf3next");
    var pf4n = document.querySelector("#pf4next");
    var pf5n = document.querySelector("#pf5next");
    var pfmn = document.querySelector("#pf6next");


    window.addEventListener('scroll', function() {
        var b = window.scrollY;

        if((b >=86419) && (b < 91499)) { 
            // pf1
            pf1b.style.visibility = "visible";
            pf1n.style.visibility = "visible";

        }
        else{
            pf1b.style.visibility = "hidden";
            pf1n.style.visibility = "hidden";
        }
        if((b >=107499) && (b < 114499)) {
            // pf2
            pf2b.style.visibility = "visible";
            pf2n.style.visibility = "visible";
        }
        else{
            pf2b.style.visibility = "hidden";
            pf2n.style.visibility = "hidden";
        }
        if((b >=137370) && (b < 144370)) {
            // pf3
            pf3b.style.visibility = "visible";
            pf3n.style.visibility = "visible";
        }
        else{
            pf3b.style.visibility = "hidden";
            pf3n.style.visibility = "hidden";
        }
        if((b >=163483) && (b < 170483)) {
            // pf4
            pf4b.style.visibility = "visible";
            pf4n.style.visibility = "visible";
        }
        else{
            pf4b.style.visibility = "hidden";
            pf4n.style.visibility = "hidden";
        }
        
        if((b >=186503) && (b < 193503)) {
            // pf5
            pf5b.style.visibility = "visible";
            pf5n.style.visibility = "visible";
        }
        else{
            pf5b.style.visibility = "hidden";
            pf5n.style.visibility = "hidden";
        }
        if((b >=204717) && (b < 211717)) {
            // pfmore
            pfmb.style.visibility = "visible";
            pfmn.style.visibility = "visible";
        }
        else{
            pfmb.style.visibility = "hidden";
            pfmn.style.visibility = "hidden";
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

    // JS function mene 


    let j_hfm_toggle = "0";
    let j_hfm_bt = $(".hfm_btn")
    let j_hfm_li = $(".hfm_list")
    let j_mn_h = $(".menu_hide")

    let hfm_toggle = "0";
    let hfm_bt = document.querySelector(".hfm_btn");
    let hfm_li = document.querySelector(".hfm_list");
    let hfm_li_a = document.querySelector(".hfm_list");
    var mn_h = document.querySelector(".menu_hide");

    hfm_bt.addEventListener('click', () => {//버튼을 클릭했을 때
        
        if (hfm_toggle == "0") {
            hfm_toggle = "1";

            hfm_li.style.display = 'block'
        }
        else{
            hfm_toggle = "0";
            hfm_li.style.display = 'none'
        }



    });

    
    pf_b.addEventListener('click', function(e){
            var c_target = e.target.parentNode.getAttribute('class');
            var menu_hide = e.target.getAttribute('class');
            if(c_target != hfm_bt.classList){
                hfm_toggle = "0";
                hfm_li.style.display = 'none'
            }
            if(c_target == hfm_li.classList){
                hfm_toggle = "1";
                hfm_li.style.display = 'block'
            }
            if (menu_hide == mn_h.classList) {
                hfm_toggle = "0";
                hfm_li.style.display = 'none'
            }

            e.preventDefault();
            
            // console.log("c_target: "+c_target);
            // console.log("menu_hide: "+menu_hide);
        // };
    });

    // window.addEventListener('click', target_con);

    // j_hfm_bt.click(function(){//버튼을 클릭했을 때
        
        
    //     if (j_hfm_toggle == "0") {
    //         j_hfm_toggle = "1";

    //         j_hfm_li.css('display','block');

    //         j_pf_hb.click(function(e){//버튼을 클릭했을 때
    //             var c_target = $(e.target).parent().attr("class");
    //             var menu_hide = $(e.target).attr("class");
    //             if(c_target != j_hfm_bt.attr("class")){
    //                 j_hfm_toggle = "0";
    //                 j_hfm_li.css('display','none');
    //             }
    //             if(c_target == j_hfm_li.attr("class")){
    //                 j_hfm_toggle = "1";
    //                 j_hfm_li.css('display','block');
    //             }
    //             if (menu_hide == j_mn_h.attr("class")) {
    //                 j_hfm_toggle = "0";
    //                 j_hfm_li.css('display','none');
    //             }

    //             e.preventDefault();
                
    //             // console.log("c_target: "+c_target);
    //         });
    //     }
    //     else{
    //         j_hfm_toggle = "0";
    //         j_hfm_li.css('display','none');
    //     }



    // });

    

    let mdh_toggle = "0";
    let mbh_h = document.querySelector('.mbh_h');
    let mbh_f = document.querySelector('.mbh_f');
    let m_fr = document.querySelector('footer');

    let j_mbh_h = $('.mbh_h');
    let j_mbh_f = $('.mbh_f');

    mn_h.addEventListener('click', function(){//버튼을 클릭했을 때

        mdh_toggle = "1";
        
    //     // hfm_li.toggle();
        m_hr.animate([{ top:"-10vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'}); 
        m_fr.animate([{ bottom:"-10vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'}); 
        mbh_h.style.display = 'block'
        mbh_f.style.display = 'block'
    //     // m_hr.animate({ top:"-10vh", behavior: 'smooth', duration: 1000}); 
    //     // m_fr.animate({ bottom:"-10vh", behavior: 'smooth', duration: 1000});

        // console.log("menu_hide click");

    });


    mbh_f.addEventListener('mouseover', function(){//버튼을 클릭했을 때

        mdh_toggle = "0";

        m_hr.animate([{ top:"0vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'});
        m_fr.animate([{ bottom:"0vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'}); 
        mbh_h.style.display = 'none'
        mbh_f.style.display = 'none'

        // console.log("j_mbh_f mouseover");
    });


    


    // let j_hfm_li = $(".hfm_list");
    // let j_m_hr = $('header');
    // let j_m_fr = $('footer');
    // let mdh_toggle = "0";
    // let j_mbh_h = $('.mbh_h');
    // let j_mbh_f = $('.mbh_f');

    // j_mn_h.click(function(){//버튼을 클릭했을 때

    //     mdh_toggle = "1";
        
        // j_hfm_li.toggle();
    //     j_m_hr.animate({ top:"-10vh"},1000); 
    //     j_m_fr.animate({ bottom:"-10vh"},1000); 
    //     j_mbh_h.css('display','block');
    //     j_mbh_f.css('display','block');

    //     console.log("menu_hide click");
    // });


    // j_mbh_f.on('mouseover', () => {

    //     mdh_toggle = "0";

    //     j_m_hr.animate({ top:"0vh"},1000); 
    //     j_m_fr.animate({ bottom:"0vh"},1000); 
    // });


    // //////////////////////////////////////////////////////////


    // darkmode


    let toggle = "0";
    // let j_dkm = $(".darkmode");
    var j_pp = $('.pop');
    // var j_p_dkm = $(".pop_darkmode");
    // var j_p_h = $(".pop_h");
    // var j_p_f = $(".pop_f");
    // var j_sec_hm = $(".home");
    var j_sec_hm_h2 = $(".sl_gd");
    // var j_sec1_vimg = $(".runners");
    // var j_sec1_ty_h3 = $(".tw_1");
    // var j_sec1_ty_p =  $(".tw_2");
    // var j_sec2_ty2 = $(".typo2");
    // var j_bkb = $(".bkbox");
    // var j_sc1 = $("#screen");
    // var j_sc2 = $("#screen2");
    // var j_eh_1 = $(".eye_hide1");
    // var j_eh_2 = $(".eye_hide2");
    // var j_pf4_yh3= $(".ypaint_hide3");
    // var j_hfm_lt_li = $(".hfm_list li");
    // var j_ph_in = $(".pop_h_inner");
    // var j_ph_in_h3 = $(".pop_h_inner h3");
    // var j_pf_in = $(".pop_f_inner");
    var j_ce = $(".close");
    // var j_pfm_bg = $(".pfmore_bg");
    // var j_pfm_img = $(".pf_more_img");
    // var j_hr_rn = $(".hover_runner");
    // var j_skr_by = $("#skrollr-body");



    let dkm = document.querySelector(".darkmode");
    var pp = document.querySelectorAll('.pop');
    var p_dkm = document.querySelector(".pop_darkmode");
    var p_dkm_a = document.querySelectorAll(".pop_darkmode");
    var p_h_a = document.querySelectorAll(".pop_h");
    var p_f_a = document.querySelectorAll(".pop_f");
    var sec_hm = document.querySelector(".home");
    var sec_hm_h2 = document.querySelector(".sl_gd");
    var sec1_vimg = document.querySelector(".runners");
    var sec1_ty_h3 = document.querySelector(".tw_1");
    var sec1_ty_p =  document.querySelector(".tw_2");
    var sec2_ty2 = document.querySelector(".typo2");
    var bkb = document.querySelector(".bkbox");
    var sc1 = document.querySelector("#screen");
    var sc2 = document.querySelector("#screen2");
    var eh_1 = document.querySelector(".eye_hide1");
    var eh_2 = document.querySelector(".eye_hide2");
    var pf4_yh3= document.querySelector(".ypaint_hide3");
    var hfm_lt_li = document.querySelector(".hfm_list li");
    var ph_in = document.querySelector(".pop_h_inner");
    var ph_in_h3 = document.querySelector(".pop_h_inner h3");
    var pf_in = document.querySelector(".pop_f_inner");
    var ce = document.querySelectorAll(".close");
    var pfm_bg = document.querySelector(".pfmore_bg");
    var pfm_img = document.querySelector(".pf_more_img");
    var hr_rn = document.querySelector(".hover_runner");
    var skr_by = document.querySelector("#skrollr-body");


    function dark_on() {
        toggle = "1";
        pf_b.style.background = "black";
        pf_b.style.backgroundColor = "black";
        skr_by.style.background = "black";
        m_hr.style.filter = "invert(100)";
        m_fr.style.filter = "invert(100)";
        sec_hm.style.backgroundColor = "black";
        sec_hm_h2.style.color = "white";
        sec1_vimg.style.filter = "invert(100)";
        sec1_ty_h3.style.color = "white";
        sec1_ty_p.style.color = "rgba(255, 255, 255, 0.4)";
        m_pf.style.backgroundColor = "black";
        sec2_ty2.style.filter = "invert(100)";
        bkb.style.backgroundColor = "white";
        sc1.style.filter = "invert(100)";

        pfn_bn.forEach(function(id) {
            var element = document.querySelector("#" + id);
            if (element) {
                element.style.color = "white";
            }
        });

        eh_1.style.backgroundColor = "black";
        eh_2.style.backgroundColor = "black";
        pf4_yh3.style.backgroundColor = "black";
        sc2.style.filter = "invert(100)";

        p_h_a.forEach(function(element) {
            element.style.filter = "invert(100)";
        });
        p_f_a.forEach(function(element) {
            element.style.filter = "invert(100)";
        });

        hfm_li_a.style.filter = "invert(100)";

        ph_in_h3.style.fontWeight = "400";
        ce.style.fontWeight = "400";
        pf_in.style.fontWeight = "400";
        dkm.textContent = "Dark mode on";
        pfm_bg.style.backgroundColor = "black";
        pfm_img.style.filter = "invert(100)";
        hr_rn.style.filter = "invert(100)";
    }

    function dark_off() {
        toggle = "0";
        pf_b.style.background = "white";
        pf_b.style.backgroundColor = "white";
        skr_by.style.background = "white";
        m_hr.style.filter = "invert(0)";
        m_fr.style.filter = "invert(0)";
        sec_hm.style.backgroundColor = "white";
        sec_hm_h2.style.color = "black";
        sec1_vimg.style.filter = "invert(0)";
        sec1_ty_h3.style.color = "black";
        sec1_ty_p.style.color = "rgba(0,0,0,0.4)";
        m_pf.style.backgroundColor = "white";
        sec2_ty2.style.filter = "invert(0)";
        bkb.style.backgroundColor = "black";
        sc1.style.filter = "invert(0)";

        pfn_bn.forEach(function(id) {
            var element = document.querySelector("#" + id);
            if (element) {
                element.style.color = "black";
            }
        });

        eh_1.style.backgroundColor = "white";
        eh_2.style.backgroundColor = "white";
        pf4_yh3.style.backgroundColor = "white";
        sc2.style.filter = "invert(0)";

        p_h_a.forEach(function(element) {
            element.style.filter = "invert(0)";
        });
        p_f_a.forEach(function(element) {
            element.style.filter = "invert(0)";
        });

        hfm_li_a.style.filter = "invert(0)";
        ph_in_h3.style.fontWeight = "300";
        ce.style.fontWeight = "300";
        ph_in.style.fontWeight = "300";
        dkm.textContent = "Dark mode off";
        pfm_bg.style.backgroundColor = "white";
        pfm_img.style.filter = "invert(0)";
        hr_rn.style.filter = "invert(0)";
    }


    dkm.addEventListener("click", function(e) {
        if (toggle === "0") {
            dark_on();
        } else {
            dark_off();
        }
        // console.log("dkm_click")
    });

    p_dkm_a.forEach(function(element) {
        element.addEventListener("click", function(e) {
        e.preventDefault();
        if (toggle === "0") {
            dark_on();
        } else {
            dark_off();
        }
            // console.log("p_dkm_click")
        });
    });

    /////////////////////////////////////////////////////////


    //popup

    // const targetElement = document.querySelector('.pop');
    // var j_position = j_pp.offset().top;

    
    var j_mu = $('.menu');
    var j_curs = $('.cursor');    
    // var j_pf3_4mp = $('.pf3_4map');
    // var j_pf3_4_img = $(".pf3_4_img");
    // var j_pf5_2mp = $('.pf5_2map');
    // var j_pf5_2_img = $(".pf5_2_img");
    // var j_pf5_1v = $('.pf5_1v');
    var j_position = j_mu.parent().next().offset().top;


    // j_mu.click(function menu(e) {
    //     $(this).parent().next().css('display','block');
    //     j_m_hr.css('display','none');
    //     j_m_hr.css({visibility:"hidden"});
    //     j_m_fr.css('display','none');
    //     j_m_fr.css({visibility:"hidden"});
    //     j_pf_hb.css("overflow", "hidden");

    //     j_mbh_h.css('display','none');
    //     j_mbh_f.css('display','none');

    //     j_hfm_li.css('display','none');

    //     j_position = $(this).parent().next().offset().top;
    //     // console.log("j_position: "+j_position);

    //     e.preventDefault();

    //     j_pp.animate({scrollTop:0},0); 
    //     j_pp.stop(false,true);
    //     j_pf_hb.animate({ scrollTop:j_position},0); 
    //     j_pf_hb.stop(false,true);


    //     // $('img[usemap]').rwdImageMaps();

    //     $(document).ready(function(e) {
    //         $('img[usemap]').rwdImageMaps();
    
    //         j_pf3_4mp.on('mouseover', function() {

    //             j_pf3_4_img.attr("src","images/md4_hover.png");
    //             j_pf3_4mp.css('cursor', 'none');
    //             j_curs.addClass('cursor-grow');
    
    //         });
    
    //         j_pf3_4mp.on('mouseout', function() {

    //             j_pf3_4_img.attr("src","images/md4.png");
    //             j_pf3_4mp.css('cursor', 'none');
    //             j_curs.removeClass('cursor-grow') 
    //         });

    //         j_pf5_2mp.on('mouseover', function() {

    //             j_pf5_2_img.attr("src","images/v2_hover.png");
    //             j_pf5_2mp.css('cursor', 'none');
    //             j_curs.addClass('cursor-grow');
    
    //         });
    
    //         j_pf5_2mp.on('mouseout', function() {

    //             j_pf5_2_img.attr("src","images/v2.png");
    //             j_pf5_2mp.css('cursor', 'none');
    //             j_curs.removeClass('cursor-grow') 
    //         });
    //     });

    //     // for(var i = 0; i < 6; i++ ){
    //     //     $('video').get(i).currentTime = 0;
    //     // }

    //     // j_pf5_1v.trigger('play');
        
    //     // function jvolvo_v1py() {
    //     //     j_pf5_1v.trigger('play');
    //     // }
        
    //     // if (jvolvo_v1py() !== undefined) {
    //     //     jvolvo_v1py().then((_) => {}).catch((error) => {});
    //     // }

    // });

    // $('#volvo_pop').click(function() {
    //     $('.volvo').css('display','block');

    //     j_m_hr.css('display','none');
    //     j_m_hr.css({visibility:"hidden"});
    //     j_m_fr.css('display','none');
    //     j_m_fr.css({visibility:"hidden"});
    //      j_pf_hb.css("overflow", "hidden");

    //     j_mbh_h.css('display','none');
    //     j_mbh_f.css('display','none');

    //     j_hfm_li.css('display','none');

    //     j_position = $(this).parent().next().offset().top;
    //     // console.log("j_position: "+j_position);

    //     e.preventDefault();

    //     j_pp.animate({ scrollTop:0},0); 
    //     j_pp.stop(false,true);

    //     j_pf5_1v.trigger('play');
    // });





    // j_ce.click(function (e) {
    //     // j_pp.fadeOut(100);
    //     j_pp.css('display','none');
    //     // j_pp.css('display','none');
    //     j_m_hr.css('display','block');
    //     j_m_hr.css({visibility:"visible"});
    //     j_m_fr.css('display','block');
    //     j_m_fr.css({visibility:"visible"});
    //     j_pf_hb.animate({ scrollTop:j_position},0); 
    //     j_pf_hb.css("overflow", "auto");

    //     j_mbh_f.css('display','block');
        
    //     j_hfm_li.css('display','none');

    //     j_curs.removeClass('pf_cursor');

    //     e.preventDefault();

    //     // console.log("j_position: "+j_position);

    //     j_pp.animate({ scrollTop:0},0); 


    //     // $('.pop .sheet video').trigger('pause');

    //     // function jvolvo_v1pe() {
    //         // $('.pop .sheet video').trigger('pause');
    //     // }
    //     // 
    //     // if (jvolvo_v1pe() !== undefined) {
    //         // jvolvo_v1pe().then((_) => {}).catch((error) => {});
    //     // }
    // });

    const mu = document.querySelectorAll('.menu');
    const curs = document.querySelector('.cursor');    
    const pf3_4mp = document.querySelector('.pf3_4map');
    const pf3_4_img = document.querySelector('.pf3_4_img');
    const pf5_2mp = document.querySelector('.pf5_2map');
    const pf5_2_img = document.querySelector('.pf5_2_img');
    const pf5_1v = document.querySelector('.pf5_1v');

    var position = 0;

    mu.forEach(function(event) {
        event.addEventListener('click', function(e) {
            position = window.scrollY;
            console.log("menu_position: "+position);
            var pp = this.parentElement.nextElementSibling;
            pp.style.display = 'block';
            m_hr.style.display = 'none';
            m_hr.style.visibility = 'hidden';
            m_fr.style.display = 'none';
            m_fr.style.visibility = 'hidden';
            pf_h.style.overflow = 'hidden';
            mbh_h.style.display = 'none';
            mbh_f.style.display = 'none';
            hfm_li.style.display = 'none';
            pp.scrollTo({ top: 0, behavior: 'auto' }); // pop scroll refresh
            e.preventDefault();
        });
    });


    ce.forEach(function(event) {
        event.addEventListener('click', function(e) {
            console.log("close_position: "+position);
            pp.forEach(function(event){
                event.style.display = 'none';
            })
            m_hr.style.display = 'block';
            m_hr.style.visibility = 'visible';
            m_fr.style.display = 'block';
            m_fr.style.visibility = 'visible';
            pf_h.style.overflow = 'auto';
            mbh_f.style.display = 'block';
            hfm_li.style.display = 'none';
            curs.classList.remove('pf_cursor');
            e.preventDefault();
            pf_hb.scrollTo({ top: position, behavior: 'auto' });
            
        });
    });


    
    // const positions = [];
    // let position;
    // let pop_pos;
    // let menuId


    // mu.forEach(function(element) {
        
    //     element.addEventListener('click', function(e) {
            
    //         position = window.scrollY;
    //         menuId = positions.length;
    //         positions.push({menuId: menuId, position: position});
    //         pop_pos = positions[menuId].position;
    //         e.preventDefault();
    //         pp.forEach(function(element) {
    //             element.scrollTo({top: 0, behavior: 'smooth'});
    //         });
    //         window.scrollTo({top: pop_pos, behavior: 'smooth'});

    //         console.log(element);
    //         console.log(position);
    //         console.log(positions);
    //         console.log(positions[menuId]);
    //         console.log(menuId);
    //         console.log(positions[menuId].position);
    //         console.log("pop_pos: "+pop_pos);
            
    //         element.parentElement.nextElementSibling.style.display = 'block';
    //         m_hr.style.display = 'none';
    //         m_hr.style.visibility = 'hidden';
    //         m_fr.style.display = 'none';
    //         m_fr.style.visibility = 'hidden';
    //         pf_h.style.overflow = 'hidden';
    //         mbh_h.style.display = 'none';
    //         mbh_f.style.display = 'none';
    //         hfm_li.style.display = 'none';
    //     });
    // });


    // ce.forEach(function(element) {
    //     element.addEventListener('click', function(e) {
            
    //         m_hr.style.display = 'block';
    //         m_hr.style.visibility = 'visible';
    //         m_fr.style.display = 'block';
    //         m_fr.style.visibility = 'visible';
    //         mbh_h.style.display = 'block';
    //         mbh_f.style.display = 'block';
    //         hfm_li.style.display = 'none';
    //         pf_h.style.overflow = 'auto';
    //         curs.classList.remove('pf_cursor');
    //         e.preventDefault();

    //         console.log(element);
    //         console.log(position);
    //         console.log(positions);
    //         console.log(positions[menuId]);
    //         console.log(menuId);
    //         console.log(positions[menuId].position);
    //         console.log("pop_pos: "+pop_pos);

    //         pp.forEach(function(element) {
    //             element.style.display = 'none';
    //             element.scrollTo({top: 0, behavior: 'smooth'});
    //         });
    //         window.scrollTo({top: pop_pos, behavior: 'smooth'});

    //     });
    // });



    let sct_ani = "0"; 
    

    $(".pop .pop_h_inner h3").click(function(){
        j_pp.animate({ scrollTop:0},700,"swing"); 
        j_pp.css("scroll-snap-type", "none");
        sct_ani = "1";

        // j_pf5_1v.trigger('play');

        // var volvo_v1 = document.querySelector('.j_pf5_1v');

        // function volvo_v1py(){ return volvo_v1.play(); }
        // if (volvo_v1py() !== undefined) {
        //     volvo_v1py().then((_) => {}).catch((error) => {});
        // }

    })

    // h3 클릭 시, scrollTop 애니메이션 충돌 방지
    j_pp.on("mousewheel",function(e,delta) {

        if(delta < 0) { //휠을 아래로 돌렸을때
            // console.log("sheet num: "+delta);
            j_pp.stop();
            j_pp.css("scroll-snap-type", "y mandatory");
            sct_ani = "1";
        } 
        else { //휠을 위로 돌렸을때
            // console.log("sheet num: "+delta);
            j_pp.css("scroll-snap-type", "y mandatory");
            j_pp.stop();
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

        j_curs.fadeOut(500);
        j_curs.delay(2000).fadeIn(500);

        // var md = new MobileDetect(navigator.userAgent);
        // let j_curs = document.querySelector(".cursor");


        // if( md.mobile() != null ){
        //     j_curs.style.display = 'none'
        // }

        // $('.cursor ').delay(2000).css('display','block');
        btwp.fadeOut(500);
        // j_pp.css('display','none');
        // j_m_hr.delay(2000).css('display','block');
        j_m_hr.delay(1000).css({visibility:"visible"});
        // j_m_fr.delay(2000).css('display','block');
        j_m_fr.delay(1000).css({visibility:"visible"});
        j_m_hr.delay(1000).fadeIn(100); 
        j_m_fr.delay(1000).fadeIn(100); 

        j_pf_hb.delay(2000).animate({ scrollTop:j_position},0); 
        j_pf_hb.delay(2000).css("overflow", "auto");
        sn.css('display','block');
        j_sec_hm_h2.delay(2000).fadeIn(3500); 

        j_pf_hb.delay(2000).css({overflow:"auto"});//body스크롤없앰}
        j_pf_hb.delay(2000).css({position:"static"});

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
        // j_pp.css('display','none');

        bgm_if_h3.fadeOut(500);
        btwp.fadeOut(500);

        j_m_hr.css('display','block');
        j_m_hr.css({visibility:"visible"});
        j_m_fr.css('display','block');
        j_m_fr.css({visibility:"visible"});
        j_pf_hb.animate({ scrollTop:j_position},0); 
        j_pf_hb.css("overflow", "auto");
        sn.css('display','block');
        j_sec_hm_h2.fadeIn(4500); 

        j_pf_hb.css({overflow:"auto"});//body스크롤없앰}
        j_pf_hb.css({position:"static"});

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
            j_pf_hb.mousewheel(function(event, delta) {
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
            j_pf_hb.mousewheel(function(event, delta) {
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
    //     j_m_hr.animate({ top:"-10vh"},500); 
    //     j_m_fr.animate({ bottom:"-10vh"},500); 

    //     var frameNumm = 0;
    //     var targetFN = 0;

    //     function incZ(){
    //         frameNumm = Math.floor(frameNumm+1);
            
    //         // frameNumm = frameNumm + 1*(targetFN - frameNumm); 
    //         $(".pf_more_iphone").css({"transform":"translateZ("+frameNumm+"vw)"});
    //         j_pfm_img.css({"transform":"translateZ("+frameNumm+"vw)"});
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
        //     j_pfm_img.animation = "congrow 1.5s ease-in-out";
        //     console.log("frameNumm:"+frameNumm);
        // }
        // var expz = setInterval(incZ,1);

    // });

    var more = document.querySelector('.more');

    var morephone = document.querySelector('.pf_more_iphone');
    var moreplus = document.querySelector('.pf_more_img');

    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    var hover_runner = document.querySelector('.hover_runner');


    more.addEventListener('click', () => {

        // e.preventDefault();

        pfmb.style.display='none'
        pfmn.style.display='none'
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


    // JS footer port remote control

    let pf_rm = document.querySelector('.pf-nav');
    
    function port_remote(e){
        let pf_elem = e.target;

        if(!sn){
            pf_elem = null;
            return
        }

        port_move();

        function port_move(){

            window.scrollTo({top: pf_elem.dataset.value, behavior: 'smooth', duration: 1000});
            e.preventDefault();
        
            ck_toggle = "1";
        }

        // console.log(pf_elem.data('value'));
        // console.log("pf_BN: "+pf_elem.dataset.value);
    }

    m_fr.addEventListener('click', port_remote);
    



    var pfnv_li0_sn = document.querySelector('.pf-nav0');
    var pfnv_li1_sn = document.querySelector('.pf-nav1');
    var pfnv_li2_sn = document.querySelector('.pf-nav2');
    var pfnv_li3_sn = document.querySelector('.pf-nav3');
    var pfnv_li4_sn = document.querySelector('.pf-nav4');
    var pfnv_li5_sn = document.querySelector('.pf-nav5');

    window.addEventListener('scroll', function() {
        var b = window.scrollY;
        if((b >=63996) && (b < 86420)) {
            pfnv_li0_sn.classList.remove("pf_nav_active");
            pfnv_li1_sn.classList.remove("pf_nav_active");
            pfnv_li2_sn.classList.remove("pf_nav_active");
            pfnv_li3_sn.classList.remove("pf_nav_active");
            pfnv_li4_sn.classList.remove("pf_nav_active");
            pfnv_li5_sn.classList.remove("pf_nav_active");
        }
        if((b >=86420) && (b < 91499)) {
            pfnv_li0_sn.classList.add("pf_nav_active");
            pfnv_li1_sn.classList.remove("pf_nav_active");
            pfnv_li2_sn.classList.remove("pf_nav_active");
            pfnv_li3_sn.classList.remove("pf_nav_active");
            pfnv_li4_sn.classList.remove("pf_nav_active");
            pfnv_li5_sn.classList.remove("pf_nav_active");
        }
        if((b >=107499) && (b < 114499)) {
            pfnv_li0_sn.classList.remove("pf_nav_active");
            pfnv_li1_sn.classList.add("pf_nav_active");
            pfnv_li2_sn.classList.remove("pf_nav_active");
            pfnv_li3_sn.classList.remove("pf_nav_active");
            pfnv_li4_sn.classList.remove("pf_nav_active");
            pfnv_li5_sn.classList.remove("pf_nav_active");
        }
        if((b >=137370) && (b < 144370)) {
            pfnv_li0_sn.classList.remove("pf_nav_active");
            pfnv_li1_sn.classList.remove("pf_nav_active");
            pfnv_li2_sn.classList.add("pf_nav_active");
            pfnv_li3_sn.classList.remove("pf_nav_active");
            pfnv_li4_sn.classList.remove("pf_nav_active");
            pfnv_li5_sn.classList.remove("pf_nav_active");
        }
        if((b >=163483) && (b < 170483)) {
            pfnv_li0_sn.classList.remove("pf_nav_active");
            pfnv_li1_sn.classList.remove("pf_nav_active");
            pfnv_li2_sn.classList.remove("pf_nav_active");
            pfnv_li3_sn.classList.add("pf_nav_active");
            pfnv_li4_sn.classList.remove("pf_nav_active");
            pfnv_li5_sn.classList.remove("pf_nav_active");
        }
        if((b >=186502) && (b < 193503)) {
            pfnv_li0_sn.classList.remove("pf_nav_active");
            pfnv_li1_sn.classList.remove("pf_nav_active");
            pfnv_li2_sn.classList.remove("pf_nav_active");
            pfnv_li3_sn.classList.remove("pf_nav_active");
            pfnv_li4_sn.classList.add("pf_nav_active");
            pfnv_li5_sn.classList.remove("pf_nav_active");
        }
        if((b >=204717) && (b < 211717)) {
            pfnv_li0_sn.classList.remove("pf_nav_active");
            pfnv_li1_sn.classList.remove("pf_nav_active");
            pfnv_li2_sn.classList.remove("pf_nav_active");
            pfnv_li3_sn.classList.remove("pf_nav_active");
            pfnv_li4_sn.classList.remove("pf_nav_active");
            pfnv_li5_sn.classList.add("pf_nav_active");
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



    pfn_bn.forEach(function(id) {
        var element = document.querySelector("#" + id);
        element.addEventListener("mouseenter", function(e) {
            e.preventDefault();
            mouseCursor.classList.remove("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "1";
        });
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



    ypaint_hide3.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.classList.remove("cursor-grow");
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

    j_pf_hb.on('mouseover', 'a', function (e) {
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
