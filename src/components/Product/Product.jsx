
import React from 'react'
import {data} from "./avinash"
import {Prod} from "./ProdutOne"
import "./productOne.css"
export const Product = () => {
    console.log(data)
  return (
      <>
      
      <Prod className="product">
        {data.map((e)=>{
            return <div key={Math.random()}>
            <h3>{e.name}</h3>
            <img src={e.img} />
           <h3> {e.price}</h3>
           <button>Add to Cart</button>
        </div>
        })}
    </Prod>
      
      
      </>

  )
}
