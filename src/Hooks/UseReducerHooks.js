import React, { useReducer } from 'react'

function UseReducerHooks() {
    const reducer = (currentState, action) => {
        // reducer is used to update the state based on action  
        // and returns the updated state
        console.log(action)
        switch (action.type) {
            case "INCREMENT":
                return currentState + action.payload;
            case "DECREMENT":
                return currentState - action.payload;
            default:
                return currentState
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <center>
            <h2>UseReducerHooks</h2>
            <h2>Counter App : {count}</h2>
            <button className='btn btn-primary me-2' onClick={() => dispatch({type:"INCREMENT", payload:5})}>Increment</button>
            <button className='btn btn-warning me-2' onClick={() => dispatch({type:"DECREMENT", payload:5})}>Decrement</button>
        </center>
    )
}

export default UseReducerHooks