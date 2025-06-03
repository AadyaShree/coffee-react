import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5 --> ye variable update hoga but kabhi bhi UI me update nahi hoga

  const [counter, setCounter] = useState(5) 
// useState hook ka use karke counter variable ko state me convert kar diya
  // value will be updated in UI
  // useState ek hook hai jo react me state management ke liye use hota hai
  // useState ek function hai jo ek array return karta hai
  // useState --> first value ,initial value and second value ,function which will update the value
  // useState(5) --> initial value is 5
  // const [counter, setCounter] = useState(5) --> counter is the current value and setCounter is the function to update the value
  /*const addValue=()=>{
    // counter= counter + 1 updation in ui won't happen
    if (counter < 20) {
      setCounter(counter + 1)
    }
  };
  const subValue=()=>{
    if (counter>0){
      setCounter(counter - 1)
    }
    
  };*/

  const addValue = () => {
    setCounter(counter + 1)
  }
  const subValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
     
     {/* <h1>coffee aur react</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={subValue}>sub value</button> */}
     
    {/* <h1>Counter : {counter}</h1>
    <h3>range : [0,20]</h3>
    <button onClick={addValue}>Add Value</button> <br /><br />
    <button onClick={subValue}>Sub Value</button> */}
    
    <h1>Counter : {counter}</h1>
    <h3>range : [0,20]</h3>
    <button onClick={addValue} disabled={counter>=20}>Add Value</button> <br /><br />
    <button onClick={subValue} disabled={counter<=0} >Sub Value</button>
    
    

    </>
  )
}



// another way to achieve the same constraint is by using [disabled] after onClick  --> this will disable the button when the condition is met

export default App
