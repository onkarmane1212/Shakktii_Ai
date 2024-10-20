import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import LogoCarousel from "@/components/LogoCarousel";
import Slider from "@/components/slider";

export default function App({ Component, pageProps }) {

  
  return <>
  <style jsx>{`
 
  
  `}</style>
  <Navbar /> 
 
  <Component {...pageProps} />;
  <LogoCarousel />
  <Services />
  <Slider />


  </>
}
