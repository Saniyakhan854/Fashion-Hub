import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductDetail from '../Pages/ProductDetail';
import { Link } from 'react-router-dom';

export default function Products({slug , rating}) {
  

  const [allProducts, setAllProducts] = useState([]);
  const [limit, setLimit] = useState(30);

  const getProducts = ()=>{
    let apiUrl

    if(slug == undefined){
      apiUrl = `https://dummyjson.com/products?limit=${limit}`;
    }else{
            apiUrl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`
    }

    axios.get(apiUrl).then(
      (success)=>{
        const finalData = success.data.products.filter(
          (data, index)=>{
            if(data.rating >= rating)
            return true
          }
        )
          setAllProducts(finalData)
      }
    ).catch(
      (err)=>{
        console.log(err)
      }
    )
  }


  useEffect(
    () => {
      getProducts();
  }, [slug, limit, rating] 
)



  return (
    <>
    <h2 className='mx-3 mt-3'>Total Product: {allProducts.length}</h2>
    <main className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {
          allProducts.map(
            (product, index) => {
              return  (
                <ProductCard key={index} product={product}/>
            )
            }
          )
        }
          
    </main>
<div className='text-center'>
      <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2
       rounded-md text-white' onClick={()=>setLimit(limit + 20)}>Load More</button>
</div><br /><br />
  </>
  )
}

function ProductCard({product}) {
  
    return (
          
  <div className="mt-4 max-w-sm bg-white border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

      <Link to={`/productdetail/${product.id}`}>
          <img
              className="w-full h-52 object-cover rounded-xl mb-4"
              src={product.thumbnail}
              alt="Product Image"
              />
            <div className='p-4'>
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
            
              <p className="text-green-600 font-bold text-xl mb-2">{product.price}</p>
              <p className="text-gray-700 mb-2">
                Rating: <span className="font-semibold">{product.rating}</span>
              </p>

                <p className='tect-sm text-gray-500'>{product.category}</p>
                <p className='tect-sm text-gray-500'>{product.brand}</p>
              </div>
    </Link>
    
    <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white ml-4 mb-2'>Add to Card</button>
  </div>

    )
}