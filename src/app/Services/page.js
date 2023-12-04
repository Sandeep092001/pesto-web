import React from 'react'
import ServiceCards from './ServiceCards'

function page() {
  return (
    <div>
       <div className='text-black text-3xl text-center p-10 font-bold'> Our <span className='text-[#0077B6]'>Services</span> </div>
       <div>
         <ServiceCards />
       </div>
    </div>
    
  )
}

export default page