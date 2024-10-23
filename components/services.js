import React,{useState,useEffect} from 'react';


const services = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
    const images1 = [
        '/digital.jpg',
        '/social.jpg',
        
    ];
    const images2 = [
        '/telegram.jpg',
        '/whatsapp.jpg',
        
    ];
    const images3 = [
        '/content.jpg',
        '/ground.jpg',
        
    ];
    const images4 = [
        '/video.jpg',
        '/voice.jpg',
        
    ];
   
    const content1 = [
      {
        title: "Digital Marketing",
        description: "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
      },
      {
        title: "Social Media Marketing",
        description: "Social media marketing is a form of digital marketing that leverages the power of popular social media networks to achieve your marketing and branding goals. But it’s not just about creating business accounts and posting when you feel like it."
      },
     
    ];
    const content2 = [
      {
        title: "Telegram Bot",
        description: "Telegram bots can do various things, from providing news updates, tracking your headaches, downloading videos and transcribing audio to text."
      },
      {
        title: "WhatsApp Bot",
        description: "WhatsApp chatbot is an automated software powered by rules or artificial intelligence (AI) and runs on the WhatsApp platform. People communicate with WhatsApp chatbot via the chat interface, like talking to a real person. It's a set of automated replies that simulates a human conversation on WhatsApp."
      },
      
    ];
    const content3 = [
      {
        title: "Content Creation",
        description: "Content creation or content creative is the act of producing and sharing information or media content for specific audiences, particularly in digital contexts. "
      },
      {
        title: "Ground Intelligence",
        description: "Voter Sentiment Analysis:- Conduct surveys, focus groups, and interviews to understand voter preferences, issues of concern, and likely voting behavior.Use data analytics to provide predictive insights on voting trends."
      },
    
    ];
    const content4 = [
      {
        title: "AI Voice",
        description: "At its core, AI voice recognition involves using artificial intelligence to interpret and process human speech, allowing machines to understand and respond to vocal commands. "
      },
      {
        title: "AI Video",
        description: "Video Intelligence API has pre-trained machine learning models that automatically recognize a vast number of objects, places, and actions in stored and streaming video. Offering exceptional quality out of the box."
      },
      
    ];

    const updateCarousel = (index) => {
      setCurrentIndex1(index);
      setCurrentIndex2(index);
      setCurrentIndex3(index);
      setCurrentIndex4(index);
    };

    const nextSlide = (index) => {
      switch (index) {
        case 1:
          setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
          break;
        case 2:
          setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
          break;
        case 3:
          setCurrentIndex3((prevIndex) => (prevIndex + 1) % images3.length);
          break;
        case 4:
          setCurrentIndex4((prevIndex) => (prevIndex + 1) % images4.length);
          break;
        default:
          break;
      }
    };
    const prevSlide = (index) => {
      switch (index) {
        case 1:
          setCurrentIndex1((prevIndex) => (prevIndex - 1 + images1.length) % images1.length);
          break;
        case 2:
          setCurrentIndex2((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
          break;
        case 3:
          setCurrentIndex3((prevIndex) => (prevIndex - 1 + images3.length) % images3.length);
          break;
        case 4:
          setCurrentIndex4((prevIndex) => (prevIndex - 1 + images4.length) % images4.length);
          break;
        default:
          break;
      }
    };
    useEffect(() => {
      const interval = setInterval(() => {
        // You can choose to auto-slide for one of the carousels
        nextSlide(1); // For example, auto-slide for the first carousel
        nextSlide(2); // For example, auto-slide for the first carousel
        nextSlide(3); // For example, auto-slide for the first carousel
        nextSlide(4); // For example, auto-slide for the first carousel
      }, 5000); // Change slide every 5000 milliseconds (5 seconds)
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  
    
  
    return <>
    <section  className=" min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
  <span id='services' className="mt-96 pt-14 text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
    what we're offering 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </span>
  <h1  className="text-white  text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
    Services Built Specifically for your Business
  </h1>
  <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">


  


  <div className="card relative -z-1 mb-6 p-2 transition-transform duration-700 hover:shadow-lg lg:m-10">
          <div className=" relative h-56 z-10 overflow-hidden rounded-lg md:h-96">
            {images1.map((src, index) => (
              <div
                key={index}
                className={`carousel-item ${currentIndex1 === index ? 'active' : 'hidden'}`}
              >
                 <img
          src={src}
          className="absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: currentIndex1 === index ? 1 : 0.5 }}
          alt={`Image ${index + 1}`}
        />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50">
          <h2 className="font-playfair text-2xl xl:text-3xl font-bold text-center">{content1[index].title}</h2>
          <p className="p transition-colors duration-700 text-center">{content1[index].description}</p>
        </div>
      </div>
            ))}
          </div>
          <button
                type="button"
                className="absolute top-0 -left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => prevSlide(1)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>

            <button 
                type="button"
                className="absolute top-0 -right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => nextSlide(1)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>
        
        </div>
        
        <div className="card relative -z-1 mb-6 p-2 transition-transform duration-700 hover:shadow-lg lg:m-10">
        <div className=" relative h-56 z-10 overflow-hidden rounded-lg md:h-96">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images2.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${currentIndex2 === index ? 'active' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
          src={src}
          className="absolute block w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          style={{ opacity: currentIndex1 === index ? 1 : 0.5 }}
          alt={`Image ${index + 1}`}
        />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50">
          <h2 className="font-playfair text-2xl xl:text-3xl font-bold text-center">{content2[index].title}</h2>
          <p className="p transition-colors duration-300 text-center">{content2[index].description}</p>
        </div>
                    </div>
                ))}
            </div>
            </div>
         

            <button
                type="button"
                className="absolute top-0 -left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => prevSlide(2)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 -right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => nextSlide(2)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>
       
   
     </div>


    <div className=" card -z-1 relative mb-6 bg-gray-800 p-2 transition-transform duration-300 hover:shadow-lg lg:m-10">
    <div id="default-carousel" className="relative w-full z-10" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images3.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${currentIndex3 === index ? 'active' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
          src={src}
          className="absolute block w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          style={{ opacity: currentIndex3 === index ? 1 : 0.5 }}
          alt={`Image ${index + 1}`}
        />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50">
          <h2 className="font-playfair text-2xl xl:text-3xl font-bold text-center">{content3[index].title}</h2>
          <p className="p transition-colors duration-300 text-center">{content3[index].description}</p>
        </div>
                    </div>
                ))}
            </div>

            </div>

            <button
                type="button"
                className="absolute top-0 -left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => prevSlide(3)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 -right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => nextSlide(3)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>
       
   
     </div>
    <div className="relative mb-6 card -z-1 bg-gray-800 p-2 transition-transform duration-300 hover:shadow-lg lg:m-10">
    <div id="default-carousel" className="relative w-full z-10" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images4.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${currentIndex4 === index ? 'active' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
          src={src}
          className="absolute block w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          style={{ opacity: currentIndex4 === index ? 1 : 0.5 }}
          alt={`Image ${index + 1}`}
        />
            <div className="relative  inset-0   flex flex-col  items-center justify-center text-white z-10 bg-gray-800 bg-opacity-50">
            <h2 className="font-playfair lg:pt-36 pt-10 text-2xl xl:text-3xl font-bold text-center">{content4[index].title}</h2>
          <p className="pb-10 lg:pb-44 transition-colors duration-300 text-center">{content4[index].description}</p>
           </div>
                    </div>
                ))}
            </div>

          
            </div>
            <button
                type="button"
                className="absolute top-0 -left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => prevSlide(4)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 -right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                onClick={() => nextSlide(4)}
            >
                <span className="w-10 h-10 flex items-center justify-center to-transparent rounded-full">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>
                 
    
     </div>
    

  </div>
</section>

    </>;
}
export default services;

