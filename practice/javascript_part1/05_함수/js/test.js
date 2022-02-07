
function AA() { //AA라는 기능 
    alert('안녕하세요'); //기능의 내용
}


AA();//AA함수를 호출(AA기능을 실행)

function BB(b,c,d) { //BB라는 기능 

    let target = document.getElementById(b)

    target.style.transition="1s";
    target.style.borderRadius=c;
    target.style.transform="rotate(360deg) scale(0.5,0.5)";
    target.style.background="hotpink";
    target.style.backgroundColor=d;
}


