import React, { useState } from 'react'
import "./Project3.css"

const Project3 = () => {

const [inputvalue,setInputvalue] = useState("");

const display = (value) =>{
  const v = (inputvalue+value)
  setInputvalue(v)
}
const answer =() =>{
  let a = eval (inputvalue)
  setInputvalue(a)
}


  return (
    <div>
        <form name='calc' className="calculator">
         
         <input type="text"  className='value' value={inputvalue}/>
         <span className="num clear" onClick={()=> setInputvalue("")}>C</span>
         <span onClick={()=> display('/')}>/</span>
         <span onClick={()=> display('*')}>*</span>
         <span onClick={()=> display('-')}>-</span>
         <span onClick={()=> display('9')}>9</span>
         <span onClick={()=> display('8')}>8</span>
         <span onClick={()=> display('7')}>7</span>
         <span onClick={()=> display('6')}>6</span>
         <span onClick={()=> display('+')} className='plus'>+</span>
         <span onClick={()=> display('5')}>5</span>
         <span onClick={()=> display('4')}>4</span>
         <span onClick={()=> display('3')}>3</span>
         <span onClick={()=> display('2')}>2</span>
         <span onClick={()=> display('1')}>1</span>
         <span onClick={()=> display('0')}>0</span>
         <span onClick={()=> display('00')}>00</span>
         <span onClick={()=> display('.')}>.</span>
         <span  className='num equal' onClick={answer}>=</span>


        </form>
   
    </div>
  )
}

export default Project3