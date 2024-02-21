import React, { useState } from 'react'

import './Counter.css'
import CounterButton from './CounterButton'

function Counter(){
    const [count,setCounter]= useState(0)
    function incrementCounterParentFunction(by){
        setCounter(count+by)
    }
    function decrementCounterParentFunction(by){
        setCounter(count-by)
    }
 function resetButton(){
    setCounter(0)
 }
    return (
        <>
       
    <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
   <CounterButton  by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
   <CounterButton  by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
   <span className='totalCount'>
           {count}
        </span><br/>
        <button className='resetButton' onClick={resetButton}>Reset</button>
        </>
    )
}

export default Counter;