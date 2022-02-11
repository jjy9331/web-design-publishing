let i=1;
	
function nextGall(){
    
    i++; //i값을 1증가
    
    if ( i > 3 ) {
        i=1;
    }
    
    document.getElementById("photo").src="images/img"+i+".jpg"; 
    
}

function prevGall(){
    
    i--; //i값을 1감소
    
    if ( i < 1 ) {
        i=3;
    }
    
    document.getElementById("photo").src="images/img"+i+".jpg"; 
    
}