import React from 'react'
import { FAQ } from './Faq'

export const FandAndLogo = () => {
  return (
    <div className='w-[1512px] h-[600px] '>
       <div className="w-[282px] h-[52px] relative top-[16px]  left-[943px] font-shojumaru  text-[44px] font-normal leading-[52.36px] text-[#ED0137] ">
            FAQ
        </div> 
   <div className='flex justify-evenly '>
   {/* mt-[109px] ml-[87px] */}
    <img className='w-[503px] h-[503px]' src="../../images/image1.png" alt="" />
    <FAQ/>
   </div>
    </div>
  )
}
