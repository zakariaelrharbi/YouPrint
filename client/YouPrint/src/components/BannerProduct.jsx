import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import img1 from '../assets/Banner/1.jpg';
import img2 from '../assets/Banner/2.jpg';
import img3 from '../assets/Banner/3.jpg';


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
    const [currentImage, setCurrentImage] = useState(0)

    const desktopImages = [
        img1,
        img2,
        img3,
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

    const nextImage = () => {
        if( desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        } 
    }
    const prevImage = () => {
        if(currentImage !== 0){
            setCurrentImage(preve => preve - 1)
        } 
    }
    //Images auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            if( desktopImages.length - 1 > currentImage){
                setCurrentImage(preve => preve + 1)
            } else {
                setCurrentImage(0)
            }
        }, 5000)
        return () => clearInterval(interval)
    }
    , [currentImage])

  return (
    <div className='container mx-auto px-4 rounded  '>
        <div className='h-56 md:h-72 w-full bg-slate-200 relative'>
            <div className='absolute z-10 h-full w-full md:flex items-center p-2 hidden'>
                <div className=' flex justify-between w-full text-2xl '>
                <button className='bg-white shadow-md rounded-full p-1 hover:scale-105'onClick={prevImage} ><FaAngleLeft /></button>
                <button className='bg-white shadow-md rounded-full p-1 hover:scale-105'onClick={nextImage}><FaAngleRight /></button>
                </div>
            </div>
            {/* desktop and tablet version */}
            <div className='hidden md:flex h-full w-full overflow-hidden '>
                {
                    desktopImages.map((imageURL) => {
                        return (
                            <div className='w-full h-full min-h-full min-w-full transition-all' key={imageURL} style={{transform : `translateX(-${currentImage * 100}%)`}}> 
                                <img src={imageURL} className='w-full h-full'/>
                            </div>
                        )
                    })
                }
            </div>

            {/* Mobile version */}
            <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                    mobileImages.map((imageURL) => {
                        return (
                            <div className='w-full h-full min-h-full min-w-full transition-all' key={imageURL} style={{transform : `translateX(-${currentImage * 100}%)`}}> 
                                <img src={imageURL} className='w-full h-full '/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BannerProduct
