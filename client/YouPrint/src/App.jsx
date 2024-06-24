import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'sonner'; // Ensure you're using 'sonner' consistently
import WatssapWidget from './components/WatssapWidget';

const App = () => {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Outlet />
        <WatssapWidget />
      </main>
      <Footer />
    </>
  );
};

export default App;
