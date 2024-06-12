import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'

const Home = () => {
  return (
    <div className='bg-NeutreSilver'>
      <CategoryList />
      <BannerProduct />
      <HeroSection />
      <Cards />
    </div>
  )
}

export default Home
