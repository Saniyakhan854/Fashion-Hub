import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

export default function Cart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  {/* Left Side - Cart Items */}
  <div className="md:col-span-2 space-y-4">
   <CartRow/>
    <CartRow/>
   
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

function CartRow(){
    return (
    <div className="flex items-center p-4 gap-4 border  rounded-xl shadow-sm">
      <img
        src="https://via.placeholder.com/100"
        alt="Product"
        className="w-24 h-24 object-cover rounded-xl"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">Wireless Headphones</h2>
        <p className="text-sm text-gray-500">Electronics</p>
        <p className="text-gray-700 font-medium">₹1999</p>
      </div>
      <div className="mt-2">
       <label className='text-sm text-gray-700 mr-2'>Quantity:</label>
       <input
            type='number' 
            defaultValue={1}
            min={1}
            className='w-16 px-2 py-1 border rounded-md'
       />
      </div>
      <div>
        <button className='py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg'>Remove</button>
      </div>
    </div>
    )
}
