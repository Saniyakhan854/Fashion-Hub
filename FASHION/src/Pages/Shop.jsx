import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Filter from '../Common/Filter'
import Products from '../Common/Products'

export default function Shop() {
  return (
    <div className='grid grid-cols-6'>
        <div className='col-span-1'>
             <Filter/>
        </div>
        <div className='col-span-5'>
            <Products/>
        </div>
    </div>
  )
}
