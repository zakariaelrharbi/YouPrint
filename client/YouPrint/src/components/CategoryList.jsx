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
    <div className='container mx-auto p-4 mt-[85px] '>
            <div className='flex items-center gap-4 justify-around overflow-scroll no-scrollbar'>
                {
                    product.map((item, index) => (
                        <div className=''>
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
