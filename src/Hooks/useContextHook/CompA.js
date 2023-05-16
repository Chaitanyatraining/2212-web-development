import React from 'react'
import { CompB } from './CompB';

export const userContext = React.createContext();

export const CompA = () => {
  return (
    <center>
        <h2>CompA</h2>
        <userContext.Provider value={"ReactJs Training"}>
            <CompB />
        </userContext.Provider>
    </center>
  )
}
