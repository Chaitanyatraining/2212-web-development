import React from 'react'

const FuncComp = (props) => {
    const {courseName,duration} = props
  return (
    <div>
        <h2>Functional component</h2>
        <h4>Course Name: {courseName}</h4>
        <h4>Course Duration:{duration} </h4>
    </div>
  )
}

export default FuncComp
