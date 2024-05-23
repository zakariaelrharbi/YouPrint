import React from 'react'

const product = [
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    },
    {
        image: 'https://via.placeholder.com/150'
    }
    ]

const CategoryList = () => {
  return (
    <div className='container mx-auto p-4 mt-[80px] ml-[130px]'>
            <div className='flex items-center gap-4'>
                {
                    product.map((item, index) => (
                        <div className=''>
                            <div key={index} className='w-20 h-20 rounded-full overflow-hidden p-2 bg-white'>
                                <img src={item.image} alt='product' className='h-full object-fill' />
                            </div>
                        </div>
                    ))
                }

            </div>      
    </div>
  )
}

export default CategoryList
