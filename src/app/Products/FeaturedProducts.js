import React from 'react'
import ProductCards from './ProductCards'

function FeaturedProducts() {
  return (
    <div className='bg-white pt-4'>
        <h2 className='text-2xl font-serif font-bold text-center my-4'>Featured <span className='text-[#0077B6]'>Products</span></h2>
        <div>
         <ProductCards />
        </div>
       
    </div>
  )
}
export default FeaturedProducts