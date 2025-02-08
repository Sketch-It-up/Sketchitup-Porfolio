"use client";

import productImage from "@/assets/product-image.png";
import myProduct from "@/assets/newtech/MyProduct.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Footer } from "./Footer";
import ReactPlayer from "react-player";
import VideoSlideshow from "../../public/videos/VideoSlideshow";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your Product</div>
          </div> */}

          {/* <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            A more effective way to Visualise places{" "}
          </h2>
          <p className="text-center my-5 text-[22px] leading-[30px] tracking-tight text-[#020D3E]">
            Effortlessly turn ideas into a fully function, responsive, Saas
            website in just minutes with this template.
          </p> */}
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <VideoSlideshow></VideoSlideshow>
            {/* <Image src={myProduct} alt="image" className=""></Image> */}
            {/* <div className="relative mt-10">
                <div className="flex justify-center">
                  <ReactPlayer
                    url="/videos/ServicesAssets/Virtual_Tours.mp4" // Path relative to the public folder
                    playing // Autoplay enabled
                    loop // Loop video
                    muted // Muted video
                    controls={false} // Hides controls (set to true if you want controls)
                    className="react-player rounded-lg shadow-lg"
                    width="80%" // Full-width for responsiveness
                    height="80%" // Auto height
                  />
                </div>
              </div> */}
          </div>

          {/* <motion.img
            src={pyramidImage.src}
            alt="pryimg"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          ></motion.img>

          <motion.img
            src={tubeImage.src}
            alt="tubeimg"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-44"
            style={{
              translateY,
            }}
          ></motion.img> */}
        </div>
      </div>
    </section>
  );
};
