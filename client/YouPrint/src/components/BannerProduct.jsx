import React from 'react'
import image1 from '../assets/Banner/img1.webp'
import image1M from '../assets/Banner/img1_mobile.jpg'

const BannerProduct = () => {
  return (
    <div className='container mx-auto px-4 rounded overflow-hidden '>
        <div className='h-72 w-full bg-slate-200'>
            <div className='w-full h-full'>
                <img src={image1} className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default BannerProduct
