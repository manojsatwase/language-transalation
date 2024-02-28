import React from 'react'

const Products = ({_id,name,description,createdAt,lang}) => {
  return (
    <blockquote className="blockquote mb-0 main__container" key={_id}>
                   <h1 className="heading">{name?.[lang]}</h1>
                   <p className='description'>{description?.[lang]}</p>
                   <footer>
                   <title className="blockquote-footer" title="Source Title">Created On - {createdAt}</title>
                  </footer>   
 </blockquote>
  )
}

export default Products