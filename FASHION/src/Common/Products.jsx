import React from 'react'

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ProductCard/>
        
</div>

  )
}

function ProductCard() {
    return (
          
  <div className="mt-4 max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

  <img
    className="w-full h-48 object-cover rounded-xl mb-4"
    src="https://via.placeholder.com/300x200"
    alt="Product Image"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">Product Title</h2>
   
    <p className="text-green-600 font-bold text-xl mb-2">$49.99</p>
    <p className="text-gray-700 mb-2">
      Rating: <span className="font-semibold">4.5/5</span>
    </p>

      <p className='tect-sm text-gray-500'>Category: Electronics</p>
      <p className='tect-sm text-gray-500'>Brand: ABC</p>
    
    <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white'>Add to Card</button>
  </div>
</div>
    )
}