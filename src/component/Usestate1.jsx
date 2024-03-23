import React from 'react'
import { useState } from 'react'

const Usestate1 = () => {

    const[Myname,setMyname] = useState('heroic');

    const ChangeName = () => {
        setMyname('Jesus is Above all')
    }

  return (
    <div>
        <h1>{Myname}</h1>
        <button onClick={ChangeName}>changeName</button>
    </div>
  )
}

export default Usestate1