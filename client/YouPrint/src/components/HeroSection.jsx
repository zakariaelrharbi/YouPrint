import { Carousel } from "flowbite-react";
import image1 from '../assets/Images/img1.png';


const HeroSection = () => {
  
  return (
    <div className="bg-NeutreSilver">
  <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
    <Carousel className="w-full mx-auto">
      <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* hero image */}
        <div>
          <img src={image1} alt="" style={{ width: '100%', maxWidth: '920px', height: 'auto' }} />
        </div>
        {/* hero text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black md:w-3/4">You<span className="text-primaryGreen">Print</span> Votre imprimerie en ligne</h1>
          <p className="text-black text-base mb-8 md:text-lg">Découvrez YouPrint, votre partenaire pour une impression numérique de 
            qualité exceptionnelle. Que ce soit pour des cartes de visite, des flyers, ou tout autre support numérique,
            <span className="font-semibold"> You<span className="text-primaryGreen">Print</span></span> vous offre des solutions personnalisées et innovantes.</p>
            <button className="px-4 md:px-7 py-2 bg-primaryGreen text-white font-semibold rounded-md transition-all hover:bg-opacity-100 duration-300 hover:-translate-y-1 opacity-80">En savoir plus</button>
        </div>
      </div>
    </Carousel>
  </div>
</div>

  );
  
};

export default HeroSection;

