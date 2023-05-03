import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pagination from '../Pagination'
import ContactUs from '../ContactUs'
import UseStateHookComp from '../Hooks/UseStateHookComp'
import UseEffectHookcomp from '../Hooks/UseEffectHookcomp'
import UseEffectPagination from '../Hooks/UseEffectPagination'

function Routing() {
  return (
    <>
    <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path="pagination" element={<Pagination />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path="useStatehook" element={<UseStateHookComp />} />
        <Route path="useeffecthook" element={<UseEffectHookcomp />} />
        <Route path="useeffectPagination" element={<UseEffectPagination />} />
    </Routes>
    </>
  )
}

export default Routing