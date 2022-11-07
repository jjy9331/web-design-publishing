


$(window).scroll(function(){ 
  var b = $(document).scrollTop(); 

  if((b >= 11166 )){

      // frameNum = $("#introduce .inner .intro img:first").index()


      const html = document.documentElement;
      const canvas = document.getElementById("intro");
      const context = canvas.getContext("2d");

      const frameCount = 155;
      const currentFrame = index => (
        `./track_run_start5/${index.toString()}.png`
      )

      const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      };

      let W = $(window).width();
      let H = $(window).height();

      const img = new Image()
      img.src = currentFrame(1);



      canvas.width = $(window).width();
      canvas.height = $(window).height();


      canvas.style.top = '0%' 
      canvas.style.objectFit = "cover";


      img.onload=function(){
        // context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.drawImage(img, 0, 0);
      }

      const updateImage = index => {
        img.src = currentFrame(index);

        // context.clearRect(0, 0, canvas.width, canvas.height);
        // context.beginPath();
        // context.beginPath();
        context.drawImage(img, 0, 0);
      }

      window.addEventListener('scroll', () => {  
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount)
        );
        
        requestAnimationFrame(() => updateImage(frameIndex + 1))

        console.log(frameIndex);

      });

      preloadImages()



  }
});  
  