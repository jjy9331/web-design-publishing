

const imageSources = Array(485)
  .fill('')
  .map((_, idx) => `./track_run_start4/${String(idx + 1)}.png`)
  console.log("imageSources:"+imageSources);

const computeStartScrollY = () => {
  let prevElementSibling = wrapper.previousElementSibling
  let height = 0
  while (prevElementSibling) {
    height += prevElementSibling.offsetHeight
    // height = height + prevElementSibling.offsetHeight
    prevElementSibling = prevElementSibling.previousElementSibling
  }
  console.log("prevElementSibling:"+prevElementSibling);
//   console.log("offsetHeight:"+offsetHeight);
  console.log("height:"+height);
  return height
}
// setInterval(computeStartScrollY,500);

const initFirstFrame = () => {
  const image = new Image()
  image.src = imageSources[0]
  image.onload = () =>

    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.beginPath();

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
}
// setInterval(initFirstFrame,500);



const preloadImages = () => {
  imageSources.forEach((imgSrc) => {
    const img = new Image()
    img.src = imgSrc
  })
}
setInterval(preloadImages,100);

const onScrollHandler = () => {
  requestAnimationFrame(render)
}
console.log("onScrollHandler:"+onScrollHandler);

// setInterval(onScrollHandler,500);
// console.log("requestAnimationFrame(render):"+requestAnimationFrame(render));

const currentFrameIndex = () => {
  const index = Math.floor((main.scrollTop - startScrollY) / standardHeight)
  if (index < 0) return 0
  if (!imageSources[index]) return imageSources.length - 1

  console.log("main.scrollTop:"+main.scrollTop);
  console.log("startScrollY:"+startScrollY);
  console.log("standardHeight:"+standardHeight);
  console.log("main.scrollTop - startScrollY:"+(main.scrollTop - startScrollY));
  console.log("Math.floor((main.scrollTop - startScrollY) :"+(main.scrollTop - startScrollY));


  console.log("index:"+index);

  return index
  
}
// setInterval(currentFrameIndex,500);

const render = () => {
  const frameIndex = currentFrameIndex()
  const image = new Image()
  image.src = imageSources[frameIndex]

//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.beginPath();

  context.drawImage(image, 0, 0, canvas.width, canvas.height)
  console.log("frameIndex:"+frameIndex);

  
}
// setInterval(render,500);

const main = document.querySelector('main')
main.onscroll = onScrollHandler

const wrapper = document.querySelector('#wrapper')
const canvas = document.createElement('canvas')

const context = canvas.getContext('2d')

canvas.width = $(window).width();
canvas.height = $(window).height();
// canvas.width = wrapper.offsetWidth
// canvas.height = (canvas.width / 3) * 2


console.log("canvas.width:"+canvas.width);
console.log("canvas.height:"+canvas.height);


canvas.style.position = 'sticky'
canvas.style.top = '50%'
canvas.style.transform = 'translateY(-50%)'
canvas.style.objectFit = 'cover';

wrapper.append(canvas)

const startScrollY = computeStartScrollY()
const standardHeight = canvas.height / imageSources.length

console.log("startScrollY:"+startScrollY);
console.log("standardHeight:"+standardHeight);

initFirstFrame()
preloadImages()


