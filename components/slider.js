// import React, { useState , useEffect } from 'react';

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


// const Slider = () => {
//   return (
// <>
// <div className='flex flex-col items-start m-10'>
//     <div className='mb-10 p-10 bg-white flex flex-col-reverse md:flex-row justify-between border-l-4 border-b-4 border-solid rounded-bl-full w-full custom-shadow'>
//         <div className='text-center flex justify-center  h-46 ml-0 md:ml-28 w-full md:w-80'>
//         <h2 className='font-bold text-2xl'>hiii</h2>
//             <p className=''>hiii</p>
//         </div>
//         <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
//     </div>
//     <div className='mb-4 p-10 bg-white flex flex-col md:flex-row justify-between border-r-4 border-b-4 border-solid rounded-br-full w-full custom-shadow1'>
//         <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
//         <div className='text-center flex flex-col justify-center  h-46 ml-0 md:ml-28 w-full md:w-80'>
//         <h2 className='font-bold text-2xl'>hiii</h2>
//             <p className=''>Inspired by Shree Narendra Modi, Puushkar an ISB Alum became the Founding Member of Citizens for Accountable Governance, the official team of Shree Narendra Modi’s Prime Ministerial campaign</p>
//         </div>
//     </div>
//     <div className='mb-4 p-10 bg-white flex flex-col-reverse md:flex-row justify-between border-l-4 border-b-4 border-solid rounded-bl-full w-full custom-shadow'>
//         <div className='text-center flex justify-center  h-46 ml-0 md:ml-28 w-full md:w-80'>
//             <h2 className='font-bold text-2xl'>hiii</h2>
//         </div>
//         <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
//     </div>
//     <div className='mb-4 p-10 bg-white flex flex-col md:flex-row justify-between border-r-4 border-b-4 border-solid rounded-br-full w-full   custom-shadow1'>
//         <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
//         <div className='text-center flex justify-center  h-46 ml-0 md:ml-28 w-full md:w-80'>
//         <h2 className='font-bold text-2xl'>hiii</h2> 
//         </div>
//     </div>



   
// </div>



//     </>)}

// export default Slider;



{/* <div className='flex flex-col items-start m-10'>
        <div id="map_container" style={{ width: '100%', height: '100vh' }}></div> */}

        {/* <div className='mb-4 p-10 bg-white flex flex-col md:flex-row justify-between border-r-4 border-b-4 border-solid rounded-br-full w-full custom-shadow1'>
          <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
          <div className='text-center flex flex-col justify-center h-46 ml-0 md:ml-28 w-full md:w-80'>
            <h2 className='font-bold text-2xl'>hiii</h2>
            <p>Inspired by Shree Narendra Modi, Puushkar an ISB Alum became the Founding Member of Citizens for Accountable Governance, the official team of Shree Narendra Modi’s Prime Ministerial campaign</p>
          </div>
        </div>

        <div className='mb-4 p-10 bg-white flex flex-col-reverse md:flex-row justify-between border-l-4 border-b-4 border-solid rounded-bl-full w-full custom-shadow'>
          <div className='text-center flex justify-center h-46 ml-0 md:ml-28 w-full md:w-80'>
            <h2 className='font-bold text-2xl'>hiii</h2>
          </div>
          <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
        </div>

        <div className='mb-4 p-10 bg-white flex flex-col md:flex-row justify-between border-r-4 border-b-4 border-solid rounded-br-full w-full custom-shadow1'>
          <img src='/digital.jpg' className='mr-0 md:mr-2 top-0 right-0 h-64 w-64 object-cover' />
          <div className='text-center flex justify-center h-46 ml-0 md:ml-28 w-full md:w-80'>
            <h2 className='font-bold text-2xl'>hiii</h2>
          </div>
        </div>*/}
      {/* </div>  */}


      // import React, { useState } from "react";
      // import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
      
      // const Slider = () => {
      //   const [selectedMarker, setSelectedMarker] = useState(null);
      
      //   // Marker locations with image URLs
      //   const markerLocations = [
      //     {
      //       lat: 26.846694,
      //       lng: 80.946166,
      //       title: "Mahesh Ambure",
      //       imageUrl: "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/4817d356ec294fef810cb1b5e374e7b9.jpg",
      //     },
      //     {
      //       lat: 28.613939,
      //       lng: 77.209021,
      //       title: "Rainy",
      //       imageUrl: "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/7a09928aa8e74a508a04ceda4059086a.jpg",
      //     },
      //     {
      //       lat: 32.7218,
      //       lng: 74.8577,
      //       title: "Snowy",
      //       imageUrl: "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/ac5a96bfecf44ca28da6d20b17960b48.jpg",
      //     },
      //     {
      //       lat: 23.259933,
      //       lng: 77.412615,
      //       title: "Thunderstorm",
      //       imageUrl: "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/58695d8d0a354b76b27c7a62c81c8f86.jpg",
      //     },
      //     {
      //       lat: 23.610181,
      //       lng: 85.279935,
      //       title: "Sunny",
      //       imageUrl: "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/20510d45e8354194b821ed144ef1e11c.jpg",
      //     },
      //     {
      //       lat: 22.986757,
      //       lng: 87.854976,
      //       title: "Storm",
      //       imageUrl: "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/cfb6d9274e7548bcae23f0bbbe7e17e1.jpg",
      //     },
      //   ];
      
      //   // Handle marker click to display InfoWindow
      //   const onMarkerClick = (marker) => {
      //     setSelectedMarker(marker);
      //   };
      
      //   return (
      //     <div style={{ width: "100%", height: "100vh" }}>
      //       {/* Load Google Maps script */}
      //       <LoadScript googleMapsApiKey="AIzaSyAcEDtQbw9CpH8C1hYp7kmujHnOroEez-Y">
      //         <GoogleMap
      //           id="google-map"
      //           mapContainerStyle={{ width: "100%", height: "100%" }}
      //           center={{ lat: 28.613939, lng: 77.209021 }}
      //           zoom={5}
      //         >
      //           {/* Add markers */}
      //           {markerLocations.map((location, index) => (
      //             <Marker
      //               key={index}
      //               position={{ lat: location.lat, lng: location.lng }}
      //               icon={{ url: location.imageUrl }}
      //               onClick={() => onMarkerClick(location)}
      //             />
      //           ))}
      
      //           {/* Display InfoWindow when a marker is clicked */}
      //           {selectedMarker && (
      //             <InfoWindow
      //               position={{
      //                 lat: selectedMarker.lat,
      //                 lng: selectedMarker.lng,
      //               }}
      //               onCloseClick={() => setSelectedMarker(null)}
      //             >
      //               <div style={{ textAlign: "center" }}>
      //                 <h3>{selectedMarker.title}</h3>
      //                 <img
      //                   src={selectedMarker.imageUrl}
      //                   alt={selectedMarker.title}
      //                   width="50"
      //                   height="50"
      //                 />
      //               </div>
      //             </InfoWindow>
      //           )}
      //         </GoogleMap>
      //       </LoadScript>
      //     </div>
      //   );
      // };
      
      // export default Slider;
      




// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

// const Slider = () => {
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [googleAvailable, setGoogleAvailable] = useState(false);

//   const markerLocations = [
//     {
//       lat: 26.846694,
//       lng: 80.946166,
//       title: "Mahesh Ambure",
//       imageUrl:
//         "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/4817d356ec294fef810cb1b5e374e7b9.jpg",
//     },
//     {
//       lat: 28.613939,
//       lng: 77.209021,
//       title: "Rainy",
//       imageUrl:
//         "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/7a09928aa8e74a508a04ceda4059086a.jpg",
//     },
//     {
//       lat: 32.7218,
//       lng: 74.8577,
//       title: "Snowy",
//       imageUrl:
//         "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/ac5a96bfecf44ca28da6d20b17960b48.jpg",
//     },
//     {
//       lat: 23.259933,
//       lng: 77.412615,
//       title: "Thunderstorm",
//       imageUrl:
//         "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/58695d8d0a354b76b27c7a62c81c8f86.jpg",
//     },
//     {
//       lat: 23.610181,
//       lng: 85.279935,
//       title: "Sunny",
//       imageUrl:
//         "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/20510d45e8354194b821ed144ef1e11c.jpg",
//     },
//     {
//       lat: 22.986757,
//       lng: 87.854976,
//       title: "Storm",
//       imageUrl:
//         "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/cfb6d9274e7548bcae23f0bbbe7e17e1.jpg",
//     },
//   ];

//   useEffect(() => {
//     // Check if Google Maps is loaded
//     if (typeof window.google !== "undefined") {
//       setGoogleAvailable(true);
//     }
//   }, []);

//   const onMarkerClick = (marker) => {
//     console.log(marker); // Log marker data for debugging
//     setSelectedMarker(marker);
//   };

//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <LoadScript googleMapsApiKey="AIzaSyAcEDtQbw9CpH8C1hYp7kmujHnOroEez-Y">
//         <GoogleMap
//           id="google-map"
//           mapContainerStyle={{ width: "100%", height: "100%" }}
//           center={{ lat: 28.613939, lng: 77.209021 }}
//           zoom={5}
//         >
//           {markerLocations.map((location, index) => (
//             <Marker
//               key={index}
//               position={{ lat: location.lat, lng: location.lng }}
//               icon={{ url: location.imageUrl }}
//               onClick={() => onMarkerClick(location)}
//             />
//           ))}

//           {selectedMarker && (
//             <InfoWindow
//               position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
//               onCloseClick={() => setSelectedMarker(null)}
//               options={{
//                 pixelOffset: googleAvailable
//                   ? new window.google.maps.Size(0, -30)
//                   : undefined,
//                 zIndex: 1, // Ensure the InfoWindow is on top of other elements
//               }}
//             >
//               <div style={{ textAlign: "center" }}>
//                 <h3>{selectedMarker.title}</h3>
//                 <img
//                   src={selectedMarker.imageUrl}
//                   alt={selectedMarker.title}
//                   width="50"
//                   height="50"
//                   style={{ borderRadius: "50%" }} // Optional: rounded image
//                 />
//               </div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Slider;

// AIzaSyAcEDtQbw9CpH8C1hYp7kmujHnOroEez-Y

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const Slider = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isClient, setIsClient] = useState(false); // Check if we are on the client side
  const [googleAvailable, setGoogleAvailable] = useState(false); // Check if Google Maps is loaded

  const markerLocations = [
    {
      lat: 26.846694,
      lng: 80.946166,
      title: "Mahesh Ambure",
      imageUrl:
        "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/4817d356ecf44fef810cb1b5e374e7b9.jpg",
    },
    {
      lat: 28.613939,
      lng: 77.209021,
      title: "Rainy",
      imageUrl:
        "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/7a09928aa8e74a508a04ceda4059086a.jpg",
    },
    {
      lat: 32.7218,
      lng: 74.8577,
      title: "Snowy",
      imageUrl:
        "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/ac5a96bfecf44ca28da6d20b17960b48.jpg",
    },
    {
      lat: 23.259933,
      lng: 77.412615,
      title: "Thunderstorm",
      imageUrl:
        "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/58695d8d0a354b76b27c7a62c81c8f86.jpg",
    },
    {
      lat: 23.610181,
      lng: 85.279935,
      title: "Sunny",
      imageUrl:
        "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/20510d45e8354194b821ed144ef1e11c.jpg",
    },
    {
      lat: 22.986757,
      lng: 87.854976,
      title: "Storm",
      imageUrl:
        "https://vsplash.keka.com/files/d4e26fee-38fa-47e5-971d-410f5880c199/50x50/profileimage/cfb6d9274e7548bcae23f0bbbe7e17e1.jpg",
    },
  ];

  useEffect(() => {
    setIsClient(true); // Set to true when on client side
    if (typeof window !== "undefined" && window.google) {
      setGoogleAvailable(true); // Check if Google Maps is available
    }

    // Retrieve the selected marker from localStorage on reload
    const savedMarker = localStorage.getItem("selectedMarker");
    if (savedMarker) {
      setSelectedMarker(JSON.parse(savedMarker));
    }
  }, []);

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
    // Store the selected marker in localStorage for persistence
    localStorage.setItem("selectedMarker", JSON.stringify(marker));
  };

  const handleErrorImage = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "https://via.placeholder.com/50"; // Fallback image
  };

  const getScaledSize = () => {
    if (googleAvailable && window.google && window.google.maps) {
      return new window.google.maps.Size(50, 50); // Return the scaled size if google.maps is available
    }
    return { width: 50, height: 50 }; // Fallback size
  };

  if (!isClient) {
    return <div>Loading...</div>; // Render loading state until client is ready
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <LoadScript googleMapsApiKey="AIzaSyAcEDtQbw9CpH8C1hYp7kmujHnOroEez-Y">
        <GoogleMap
          id="google-map"
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: 28.613939, lng: 77.209021 }}
          zoom={5}
        >
          {markerLocations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              icon={{
                url: location.imageUrl,
                scaledSize: getScaledSize(), // Get the scaled size safely
              }}
              onClick={() => onMarkerClick(location)}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div style={{ textAlign: "center" }}>
                <h3>{selectedMarker.title}</h3>
                <img
                  src={selectedMarker.imageUrl}
                  alt={selectedMarker.title}
                  width="50"
                  height="50"
                  style={{ borderRadius: "50%", objectFit: "cover" }} // Ensure image is contained within the space
                  onError={handleErrorImage} // Handle image error
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Slider;
