import React from 'react'
import './styles.css'
import moduleStyle from './stylesModule.module.css'

const Styling = () => {
    // Inline css
    // Internal Css
    // Exernal Css
    // Module Css
    const Stylingprop = {
        buttonbtn : {
            backgroundColor:'green',
            padding:'15px 15px',
            color:'white',
            border:'none',
            textAlign:'center'
        },
        parastyle: {
            textAlign:'center',
            backgroundColor:'orange'
        }
    }

  return (
    <div>
        <h2 style={{backgroundColor:'red',textAlign:'center'}}>Styling</h2>
        <button style={Stylingprop.buttonbtn}>Click here</button>
        <p style={Stylingprop.parastyle}>This is Internal Styles</p>
        <button className='btnitems'>Add Items</button>
        <h4 className={moduleStyle.headfourstyle}>Module Stylings</h4>
        
    </div>
  )
}

export default Styling