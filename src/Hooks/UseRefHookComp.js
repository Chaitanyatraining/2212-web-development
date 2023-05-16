import React, { useEffect, useRef } from 'react'

function UseRefHookComp() {
const data = useRef(null)

    // useState will re-render when the content change and update in UI.

    // useRef doesn't notify you when its content chagnes. Mutatuing the (.current) property 
    // doesn't caouse a re-render.

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data.current.value)
    }

    useEffect(()=>{
        data.current.focus()
    },[])

  return (
    <div className='container'>
        <h2>UseRefHookComp</h2>
        <form>
            <input type="text" ref={data} className='form-control' placeholder='enter your name' />
            <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default UseRefHookComp