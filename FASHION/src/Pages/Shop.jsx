import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Filter from '../Common/Filter'
import Products from '../Common/Products'
import { useParams } from 'react-router-dom'

export default function Shop() {

  const {slug } = useParams()

  return (
    <div className='grid grid-cols-6 '>
        <div className='col-span-1 '>
             <Filter slug={slug}/>
        </div>
        <div className='col-span-5 bg-gray-100'>
            <Products slug={slug}/>
        </div>
    </div>
  )
}
