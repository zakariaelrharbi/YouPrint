import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster, toast } from 'sonner'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Toaster  richColors position="top-center"/>
    <Header />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default App

