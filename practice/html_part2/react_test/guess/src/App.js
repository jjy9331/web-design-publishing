import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      
      <div className="App">

            <body>

            <div class="skip_navigation">
                <a href="#contents">본문 바로가기</a>
                <a href="#footer">하단 바로가기</a>
                {/* <!-- #아이디명으로 페이지내 이동 --> */}
            </div>

            <div id="header">
                <div class="inner">
                    <h1>
                        <a href="#"></a>
                    </h1>
                    
                    <h2 class="blind">주요 메뉴</h2>
                    <ul class="gnb">
                        <li class="g1">
                            <a href="#">
                                ACCESSORIES
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                HANDBAG
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                WATCHES
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                JEWELRY
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                SALE
                            </a>
                        </li>
                    </ul>

                    <ul class="top_gnb">
                        <li class="t1">
                            <a href="#">
                                <i class="material-icons">
                                    search
                                </i>
                                {/* <!-- <i class="ion-ios-search-strong"></i> --> */}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="material-icons">
                                    person
                                </i>
                                {/* <!-- <i class="ion-person"></i> --> */}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="material-icons">
                                    location_on
                                </i>
                                {/* <!-- <i class="ion-location"></i> --> */}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="material-icons">
                                    work
                                </i>
                                {/* <!-- <i class="ion-ios-briefcase"></i> --> */}
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <div id="visual">
                <div class="inner">
                    <div class="slogan">
                        <p class="s1">
                            Shop <span>The books</span>
                            
                        </p>
                        <p class="s2">
                            How to outfit the Spring Collection
                        </p>
                    </div>

                    <a href="#" class="bt1">
                        Shop Now
                    </a>

                    <a href="#" class="bt2">
                        Shop Dress Guide
                    </a>

                </div>
            </div>

            {/* <!-- <div id="contents_wr"> --> */}
                <div id="contents">
                
                    <div class="new">
                        <h2>
                            New apprival
                        </h2>
                        <p class="blind">시각장애인을 위한 설명</p>
                        <div class="new1">
                            <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/new1.jpg" alt="new1" usemap="#m1"></img>
                            <map name="m1" id="m1">
                                <area shape="rect" coords="96,412,314,468" href="#" alt="handbag"></area>
                            </map>
                            <a href="#">
                                <p>
                                    핸드백 신상품 설명입니다
                                    핸드백 신상품 설명입니다
                                    핸드백 신상품 설명입니다
                                    핸드백 신상품 설명입니다
                                    핸드백 신상품 설명입니다
                                    핸드백 신상품 설명입니다
                                    핸드백 신상품 설명입니다
                                </p>
                            </a>
                        </div>
                        <div class="new2">
                            <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/new2.jpg" alt="new2" usemap="#m2"></img>
                            <map name="m2">
                                <area shape="circle" coords="208,278,35" href="#" alt="Shoes"></area>
                            </map>
                            <a href="#">
                                <p>
                                    신발 신상품 설명입니다
                                    신발 신상품 설명입니다
                                    신발 신상품 설명입니다
                                    신발 신상품 설명입니다
                                    신발 신상품 설명입니다
                                    신발 신상품 설명입니다
                                    신발 신상품 설명입니다
                                </p>
                            </a>
                        </div>
                        <div class="new3">
                            <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/new3.jpg" alt="new3" usemap="#m3"></img>
                            <map name="m3">
                                <area shape="poly" coords="109,93,143,45,200,130" href="#" alt="GUESS Originals"></area>
                            </map>
                            <a href="#">
                                <p>
                                    오리지널 신상품 설명입니다
                                    오리지널 신상품 설명입니다
                                    오리지널 신상품 설명입니다
                                    오리지널 신상품 설명입니다
                                    오리지널 신상품 설명입니다
                                    오리지널 신상품 설명입니다
                                </p>
                            </a>
                        </div>
                    </div>

                    <div class="insta">
                        <h2>Show Our insta</h2>
                        <p class="blind">시각장애인을 위한 설명</p>
                        <ul>
                            <li class="in1">
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/insta1.jpg" alt="insta1"></img>
                            </li>
                            <li class="in2">
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/insta2.jpg" alt="insta2"></img>
                            </li>
                            <li class="in3">
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/insta3.jpg" alt="insta3"></img>
                            </li>
                            <li class="in4"> 
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/insta4.jpg" alt="insta4"></img>
                            </li>
                        </ul>
                    </div>

                    <div class="best">
                        <h2 style="font-weight: 500;">Best Products</h2>
                        {/* <!--
                            태그 옆에 css설정: 인라인(inline) CSS
                            - w3c에서 권장하지 않는 방법
                            - 임시로 테스트할때만 사용
                        --> */}
                        <ul>
                            <li class="b1">
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/1585098921-34.jpg" alt="best1"></img>
                            </li>
                            <li class="b2">
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/1585098997-15.jpg" alt="best2"></img>
                            </li>
                            <li class="b3">
                                <img src="/Users/jeongjiyong/Desktop/네이버 MYBOX/종로 이젠 Publishing/web-design-publishing/practice/html_part2/react_test/guess/src/img/1585099211-88.jpg" alt="best3"></img>
                            </li>
                        </ul>

                    </div>

                </div>

            {/* <!-- </div> --> */}


            <div id="footer">
                <div class="area1">
                    <div class="inner">
                        <h2 class="blind">사이트맵(전체메뉴)</h2>
                        <div>
                            <h3>ACCESSORIES</h3>
                            <ul>
                                <li>submenu1</li>
                                <li>submenu2</li>
                                <li>submenu3</li>
                                <li>submenu4</li>
                                <li>submenu5</li>
                                <li>submenu6</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3>HANDBAG</h3>
                            <ul>
                                <li>submenu1</li>
                                <li>submenu2</li>
                                <li>submenu3</li>
                                <li>submenu4</li>
                                <li>submenu5</li>
                                <li>submenu6</li>
                            </ul>
                        </div>
                        <div>
                            <h3>WATCHES</h3>
                            <ul>
                                <li>submenu1</li>
                                <li>submenu2</li>
                                <li>submenu3</li>
                                <li>submenu4</li>
                                <li>submenu5</li>
                                <li>submenu6</li>
                            </ul>
                        </div>
                        <div>
                            <h3>JEWELRY</h3>
                            <ul>
                                <li>submenu1</li>
                                <li>submenu2</li>
                                <li>submenu3</li>
                                <li>submenu4</li>
                                <li>submenu5</li>
                                <li>submenu6</li>
                            </ul>
                        </div>
                        <div>
                            <h3>SALE</h3>
                            <ul>
                                <li>submenu1</li>
                                <li>submenu2</li>
                                <li>submenu3</li>
                                <li>submenu4</li>
                                <li>submenu5</li>
                                <li>submenu6</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div class="area2">
                    <div class="inner">
                        <p class="copyright">
                            &copy; GUESS, All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            </body>
          </div>
    </main>
  );
}

export default App;


