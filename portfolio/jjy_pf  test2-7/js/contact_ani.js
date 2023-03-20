const html2 = document.documentElement;
const canvas2 = document.getElementById('screen2');
const context2 = canvas2.getContext("2d");

const img2 = [null]
// const img2 = new Image()
const frameCount2 = 255;
const currentFrame2 = index2 => (
    `./contact_ani3/${index2.toString().padStart(3, '0')}.png`
)


const preloadImages2 = () => {
    for (let i2 = 0; i2 < frameCount2; i2++) {
        img2[i2] = new Image();
        img2[i2].src = currentFrame2(i2);
        // context2.drawImage(img2[i2], 0, 0);
    }
};

// contact_ani img preload web worker

const mine2 = {js:{type:'text/javascript'}};

const WorkerPromise2 = (f) => {
    let resolve2, reject2;
    
    const worker2 = Object.assign(
        new Worker(
            URL.createObjectURL(
            new Blob([`onmessage2=e=>postMessage((${f})(e.data2));`], mine2.js) 
            )
        ),
        { onmessage2: (e) => resolve2(e.data2), onerror2: (e) => reject2(e.data2) } 
    );
    return (data2) =>
        new Promise((res2, rej2) => {
            resolve2 = res2;
            reject2 = rej2;
            worker2.postMessage(data2); 
        });
};

WorkerPromise2(preloadImages2());


img2.src = currentFrame2(1);

canvas2.width = 1920
canvas2.height = 1080
canvas2.style.position = 'fixed';
canvas2.style.bottom = '0%';
canvas2.style.objectFit = 'cover';

// img2.onload=function(){
//     var canvas2 = document.getElementById('screen2');
//     var context2 = canvas2.getContext("2d");
//     for (let i2 = 0; i2 < frameCount; i2++) {
//         context2.drawImage(img2[i2], 0, 0);
//     }
// }
const updateImage2 = index2 => {
    // img2.src = currentFrame2(index2);
    context2.drawImage(img2[index2], 0, 0);
}

window.addEventListener('scroll', () => {  
    let scrollTop2 = html2.scrollTop;
    let frameIndex2 = Math.round(((html2.scrollTop/250)-874.87));
    


    if (frameIndex2 == 0){
        frameIndex2 = 0;
    }
    if (frameIndex2 >= 254){
        frameIndex2 = 254;
    }

    // scroll ani start point 
    if( scrollTop2 <= 218740){
        frameIndex2 = 0;
    } 
    // console.log("frameIndex2: "+frameIndex2);
    // console.log("scrollTop2: "+scrollTop2);
    // console.log("frameCount2: "+frameCount2);
    // console.log("scrollHeight: "+html2.scrollHeight);
    // console.log("innerHeight2: "+window.innerHeight);


    
    requestAnimationFrame(() => updateImage2(frameIndex2))
},{ passive: true });

// preloadImages2();


