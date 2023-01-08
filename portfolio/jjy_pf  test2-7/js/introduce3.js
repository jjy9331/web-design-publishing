var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var scrollYPos;


img.src = "./track_run_start4/000.png";

// canvas.width = $(window).width();
// canvas.height = $(window).height();
// canvas.width = canvas.offsetWidth
// canvas.height = (canvas.width / 3) * 2
canvas.width = 1920
canvas.height = 1080
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

console.log("innerWidth: "+canvas.width);
console.log("innerHeight: "+canvas.height);

// canvas.style.position = 'sticky'
canvas.style.position = 'fixed';
canvas.style.bottom = '0%';
// canvas.style.right = '25%'
// canvas.style.transform = 'translateY(-50%)'
canvas.style.objectFit = 'cover';


window.addEventListener('scroll', function(e) {
    var y = window.scrollY;

    
    scrollYPos = Math.round(((window.scrollY/100)-141));
    // scrollYPos = Math.round(((window.scrollY/60)-187));
    // scrollYPos = Math.round(((window.scrollY/30)-374));
    // scrollYPos = Math.round((window.scrollY/30)-375);

    

    
    if (scrollYPos == 0) scrollYPos = 0;
    if (scrollYPos >= 485) scrollYPos = 485;
    
    // scrollYPos = scrollYPos % 486
    if( y <= 14941) scrollYPos = 0;
    player(scrollYPos);
    console.log("scrollYPos: "+scrollYPos);


}, {passive: false});

// $(function(){
//     $(window).scroll(function(){ 
//         var y = window.scrollY;
//         if((y <=9700)) {	
//             scrollYPos = 0;
//                 }   

//         });
// });

function player(num1) {
    img.src = "./track_run_start4/"+ num1.toString().padStart(3, '0') + ".png";
}

img.addEventListener('load', function(e) {
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx. canvas.height);
    ctx.drawImage(img, 0, 0);
}, {passive: false});

