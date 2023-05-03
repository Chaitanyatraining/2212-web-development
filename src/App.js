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
import Routing from './Routing/Routing'

const App = () => {
  const productDetails ={
    itemName: 'iphone',
    itemPrice: 20000
  }
  return(
    <div>
      <Header />
      <Routing />
      {/* <Styling /> */}
      {/* <FuncComp courseName={'reactJs'} duration={'3 months'} productDetails={productDetails} /> */}
      {/* <ListsAndKeys /> */}
      {/* <ConditionalRendering /> */}
      {/* <ContactUs /> */}
      {/* <Counter  /> */}
      {/* <LifeCycleMethods /> */}
      {/* <Pagination /> */}
    </div>
  )
}

export default App