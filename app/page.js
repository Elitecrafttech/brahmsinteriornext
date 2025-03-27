"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Hero from "./component/Hero"

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex flex-col items-center text-amber-900 font-extrabold text-[30px] relative bottom-[370px]">
    <div>
      <Image src='/assets/logo.webp' alt="Loading logo" width={160} height={100} className="rounded-md" />
    </div>
    <div>
      Loading
      <span className="dot-animation">.</span>
      <span className="dot-animation">.</span>
      <span className="dot-animation">.</span>
    </div>
  </div>
);

// Lazy-load components **below the fold**
const Stats = dynamic(() => new Promise((resolve) => setTimeout(() => resolve(import("./component/Stats")), 2000)), { loading: () => <LoadingFallback /> });
const Items = dynamic(() => new Promise((resolve) => setTimeout(() => resolve(import("./component/Items")), 2000)), { loading: () => <LoadingFallback /> });
const Roomset = dynamic(() => new Promise((resolve) => setTimeout(() => resolve(import("./component/Roomset")), 2000)), { loading: () => <LoadingFallback /> });
const MoreItems = dynamic(() => new Promise((resolve) => setTimeout(() => resolve(import("./component/MoreItems")), 2000)), { loading: () => <LoadingFallback /> });
const About = dynamic(() => new Promise((resolve) => setTimeout(() => resolve(import("./component/About")), 2000)), { loading: () => <LoadingFallback /> });



function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <Items />
      <Roomset />
      <MoreItems />
      <About />
    </main>
  );
}



export default App;