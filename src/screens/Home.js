import React from 'react'
import { useState, useEffect } from 'react'
import { ReactDOM } from 'react'

function Home() {

const [count,setCount]=useState(0);
const[calculation, setCalculation]=useState(0);

useEffect(() => {
  setCalculation(()=> count * 2 );

},[count]);

  return (
    <div>
      <p>count:{count}</p>
    <button onClick={()=>setCount((c)=> c + 1)}>+</button>
  <p>calculation: {calculation}</p>
    </div>
  )
}


export default Home