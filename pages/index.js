import Head from "next/head";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
// import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
        
  {/* <video className="absolute inset-0 w-full h-full  object-cover "  autoPlay muted loop>
    <source src="/aivideo2.mp4" type="video/mp4" />
  </video> */}
  
  




  <video class="background-video" autoPlay muted loop>
    <source src="/aivideo2.mp4" type="video/mp4" />
  </video>
  <div className="m-auto flex justify-center">
  <div class="content ">

    {/* <!-- Your content here --> */}
    <img src='Logo.gif' class="h-60 w-50 m-auto" />
    <h1 class="text-5xl font-bold text-center ">Shakktii AI</h1>
    <p class="mt-4 text-xl">EXPLORE UNLIMITED STRENGTH OF AI </p>
    <p class="mt-4 text-xl text-center">WITH US</p>
  </div></div>



    </>
  );
}
