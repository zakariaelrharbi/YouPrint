import React from 'react'
import watssapIcon from '../assets/Images/whatsapp.png'

const WatssapWidget = () => {
  return (
    <>
      <div>
        {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348100000000"
        // whatsapp_float
        className="fixed w-[60px] h-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-white rounded-full text-center text-[30px] shadow-lg z-[100]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp mt-[10px] xl:mt-[16px]"></i>
      </a>
      </div>
    </>
  )
}

export default WatssapWidget
