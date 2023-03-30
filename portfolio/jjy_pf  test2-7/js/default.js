$(function(){

    let j_pf_hb = $("html,body");

    let pf_hb = document.querySelector("html, body");
    let pf_h = document.querySelector("html");
    let pf_b = document.querySelector("body");
    let pf_cr = document.querySelector("#container");
    let m_hr = document.querySelector('header');
    let logo = document.querySelector('.logo');


    // JS header evnet delegation nav

    const header_click = (e) => {
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
    

    
        const c_hide = () => {
            pf_cr.style.display = "none";
        }
    
        const c_quick = () => {
            pf_h.scrollTop = h_elem.dataset.value;
        }
    
        const c_fi = () => {
            setTimeout(function() {
                pf_cr.style.display = "block";
            }, 1000);
        }

        c_hide();
        c_quick();
        c_fi();
    
        // console.log(h_elem_c);
        // console.log(h_elem.dataset.value);
    }
    m_hr.addEventListener("click", header_click,{passive: false});


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

    window.addEventListener('scroll', () => {
        let b = window.scrollY;
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

    },{passive: true});


    ///////////////////////////////////////////////////////////////////////////////
    // JS portfolio back & next
    
    let m_pf =  document.querySelector('.portfolio');
    let pf_ani = document.querySelectorAll(".pf_ani");
    let sn = document.querySelector('span');

    const cursor_blink = () => {
        curs.style.opacity = '0';
        setTimeout(() => {
        curs.style.opacity = '1';
        }, 1000); 
    }
    
    const port_nb = (e) => {
        let port_elem = e.target;

        if(!sn){
            port_elem = null;
            return
        }

        

        portfolio_move = () =>{
            window.scrollTo({top: port_elem.dataset.value, behavior: 'smooth', duration: 1000});
            e.preventDefault();
            ck_toggle = "1";
        }
        // console.log("pf_BN: "+port_elem.dataset.value);

        portfolio_move();
        cursor_blink();

    }


    pf_ani.forEach((element) => {
        element.addEventListener('click', port_nb,{passive: false});
    });
    

    
    const pfn_bn = ["pf1back","pf2back","pf3back","pf4back","pf5back","pf6back","pf1next","pf2next","pf3next","pf4next","pf5next","pf6next",];

    let pf1b = document.querySelector("#pf1back");
    let pf2b = document.querySelector("#pf2back");
    let pf3b = document.querySelector("#pf3back");
    let pf4b = document.querySelector("#pf4back");
    let pf5b = document.querySelector("#pf5back");
    let pfmb = document.querySelector("#pf6back");

    let pf1n = document.querySelector("#pf1next");
    let pf2n = document.querySelector("#pf2next");
    let pf3n = document.querySelector("#pf3next");
    let pf4n = document.querySelector("#pf4next");
    let pf5n = document.querySelector("#pf5next");
    let pfmn = document.querySelector("#pf6next");


    window.addEventListener('scroll', () => {
        let b = window.scrollY;

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

    },{passive: true});

    

    ///////////////////////////////////////////////////////////////////////////////

    // pf2 zerolab eye animation 

    let pf2m = document.querySelector('.pf2_monitor');
    let eye = document.querySelector('.pf2_eye');

    pf2m.addEventListener('mouseover', () => {
        eye.style.bottom = '0%'
        eye.style.left = '0%'
        eye.style.left = '0%'
        // eye.style.transition = "ease-in-out 0.2s";
        eye.style.transition = "0.3s ease-in-out 0.2s";
    });

    pf2m.addEventListener('mouseout',() => mouseout(),{passive: false});

    const mouseout = () => {
        eye.style.bottom = '-44%'
        eye.style.left = '-26%'
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////

    // pf4 happysocks intro

    let pf4p = document.querySelector('.pf4_iphone');
    let wbox1 = document.querySelector('.ypaint_hide1');
    let wbox2 = document.querySelector('.ypaint_hide2');
    let pf4subp = document.querySelector('.pf4_subp');
    let smile = document.querySelector('.smile');
    let smile2p = document.querySelector('.cls-3');
    let smile2 = document.querySelector('#smile2');
    let blind= document.querySelector('.blind');

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

    },{passive: false});

    pf4p.addEventListener('mouseout',() => pf4_mouseout(),{passive: false});

    const pf4_mouseout = () => {
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

    let pfmore = document.querySelector('.pf_more_iphone');
    let pfmore_img = document.querySelector('.pf_more_img');
    let hr_rn = document.querySelector('.hover_runner');


    pfmore.addEventListener('mouseover', () => {
        // pfmore_img.src="images/more_view.gif"
        hr_rn.style.display = 'block'
    },{passive: false});

    pfmore.addEventListener('mouseout',() => pf_more_mouseout(),{passive: false});

    const pf_more_mouseout = () => {
        // pfmore_img.src="images/more_bg.png"
        hr_rn.style.display = 'none'
    }


    //////////////////////////////////////////////////////////

    // JS function menu 

    let hfm_toggle = "0";
    let hfm_bt = document.querySelector(".hfm_btn");
    let hfm_li = document.querySelector(".hfm_list");
    let hfm_li_a = document.querySelector(".hfm_list");
    let mn_h = document.querySelector(".menu_hide");

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

    
    pf_b.addEventListener('click', (e) => {
            let c_target = e.target.parentNode.getAttribute('class');
            let menu_hide = e.target.getAttribute('class');
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
    },{passive: false});

    

    let mdh_toggle = "0";
    let mbh_h = document.querySelector('.mbh_h');
    let mbh_f = document.querySelector('.mbh_f');
    let m_fr = document.querySelector('footer');


    mn_h.addEventListener('click', () => {//버튼을 클릭했을 때

        mdh_toggle = "1";
        
    //     // hfm_li.toggle();
        m_hr.animate([{ top:"-10vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'}); 
        m_fr.animate([{ bottom:"-10vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'}); 
        mbh_h.style.display = 'block'
        mbh_f.style.display = 'block'
    //     // m_hr.animate({ top:"-10vh", behavior: 'smooth', duration: 1000}); 
    //     // m_fr.animate({ bottom:"-10vh", behavior: 'smooth', duration: 1000});

        // console.log("menu_hide click");

    },{passive: false});


    mbh_f.addEventListener('mouseover', () =>{//버튼을 클릭했을 때

        mdh_toggle = "0";

        m_hr.animate([{ top:"0vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'});
        m_fr.animate([{ bottom:"0vh"}], { fill: "forwards", duration: 500, behavior: 'smooth'}); 
        mbh_h.style.display = 'none'
        mbh_f.style.display = 'none'

        // console.log("j_mbh_f mouseover");
    },{passive: false});


    // //////////////////////////////////////////////////////////


    // darkmode


    let toggle = "0";

    let dkm = document.querySelector(".darkmode");
    let pp = document.querySelectorAll('.pop');
    let p_dkm = document.querySelector(".pop_darkmode");
    let p_dkm_a = document.querySelectorAll(".pop_darkmode");
    let p_h_a = document.querySelectorAll(".pop_h");
    let p_f_a = document.querySelectorAll(".pop_f");
    let sec_hm = document.querySelector(".home");
    let sec_hm_h2 = document.querySelector(".sl_gd");
    let sec1_vimg = document.querySelector(".runners");
    let sec1_ty_h3 = document.querySelector(".tw_1");
    let sec1_ty_p =  document.querySelector(".tw_2");
    let sec2_ty2 = document.querySelector(".typo2");
    let bkb = document.querySelector(".bkbox");
    let sc1 = document.querySelector("#screen");
    let sc2 = document.querySelector("#screen2");
    let eh_1 = document.querySelector(".eye_hide1");
    let eh_2 = document.querySelector(".eye_hide2");
    let pf4_yh3= document.querySelector(".ypaint_hide3");
    let hfm_lt_li = document.querySelector(".hfm_list li");
    let ph_in = document.querySelectorAll(".pop_h_inner");
    let pp_t = document.querySelectorAll(".pp_t");
    let pf_in = document.querySelectorAll(".pop_f_inner");
    let ce = document.querySelectorAll(".close");
    let pfm_bg = document.querySelector(".pfmore_bg");
    let pfm_img = document.querySelector(".pf_more_img");
    let skr_by = document.querySelector("#skrollr-body");

 
    const dark_on = () => {
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

        pfn_bn.forEach((id) => {
            let element = document.querySelector("#" + id);
            if (element) {
                element.style.color = "white";
            }
        });

        eh_1.style.backgroundColor = "black";
        eh_2.style.backgroundColor = "black";
        pf4_yh3.style.backgroundColor = "black";
        sc2.style.filter = "invert(100)";

        p_h_a.forEach((element) => {
            element.style.filter = "invert(100)";
        });
        p_f_a.forEach((element) => {
            element.style.filter = "invert(100)";
        });

        hfm_li_a.style.filter = "invert(100)";

        pp_t.forEach((element)=>{
            element.style.fontWeight = "400";
        });
        ce.forEach((element)=>{
            element.style.fontWeight = "400";
        });
        // ce.style.fontWeight = "400";
        pf_in.forEach(el =>{
            el.style.fontWeight = "400";
        })
        dkm.textContent = "Dark mode on";
        pfm_bg.style.backgroundColor = "black";
        pfm_img.style.filter = "invert(100)";
        hr_rn.style.filter = "invert(100)";
    }

    const dark_off = () => {
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

        pfn_bn.forEach((id) => {
            let element = document.querySelector("#" + id);
            if (element) {
                element.style.color = "black";
            }
        });

        eh_1.style.backgroundColor = "white";
        eh_2.style.backgroundColor = "white";
        pf4_yh3.style.backgroundColor = "white";
        sc2.style.filter = "invert(0)";

        p_h_a.forEach(element => {
            element.style.filter = "invert(0)";
        });
        p_f_a.forEach(element => {
            element.style.filter = "invert(0)";
        });

        hfm_li_a.style.filter = "invert(0)";
        pp_t.forEach(element=>{
            element.style.fontWeight = "300";
        });

        ce.forEach(element=>{
            element.style.fontWeight = "300";
        });
        // ce.style.fontWeight = "300";
        pf_in.forEach(el => {
            el.style.fontWeight = "400";
        })
        dkm.textContent = "Dark mode off";
        pfm_bg.style.backgroundColor = "white";
        pfm_img.style.filter = "invert(0)";
        hr_rn.style.filter = "invert(0)";
    }


    dkm.addEventListener("click", e => {
        if (toggle === "0") {
            dark_on();
        } else {
            dark_off();
        }
        // console.log("dkm_click")
    },{passive: false});

    p_dkm_a.forEach(element => {
        element.addEventListener("click", (e) => {
        e.preventDefault();
        if (toggle === "0") {
            dark_on();
        } else {
            dark_off();
        }
            // console.log("p_dkm_click")
        },{passive: false});
    });

    /////////////////////////////////////////////////////////


    //popup


    const mu = document.querySelectorAll('.menu');
    const curs = document.querySelector('.cursor');    
    const pf3_4mp = document.querySelector('.pf3_4map');
    const pf3_4_img = document.querySelector('.pf3_4_img');
    const pf5_2mp = document.querySelector('.pf5_2map');
    const pf5_2_img = document.querySelector('.pf5_2_img');
    const pf5_1v = document.querySelector('.pf5_1v');

    let position = 0;

    mu.forEach(event => {
        event.addEventListener('click', function(e){
            position = window.scrollY;
            // console.log("menu_position: "+position);
            let pp_th = this.parentElement.nextElementSibling;
            pp_th.style.display = 'block';
            m_hr.style.display = 'none';
            m_hr.style.visibility = 'hidden';
            m_fr.style.display = 'none';
            m_fr.style.visibility = 'hidden';
            pf_h.style.overflow = 'hidden';
            mbh_h.style.display = 'none';
            mbh_f.style.display = 'none';
            hfm_li.style.display = 'none';
            pp_th.scrollTo({ top: 0, behavior: 'auto' }); // pop scroll refresh
            pp_t.forEach((element)=>{
                element.style.fontWeight = "300";
            });
            pf_in.forEach(el =>{
                el.style.fontWeight = "400";
            })
            e.preventDefault();

            imageMapResize();

            pf3_4mp.addEventListener('mouseover', () => {
                pf3_4_img.setAttribute('src', 'images/md4_hover.png');
                pf3_4mp.style.cursor = 'none';
                curs.classList.add('cursor-grow');
            },{passive: false});
        
            pf3_4mp.addEventListener('mouseout', () => {
                pf3_4_img.setAttribute('src', 'images/md4.png');
                pf3_4mp.style.cursor = 'none';
                curs.classList.remove('cursor-grow');
            },{passive: false});
        
            pf5_2mp.addEventListener('mouseover', () => {
                pf5_2_img.setAttribute('src', 'images/v2_hover.png');
                pf5_2mp.style.cursor = 'none';
                curs.classList.add('cursor-grow');
                });
        
            pf5_2mp.addEventListener('mouseout', () => {
                pf5_2_img.setAttribute('src', 'images/v2.png');
                pf5_2mp.style.cursor = 'none';
                curs.classList.remove('cursor-grow');
            },{passive: false});
        },{passive: false});
    });


    ce.forEach(event => {
        event.addEventListener('click', e => {
            // console.log("close_position: "+position);
            pp.forEach(event => {
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
            
        },{passive: false});
    });





    let sct_ani = "0"; 
    
    pp_t.forEach(el => {
        el.addEventListener('click', () => {
            pp.forEach(element => {
                element.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                element.style.scrollSnapType = 'none';
                sctAni = '1';
            });
        },{passive: false});
    });

    pp.forEach(el => {
        const sc_ty = () => {
            el.style.scrollSnapType = 'y mandatory';
        };
                el.addEventListener('wheel', e => {
                    const delta = e.deltaY;
                    // console.log("delta: "+delta);
                    
                    if (delta > 0) {
                        sc_ty();
                        pp.forEach(element => {
                            element.addEventListener('scroll',()=>{},{passive: true})
                            // console.log("pp.scrollTop: "+element.scrollTop);
                        });
                        sctAni = '1';
                    } else {
                        sc_ty();  
                        pp.forEach(element => {
                            element.addEventListener('scroll',()=>{},{passive: true})
                            // console.log("pp.scrollTop: "+element.scrollTop);
                        });
                        sctAni = '1';
                    }
                },{passive: true});  
    });
    

    const scrollanimate = () => {
        const target_c = document.querySelector('.v_circle');
        const circle_position = target_c.getBoundingClientRect().top;
        const screen_position = window.innerHeight / 2;

        const c1 = parseInt(circle_position)
        const c2 = parseInt(screen_position)

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
    window.addEventListener('scroll',scrollanimate,{passive: false});

    


    /////////////////////////////////////////////////////////

    // sound

    // let scroll =new AudioFade('#scrollsound', 8000).init();

    let audio = new Audio('sound/JJ_pf_beat.mp3');

    let sound_toggle = "0";



    let bgmst = document.querySelector('#bgmstart');
    let sdwave = document.querySelector('.soundwave');

    let sdwv = document.querySelector('.soundwave');
    let stpp = document.querySelector('.startpop');
    let bgm_if_h3 = document.querySelector('.bgm_info_h3');
    let btwp = document.querySelector('.btwrap');
    let sect = document.querySelectorAll('section');
    let sd_tg = document.querySelector(".sound_toggle");
    let p_sd_tg_img = document.querySelectorAll(".pop_sound_toggle");


    bgmst.addEventListener('click', async () => {
        try {
            const start_pop_fdo = () => {
                return new Promise(resolve => {
                    sec_hm_h2.style.opacity = '0';
                    bgm_if_h3.style.opacity = '0';
                    btwp.style.opacity = '0';
                    curs.style.opacity = '0';
                    m_hr.style.opacity = '0';
                    m_fr.style.opacity = '0';
                    bgm_if_h3.style.transition = 'ease-in-out 0.5s';
                    btwp.style.transition = 'ease-in-out 0.5s';
                    // curs.style.transition = "ease-in-out 1s";
                    resolve();
                });
            };

            const pf_fdi = () => {
                return new Promise(resolve => {
                    // curs.style.transition = "all ease-in-out 1s";
                    sect.forEach((section) => {
                        section.style.display = 'block';
                        section.style.visibility = 'visible';
                    });
                    pf_hb.scrollTo(0, position);
                    pf_b.style.overflow = 'auto';
                    pf_b.style.position = 'static';
                    sd_tg.textContent = 'Sound on';
                    p_sd_tg_img.forEach((section) => {
                        section.src = 'images/volume.svg';
                    });
                    setTimeout(() => {
                        stpp.style.opacity = '0';
                        stpp.style.transition = 'ease-in-out 0.3s';
                        sdwv.style.opacity = '0';
                        sdwv.style.transition = 'ease-in-out 0.3s';
                        resolve();
                    }, 500);
                });
            };

            const st_fdo = () => {
                return new Promise(resolve => {
                    m_hr.style.display = 'block';
                    m_fr.style.display = 'block';
                    m_hr.style.visibility = 'visible';
                    m_fr.style.visibility = 'visible';
                    curs.style.opacity = '1';
                    setTimeout(() => {
                        m_hr.style.opacity = '1';
                        m_fr.style.opacity = '1';
                        m_hr.style.transition = 'ease-in-out 0.1s';
                        m_fr.style.transition = 'ease-in-out 0.1s';
                        sec_hm_h2.style.opacity = '1';
                        sec_hm_h2.style.transition = 'ease-in-out 0.1s';
                        stpp.style.display = 'none';
                        bgm_if_h3.style.display = 'none';
                        btwp.style.display = 'none';
                        resolve();
                    }, 1000);
                });
            };

            const soundpy = () => {
                return new Promise(resolve => {
                audio.play();
                audio.autoplay = true;
                audio.loop = true;
                audio.volume = 0.5;
                sdwave.play();

                    // Pause the sound after 2 seconds
                    setTimeout(() => {
                        sdwave.play();
                        resolve();
                    }, 2000);
                });
            }

            start_pop_fdo();
            await soundpy();
            await pf_fdi();
            await st_fdo();
        } catch (error) {
            console.error(error);
        }
    },{passive: false});


    sd_tg.addEventListener('click', () => {
        const soundpy = () => {
            audio.play();
            audio.autoplay = true;
            audio.loop = true;
            audio.volume = 0.5;
        };
        if (soundpy() !== undefined) {
            soundpy().then((_) => {}).catch((error) => {});
        }
    
        const soundpe = () => {
            audio.pause();
        };
        if (soundpe() !== undefined) {
            soundpe().then((_) => {}).catch((error) => {});
        }
    
        if(sound_toggle=="0") {
            sound_toggle = "1";
            soundpe();
            sd_tg.textContent = 'Sound off';
            p_sd_tg_img.forEach(el => el.setAttribute("src", "images/volume_mute.svg"));
            
        } else {
            sound_toggle = "0"; 
            soundpy();
            sd_tg.textContent = 'Sound on';
            p_sd_tg_img.forEach(el => el.setAttribute("src", "images/volume.svg"));
        }
    },{passive: false});

    p_sd_tg_img.forEach(el => {
        el.addEventListener('click', () => {
            const soundpy = () => {
                audio.play();
                audio.autoplay = true;
                audio.loop = true;
                audio.volume = 0.5;
            }
            if (soundpy() !== undefined) {
                soundpy().then((_) => {}).catch((error) => {});
            }
        
            const soundpe = () => {
            audio.pause();
            }
            if (soundpe() !== undefined) {
                soundpe().then((_) => {}).catch((error) => {});
            }
        
            if (sound_toggle == "0") {
                sound_toggle = "1";
                soundpe();
                p_sd_tg_img.forEach(el => el.setAttribute("src", "images/volume_mute.svg"));
                sd_tg.textContent = 'Sound off';
                } else {
                sound_toggle = "0";
                soundpy();
                p_sd_tg_img.forEach(el => el.setAttribute("src", "images/volume.svg"));
                sd_tg.textContent = 'Sound on';
            }
        });
    },{passive: false});

    const bgm_cl = document.querySelector('#closepop');
    

    bgm_cl.addEventListener('click', async () => {
        try {
            const start_pop_fdo = () => {
                return new Promise((resolve) => {
                    sec_hm_h2.style.opacity = '0';
                    bgm_if_h3.style.opacity = '0';
                    btwp.style.opacity = '0';
                    curs.style.opacity = '0';
                    m_hr.style.opacity = '0';
                    m_fr.style.opacity = '0';
                    bgm_if_h3.style.transition = 'ease-in-out 0.5s';
                    btwp.style.transition = 'ease-in-out 0.5s';
                    resolve();
                });
            };

            const pf_fdi = () => {
                return new Promise((resolve) => {
                    sect.forEach((section) => {
                        section.style.display = 'block';
                        section.style.visibility = 'visible';
                    });
                    pf_hb.scrollTo(0, position);
                    pf_b.style.overflow = 'auto';
                    pf_b.style.position = 'static';
                    sound_toggle = "1";
                    p_sd_tg_img.forEach(el => el.setAttribute("src", "images/volume_mute.svg"));
                    sd_tg.textContent = 'Sound off';
                    stpp.style.opacity = '0';
                    stpp.style.transition = 'ease-in-out 0.3s';
                    sdwv.style.opacity = '0';
                    sdwv.style.transition = 'ease-in-out 0.3s';
                    resolve();
                });
            };

            const st_fdo = () => {
                return new Promise((resolve) => {
                    m_hr.style.display = 'block';
                    m_fr.style.display = 'block';
                    m_hr.style.visibility = 'visible';
                    m_fr.style.visibility = 'visible';
                    curs.style.opacity = '1';
                    m_hr.style.opacity = '1';
                    m_fr.style.opacity = '1';
                    m_hr.style.transition = 'ease-in-out 0.1s';
                    m_fr.style.transition = 'ease-in-out 0.1s';
                    stpp.style.display = 'none';
                    bgm_if_h3.style.display = 'none';
                    btwp.style.display = 'none';
                    setTimeout(() => {
                        sec_hm_h2.style.opacity = '1';
                        sec_hm_h2.style.transition = 'ease-in-out 0.1s';
                        resolve();
                    }, 1000);
                });
            };
            start_pop_fdo();
            pf_fdi();
            st_fdo();
        } catch (error) {
            console.error(error);
        }
    },{passive: false});



    // fullscreen toggle 
    

    let toggleFullscreen = document.querySelector('.pop_fullscreen_toggle')
    let toggleFullscreenBtn = document.querySelectorAll('.pop_fullscreen_toggle')
    // let container = document.querySelector('#skrollr-body')
    let container = document.querySelector('#skrollr-body')
    // let container2 = document.querySelector('body')
    let pp_fc_tgg_img = $(".pop_fullscreen_toggle img");
    let sc_tg = $(".screen_toggle");
    let screen_toggle = "0"; 

    $(".pop_fullscreen_toggle").click(() => {//버튼을 클릭했을 때

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
            // let container = document.querySelector('#skrollr-body')
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
            // let container2 = document.querySelector('body')
            // toggleFullScreen(container2);
        }
        
    });


    let fullscreen = element => {
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

    let more = document.querySelector('.more');

    let morephone = document.querySelector('.pf_more_iphone');
    let moreplus = document.querySelector('.pf_more_img');

    let header = document.querySelector('header');
    let footer = document.querySelector('footer');



    more.addEventListener('click', () => {

        // e.preventDefault();

        pfmb.style.display='none'
        pfmn.style.display='none'
        morephone.style.animation = "phgrow 1.0s ease-in-out";
        morephone.style.animationFillMode = "both";
        moreplus.style.animation = "congrow 1.15s ease-in-out";
        moreplus.style.animationFillMode = "both";

        header.style.animation = "header_ani 0.5s ease-in-out";
        header.style.animationFillMode = "both";
        footer.style.animation = "footer_ani 0.5s ease-in-out";
        footer.style.animationFillMode = "both";

        hr_rn.style.opacity = '0';
        hr_rn.style.transition = "0.1s ease-out 0.1s";

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
    
    let pop = document.querySelector(".pop");


    let eye_hide1 = document.querySelector(".eye_hide1");
    let eye_hide2 = document.querySelector(".eye_hide2");



    let ypaint_hide3 = document.querySelector(".ypaint_hide3");

    let pftotal = document.querySelector("html,body");
    //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함

    //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
    const cursor = (e) => {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY - scrollY + "px";
    }

    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);

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



    pf_nav.forEach((element)=>{
        element.addEventListener("mouseover", () => {
        mouseCursor.classList.remove("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
        })
    });

    let ck_toggle = "0";


    // JS footer port remote control

    let pf_rm = document.querySelector('.pf-nav');
    
    const port_remote = (e) => {
        let pf_elem = e.target;

        if(!sn){
            pf_elem = null;
            return
        }

        const port_move = () => {

            window.scrollTo({top: pf_elem.dataset.value, behavior: 'smooth', duration: 1000});
            e.preventDefault();
        
            ck_toggle = "1";
        }

        port_move();

        // console.log(pf_elem.data('value'));
        // console.log("pf_BN: "+pf_elem.dataset.value);
    }

    m_fr.addEventListener('click', port_remote);
    



    let pfnv_li0_sn = document.querySelector('.pf-nav0');
    let pfnv_li1_sn = document.querySelector('.pf-nav1');
    let pfnv_li2_sn = document.querySelector('.pf-nav2');
    let pfnv_li3_sn = document.querySelector('.pf-nav3');
    let pfnv_li4_sn = document.querySelector('.pf-nav4');
    let pfnv_li5_sn = document.querySelector('.pf-nav5');

    window.addEventListener('scroll', () => {
        let b = window.scrollY;
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
    },{passive: true});


    pf_ani.forEach(element => {
        element.addEventListener("mouseover", () => {
            mouseCursor.classList.add("pf_cursor");
            // mouseCursor.classList.remove("cursor");
            mouseCursor.classList.add("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "1";
        })
        element.addEventListener("mouseleave", () => {
            // mouseCursor.classList.add("cursor");
            mouseCursor.classList.remove("pf_cursor");
            mouseCursor.classList.remove("cursor-grow");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "0";
        })
    })




    pfn_bn.forEach((id) => {
        let element = document.querySelector("#" + id);
        element.addEventListener("mouseenter", e => {
            e.preventDefault();
            mouseCursor.classList.remove("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            hover_toggle = "1";
        },{passive: false});
    });



    eye_hide1.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.classList.remove("cursor-grow");
        // mouseCursor.style.cursor = "none";
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    },{passive: false});
    eye_hide2.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        // mouseCursor.style.cursor = "none";
        mouseCursor.classList.remove("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    },{passive: false});
    // eye_hide2.addEventListener("mouseover", () => {
    //     mouseCursor.style.cursor = "none";
    // });



    ypaint_hide3.addEventListener("mouseenter", () => {
        mouseCursor.classList.remove("pf_cursor");
        mouseCursor.classList.remove("cursor-grow");
        mouseCursor.style.zIndex = "1100";
        hover_toggle = "1";
    },{passive: false});



    // cursor mouse control

    let pop_hover = "0";

    // let pfs = [...gebescon, ...zerolab, ...mohenic, ...happysocks, ...volvo];

    let pfs_sts = document.querySelectorAll(".sheet")

    
    pfs_sts.forEach(el => {
        el.addEventListener("mouseover", () => {
                    mouseCursor.classList.add("pf_cursor");
                    mouseCursor.style.zIndex = "1100";
                    // hover_toggle = "1";
                    pop_hover = "1";
        },{passive: false});
    });
    
    p_h_a.forEach((el) => {
        el.addEventListener("mouseover", () => {
            mouseCursor.classList.remove("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            // hover_toggle = "1";
            pop_hover = "1";
        },{passive: false});
    });


    p_f_a.forEach(el => {
        el.addEventListener("mouseover", () => {
            mouseCursor.classList.remove("pf_cursor");
            mouseCursor.style.zIndex = "1100";
            // hover_toggle = "1";
            pop_hover = "1";
        },{passive: false});
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


    },{passive: false});

    // chrome left bottom a tag tooltip remove


    function clickHandler(event){
        let href = this.getAttribute('data-href');
        window.location.href = href;
    }

    let links = pf_hb.querySelectorAll('a, area');
    links.forEach(link => {
        let hrefs = link.getAttribute('href') || link.getAttribute('data-href');

        link.removeEventListener('click', clickHandler);
        link.addEventListener('click', clickHandler);
        link.setAttribute('data-href', hrefs);
        link.removeAttribute('href');
        
        link.addEventListener('mouseover', function(event){
            hrefs = this.getAttribute('href') || this.getAttribute('data-href');
            this.setAttribute('data-href', hrefs);
            event.preventDefault();
        },{passive: false});
        
    });

});
