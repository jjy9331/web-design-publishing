import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"

function Main(){
    return  <div className='main'>
              <h2>Main</h2>
              <div className="group">
                  <div className="box"><img src={img1} alt="" /></div>
                  <div className="box"><img src={img2} alt="" /></div>
                  <div className="box"><img src={img3} alt="" /></div>
                  <div className="box"><img src={img4} alt="" /></div>
              </div>
            </div>
}

export default Main;