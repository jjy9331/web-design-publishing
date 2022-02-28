class MovingGall {
	constructor(gallery,speed){//초기설정
		
		this.gallery = gallery;
		this.gall = document.querySelector(this.gallery+" .gall");  //변수 위치에 따라 작동이 안될 수 있다.
		this.left = document.querySelector(this.gallery+" .left");
		this.right = document.querySelector(this.gallery+" .right");
		this.item = document.querySelectorAll(this.gallery+" .item");
		this.set = document.querySelector(this.gallery+" .gall ul");
		this.speed = speed; //속도
		this.n = this.item.length; //alert(n);
		this.w = this.item[0].offsetWidth; //alert(w);
		this.temp = this.set.cloneNode(true); 
		this.gall.appendChild(this.temp);	
		this.x = 0;
		this.s= -this.speed;
		this.m = true;
		this.movGall();
	}
	movGall(){//함수
		this.right.addEventListener("click",()=>{ this.s = this.speed; });
		this.left.addEventListener("click",()=>{ this.s = -this.speed; });
		this.gall.addEventListener("mouseover",()=>{ this.m=false; });
		this.gall.addEventListener("mouseout",()=>{ this.m=true; });
		
		setInterval(()=>{//setInterval의 함수형식을 function()으로 하면 this는 window객체를 의미
						//클래스 내에선 화살표함수()=> 형식을 써야함
				if ( this.m ) {
					this.x = this.x + this.s;
					if ( this.x < -this.w*this.n ) { this.x=0; } 
					if ( this.x > 0 ) { this.x= -this.w*this.n; } 
					this.gall.style.left=this.x+"px";
				}
			},10); 
		}
}