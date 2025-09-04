import React from 'react'
import axios from "axios";

export default function ProductDetail() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:flex gap-10">
  {/* Images Section */}
  <div className="md:w-1/2">
    <img
      src="https://via.placeholder.com/400x400"
      alt="Main Product"
      className="w-full h-auto rounded-lg mb-4"
    />
    <div className="flex gap-4">
      <img
        src="https://via.placeholder.com/400x400"
        alt="Thumbnail 1"
        className="w-20 h-20 object-cover rounded-lg border border-blue-500"
      />
      <img
        src="https://via.placeholder.com/400x400/ff7f7f"
        alt="Thumbnail 2"
        className="w-20 h-20 object-cover rounded-lg border border-gray-300"
      />
      <img
        src="https://via.placeholder.com/400x400/87ceeb"
        alt="Thumbnail 3"
        className="w-20 h-20 object-cover rounded-lg border border-gray-300"
      />
      <img
        src="https://via.placeholder.com/400x400/32cd32"
        alt="Thumbnail 4"
        className="w-20 h-20 object-cover rounded-lg border border-gray-300"
      />
    </div>
  </div>

  {/* Product Info Section */}
  <div className="md:w-1/2 flex flex-col justify-between">
    <div>
      <h1 className="text-3xl font-bold mb-2">Sample Product Title</h1>
      <p className="text-xl text-green-600 font-semibold mb-2">₹499</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-400 font-bold mr-2">4.5 ★</span>
        <span className="text-gray-500">(2 reviews)</span>
      </div>
      <p className="text-gray-700 mb-6">
        This is a detailed description of the product. It includes all the key features and benefits of the product.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>

    {/* Reviews Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

      <div className="border-t border-gray-200 py-4 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold">John Doe</span>
          <span className="text-yellow-400">5 ★</span>
        </div>
        <p className="text-gray-600">Amazing product! Highly recommend it.</p>
      </div>

      <div className="border-t border-gray-200 py-4 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold">Jane Smith</span>
          <span className="text-yellow-400">4 ★</span>
        </div>
        <p className="text-gray-600">Good quality, but shipping was slow.</p>
      </div>
    </div>
  </div>
</div>

  )
}
