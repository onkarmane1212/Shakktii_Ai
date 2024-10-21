

import React, { useState, useEffect } from 'react';

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "First Slide",
      imgSrc: "/modi.gif",
      alt: "First Slide",
    },
    {
      id: 2,
      title: "Second Slide",
      imgSrc: "/india.gif",
      alt: "Second Slide",
    },
    {
      id: 3,
      title: "Third Slide",
      imgSrc: "/maharastra.gif",
      alt: "Third Slide",
    },
    {
      id: 3,
      title: "Third Slide",
      imgSrc: "/rajmudra.gif",
      alt: "Third Slide",
    },
    {
      id: 4,
      title: "fourth Slide",
      imgSrc: "/AI.gif",
      alt: "Third Slide",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="view  max-w-full mx-auto">
      <div className="  slider relative lg:-mt-32 md:-mt-32 sm:-mt-20">
      <h2 className='z-90 slider text-4xl font-bold text-center bg-white p-2'>Our Past Experiance</h2>
        <div className="lg:overflow-hidden relative h-56 sm:h-64 md:h-80 lg:h-96">
          
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            >
             
<a href="#" class=" flex flex-col items-center bg-white border border-gray-200  md:flex-row sm:flex-col md:max-w-8xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-full">
    <img class="object-cover m-auto shadow-bottom md:h-auto md:max-w-3xl rounded-b-full  " src={slide.imgSrc} alt="" />

    <div class="flex flex-col justify-between m-auto leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.alt}</p>
    </div></a>
            </div>
          ))}
        </div>

        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-current={currentIndex === index}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={handleNext}
          aria-label="Next"
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
       </div>
    </div>
  );
};

export default LogoCarousel;
