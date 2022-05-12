
import React, {useState} from 'react';
import './App.css';


function App() {

  let [name,nameSet] = useState("철수");
  let [k,kSet] = useState(90);
  let [e,eSet] = useState(80);



  return (
    <div>
        <h1>{name}</h1>
        
        <p>국어점수는 {k}점입니다</p>
        <p>영어점수는 {e}점입니다</p>
        <p>총점은 {k+e}점입니다</p>
        <p>평균은 { (k+e)/2}입니다 </p>
    </div>
  );
}

export default App;
