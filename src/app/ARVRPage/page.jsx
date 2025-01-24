
"use client"

import { Header } from "@/sections/Header";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png" ;
import vrgirl from "@/assets/ARVR/without img.png";
import noodleImage from"@/assets/noodle.png";
import productImage from '@/assets/product-image.png';
import myProduct from '@/assets/newtech/MyProduct.png';
// import entryvideo from '@/assets/ARVR/ServicesAssets/Virtual_Tours.mp4' ;
import pyramidImage from'@/assets/pyramid.png';
import tubeImage from'@/assets/tube.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion" ;
import { useRef } from 'react';
import FeaturesSection from "@/sections/FeaturesSection";
import { Footer } from "@/sections/Footer";



const ARVRPage = () => {
  return (
    <div>
      <Header></Header>

      <section 
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_90%)] overflow-x-clip overflow-y-hidden">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[710px]">
            <div className="tag"> 
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl py-2 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Experience Immersive Visualization
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Transform your architectural visions into stunning virtual realities with SketchitUp's cutting edge AR/VR solutions. We bridge the gap between imagination and experience, bringing your real estate projects to life before they break ground.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary" > Our Services </button>
              <button className="btn btn-text gap-1 ">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5"></ArrowIcon>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
              <motion.img 
                src={vrgirl.src} 
                alt="Cog Image" 
                className="hidden md:block md:absolute md:h-[700px] md:w-auto md:max-w-none md:left-6 lg:left-0 -top-3"
                animate={{
                  translateY:[-0,30]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType:"mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.img>
            </div>
        </div>
      </div>
    </section>

    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
  <div className="container max-w-[1200px] mx-auto px-4">
    {/* Header Section */}
    <div className="max-w-[800px] mx-auto">
      <div className="flex justify-center">
        <div className="tag">Boost your Product</div>
      </div>
      <h2 className="text-center mt-5 text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
        Real Estate Visualization
      </h2>
      <p className="text-center my-5 text-[22px] leading-[30px] tracking-tight text-[#020D3E]">
        Experience properties in unprecedented detail through our state-of-the-art visualization services. From individual homes to sprawling townships, we create photorealistic environments that allow your clients to step into their future spaces.
      </p>
    </div>

    {/* Image Section */}
    {/* <div className="relative mt-10">
      <div className="flex justify-center">
        <Image
          src={myProduct}
          alt="image"
          className="w-full md:w-3/4 rounded-lg"
        />
      </div>
    </div> */}

    {/* video section  */}
    <div className="relative mt-10">
      <div className="flex justify-center">
        <video
          className="w-full md:w-3/4 rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        >
          <source src="src/assets/ARVR/ServicesAssets/Virtual_Tours.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    

    {/* Features Section */}
    <div className="mt-16">
      <h2 className="text-center m-6 text-4xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
        What We Deliver
        </h2>
      <FeaturesSection />
    </div>
  </div>
</section>


    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
  <div className="w-full">
    <div className="flex justify-center">
      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="w-full px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Our Process
            </h2>
          </div>
          <ul className="text-[22px] leading-[30px] tracking-tight text-[#020D3E] space-y-4">
            <li>
              <b>• Discovery:</b> We analyze your architectural plans and design requirements.
            </li>
            <li>
              <b>• 3D Modeling:</b> Creating detailed digital representations of your spaces.
            </li>
            <li>
              <b>• Texture & Lighting:</b> Adding photorealistic materials and environmental effects.
            </li>
            <li>
              <b>• Interactive Integration:</b> Implementing user-friendly navigation and interaction features.
            </li>
            <li>
              <b>• Delivery:</b> Providing final assets in your preferred format.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={myProduct}
            alt="image"
            className="w-3/4 md:w-full rounded-lg "
          />
        </div>

        {/* video section  */}
          {/* <div className="relative mt-10">
            <div className="flex justify-center">
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
              >
                <source src="src/assets/ARVR/ServicesAssets/Virtual_Tours.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}
      </div>
    </div>

  </div>
</section>

<Footer></Footer>
    </div>
  );
};

export default ARVRPage;