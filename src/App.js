import { useState } from "react";
import Keypad from './Keypad';

import './App.css';

function App(){
  let [input, updateInput] = useState("");
  function handleClick(value){
      updateInput(input+value);
  }

  function handleClear(){
      updateInput("");
  }

  function Calculate(input){
      let output = eval(input);
      updateInput(output);
  }
  return(
    <div className="container">
        <h1> Calculator App </h1>
        <input type="text" value={input} readOnly></input>
        <Keypad handleClick={handleClick} handleClear={handleClear} Calculate={Calculate} input={input}/>
    </div>
  )
}

export default App;