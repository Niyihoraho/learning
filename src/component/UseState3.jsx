import React from 'react'
import { useState } from 'react'

const UseState3 = () => {

  const [Friends,setFriend] = useState(["heroic","kwitondo","Jerome"]);

  const AddName = () => {
    setFriend ([...Friends,"Abigael"]);
  }
  const  Remove = () =>{
    setFriend ((Friends) => Friends.filter(f => f!=="Abigael"));
  }
  const Update = () =>{
    setFriend (Friends.map(f => f==="heroic"?"heroic Niyihoraho":f))
  }

  return (
    <div>
        {Friends.map(f => (
         
         <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={AddName}>Add Name</button>
        <button onClick={Remove}>Remove Name</button>
        <button onClick={Update}>Update Name</button>
    </div>
  )
}

export default UseState3