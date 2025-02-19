"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import vrgirl from "@/assets/ARVR/without img.png";
import newlogo from '@/assets/Sketchitup-logon.jpg' ;
import MenuIcon from '@/assets/menu.svg';
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import FeaturesSection from "@/sections/FeaturesSection";
import { Footer } from "@/sections/Footer";
import ApplicationsSection from "@/sections/ApplicationsSection";
import Link from "next/link";
import CloseIcon from '@/assets/close.svg'; 

// Dynamically import ReactPlayer and VideoSlideshow to prevent hydration errors
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoSlideshow = dynamic(
  () => import("../../../public/videos/VideoSlideshow"),
  { ssr: false }
);

const ARVRPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div>
      <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='py-5 px-6 md:px-20'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <div className='flex items-center gap-3'>
            <Image src={newlogo} alt='logo' height={40} width={40} />
            <Link href='/'>
              <h6 className='text-3xl font-bold'>SketchitUp</h6>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className='md:hidden'>
            {menuOpen ? (
              <CloseIcon className='h-6 w-6' />
            ) : (
              <MenuIcon className='h-6 w-6' />
            )}
          </button>

          {/* Navigation for larger screens */}
          <nav className='hidden md:flex gap-6 text-black items-center font-semibold'>
            <a href='#home'>Home</a>
            <a href='#services'>Our Services</a>
            <Link href='/Blog_Page'>Blog</Link>
            <Link href='/AboutUsPage'>About</Link>
            <Link href='/GetInTouchPage'>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight'>
                Get in touch
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className='md:hidden flex flex-col items-center gap-4 p-5 bg-white shadow-md fixed top-16 right-0 w-[50%] z-10'>
          <a href='#home' onClick={toggleMenu}>Home</a>
          <a href='#services' onClick={toggleMenu}>Our Services</a>
          <Link href='/Blog_Page' onClick={toggleMenu}>Blog</Link>
          <Link href='/AboutUsPage' onClick={toggleMenu}>About</Link>
          <Link href='/GetInTouchPage'>
            <button className='bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight w-full'>
              Get in touch
            </button>
          </Link>
        </nav>
      )}
    </header>

      <section id="home" className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_90%)] overflow-x-clip overflow-y-hidden">
        <div className="container">
          <div className="md:flex items-center -mt-8">
            <div className="md:w-[710px]">
              <div className="tag">Empowered By AI </div>
              <h1 className="text-5xl md:text-7xl py-2 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Experience Immersive Visualization
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Transform your architectural visions into stunning virtual
                realities with  cutting edge AR/VR solutions. We
                bridge the gap between imagination and experience, bringing your
                real estate projects to life before they break ground.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <a href="#services" ><button className="btn btn-primary"> Our Services </button></a>
                <a href="#services" ><button className="btn btn-text gap-1 ">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5"></ArrowIcon>
                </button></a>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
              <motion.img
                src={vrgirl.src}
                alt="Cog Image"
                className="hidden md:block md:absolute md:h-[700px] md:w-auto md:max-w-none md:left-6 lg:left-0 -top-3"
                animate={{
                  translateY: [-0, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.img>
            </div>
          </div>
        </div>
      </section>
      <section  className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
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
              Experience properties in unprecedented detail through our
              state-of-the-art visualization services. From individual homes to
              sprawling townships, we create photorealistic environments that
              allow your clients to step into their future spaces.
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
              <ReactPlayer
                url="/videos/ServicesAssets/Website_Landing.webm" // Path relative to the public folder
                playing // Autoplay enabled
                loop // Loop video
                muted // Muted video
                controls={false} // Hides controls (set to true if you want controls)
                className="react-player rounded-lg shadow-lg"
                width="100%" // Full-width for responsiveness
                height="100%" // Auto height
              />
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
      
      <section id="services"><ApplicationsSection /></section> 
      
      <h2 className="text-center mt-10 -mb-10 py-8 h-auto text-3xl md:text-[54px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
      Explore Our Work
    </h2>
        <VideoSlideshow />

       
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
                    <b>• Discovery:</b> We analyze your architectural plans and
                    design requirements.
                  </li>
                  <li>
                    <b>• 3D Modeling:</b> Creating detailed digital
                    representations of your spaces.
                  </li>
                  <li>
                    <b>• Texture & Lighting:</b> Adding photorealistic materials
                    and environmental effects.
                  </li>
                  <li>
                    <b>• Interactive Integration:</b> Implementing user-friendly
                    navigation and interaction features.
                  </li>
                  <li>
                    <b>• Delivery:</b> Providing final assets in your preferred
                    format.
                  </li>
                </ul>
              </div>

              {/* Image Section
        <div className="flex justify-center">
          <Image
            src={myProduct}
            alt="image"
            className="w-3/4 md:w-full rounded-lg "
          />
        </div> */}

              {/* video section  */}
              <div className="relative mt-10">
                <div className="flex justify-center">
                  <ReactPlayer
                    url="/videos/ServicesAssets/Virtual_Tours.mp4" // Path relative to the public folder
                    playing // Autoplay enabled
                    loop // Loop video
                    muted // Muted video
                    controls={false} // Hides controls (set to true if you want controls)
                    className="react-player rounded-lg shadow-lg"
                    width="100%" // Full-width for responsiveness
                    height="100%" // Auto height
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="footer">
        <Footer />
      </section>

    </div>
  );
};

export default ARVRPage;