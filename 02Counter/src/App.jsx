import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(16)
  //let counter = 20

  const addValue = () =>{
    console.log("clicked",counter);
    counter = counter + 1
    setCounter(counter)
  }

  const subValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Number Counter </h1>
     <h2>Counter Value:{counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
