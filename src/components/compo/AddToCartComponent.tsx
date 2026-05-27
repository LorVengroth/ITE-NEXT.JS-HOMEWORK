'use client'
import { useState } from "react"

export default function AddToCartComponent(){

    // creating state
    //     state , funcUpdateState    initializa value
    //       |          |              |
    const [count , setCount] = useState(0);

  
    
    return(
        <>
        
        <h1> Cart: {count} </h1>
        <button className="pt-4 pb-4 pl-8 pr-8 bg-amber-300 rounded-2xl" onClick={() => setCount(count + 1)} >Add to cart</button>
        
        </>
    )
}