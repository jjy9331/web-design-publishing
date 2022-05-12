
import React, {useState} from 'react';
import './App.css';
import './livingroom.css';
import Livingroom from'./Livingroom.js';

import img1 from './images/img1.jpg'


function App() {

  return(
    <div className='home'>
      <h1>홈</h1>
      <img src={img1} />
      <Livingroom></Livingroom>
    </div>
  );


}

export default App;
