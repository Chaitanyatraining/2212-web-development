import React from 'react'
import { userContext } from './CompA'

export const CompC = () => {
  return (
    <div>
          <h2>CompC</h2>
        <userContext.Consumer>
            {value =><h3>Course Name : {value}</h3> }
        </userContext.Consumer>
      
    </div>
  )
}
