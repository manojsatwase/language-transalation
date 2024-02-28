import React from 'react'
import { useSelector } from 'react-redux'

import "./Simmer.css";

const Simmer = () => {
 const products = useSelector(state=>state.products?.products);
  return (
   <>
      {
         Array(products?.length).fill("").map((e,index)=>(
            // <div className="main__container" key={index}>
            // <h1 className="heading skeleton-box"></h1>
            // <p className="description skeleton-box"></p>

            // </div>
              <blockquote className="blockquote mb-0 main__container" key={index}>
              <h1 className="heading skeleton-box"></h1>
              <p className='description skeleton-box'></p>
              <div>
              <p className="heading skeleton-box"></p>
             </div>   
            </blockquote>
         ))
     }
   </>
  )
}

export default Simmer;