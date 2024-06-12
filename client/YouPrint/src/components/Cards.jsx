import React from 'react';
import img1 from '../assets/Images/imgA.png'



const CardData = [
  {
    title: "Lorem Ipsum Dolor",
    img: img1,
  },
  {
    title: "Lorem Ipsum Dolor",
    img: img1,
  },
  {
    title: "Lorem Ipsum Dolor",
    img: "https://readymadeui.com/cardImg.webp",
  },
  {
    title: "Lorem Ipsum Dolor",
    img: "https://readymadeui.com/cardImg.webp",
  },
  {
    title: "Lorem Ipsum Dolor",
    img: img1,
  },
  {
    title: "Lorem Ipsum Dolor",
    img: img1,
  },
  {
    title: "Lorem Ipsum Dolor",
    img: "https://readymadeui.com/cardImg.webp",
  },
  {
    title: "Lorem Ipsum Dolor",
    img: "https://readymadeui.com/cardImg.webp",
  },
];

const Cards = () => {
  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Meilleures ventes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CardData.map((data, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="">
                <h3 className="text-xl font-bold text-gray-800 text-center mt-6">
                  {data.title}
                </h3>
              </div>
              <img
                src={data.img}
                alt={data.title}
                className="w-full  rounded-xl object-cover h-[250px] mb-6 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;

