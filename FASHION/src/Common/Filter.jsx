import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Filter({ slug , setRating, rating, price, setPrice}) {

    const [allCategories, setAllCategories] = useState([]);

    const getCategories =  ()=> {
        axios.get("https://dummyjson.com/products/categories")
        .then(
           (success)=>{
            setAllCategories(success.data)
           
           } 
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }
   const fromPrice = (event)=>{
    if(event.target.value >= 0){
       setPrice({...price, from: event.target.value})
    }
 
   }
   const toPrice = (event)=>{
    if(event.target.value >= 0){
         setPrice({...price, to: event.target.value})
    }
   
   }

    useEffect(
        () => {
            getCategories();
        }, []
    )

  return (
    <>
         <div className='m-3 border-b my-5'>
            <h1 className='text-2xl '>Filter by Rating</h1>
          <div>
                <div onClick={()=> setRating(4)} className={`py-2 border ${rating == 4 ? 'bg-blue-500' : ''} rounded-lg cursor-pointer p-2 my-2`}>4 ⭐ & Above</div>
                <div onClick={()=> setRating(3)} className={`py-2 border ${rating == 3 ? 'bg-blue-500' : ''} rounded-lg cursor-pointer p-2 my-2`}>3 ⭐ & Above</div>
                <div onClick={()=> setRating(2)} className={`py-2 border ${rating == 2 ? 'bg-blue-500' : ''} rounded-lg cursor-pointer p-2 my-2`}>2 ⭐ & Above</div>
                <div onClick={()=> setRating(1)} className={`py-2 border ${rating == 1 ? 'bg-blue-500' : ''} rounded-lg cursor-pointer p-2 my-2`}>1 ⭐ & Above</div>
          </div>
        </div>
         <div className='mx-3 border-b my-5'>
            <h1 className='text-2xl my-3'>Filter by Price</h1>
          <div className='flex justify-between items-center'>
            <input onChange={fromPrice} type='number' placeholder='from' className='w-20 border p-2' value={price.from}/>
            to
            <input onChange={toPrice} type='number' placeholder='to' className='w-20 p-2 border' value={price.to}/>
          </div>
        </div>
        <div className='m-3 border-b my-5'>
            <h1 className='text-2xl my-3'>Filter by Category</h1>
            <Link to={'/shop'}>
                <div className={`  border rounded-lg px-4 
                  ${slug == undefined ? 'bg-blue-500 text-white' : ''}    my-2 py-2 cursor-pointer`}>ALl Categoruries
                 </div>
            </Link>
            
                
               <div> 
                {
                    allCategories.map(
                        (categoryData, index)=>{
                            
                            return (
                                <Link to={`/shop/${categoryData.slug}`}>
                                       <div className={`border rounded-lg px-4 my-2 py-2 cursor-pointer ${categoryData.slug == slug ? 'bg-blue-500 text-white' : ''}`}
                                        key={index}>{categoryData.name}
                                        </div>
                                </Link>

                            )
                        }
                    )
                }
            </div> 
        </div>
    </>
  )
}
