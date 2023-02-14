import React, {useState} from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";


function App() {
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  let [colors,setColors] = useState(['violet','blue','lightblue','green','greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color,i) => {
    return(
      <ColorBlock color = {color} key = {i}/>
    )
  })
  return (
    <div className='App'>
      {colorMap}
      <ColorForm addColor ={addColor}/>
    </div>
  );
}



export default App;




/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */