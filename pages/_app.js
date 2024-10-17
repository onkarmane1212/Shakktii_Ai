import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Scroll from "@/components/scroll"

export default function App({ Component, pageProps }) {
  return <>
  {/* <Navbar />  */}

  <Component {...pageProps} />;</>
}
