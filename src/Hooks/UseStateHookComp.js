import React, { useState } from 'react'


function UseStateHookComp() {
    const [counter, setCounter] =  useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

  return (
    <center className='mt-2'>
        <h2>UseStateHookComp</h2>
        <h4>{counter}</h4>
        <button className='btn btn-primary me-2' onClick={handleIncrement}>Increment</button>
        <button className='btn btn-danger me-2' onClick={handleDecrement}>Decrement</button>
    </center>
  )
}

export default UseStateHookComp