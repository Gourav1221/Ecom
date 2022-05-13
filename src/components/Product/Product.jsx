
import React from 'react'
import { useState } from 'react'
import {data} from "./avinash"
import {Prod} from "./ProdutOne"
import "./productOne.css"
export const Product = () => {
  let x ;
   const [all,setAll] = useState(data)

   const handle = (e)=>{
     if(e.target.value == "low"){
        x = all.sort((a,b)=>{
         return a.price-b.price
       })
       setAll([...x])
     }
     else if(e.target.value == "high"){
      x = all.sort((a,b)=>{
       return b.price-a.price
     })
     setAll([...x])
   }
   }
  return (
   <div className="main"> 
   <h1>filter by price </h1>
      <select onChange={handle}>
        <option>------</option>
        <option value="low">Low to high </option>
        <option value="high">high to low </option>
      </select>
      <Prod className="product">
      
        {all.map((e)=>{
            return <div key={Math.random()}>
            <h3>{e.name}</h3>
            <img src={e.img} />
           <h3> {e.price}</h3>
           <button>Add to Cart</button>
        </div>
        })}
    </Prod>
      
      
    </div>

  )
}
