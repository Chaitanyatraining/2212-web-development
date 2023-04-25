import React from 'react'
import Header from './Header'
import Styling from './Stylings/Styling'
import  FuncComp  from './FuncComp'
import ListsAndKeys from './ListsAndKeys'
import ConditionalRendering from './ConditionalRendering'
import ContactUs from './ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Counter'
import LifeCycleMethods from './LifeCycleMethods'
import Pagination from './Pagination'

const App = () => {
  const productDetails ={
    itemName: 'iphone',
    itemPrice: 20000
  }
  return(
    <div>43
      <h2>Welcome to react</h2>
      {/* <Header />
      <Styling /> */}
      {/* <FuncComp courseName={'reactJs'} duration={'3 months'} productDetails={productDetails} /> */}
      {/* <ListsAndKeys /> */}
      {/* <ConditionalRendering /> */}
      {/* <ContactUs /> */}
      {/* <Counter  /> */}
      {/* <LifeCycleMethods /> */}
      <Pagination />
    </div>
  )
}

export default App