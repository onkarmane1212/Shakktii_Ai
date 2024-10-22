

// import React, { useState, useEffect } from 'react';

// const LogoCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       title: "2012",
//       imgSrc: "/modi.gif",
//       alt: "Inspired by Shree Narendra Modi, Puushkar an ISB Alum became the Founding Member of Citizens for Accountable Governance, the official team of Shree Narendra Modi’s Prime Ministerial campaign",
//     },
//     {
//       id: 2,
//       title: "2012 - 2014",
//       imgSrc: "/india.gif",
//       alt: "Ideated and executed multiple projects like the collection of iron from 6lac villages, Chai pe Charcha, Modi in 3D, NaMo for India, Onground research, and campaign. Ideated the NaMo App with providing consultancy",
//     },
//     {
//       id: 3,
//       title: "2014 - 2019",
//       imgSrc: "/maharastra.gif",
//       alt: "Chief consultant to the CM War Room and ideated and provided blue print for a unique first time ground influencer outreach project, Mukhyamantri Mitra",
//     },
//     {
//       id: 4,
//       title: "2019 - 2021",
//       imgSrc: "/rajmudra.gif",
//       alt: "Consulting to various national and international government bodies, political leaders and tech platforms for ground outreach",
//     },
//     {
//       id: 5,
//       title: "2021 - Present",
//       imgSrc: "/AI.gif",
//       alt: "Founded a tech platform for assistive governance and outreach to citizens.Like Gramya, SHAKKTII, Grath. Worked with Chattisgarh, Madhya Padresh The principal coordinator for P20. With the use of AI and Gramya conducted 1000 roundatbles at Gram Panchayat",
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
//       handleNext();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="view   max-w-full mx-auto">
//       <div className="  slider relative lg:-mt-32 md:-mt-32 sm:-mt-20">
//       <h2 className='z-90 slider text-4xl font-bold text-center bg-white p-2'>Our Past Experiance</h2>
//         <div className="lg:overflow-hidden relative h-56 sm:h-64 md:h-80 lg:h-96">
          
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
//             >
             
// <a href="#" class=" flex flex-col items-center bg-white border border-gray-200  md:flex-row sm:flex-col md:max-w-8xl hover:bg-gray-100 lg:h-full">
//     <img class="object-cover m-auto lg:ml-40 mb-20 shadow-bottom md:h-auto md:max-w-3xl rounded-b-full  " src={slide.imgSrc} alt="" />

//     <div class="flex flex-col lg:ml-96 justify-between m-auto leading-normal">
//         <h5 class="mb-2 text-2xl text-center  font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
//         <p class="mb-3 font-normal text-2xl text-center text-gray-700 dark:text-gray-400 m-auto" >{slide.alt}</p>
//     </div></a>
//             </div>
//           ))}
//         </div>

//         {/* <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
//               aria-current={currentIndex === index}
//               onClick={() => goToSlide(index)}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div> */}

//         <button
//           type="button"
//           className="flex absolute top-0 left-0 z-30  justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//           onClick={handlePrev}
//           aria-label="Previous"
//         >
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
//             <svg className="w-5 h-5 text-gray-700 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//             </svg>
//             <span className="hidden">Previous</span>
//           </span>
//         </button>

//         <button
//           type="button"
//           className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//           onClick={handleNext}
//           aria-label="Next"
//         >
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//             </svg>
//             <span className="hidden">Next</span>
//           </span>
//         </button>
//        </div>
//     </div>
//   );
// };

// export default LogoCarousel;



import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "2012",
    imgSrc: "/modi.gif",
    alt: "Inspired by Shree Narendra Modi, Puushkar an ISB Alum became the Founding Member of Citizens for Accountable Governance, the official team of Shree Narendra Modi’s Prime Ministerial campaign",
  },
  {
    id: 2,
    title: "2012 - 2014",
    imgSrc: "/india.gif",
    alt: "Ideated and executed multiple projects like the collection of iron from 6lac villages, Chai pe Charcha, Modi in 3D, NaMo for India, Onground research, and campaign. Ideated the NaMo App with providing consultancy",
  },
  {
    id: 3,
    title: "2014 - 2019",
    imgSrc: "/maharastra.gif",
    alt: "Chief consultant to the CM War Room and ideated and provided blue print for a unique first time ground influencer outreach project, Mukhyamantri Mitra",
  },
  {
    id: 4,
    title: "2019 - 2021",
    imgSrc: "/rajmudra.gif",
    alt: "Consulting to various national and international government bodies, political leaders and tech platforms for ground outreach",
  },
  {
    id: 5,
    title: "2021 - Present",
    imgSrc: "/AI.gif",
    alt: "Founded a tech platform for assistive governance and outreach to citizens.Like Gramya, SHAKKTII, Grath. Worked with Chattisgarh, Madhya Padresh The principal coordinator for P20. With the use of AI and Gramya conducted 1000 roundatbles at Gram Panchayat",
  },
];

const Slide = ({ slide, isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
  >
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 md:flex-row hover:bg-gray-100 lg:h-full">
      <img className="object-cover m-auto lg:ml-40 mb-20 shadow-bottom md:h-auto md:max-w-3xl rounded-b-full" src={slide.imgSrc} alt={slide.alt} />
      <div className="flex flex-col lg:ml-96 justify-between m-auto leading-normal">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
        <p className="mb-3 font-normal text-2xl text-center text-gray-700 dark:text-gray-400">{slide.alt}</p>
      </div>
    </a>
  </div>
);

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="view max-w-full mx-auto">
      <div className="slider relative lg:-mt-32 md:-mt-32 sm:-mt-20">
        <h2 className='z-90 slider text-4xl font-bold text-center bg-white p-2'>Our Past Experience</h2>
        <div className="lg:overflow-hidden relative h-56 sm:h-64 md:h-80 lg:h-96">
          {slides.map((slide, index) => (
            <Slide key={slide.id} slide={slide} isActive={currentIndex === index} />
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex justify-center items-center h-full cursor-pointer group"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex justify-center items-center h-full cursor-pointer group"
          onClick={handleNext}
          aria-label="Next"
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default LogoCarousel;
