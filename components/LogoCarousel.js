// import React, { useState , useEffect } from 'react';

// const LogoCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       title: "First Slide",
//       imgSrc: "/content.jpg",
//       alt: "First Slide",
//     },
//     {
//       id: 2,
//       imgSrc: "/social.jpg",
//       alt: "Second Slide",
//     },
//     {
//       id: 3,
//       imgSrc: "/digital.jpg",
//       alt: "Third Slide",
//     },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // You can choose to auto-slide for one of the carousels
//       handleNext() // For example, auto-slide for the first carousel
//     }, 5000); // Change slide every 5000 milliseconds (5 seconds)

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <>
//       <div className="max-w-2xl m-auto">
//         <div className="relative mb-4 mt-4 ml-4">
//           <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//                   currentIndex === index ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 {slide.title && (
//                   <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
//                     {slide.title}
//                   </span>
//                 )}
//                 <img
//                   src={slide.imgSrc}
//                   className="block w-full h-full object-cover"
//                   alt={slide.alt}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
//                 aria-current={currentIndex === index}
//                 onClick={() => goToSlide(index)}
//                 aria-label={`Slide ${index + 1}`}
//               ></button>
//             ))}
//           </div>

//           <button
//             type="button"
//             className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//             onClick={handlePrev}
//             aria-label="Previous"
//           >
//             <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//               </svg>
//               <span className="hidden">Previous</span>
//             </span>
//           </button>

//           <button
//             type="button"
//             className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//             onClick={handleNext}
//             aria-label="Next"
//           >
//             <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//               </svg>
//               <span className="hidden">Next</span>
//             </span>
//           </button>
//         </div>
//         <p className="ml-4">
//           This carousel component is part of the{' '}
//           <a className="text-blue-600 hover:underline" href="https://flowbite.com/docs/components/carousel/" target="_blank" rel="noopener noreferrer">
//             Flowbite component library.
//           </a>
//         </p>
//       </div>
//     </>
//   );
// };

// export default LogoCarousel;


import React, { useState, useEffect } from 'react';

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "First Slide",
      imgSrc: "/social.jpg",
      alt: "First Slide",
    },
    {
      id: 2,
      title: "Second Slide",
      imgSrc: "/digital.jpg",
      alt: "Second Slide",
    },
    {
      id: 3,
      title: "Third Slide",
      imgSrc: "/digital.jpg",
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-full mx-auto">
      <div className="relative mt-52">
        <div className="overflow-hidden relative h-56 sm:h-64 md:h-80 lg:h-96">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            >
             
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row sm:flex-col md:max-w-8xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-full">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:max-w-3xl md:rounded-none md:rounded-s-lg " src={slide.imgSrc} alt="" />
    <div class="flex flex-col justify-between m-auto leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.alt}</p>
    </div>
</a>
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
