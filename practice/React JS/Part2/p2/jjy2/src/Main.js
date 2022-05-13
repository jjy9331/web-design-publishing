import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"

function Main(){
    return  <div className='main'>
              <h2>Main</h2>
              <div className="group">
              <Box g={img1} d="이미지1"/>
              <Box g={img2} d="이미지2"/>
              <Box g={img3} d="이미지3"/>
              <Box g={img4} d="이미지4"/>
                  
              </div>
            </div>
}

function Box(props){
  return  <div className="box">
            <img src={props.g} alt="이미지" />
            <p>{props.d}입니다</p>
          </div>
}

export default Main;