import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext();

export default function MainContext({children}) {

  const oldCartData = JSON.parse(localStorage.getItem("CART")) ?? [];
  const [cart, setCart] = useState(oldCartData);

  useEffect(
    () => {
      localStorage.setItem("CART", JSON.stringify(cart))
    } , [cart]
  )
 
  return (
    <>
        <Context.Provider value={{cart , setCart}}>
            {children}
        </Context.Provider> 
    </>
  )
}
