import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Filter({ slug}) {

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
   

    useEffect(
        () => {
            getCategories();
        }, []
    )

  return (
    <>
        <div className='mx-2'>
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
