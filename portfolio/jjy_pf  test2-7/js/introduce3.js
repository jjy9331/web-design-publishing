
const html = document.documentElement;
var canvas = document.getElementById('screen');
const context = canvas.getContext("2d");


// //이미지 불러오기

const frameCount = 485;
const currentFrame = index => (
    `./track_run_start8/${index.toString().padStart(3, '0')}.png`
)

const preloadImages = () => {
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image()
img.src = currentFrame(1);

canvas.width = 1920
canvas.height = 1080
canvas.style.position = 'fixed';
canvas.style.bottom = '0%';
canvas.style.objectFit = 'cover';

img.onload=function(){
    context.drawImage(img, 0, 0);
}
const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
    let scrollTop = html.scrollTop;
    // let maxScrollTop = 14775 - window.innerHeight;
    // let scrollFraction = scrollTop / maxScrollTop;
    // let frameIndex = Math.min(
    //     frameCount - 1,
    //      Math.ceil(scrollFraction * frameCount)
    // );

    // ani speed control
    let frameIndex = Math.round(((html.scrollTop/100)-149));



    if (frameIndex == 0){
        frameIndex = 0;
    }
    if (frameIndex >= 485){
        frameIndex = 485;
    }

    // scroll ani start point 
    if( scrollTop <= 14941){
        frameIndex = 0;
    } 
    // console.log("frameIndex: "+frameIndex);
    // console.log("scrollTop: "+scrollTop);
    // console.log("frameCount: "+frameCount);
    // console.log("scrollHeight: "+html.scrollHeight);
    // console.log("innerHeight: "+window.innerHeight);


    
    requestAnimationFrame(() => updateImage(frameIndex))
},{ passive: true });

preloadImages()



