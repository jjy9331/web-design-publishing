// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';


function Study(){

  let [name,nameSet] = useState("철수");
  let [a,aSet] = useState(90);
  let [b,bSet] = useState(80);
  let [hap,hapSet] = useState(0);
  let [pg,pgSet] = useState(0);

  let sum = ()=>{
    return hapSet(a+b);
  };
  
  let plus = ()=>{
    return aSet(a+1);
  };
  
  setTimeout(plus,1000);
  

  let avg = ()=>{
    return (a+b)/2;
  };

  let [avgR,setAvgR] = useState(avg); 

 
 


  return(
    <div className='App'>
      <h2>{ name }</h2>
      <p>국어점수는 { a }점입니다</p>
      <p>영어점수는 { b }점입니다</p>
      <p>합:{ a+b }점입니다</p> 		

      <p>평균:{ avgR }점입니다</p> 	         
      <p><button onClick={ ()=>{ sum() } }>버튼</button>{hap}점입니다</p> 							  
    </div>
  )


}


// ReactDOM.render(

//   <Study />, 

//   document.querySelector("#wrap") 

// );


export default Study;