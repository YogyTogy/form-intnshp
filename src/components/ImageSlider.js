import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import {AiFillLinkedin, AiFillFacebook, AiOutlineInstagram} from 'react-icons/ai'

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/3309865/pexels-photo-3309865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/5200063/pexels-photo-5200063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/15848946/pexels-photo-15848946/free-photo-of-gradient-graphic-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[90%] w-[50%] self-center px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-500 ">
        <div className=" text-white font-bold pt-[10%] ml-6 text-2xl">
            E X O
        </div>
        <div className=" text-white font-bold pt-[40%] ml-6">
          <h1 className="text-5xl ">100% Uptime😎</h1>
          <p className="text-2xl ml-2 text-gray-300 font-semibold w-[30%]">
            Zero Infrastructure Management
          </p>
          <div className="flex space-x-1 ">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer w-2 text-gray-300"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white mt-36 ml-6 flex justify-between"> 
            <div>
           🌐aesthisia.com
            </div>
            <div className="flex space-x-1 p-2 text-xl">
                <AiFillLinkedin />
                <AiFillFacebook />
                <AiOutlineInstagram />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
