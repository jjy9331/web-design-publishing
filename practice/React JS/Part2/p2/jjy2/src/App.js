
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return  (
    <div>

      <header>
        <h1></h1>
        <nav className=''>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/sub1">about</Link></li>
            <li><Link to="/sub2">contact</Link></li>
          </ul> 
        </nav> 
      </header>
      
      
      
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/sub1" element={ <div>어바웃입니다</div>} />
        <Route path="/sub2" element={ <div>컨택트입니다</div>} />
      </Routes>

    </div>
  );

  
  function Home(){
    return  <div>
              <h2>Home</h2>
              <p>홈입니다</p>
            </div>
  }

}

export default App;
