import React, { useState } from 'react'
import "./Project1.css"

const Project1 = () => {
    const[counter,setCounter] = useState(0);
    const increment = () => setCounter(counter+1);
    const decrement = () => setCounter(counter-1);

  return (
    <div>
        <div className="container">
            <h1 className="number">{counter}</h1>
            <section className="btns-container">
                <button className="increment" onClick={increment}>+</button>
                <button className="decrement" onClick={decrement}>-</button>
            </section>
        </div>
    </div>
  )
}

export default Project1