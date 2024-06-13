import React from 'react'
import img1 from '../assets/Images/imgA.png'

const product = [
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    {
        image: img1,
        categorie: 'Card'
    },
    
    
    
  
   
    
   
    
   
    ]

const CategoryList = () => {
  return (
    <div className='container  pt-4 pb-4 mt-[85px] w-full mx-auto'>
            <div className='flex items-center gap-[19px] justify-around overflow-scroll no-scrollbar  md:ml-20 md:mr-20'>
                {
                    product.map((item) => (
                        <div >
                            <div className='w-16 h-16 md:w-20 md:h-20  p-4 bg-slate-200 rounded-full overflow-hidden shadow-md flex items-center justify-center'>
                                <img src={item.image} alt='product' className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all' />
                            </div>
                            <p className='pt-1 text-center text-sm md:text-base capitalize'>{item.categorie}</p>
                        </div>
                    ))
                }

            </div>      
    </div>
  )
}

export default CategoryList
