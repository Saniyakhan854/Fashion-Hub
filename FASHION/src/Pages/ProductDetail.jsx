import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState({})
    
    const getproductDetail = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((success) => {
            setCurrentProduct(success.data)
            console.log(success.data)
        }
    ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    useEffect(()=>{
        getproductDetail();
    }, []
    )
    
  return (
    <div className="max-w-6xl mb-4 mx-auto p-6 md:flex gap-10">
  {/* Images Section */}
  <div className="md:w-1/2">
    <img
      src={currentProduct.thumbnail}
      alt="Main Product"
      className="w-full h-auto rounded-lg mb-4"
    />
    <div className="flex gap-2 mt-4">
        {
        currentProduct?.images?.map((imgData, index)=>{
            return (
                <img
        src={imgData}
        alt="Thumbnail 1"
        className="w-20 h-20 object-cover rounded-lg border border-blue-500"
      />
            )
        })
        }
      

      
    </div>
  </div>

  {/* Product Info Section */}
  <div className="md:w-1/2 flex flex-col justify-between">
    <div>
      <h1 className="text-3xl font-bold mb-2">{currentProduct.title}</h1>
      <p className="text-xl text-green-600 font-semibold mb-2">₹{currentProduct.price}</p>
      <div className="flex items-center mb-4">
       Rating:  &nbsp;<span className="text-yellow-400 font-bold mr-2"> {currentProduct.rating}/5</span>
        <span className="text-gray-500">(2 reviews)</span>
      </div>
      <p className="text-gray-700 mb-6">
        {currentProduct.description}
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>

    {/* Reviews Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

      {
        currentProduct?.reviews?.map(
            (review, index)=>{
                return (
                     <div className="border-t border-gray-200 py-4 flex flex-col">
                        <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{review.reviewerName
}</span>
                        <span className="text-yellow-400">{review.rating}★</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                        <p className='test-sm pt-2'>{review.reviewerEmail}</p>
                    </div>
                )
            }
        )
      }

    </div>
  </div>

</div>


  )
}
