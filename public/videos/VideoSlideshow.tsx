"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Dynamically import ReactPlayer to avoid hydration issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSlideshow = () => {
  const videoData = [
    { url: "/videos/Virtual_Tours-3.mp4", title: "Interactive Tour" },
    { url: "/videos/Virtual_Tour-1.mp4", title: "Virtual Tours" },
    { url: "/videos/Virtual_Tours-2.mp4", title: "Website Landing" },
  ];

  const [playingIndex, setPlayingIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      const nextIndex = (playingIndex + 1) % videoData.length;
      setPlayingIndex(nextIndex);
      swiperRef.current.slideTo(nextIndex); // Move to the next slide
    }
  };

  return (
    <section className="py-16 bg-gray-100">
  <div className="container max-w-[1200px] mx-auto px-4 py-5 mt-10 mb-10 ">
    <h2 className="text-center mb-8 h-auto text-3xl md:text-[54px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
      Explore Our Work
    </h2>
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1} // Ensure only one slide is visible
      centeredSlides
      loop={false}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Get Swiper instance
      onSlideChange={(swiper) => setPlayingIndex(swiper.activeIndex)} // Update playingIndex
      className="rounded-lg shadow-lg mt-10 "
    >
      {videoData.map((video, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div className="relative  w-full h-[500px] bg-black rounded-lg overflow-hidden">
            <ReactPlayer
              url={video.url}
              playing={index === playingIndex} // Play only the current video
              loop={false} // Play once and stop
              muted={false} // Enable audio
              controls // Show video controls
              className="react-player"
              width="100%"
              height="100%"
              onEnded={handleVideoEnd} // Move to next video when finished
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}; 

export default VideoSlideshow;
