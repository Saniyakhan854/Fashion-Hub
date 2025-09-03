import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Filter() {

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
    <div>
        <div className='m-3'>
            <h1 className='text-2xl'>Filter by Category</h1>
            <div>
                 <div className='bg-blue-500 text-white border rounded-lg px-4 my-2 py-2 cursor-pointer'>ALl Categoruries</div>
                {
                    allCategories.map(
                        (data, index)=>{
                            return (
                                <div className='border rounded-lg px-4 my-2 py-2 cursor-pointer' key={index}>{data.name}</div>
                            )
                        }
                    )
                }
            </div>
        </div>
    </div>
  )
}
