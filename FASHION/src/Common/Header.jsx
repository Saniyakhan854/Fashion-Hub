import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Pages/MainContext'

export default function Header() {

const {cart } = useContext(Context)

  return (
      <header className="bg-blue-600 text-white shadow sticky top-0 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fashion Hub</h1>
          <nav className='space-x-4'>
             <Link to={'/'}>
              Home
           </Link>
           <Link to={'/shop'}>
              Shop
           </Link>
           <Link to={'/about'}>
              About
           </Link>
           <Link to={'/contact'}>
              Contact
           </Link>
           <Link to={'/shop'}>
              <button className='bg-orange-500 hover:bg-orange-600 p-2 px-3 rounded-lg'>Cart ({cart})</button>
           </Link>
          </nav>
          
        </div>
      </header>
  )
}
