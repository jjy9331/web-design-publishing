import {
    WorkerPromise
} from './default.js';


const html2 = document.documentElement;
const canvas2 = document.getElementById('screen2');
const context2 = canvas2.getContext("2d");


const canUseWebP2 = () => {
    const elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
};

// WorkerPromise2(canUseWebP2());

const folderName2 = canUseWebP2() ? 'wp_contact_ani3' : 'contact_ani3';
const frameCount2 = 255;
const img2 = Array.from({ length: frameCount2 }, () => null); // Create an array with frameCount number of null values

const currentFrame2 = index2 => {
    const fileExtension2 = canUseWebP2() ? 'webp' : 'png';
    return `./${folderName2}/${index2.toString().padStart(3, '0')}.${fileExtension2}`;
};


const loadImage2 = (src) => {
    return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
        resolve(image);
    };
    image.onerror = (err) => {
        reject(err);
    };
    image.src = src;
    });
};
    
const preloadImages2 = async () => {
    try {
        const promises = img2.map((_, i2) => {
            return loadImage2(currentFrame2(i2));
        });
        const images = await Promise.all(promises);
            images.forEach((image, i) => {
                img2[i] = image;
            });
    } catch (err) {
        console.error(err);
    }
};



// contact_ani img preload web worker

// const mine2 = {js:{type:'text/javascript'}};

// const WorkerPromise2 = (f) => {
//     return (data2) => {
//         return new Promise((resolve2, reject2) => {
//         const worker2 = new Worker(
//             URL.createObjectURL(
//                 new Blob([`onmessage=e=>postMessage((${f})(e.data));`], mine2.js)
//             )
//         );
//             worker2.onmessage = (e) => resolve2(e.data2);
//             worker2.onerror = (e) => reject2(e.data2);
//             worker2.postMessage(data2);
//         });
//     };
// };


const prewk2 = preloadImages2();
// WorkerPromise2(prewk2);
WorkerPromise(prewk2);


img2.src = currentFrame2(1);

canvas2.width = 1920
canvas2.height = 1080
canvas2.style.position = 'fixed';
canvas2.style.bottom = '0%';
canvas2.style.objectFit = 'cover';


const updateImage2 = async index2 => {
    const image = await loadImage2(currentFrame2(index2));
    context2.drawImage(image, 0, 0);
};



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


