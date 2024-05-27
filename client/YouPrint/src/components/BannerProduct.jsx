import React from 'react'
import image1 from '../assets/Banner/img1.webp'
import image2 from '../assets/Banner/img2.webp'
import image3 from '../assets/Banner/img3.jpg'
import image4 from '../assets/Banner/img4.jpg'
import image5 from '../assets/Banner/img5.webp'

import image1M from '../assets/Banner/img1_mobile.jpg'
import image2M from '../assets/Banner/img2_mobile.webp'
import image3M from '../assets/Banner/img3_mobile.jpg'
import image4M from '../assets/Banner/img4_mobile.jpg'
import image5M from '../assets/Banner/img5_mobile.png'

const BannerProduct = () => {
    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ]
    const mobileImages = [
        image1M,
        image2M,
        image3M,
        image4M,
        image5M,
    ]
  return (
    <div className='container mx-auto px-4 rounded  '>
        <div className='h-72 w-full bg-slate-200'>
            {
                desktopImages.map((imageURL, index) => {
                    return (
                        <div className='w-full h-full' key={imageURL}> 
                            <img src={imageURL} className='w-full h-full'/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BannerProduct
