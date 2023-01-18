var cimgNum = 0;
var cimg = new Image();
var canvas2 = document.getElementById('screen2');
var ctx2 = canvas2.getContext('2d');
var scrollYPos2;


<<<<<<< HEAD
    //이미지 불러오기
    for (i=0; i<=254; i++){
        $("#screen").append("<img src='contact_ani2/"+i.toString().padStart(3, '0')+".png'>");
    }


=======
>>>>>>> 0c4ef0f5285af08fb5cf11abb77a51eb7a1314a9
// cimg.src = "./contact_ani/0.png";
cimg.src = "./contact_ani2/000.png";

// canvas2.width = $(window).width();
// canvas2.height = $(window).height();
// canvas2.width = canvas2.offsetWidth
// canvas2.height = (canvas2.width / 3) * 2
canvas2.width = 1920
canvas2.height = 1080

console.log(canvas2.width);
console.log(canvas2.height);

// canvas2.style.position = 'sticky'
canvas2.style.position = 'fixed';
canvas2.style.bottom = '2.5%';
// canvas2.style.right = '25%'
// canvas2.style.transform = 'translateY(-50%)'
canvas2.style.objectFit = 'cover';


window.addEventListener('scroll', function(e) {
    var y2 = window.scrollY;

    
    // scrollYPos2 = Math.round(((window.scrollY/4000)-52.38));
    // scrollYPos2 = Math.round(((window.scrollY/2000)-104.76));
    // scrollYPos2 = Math.round(((window.scrollY/1000)-209));
    // scrollYPos2 = Math.round(((window.scrollY/500)-419.04));
    scrollYPos2 = Math.round(((window.scrollY/250)-874.87));
    // scrollYPos2 = Math.round(((window.scrollY/60)-187));
    // scrollYPos2 = Math.round(((window.scrollY/30)-374));
    // scrollYPos2 = Math.round((window.scrollY/30)-375);
    // scrollYPos2 = Math.round((window.scrollY/50)-0);

    

    
    if (scrollYPos2 == 0) scrollYPos2 = 0;
    if (scrollYPos2 >= 254) scrollYPos2 = 254;
    
    // scrollYPos2 = scrollYPos2 % 486
    if( y2 <= 218718) scrollYPos2 = 0; //start scroll y 
    player2(scrollYPos2);
    console.log("y2: "+y2);
    console.log("scrollYPos2: "+scrollYPos2);


}, {passive: false});

// $(function(){
//     $(window).scroll(function(){ 
//         var y2 = window.scrollY;
//         if((y2 <=9700)) {	
//             scrollYPos2 = 0;
//                 }   

//         });
// });

function player2(num2) {
    // cimg.src = "./contact_ani/"+ num2 + ".png";
    cimg.src = "./contact_ani2/"+ num2.toString().padStart(3, '0') + ".png";
}

cimg.addEventListener('load', function(e) {
    ctx2.clearRect( 0, 0, 1920, 1080);
    ctx2.drawImage(cimg, 0, 0);
}, {passive: false});

