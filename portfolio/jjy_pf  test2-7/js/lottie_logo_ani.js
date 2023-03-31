

    // loading

    const lg_an = document.querySelector("#logo_ani");
    const wrp = document.querySelector(".wrapper");
    const prog = document.querySelector('#progress');
    const progressBar = prog.querySelector('.progress-bar');
    const progressText = prog.querySelector('.progress-text');
    const imgLoad = imagesLoaded(document.body);
    const imgTotal = imgLoad.images.length;
    let imgLoaded = 0;
    let current = 0;


    const fadeOut = (element, duration, callback) => {
        element.style.transition = `opacity ${duration / 1000}s`;
        element.style.opacity = 0;
        
        setTimeout(() => {
            element.style.display = 'none';
            if (typeof callback === 'function') callback();
        }, duration);
    }

    function lottie_logo(){
        LottieInteractivity.create({
            player:'#logo_ani',
            renderer:'svg',
            disableCheck:'true',
            mode:"chain",
            actions: [
                {
                    state: 'autoplay',
                    delay: 1000
                }
            ]
        });
    }

    

    function isMobile(){
        var UserAgent = navigator.userAgent;
        if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
            return true;
        } else {
            return false;
        }
    };


    const mine3 = {js:{type:'text/javascript'}};

    const WorkerPromise3 = (f) => {
        let resolve3, reject3;
        
        const worker3 = Object.assign(
            new Worker(
                URL.createObjectURL(
                new Blob([`onmessage=e=>postMessage((${f})(e.data3));`], mine3.js) 
                )
            ),
            { onmessage3: (e) => resolve3(e.data3), onerror3: (e) => reject3(e.data3) } 
        );
        return (data3) =>
            new Promise((res3, rej3) => {
                resolve3 = res3;
                reject3 = rej3;
                worker3.postMessage(data3); 
            });
    };

    WorkerPromise3(lottie_logo());


    const imagesProgress = () => {

        imgLoad.on('progress', () => {
            imgLoaded++;
        });


        const updateProgress = () => {
            let target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;
            // console.log("current: "+current)
            progressBar.style.width = current + '%';
            progressText.textContent = Math.floor(current) + '%';

            if (current >= 100) {
                clearInterval(progressTimer);
                prog.classList.add('progress-complete');
                setTimeout(() => {
                    // progressBar.add(progressText).delay = 1000;
                    progressBar.style.opacity = 1;
                    progressText.style.opacity = 1;

                    WorkerPromise3(lottie_logo());
                    // lottie_logo();

                    fadeOut(pf_cr, 1000, () =>  {
                        // Callback function to be executed after the element has faded out
                        prog.style.display = "none";
                        curs.style.display = "none";

                        if (current === 100) {
                            let t = 0;

                            logoAni = () => {
                                t = t + 1;
                                // console.log(t);
                                // tm.textContent = t;
                                if (t == 6) {
                                    lg_an.style.display = "none"; //로딩표시영역 사라짐
                                    pf_cr.style.opacity = '1';
                                    pf_cr.style.display = "block";
                                    // fadeIn(wrp, 2000);
                                    // fadeIn(stpp, 2000);
                                    wrp.style.display = "block";
                                    stpp.style.display = "block";
                                    wrp.style.visibility = "visible";
                                    sect.forEach(element => {
                                        element.style.visibility = "visible";
                                    });
                                    pf_b.style.backgroundColor = "white";
                                    pf_hb.style.overflow = "auto";
                                    skr_by.style.backgroundColor = "white";

                                    if(isMobile()){
                                        curs.style.display = 'none' //모바일페이지
                                    } else {
                                        curs.style.display = 'block'  //PC용 페이지
                                    }

                                    clearInterval(t);
                                }else if(t < 6){
                                    lg_an.style.display = "block"; //로딩표시영역 사라짐
                                    pf_b.style.position = "fixed";
                                    pf_b.style.overflow = "hidden";
                                    skr_by.style.backgroundColor = "black";
                                    m_hr.style.display = "none";
                                    sect.forEach(element => {
                                        element.style.visibility = "hidden";
                                    });
                                    stpp.style.display = "none";
                                    wrp.style.display = "none";
                                    curs.style.display = "none";
                                    m_fr.style.display = "none";
                                    pf_b.style.overflow = "hidden";
                                }     
                            }
                            setInterval(logoAni, 1000); //0.1초마다 aniNext 함수 실행
                        }
                    });
                }, 1000);
            }
            if (current > 99.9) {
                current = 100;
            }
        }
        const progressTimer = setInterval(updateProgress, 1000/15);
        // console.log("progressTimer: "+progressTimer)
    }
    imagesProgress()
    
    // WorkerPromise3(imagesProgress());
