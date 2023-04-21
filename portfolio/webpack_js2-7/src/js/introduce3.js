
const html = document.documentElement;
var canvas = document.getElementById('screen');
const context = canvas.getContext("2d");


const canUseWebP = () => {
    const elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
};

// WorkerPromise(canUseWebP());

const folderName = canUseWebP() ? 'wp_track_run_start8' : 'track_run_start8';
const frameCount = 486;
const img = Array.from({ length: frameCount }, () => null);


const currentFrame = index => {
    const fileExtension = canUseWebP() ? 'webp' : 'png';
    return `./${folderName}/${index.toString().padStart(3, '0')}.${fileExtension}`;
};

// WorkerPromise(currentFrame());


// //이미지 불러오기

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
        resolve(img);
        };
        img.onerror = (err) => {
        reject(err);
        };
        img.src = src;
    });
};

const preloadImages = async () => {
    try {
    const promises = img.map((_, i) => {
        return loadImage(currentFrame(i));
    });
    const images = await Promise.all(promises);
        images.forEach((image, i) => {
            img[i] = image;
        });
    } catch (err) {
    console.error(err);
    }
};


// introduce img preload web worker

const mine = {js:{type:'text/javascript'}};

const WorkerPromise = (f) => {
    return (data) => {
        return new Promise((resolve, reject) => {
        const worker = new Worker(
            URL.createObjectURL(
                new Blob([`onmessage=e=>postMessage((${f})(e.data));`], mine.js)
            )
        );
            worker.onmessage = (e) => resolve(e.data);
            worker.onerror = (e) => reject(e.data);
            worker.postMessage(data);
        });
    };
};


const prewk = preloadImages();
WorkerPromise(prewk);


canvas.width = 1920
canvas.height = 1080
canvas.style.position = 'fixed';
canvas.style.bottom = '0%';
canvas.style.objectFit = 'cover';

img.onload=function(){
    context.drawImage(img[i], 0, 0);
}


const updateImage = async index => {
    const image = await loadImage(currentFrame(index));
    context.drawImage(image, 0, 0);
};



window.addEventListener('scroll', () => {  
    let scrollTop = html.scrollTop;

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

    // if( scrollTop == 63996){
    //     frameIndex = 485;
    // } 

    // console.log("frameIndex: "+frameIndex);
    // console.log("img_num: "+img.src);
    // console.log("scrollTop: "+scrollTop);
    // console.log("frameCount: "+frameCount);
    // console.log("scrollHeight: "+html.scrollHeight);
    // console.log("innerHeight: "+window.innerHeight);


    
    requestAnimationFrame(() => updateImage(frameIndex))
},{ passive: true });

// preloadImages();



