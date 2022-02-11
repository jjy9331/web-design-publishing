

let main =  document.getElementsByClassName("main");

let sub =  document.getElementsByClassName("sub");

// for(i=0; i<3; i++){
    // sub[i].style.display="none" 
    sub[0].style.display="none" 
    sub[1].style.display="none" 
    sub[2].style.display="none" 
// }

// sub[0].style.display="none"
// sub[1].style.display="none"
// sub[2].style.display="none"

main[0].addEventListener("mouseover",function(){
    sub[0].style.display="block";
});

main[0].addEventListener("mouseout",function(){
    sub[0].style.display="none";
});

main[1].addEventListener("mouseover",function(){
    sub[1].style.display="block";
});

main[1].addEventListener("mouseout",function(){
    sub[1].style.display="none";
});

main[2].addEventListener("mouseover",function(){
    sub[2].style.display="block";
});

main[2].addEventListener("mouseout",function(){
    sub[2].style.display="none";
});