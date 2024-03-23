import React from 'react'
import { useState } from 'react'

const UseState5 = () => {
    const [Username,setUsername] = useState("");

    const handlechange = (event) =>{
        setUsername(event.target.value);
    }
    const handlesubmit =(event)=>{
        event.preventDefault();
        alert (`you type:${Username}`)
        setUsername("");
    }

  return (

    <div>
        <h1>Form</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" value={Username} onChange={handlechange} />
            <br/>
            <button>submit</button>
            
        </form>
        
    </div>
  )
}

export default UseState5