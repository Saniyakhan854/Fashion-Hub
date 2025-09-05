import React, { useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Filter from '../Common/Filter'
import Products from '../Common/Products'
import { useParams } from 'react-router-dom'

export default function Shop() {

  const {slug } = useParams()
  const [rating, setRating] = useState(1)
  const [price, setPrice] = useState({from: 0, to: 1000})

  return (
    <div className='grid grid-cols-6 '>
        <div className='col-span-1 '>
             <Filter slug={slug} setRating={setRating} rating={rating} setPrice={setPrice} price={price}/>
        </div>
        <div className='col-span-5 bg-gray-100'>
            <Products slug={slug} rating={rating} price={price}/>
        </div>
    </div>
  )
}
