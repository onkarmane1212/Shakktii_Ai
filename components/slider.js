import React, { useState , useEffect } from 'react';

// const Slider = () => {
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
//       <div className=" m-auto">
//         <div className="relative ">
//           <div className=" relative  rounded-lg sm:h-64 xl:h-80 2xl:h-96">
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
       
//       </div>
//     </>
//   );
// };

// export default Slider;


const Slider = () => {
  return (
<>
<div className='flex flex-col items-start m-10'>
<div className='mb-4 p-10 bg-white flex justify-end border-l-4 border-b-4 border-solid rounded-bl-full w-full custom-shadow'>
    <img src='/digital.jpg' className=' mr-2 top-0 right-0 h-32 w-32' />
</div>

    <div className=' mb-4 p-40 bg-white shadow-lg border-b-4 border-r-4 border-solid rounded-br-full  w-full '>
        Box 2
    </div>
    <div className=' mb-4 p-40 bg-white shadow-lg border-b-4 border-l-4 border-solid rounded-bl-full  w-full '>
        Box 3
    </div>
    <div className=' mb-4 p-40 bg-white shadow-lg border-b-4 border-r-4 border-solid rounded-br-full w-full'>
        Box 4
    </div>
</div>



    </>)}

export default Slider;