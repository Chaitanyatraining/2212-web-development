import React from 'react'

function ConditionalRendering() {
    // const obj = {
    //     firstName : 'chaitanya'
    // }

    // const age = 18;
    // if (age >= 18){
    //     return <h3>you are eligible to vote</h3>
    // }else {
    //     return <h3>you are not eleigible to vote</h3>

    let age = 18;
    return (
        <div>
            <h2>ConditionalRendering</h2>
            {
                age >= 18 ? (<h3>you are eligible to vote</h3>) : (<h3>you are not eligible to vote</h3>)
            }
        </div>
    )
}

export default ConditionalRendering