"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import aboutImage from "@/assets/ARVR/About-Us2.png"; // Add an appropriate image for the About Us section
import ArrowIcon from "@/assets/arrow-right.svg";
import newlogo from '@/assets/Sketchitup-logon.jpg' ;
import MenuIcon from '@/assets/menu.svg';
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div>
      <header className='sticky top-0 backdrop-blur-sm z-20'>

<div className='py-5'>
  <div className='px-20'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
      <Image src={newlogo} alt='logo' height={40} width={40}></Image>
      <Link href="/"> <h6 className='text-3xl font-bold '>SketchitUp</h6></Link>
      </div>          
      <MenuIcon className ="h-5 w-5 md:hidden"></MenuIcon>
      <nav className='hidden md:flex gap-6 text-black items-center font-semibold'>
        <a href="#home">Home</a>
        <Link href="/#services">Our Services</Link>
        <Link href="/GetInTouchPage">Contact</Link>
        <Link href="/AboutUsPage">About</Link>

        <Link href="/GetInTouchPage"><button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Get in touch </button>
      </Link></nav>
    </div>
  </div>
</div>
</header>
      <section className="pt-8 pb-20 md:pt-12 md:pb-16 bg-gradient-to-b from-[#EAEEFE] to-[#6982dd] overflow-x-clip">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                About SketchitUp Your Partner in Innovation and Growth
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                At SketchitUp, we believe in the power of innovation to transform businesses. SketchitUp combines strategic business insights with cutting-edge technology to deliver exceptional results.
                Our mission is to empower startups and businesses with tailored solutions, from Web Development and SaaS platforms to immersive AR/VR experiences. We are passionate about design, technology, and helping our clients succeed in a competitive landscape.
                Lets build something amazing together!
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <Link href="/#services">
                  <button className="btn btn-primary">
                    Learn More About Our Services
                  </button>
                </Link>
                
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={aboutImage}
                alt="About Us Image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
                Company Details
              </h2>
              <p className="text-3xl text-gray-700 mb-2">
                <strong>Sketchitup</strong>
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Row House No. D3, <br></br> Ahilyadevi society, Baner, Pune - 411045
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Contact No: +91 95612 80118
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Email: <a href="mailto:sketchitup.official@gmail.com" className="text-blue-500">sketchitup.official@gmail.com</a>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
                Our Location
              </h2>
              <div className="w-[80%] h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Row%20House%20No.%20D3,%20Ahilyadevi%20society,%20Baner,%20Pune%20-%20411045&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;