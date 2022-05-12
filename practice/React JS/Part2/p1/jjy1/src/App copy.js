import React, {useState} from 'react';
import './App.css';


function App() {

  let [a,aSet] = useState(7);

  function AA(){
    return aSet(a+1);
  }

  return (
    <div>
        <h1>{a}</h1>
        <button onClick={()=>{aSet(a+1)}}>버튼</button>
        <p>반갑습니다</p>
    </div>
  );
}

export default App;

