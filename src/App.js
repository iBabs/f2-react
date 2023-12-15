import { useState } from 'react';
import './App.css';
import Newfile from './Newfile';
import { useLog } from './useLog';

const dark ={
  color: 'white',
  backgroundColor: 'black'
}
const light ={
  color: 'black',
  backgroundColor: 'yellow'
}


function App() {
 
  const [num, setNum] = useState(0)
  const [appear, setAppear] = useState(true)
  const [theme, setTheme] = useState(light)




  useLog(theme)




  const wangwan = ()=>{
    if(theme!==dark){
      setTheme(dark)
    }else{ setTheme(light)}
  }

  return (
    <div className="App"
    style={
      theme
    }   
    >
      <button onClick={wangwan}>{theme===dark? 'light':'dark'}</button>
      <div>{num}</div>
      <button onClick={()=>{setNum(num-1)}}>-</button>
      <button onClick={()=>{setNum(num+1)}}>+</button>
    <div>{appear? <Newfile name="Ola"/>: <p>nothing</p>}</div>
    <button onClick={()=>{setAppear(!appear)}}>Change</button>
    </div>
  );
}

export default App;
