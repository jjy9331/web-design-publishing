import './App.css';
import Main from './Main.js';
import About from './About';
import Contact from './Contact';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return  (
    <div className='wrap'>

      <header className='header'>
        <h1>Brand</h1>
        <nav className='gnb'>
          <ul>
            <li><Link to="/">main</Link></li>
            <li><Link to="/sub1">about</Link></li>
            <li><Link to="/sub2">contact</Link></li>
          </ul> 
        </nav> 
      </header>
      

      
      
      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path="/sub1" element={ <About/> }/>
        <Route path="/sub2" element={ <Contact/> }/>
      </Routes>

      <footer className='footer'>
        <p>&copy;2022,Brand</p>
      </footer>

    </div>
  );

  




}

export default App;
