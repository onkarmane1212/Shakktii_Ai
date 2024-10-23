// import "@/styles/globals.css";
// import Navbar from "@/components/navbar";
// import Services from "@/components/services";
// import LogoCarousel from "@/components/LogoCarousel";
// import Slider from "@/components/slider";
// import Footer from "@/components/footer";

// export default function App({ Component, pageProps }) {

  
//   return <>
//   <style jsx>{`
 
  
//   `}</style>
//   <Navbar /> 
 
//   <Component {...pageProps} />;
//   <LogoCarousel />
//   <Services />
//   <Slider />
//   <Footer />


//   </>
// }


import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import LogoCarousel from "@/components/LogoCarousel";
// import Slider from "@/components/slider";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
        <LogoCarousel />
        <Services />
        {/* <Slider /> */}
      </main>
      <Footer />
    </div>
  );
}
