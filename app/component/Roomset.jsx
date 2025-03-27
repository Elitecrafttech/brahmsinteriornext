"use client";
import React from 'react';

const roomset = [
  { id: 1, img: "/assets/murphybed.webp", title: "Bed Room" },
  { id: 2, img: "/assets/img9.webp", title: "Living Room" },
  { id: 3, img: "/assets/sofa.webp", title: "Kids Room" },
  { id: 4, video: "../assets/0003.webm", title: "Kitchen" },
];

const Roomset = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-lg mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Explore More About Roomset</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Room Set</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">Discover different room designs for your home.</p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-[5px] pb-[30px]'>
            <div className='flex gap-[5px] '>
                <div data-aos="fade-up">
                    <video
                        autoPlay
                        loop
                        muted
                        loading="lazy"
                        preload="metadata"
                    className='lg:h-[250px] lg:w-[250px] object-cover z-0 rounded-xl h-60'>
                        <source src='../assets/002.webm' type="video/mp4"/>
                        <img src="/assets/murphybed.webp" loading="lazy" alt="Background" className='h-[250px] rounded-xl'
                        />
                    </video>
                    <div className='relative bottom-[38px] left-[10px] w-[78px] bg-white px-3 py-1 rounded-md shadow'>
                     <p className="text-black font-semibold text-sm">Cabinet</p>
                    </div>

                </div>
                <div data-aos="fade-up">
                <video
                    autoPlay
                    loop
                    muted
                    loading="lazy"
                    preload="metadata"
               className='lg:h-[250px] lg:w-[250px] object-cover z-0 rounded-xl  h-60'
                >
                    <source src='/assets/01c.webm' type="video/webm"/>
                    <img src="/assets/img9.webp" height={250} width={250} loading="lazy" alt="Background" className='h-[250px] rounded-xl'
                    />
                </video>

                <div className='relative bottom-[38px] left-[10px] w-[88px] bg-white px-3 py-1 rounded-md shadow'>
                     <p className="text-black font-semibold text-sm">Showcase</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[5px] items-center'>
                <img data-aos="fade-up" src="/assets/img1.webp" width={350} height={125} loading="lazy" alt="" className='h-[200px] lg:h-[125px] w-[350px] rounded-xl object-cover'/>
                <img data-aos="fade-up" src="/assets/murphybed.webp" width={350} height={125} loading="lazy" alt="" className='h-[200px] lg:h-[125px] w-[350px] rounded-xl'/>
                
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {roomset.map((room, index) => (
            <div 
            data-aos="fade-up"
            data-aos-delay={room.aosDelay}
            key={room.id} className="relative rounded-xl overflow-hidden shadow-lg">
              {room.img && <img src={room.img} width={500} height={240} loading="lazy" alt={room.title} className="w-full h-60 object-cover " />}
                {room.video && (
                <video controls autoPlay loop muted loading="lazy" preload="metadata" className="w-full h-60 object-cover">
                    <source src={room.video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                )}
              
              {index === 1 && ( // Center play button only on "Bed Room"
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button className="bg-white p-4 rounded-full shadow-lg">
                    ▶
                  </button>
                </div>
              )}

              <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-md shadow">
                <p className="text-black font-semibold text-sm">{room.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roomset;
