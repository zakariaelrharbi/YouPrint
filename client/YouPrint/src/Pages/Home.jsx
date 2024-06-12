import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import Steps from '../components/Steps'

const Home = () => {
  return (
    <div className='bg-NeutreSilver'>
      <CategoryList />
      <BannerProduct />
      <HeroSection />
      <Cards />
      <Steps />
    </div>
  )
}

export default Home
