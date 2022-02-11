

let main =  document.getElementsByClassName("main");

// let sub =  document.getElementsByClassName("sub");

for(i=0; i<5; i++){
    main[i].children[0].style.display="none"; 
}

for(i=0; i<5; i++){
    main[i].addEventListener("mouseover",function(){
        this.children[0].style.display="block";
    });
    main[i].addEventListener("mouseout",function(){
        this.children[0].style.display="none";
    });
}



// main[0].addEventListener("mouseover",function(){
//     this.children[0].style.display="block";
// });

// main[0].addEventListener("mouseout",function(){
//     this.children[0].style.display="none";
// });

// main[1].addEventListener("mouseover",function(){
//     this.children[0].style.display="block";
// });

// main[1].addEventListener("mouseout",function(){
//     this.children[0].style.display="none";
// });

// main[2].addEventListener("mouseover",function(){
//     this.children[0].style.display="block";
// });

// main[2].addEventListener("mouseout",function(){
//     this.children[0].style.display="none";
// });