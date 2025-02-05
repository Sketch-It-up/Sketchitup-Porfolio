"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import React from "react";
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaSitemap, FaPenNib, FaPalette } from "react-icons/fa";

const WEBDEVPage = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-16 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_90%)] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Experience Web-Design
              </h1>
              <p className="text-xl text-[#010D3E] mt-6">
                Your digital presence is your brands most powerful ambassador. We craft websites and brand identities that dont just look stunning – they deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Section */}
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-[54px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Website Development
            </h2>
            <p className="text-xl text-[#020D3E] mt-4">
              We create responsive, user-centric websites that blend aesthetic excellence with technical sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Web Solutions",
                description: "Bespoke websites that reflect your brands unique identity",
                icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
              },
              {
                title: "E-commerce Platforms",
                description: "Scalable online stores with seamless payment integration",
                icon: <FaShoppingCart className="text-green-600 text-4xl" />,
              },
              {
                title: "Progressive Web Apps",
                description: "Fast, engaging mobile-first experiences",
                icon: <FaMobileAlt className="text-purple-600 text-4xl" />,
              },
              {
                title: "Content Management Systems",
                description: "Easy-to-update platforms that put you in control",
                icon: <FaSitemap className="text-yellow-600 text-4xl" />,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#001E80]">{item.title}</h3>
                <p className="text-[#020D3E] mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity Development Section */}
      <section className="py-16 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-[54px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Brand Identity Development
            </h2>
            <p className="text-xl text-[#020D3E] mt-4">
              We build cohesive brand identities that resonate with your target audience and stand out in your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Logo Design",
                description: "Distinctive marks that capture your brand essence",
                icon: <FaPenNib className="text-red-600 text-4xl" />,
              },
              {
                title: "Visual Language",
                description: "Comprehensive design systems that ensure consistency",
                icon: <FaPalette className="text-indigo-600 text-4xl" />,
              },
              {
                title: "Brand Guidelines",
                description: "Detailed documentation for consistent brand application",
                icon: <FaSitemap className="text-orange-600 text-4xl" />,
              },
              {
                title: "Design Assets",
                description: "Complete package of visual elements for all platforms",
                icon: <FaPalette className="text-teal-600 text-4xl" />,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#001E80]">{item.title}</h3>
                <p className="text-[#020D3E] mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WEBDEVPage;