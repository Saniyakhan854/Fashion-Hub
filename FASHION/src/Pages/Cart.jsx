import React, { useContext } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import { Context } from './MainContext'
import ProductDetail from './ProductDetail'
import { Link } from 'react-router-dom'

export default function Cart() {

    const {cart, setCart } = useContext(Context)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  {/* Left Side - Cart Items */}
  <div className="md:col-span-2 space-y-4">
    {

      cart.length == 0 
      ? 
      <h1 className='text-center text-5xl'>No Item Found</h1>
       :
        cart.map(
            (cartData, cartIndex)=>{
                return (
                     <CartRow cartData={cartData} cartIndex={cartIndex} key={cartIndex} cart={cart} setCart={setCart}/>
                )
            }
        )
    }

   
  </div>

  {/* Right Side - Summary */}
  <div className="border rounded-xl shadow-md h-fit p-4 space-y-3">
    <h2 className="font-bold text-xl">Order Summary</h2>
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>₹6997</span>
    </div>
    <div className="flex justify-between">
      <span>Shipping</span>
      <span>₹100</span>
    </div>
    <div className="flex justify-between font-bold text-lg border-t pt-2">
      <span>Total</span>
      <span>₹7097</span>
    </div>
    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
      Proceed to Checkout
    </button>
  </div>
</div>

  )
}

function CartRow({cartData, cartIndex, cart, setCart}){

  const deleteCartRow = (index)=>{
    const cartData = [...cart];
    cartData.splice(index, 1);
    setCart(cartData)
  }
 
  
    return (
    <div className="flex items-center p-4 gap-4 border  rounded-xl shadow-sm">
      <img
        src={cartData.thumbnail}
        alt="Product"
        className="w-24 h-24 object-cover rounded-xl"
      />
      <div className="flex-1">
        <Link to={`/productdetail/${cartData.id}`}>
        <h2 className="font-semibold text-lg">{cartData.title}</h2>
        </Link>
        <p className="text-sm text-gray-500">{cartData.category}</p>
        <p className="text-gray-700 font-medium">${cartData.price}</p>
     
      </div>
      <div className="mt-2">
       <label className='text-sm text-gray-700 mr-2'>Quantity:</label>
       <input
            type='number' 
            defaultValue={cartData.qty}
            min={1}
            className='w-16 px-2 py-1 border rounded-md'
       />
      </div>
      <div>
        <button onClick={()=>deleteCartRow(cartIndex)} className='py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg'>Remove</button>
      </div>
    </div>
    )
}
