
$(function(){

    // let t = 0;
    // function time(){
    //     t = t + 1;
    //     console.log(t);
    //     $(".time").text(t);
    //     if(t >= 3){
    //         // $("#logo_ani").css({display:"none"}); //로딩표시영역 사라짐
    //         // $("lottie-player").css({display:"block"}); //로딩표시영역 사라짐
    //         $('body').css({overflow:"auto"});//body스크롤없앰}
    //         $('body').css({position:"static"});
    //         $("header").fadeIn(2000);
    //         $(".wrapper").fadeIn(2000); 
    //         $("section").fadeIn(2000); 
    //         $("footer").fadeIn(2000);

    //         $("header").css('visibility', 'visible');
    //         $(".wrapper").css('visibility', 'visible');
    //         $("section").css('visibility', 'visible');
    //         $("footer").css('visibility', 'visible');
    //         $('body').css('backgroundColor', 'white');

    //         clearInterval(t);
    //     }
    //     else {
    //         $("#logo_ani").css({display:"none"}); //로딩표시영역 사라짐
    //         $('body').css({overflow:"visible"});
    //         $('body').css({position:"fixed"});
    //         $("header").hide();
    //         $("section").css('visibility', 'hidden');
    //         $(".wrapper").hide(); 
    //         $("section").hide(); 
    //         $("footer").hide(); 
    //     }
    // }
    // setInterval(time,1000); //0.1초마다 aniNext 함수 실행

    // var lottie_logo = document.createElement("lottie-player");
    
    // lottie_logo.setAttribute('id', 'logo_ani');
    // lottie_logo.setAttribute('src', 'data3/logo_intro.json');
    // lottie_logo.setAttribute('speed', '1');
    // lottie_logo.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    // lottie_logo.setAttribute('autoplay', 'true');

    // document.body.appendChild(lottie_logo);
    // var lottie_logo = document.createElement("div");

    // loading
    function imagesProgress() {
        var $container = $('#progress');
        var $progressBar = $container.find('.progress-bar');
        var $progressText = $container.find('.progress-text');
        var imgLoad = imagesLoaded('body');
        var imgTotal = imgLoad.images.length;
        var imgLoaded = 0;
        var current = 0;
        imgLoad.on('progress', function() {
            imgLoaded++;
        });
        var progressTimer = setInterval(updateProgress, 1000/15);
        // console.log("progressTimer: "+progressTimer)

        function updateProgress() {
            var target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;
            // console.log("current: "+current)

            $progressBar.css({ width: current + '%' });
            $progressText.text(Math.floor(current) + '%');
            if (current >= 100) {
                clearInterval(progressTimer);
                $container.addClass('progress-complete');
                $progressBar.add($progressText)
                    .delay(1000)
                .animate({ opacity: 1 }, 250, function() {


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

                    WorkerPromise(lottie_logo());




                        // LottieInteractivity.create({
                        //     player:'#logo_ani',
                        //     renderer:'svg',
                        //     disableCheck:'true',
                        //     mode:"chain",
                        //     actions: [
                        //         {
                        //             state: 'autoplay',
                        //             delay: 1000
                        //         }
                        //     ]
                        // });
                        // $container.animate({ opacity: 0}, 1000, function() {
                        $container.fadeOut(1000, function() {
                    //         $("body").css({ overflowX: "auto" });
                                $("#progress").css({display:"none"}); 
                                $(".cursor").css({display:"none"});

                            
                                
                        if(current == 100) {
                                let t = 0;
                                function Logo_ani(){
                                    t = t + 1;
                                    // console.log(t);
                                    $(".time").text(t);
                                    if(t == 6){
                                        $("#logo_ani").css({display:"none"}); //로딩표시영역 사라짐

                                        // $('body').css({overflow:"auto"});//body스크롤없앰}
                                        // $('body').css({position:"static"});
                                        // $("header").fadeIn(2000);
                                        // $("footer").fadeIn(2000);
                                        $(".wrapper").fadeIn(2000); 
                                        $(".startpop").fadeIn(2000); 
                                        // $("section").fadeIn(2000); 
                                        
                            
                                        // $("header").css('visibility', 'visible');
                                        $(".wrapper").css('visibility', 'visible');
                                        $("section").css('visibility', 'visible');
                                        // $("footer").css('visibility', 'visible');
                                        $('body').css('backgroundColor', 'white');
                                        $('#skrollr-body').css('backgroundColor', 'white');
                                        $('html').css("overflow", "auto");

                                        // $(".cursor").fadeIn(2000); 

                                        // var md = new MobileDetect(navigator.userAgent);
                                        // let curs = document.querySelector(".cursor");
                                
                                        var md = new MobileDetect(navigator.userAgent);
                                        let curs = document.querySelector(".cursor");

                                        function isMobile(){
                                                var UserAgent = navigator.userAgent;
                                                if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                        };
                                    
                                        if(isMobile()){
                                            // location.href = "/mobile/index.html";	//모바일페이지
                                            curs.style.display = 'none'
                                        } else {
                                            // location.href = "/main.html";		//PC용 페이지
                                            curs.style.display = 'block'
                                            // document.body.style.cursor = 'none';
                                        }
                                
                                        // if( md.mobile() == "null" ){
                                        //     // curs.style.display = 'block'
                                        //     $(".cursor").fadeIn(2000); 
                                        // }
                                        // else {
                                        //     curs.style.display = 'none'
                                        // }


                                        clearInterval(t);

                                    }
                                    else if(t < 6){
                                        $("#logo_ani").css({display:"block"}); //로딩표시영역 사라짐
                                        // $("#logo_ani").css({display:"none"}); //로딩표시영역 사라짐
                                        // $('body').css({overflow:"visible"});
                                        $('body').css({position:"fixed"});
                                        $('body').css({overflow:"hidden"});
                                        $('#skrollr-body').css('backgroundColor', 'black');
                                        $("header").hide();
                                        $("section").css('visibility', 'hidden');
                                        $(".startpop").hide(); 
                                        $(".startpop").css({display:"none"});
                                        $(".wrapper").hide(); 
                                        $("section").hide(); 
                                        $("footer").hide(); 
                                        $('html').css("overflow", "hidden");

                                        $(".cursor").css({display:"none"});

                                        

                                        // lottie_logo.getAttribute('autoplay');
                                        // lottie_logo.attr('autoplay');
                                        

                                        // LottieInteractivity.create({
                                        //     player:'#logo_ani',
                                        //     renderer:'svg',
                                        //     disableCheck:'true',
                                        //     mode:"chain",
                                        //     actions: [
                                        //         // {
                                        //         //     type: "pauseHold"
                                        //         // },
                                        //         {
                                        //             state: 'autoplay',
                                        //             frames: [0, 120],
                                        //             transition: 'seek',
                                        //             // reset: true,
                                        //         },
                                        //         // {
                                        //         //     state: 'autoplay',
                                        //         //     frames: [61, 120],
                                        //         //     transition: 'none',
                                        //         //     // reset: true,
                                        //         // },
                                        //     ]
                                        // });

                                    }       
                                }
                                setInterval(Logo_ani,1000); //0.1초마다 aniNext 함수 실행
                                

                        }
                        
                    });
                });
            }
            if (current > 99.9) {
                current = 100;

                
                
            }
        }
    }
    imagesProgress();
    

});
