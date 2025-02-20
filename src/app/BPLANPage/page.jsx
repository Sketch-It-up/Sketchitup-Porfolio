"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/BPLAN/Business_Consultancy_4.png";
import BplanVideo from "../../../public/BplanVideo/BplanVideo";
import MergedSections from "@/sections/BPSections";

const BusinessConsultationPage = () => {
  return (
    <div>
      <Header />

      <section className="pt-8 pb-20 bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            {/* Left Content Section */}
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Business Consultation & Advisory
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Strategic guidance to accelerate your business growth and optimize operations. On industry trends, customer needs, and technological advancements to stay competitive. Encourage a culture of agility, where teams can quickly adapt to changes and seize new opportunities.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="mt-20 md:mt-0 md:h-[75%] md:flex-1 relative">
              <Image
                src={image}
                alt="About Us Image"
                className="md:h-[75%] w-auto lg:w-[80%] mx-auto md:max-w-none"
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="flex gap-1 items-center mt-8">
            <a href="#services">
              <button className="btn btn-primary">Our Services</button>
            </a>
          </div>
        </div>
      </section>


      {/* <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <section id="services" className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
            <div className="container max-w-[1200px] mx-auto px-4">
              <h2 className="text-center text-4xl p-4 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Strategic Consulting
              </h2>
              <BplanVideo></BplanVideo>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Growth Strategy",
                points: [
                  "Domestic market penetration strategies",
                  "International expansion planning",
                  "Market entry analysis and execution",
                  "Competitive positioning",
                ],
              },
              {
                title: "Business Planning",
                points: [
                  "B2B Strategy: Partnership development and channel optimization",
                  "B2C Planning: Consumer engagement and retention strategies",
                  "D2C Implementation: Direct-to-consumer channel development",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-[#001E80]">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-[#020D3E]">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section id="Services" className="py-20 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center p-4 text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Growth Strategy
          </h2>
          <div className="md:flex items-center ">
            <div className="md:w-1/2">
              <ul className="space-y-4 text-lg text-[#020D3E]">
                {["Domestic market penetration strategies",
                  "International expansion planning",
                  "Market entry analysis and execution",
                  "Competitive positioning"].map((service, index) => (
                    <li key={index} className="p-4 bg-white shadow-lg rounded-2xl">• {service}</li>
                  ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={image4}
                alt="Startup Services Image"
                className="md:w-auto md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section id="services"><MergedSections /></section> 

      <section className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Section Title */}
          <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Why Choose Our Advisory Services
          </h2>

          {/* Content Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Experienced consultants with industry expertise",
              "Data-driven approach to strategy development",
              "Proven methodologies for business growth",
              "Ongoing support and guidance",
              "Measurable results and ROI focus",
              "Customized solutions tailored to your needs",
            ].map((reason, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white shadow-md rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              >
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-[#001E80] to-[#183EC2] text-white text-lg font-semibold shadow-md flex-shrink-0">
                  ✔
                </div>

                {/* Text */}
                <p className="ml-3 text-sm md:text-base text-[#020D3E] font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="services" className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl p-4 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Strategic Consulting
          </h2>
          <BplanVideo></BplanVideo>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsultationPage;