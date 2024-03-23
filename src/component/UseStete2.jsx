import React, { useState } from 'react'


const UseStete2 = () => {

    const n = 0;
    const [Number,setNumber]= useState(n);
     const increment =()=>{
        setNumber (Number+1);
     }
  return (
    <div>
        <h1>{Number}</h1>
       <button onClick={increment}>+</button>
    </div>
  )
}

export default UseStete2