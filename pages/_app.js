import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import LogoCarousel from "@/components/LogoCarousel";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar /> 
 
  <Component {...pageProps} />;
  <LogoCarousel />
  <Services />


  </>
}
