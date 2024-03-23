import React from 'react'
import { useState } from 'react';

const UseState4 = () => {
    const [Friends,setFriend] = useState([
        {
        id:1,
        Name:"Heroic",
        Sex:"male",
        Age:"23"
    },
        {
        id:2,
        Name:"kwitonda",
        Sex:"male",
        Age:"31"
        },
        {
        id:3,
        Name:"jerome",
        Sex:"male",
        Age:"25"   
        },
    ]);
    const Change = () => {
        setFriend(Friends.map(f => f.id===1 ? {...Friends,id:1,Name:"abi",Sex:"female",Age:"1"}:f))
    }
  return (
    <div>
        {Friends.map(f => (
            <ul key={Math.random()}>
            <li>{f.id}</li>
            <li>{f.Name}</li>
            <li>{f.Sex}</li>
            <li>{f.Age}</li>
            </ul>
        ))}
        <button onClick={Change}>change</button>
    </div>
  )
}

export default UseState4