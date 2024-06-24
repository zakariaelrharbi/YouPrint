import React from 'react';

const WhatsappWidget = () => {
  return (
    <div>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348100000000"
        className="fixed w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bottom-[20px] right-[10px] xl:bottom-[20px] xl:right-[30px] bg-[#25d366] text-white rounded-full text-center shadow-custom-green z-[100] hover:scale-110 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp text-[24px] xl:text-[30px] flex items-center justify-center h-full"></i>
      </a>
    </div>
  );
};

export default WhatsappWidget;

