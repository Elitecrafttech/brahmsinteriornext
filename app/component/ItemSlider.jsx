"use client";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';


const images = [
  {
    id: 1, img: "/assets/img12.webp",
    title: "Modern Corner Wardrobe"
  },
  {
    id: 2, img: "/assets/img9.webp",
    title: "Modern Elegance"
  },
  {
    id: 3, img: "/assets/sofa.webp",
    title: "Sofa"
  },
  {
    id: 4, img: "/assets/murphybed.webp",
    title: "Elegant Wall Bed"
  },
  {
    id: 5, img: "/assets/img7.webp",
    title: "Lounge Corner"
  },
  {
    id: 6, img: "/assets/Storagebed.webp",
    title: "Captain's Bed"
  },
  {
    id: 7, img: "/assets/table.webp",
    title: "Table"
  },
]

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="lg:w-[400px] w-[350px] mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex justify-center items-center pb-[5px]">
            <Image 
              src={image.img} 
              width={400}
              height={300}
              loading="lazy"
              alt="items photos" 
              className="h-[300px] w-[400px] object-cover rounded-tr-xl rounded-tl-xl"
            />
            <h1 className='border-[1px] border-t-0 border-emerald-600 p-[13px] font-extrabold text-[15px] rounded-br-xl rounded-bl-xl text-start'>{image.title}</h1>
          </SwiperSlide>
        ))}
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

