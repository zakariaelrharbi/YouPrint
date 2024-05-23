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
    }
    ]

const CategoryList = () => {
  return (
    <div className='container mx-auto p-4'>
        <div>
            <div className='flex items-center gap-2'>
                {
                    product.map((item, index) => (
                        <div key={index} className='w-1/6'>
                            <img src={item.image} alt='product' className='w-full' />
                        </div>
                    ))
                }

            </div>
        </div>
      
    </div>
  )
}

export default CategoryList
