import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let countRef = useRef(0);
  // UseRef
  let handleClick2=()=>{
    console.log(countRef.current++)
    //  .current++
      
    
  }

  // UseRef

 // UseState
 let handleClick=()=>{
    count++
    setCount(count)
  }
  // UseState
 

  return (
    <>

    <h1>UseState</h1>
    <h2>{count}</h2>
    <button onClick={handleClick}>Click</button>
    {/* ############ */}
    <h1>UseRef</h1>
    <h2>{countRef.current}</h2>
    <button onClick={handleClick2}>Click</button>
    </>
  );
}

export default App
