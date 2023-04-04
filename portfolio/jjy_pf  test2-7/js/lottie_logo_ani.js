

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


    const fadeIn = (element, duration, callback) => {
        element.style.transition = `ease-in-out ${duration / 1000}s`;
        element.style.opacity = 1;
        
        setTimeout(() => {
            element.style.display = 'block';
            if (typeof callback === 'function') callback();
        }, duration);
    }

    const fadeOut = (element, duration, callback) => {
        element.style.transition = `ease-in-out ${duration / 1000}s`;
        element.style.opacity = 0;
        
        setTimeout(() => {
            element.style.display = 'none';
            if (typeof callback === 'function') callback();
        }, duration);
    }

    lottie_logo = () => {
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



    const imgpg = () => {
        imgLoad.on('progress', () => {
            imgLoaded++;
        });
    };

    const up_imgpg = () => {
            let target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;
            progressBar.style.width = current + '%';
            progressText.textContent = Math.floor(current) + '%';
            // console.log("imgLoaded: "+imgLoaded)
            // console.log("imgTotal: "+imgTotal)
    }

    const pg_fdo = () => {
            prog.classList.add('progress-complete');
            setTimeout(() => {
                // progressBar.add(progressText).delay = 1000;
                progressBar.style.opacity = 1;
                progressText.style.opacity = 1;
                fadeOut( prog, 300, () => {});
            }, 1000);
    } 

    const lg_st = () => {
            setTimeout(()=>{
                lottie_logo();
            },1000)
    }

    const lg_ed = () => {
            fadeOut( lg_an, 300, () => {});
    }

    const cr_fdo = () => {
            fadeOut(pf_cr, 300, () =>  {});
            curs.style.display = "none";
    } 

    const stpp_fdi = () => {
            fadeIn( stpp, 500,()=>{});
    } 
    const cr_fdi = () => {
        setTimeout(()=>{
            fadeIn( pf_cr, 300,()=>{});
        },1000);
    }

    const pf_loading = () => {
            lg_an.style.display = "block"; //로딩표시영역 사라짐
            pf_b.style.position = "fixed";
            pf_b.style.overflow = "hidden";
            skr_by.style.backgroundColor = "black";
            m_hr.style.display = "none";
            sect.forEach(element => {
                element.style.visibility = "hidden";
            });
            stpp.style.display = "block";
            stpp.style.visibility = "visible";
            stpp.style.opacity = 0;
            wrp.style.display = "none";
            curs.style.display = "none";
            m_fr.style.display = "none";
            pf_b.style.overflow = "hidden";
    }

    const pf_start = () => {
            wrp.style.display = "block";
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
    } 


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

    

    const WorkerPromise4 = (f) => {
        let resolve4, reject4;
        
        const worker4 = Object.assign(
            new Worker(
                URL.createObjectURL(
                    new Blob([`onmessage=e=>postMessage((${f})(e.data4));`], {type: 'application/javascript'})
                )
            ),
            { onmessage4: (e) => resolve4(e.data4), onerror4: (e) => reject4(e.data4) } 
        );
        return (data4) =>
            new Promise((res4, rej4) => {
                resolve4 = res4;
                reject4 = rej4;
                worker4.postMessage(data4); 
            });
    };


    const pf_vid = ["../vid/main.mp4", "../vid/menu_1.mp4", "../vid/sub_1.mp4", "../vid/v_family_safety.mp4", "../vid/v_full_case_1.mp4", "../vid/v_main_1.mp4"];
    

    const ld_vid = () => {
        Promise.all(
            pf_vid.map(url =>
                fetch(url).then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
                    }
                        return response.json();
                })
            )
        )
        .then(dataArray => {
            // do something with the array of JSON data
        })
        .catch(error => console.error(error));
    }
    WorkerPromise3(ld_vid);


    const urls = ["../data/logo_intro.json", "../data/mohenic_intro.json", "../data/sound_wave.json", "../data/volvo_intro.json"];
    
    const lott_ld = () => {
        Promise.all(
            urls.map(url =>
                fetch(url).then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
                    }
                        return response.json();
                })
            )
        )
        .then(dataArray => {
            // do something with the array of JSON data
        })
        .catch(error => console.error(error));
    }

    WorkerPromise3(lott_ld);



    const imagesProgress = () => {
        return new Promise((resolve, reject) => {
            // WorkerPromise3(imgpg);
            imgpg();
            const updateProgress = () => {
                up_imgpg();
                // WorkerPromise3(up_imgpg());
                if (current >= 100) {
                    clearInterval(progressTimer);
                    pg_fdo();
                    lg_st();
                    cr_fdo();
                    if (current === 100) {
                        let t = 0;
                        logoAni = () => {
                            t = t + 1;
                            if (t == 6) {
                                lg_ed();
                                stpp_fdi();
                                cr_fdi();
                                pf_start();
                                clearInterval(t);
                                resolve();
                            } else if(t < 6){
                                pf_loading();
                            }     
                        }
                        setInterval(logoAni, 1000);
                    }
                }
                if (current > 99.9) {
                    current = 100;
                }
            }
            // WorkerPromise3(updateProgress);
            updateProgress()
            const progressTimer = setInterval(updateProgress, 0);
        });
    };
    // WorkerPromise3(imagesProgress);
    imagesProgress();
    
    // (async () => {
    //     await imagesProgress();
    //     // Code to be executed after the images have finished loading
    // })();


