import React from 'react'
import AdvantageCards from './AdvantageCards'

function Advantages() {
  return (
    <div>
        <div>
            <img src='https://images.unsplash.com/photo-1624976507762-37b9fd7c20f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{position: 'fixed', opacity:0.5, zIndex: -1,top:0, left:0, overflowX:'hidden'}} alt="bg-img" />
            <h2 className='text-center font-serif font-bold text-2xl mt-3 p-3 text-gray-500'>Fogging Machines <span className='text-[#0077B6]'>Advantages</span> </h2>
            <div className='mx-5 mb-3'> 
              <AdvantageCards />
            </div>
        </div>
    </div>
  )
}

export default Advantages