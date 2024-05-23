import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import CategoryList from '../components/CategoryList'

const Home = () => {
  return (
    <div className='bg-NeutreSilver'>
      <CategoryList />
      <HeroSection />
      <Cards />
    </div>
  )
}

export default Home
