import React from 'react'
import OurGalley from './OurGalley'

function page() {
  return (
    <div>
        <div className='text-black text-3xl font-bold text-center p-10'>Our <span className='text-[#0077B6]'>Gallery</span></div>
        <div>
            <OurGalley />
        </div>
    </div>
    
  )
}

export default page