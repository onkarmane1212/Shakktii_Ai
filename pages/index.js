import Head from "next/head";
import localFont from "next/font/local";
import { useEffect, useRef } from 'react';
import { TweenLite, Circ } from 'gsap';
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
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const largeHeader = headerRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let points = [];
    let target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    largeHeader.style.height = `${height}px`;
    canvas.width = width;
    canvas.height = height;

    function initPoints() {
      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          let px = x + Math.random() * width / 20;
          let py = y + Math.random() * height / 20;
          let p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        let closest = [];
        let p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          let p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (!closest[k]) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      points.forEach((point) => {
        const circle = new Circle(point, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        point.circle = circle;
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach((closestPoint) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closestPoint.x, closestPoint.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    }

    function Circle(pos, rad, color) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach((point) => {
          if (Math.abs(getDistance(target, point)) < 4000) {
            point.active = 0.3;
            point.circle.active = 0.6;
          } else if (Math.abs(getDistance(target, point)) < 20000) {
            point.active = 0.1;
            point.circle.active = 0.3;
          } else if (Math.abs(getDistance(target, point)) < 40000) {
            point.active = 0.02;
            point.circle.active = 0.1;
          } else {
            point.active = 0;
            point.circle.active = 0;
          }

          drawLines(point);
          point.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function mouseMove(e) {
      let posx = 0, posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', resize);

    initPoints();
    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);
 
  
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
  
  

  <div id="large-header" className="large-header" ref={headerRef}>
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
    </div>


  {/* <img
        className="background-video pb-6"
      
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif"
      >
        */}
      {/* </img> */}
  <div className="m-auto flex justify-center mb-28">
  <div class="content ">

    
    <img src='Logo.gif' class="h-60 w-50 m-auto" />
    <h1 class="text-5xl font-bold text-center ">Shakktii AI</h1>
    <p class="mt-4 text-xl">EXPLORE UNLIMITED STRENGTH OF</p>
    <p class="mt-4 text-xl text-center">AI</p>
    
  </div></div> 


</>
  );
}
