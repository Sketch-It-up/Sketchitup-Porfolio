"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import ArrowIcon from "@/assets/arrow-right.svg";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCloud,
  FaDocker,
  FaCubes,
} from "react-icons/fa";

import cylinderImage from "@/assets/cylinder.png";
import cogImage from "@/assets/Enterprice/Enterprice-img.png" ;
import { motion } from "framer-motion";
import Image from "next/image";

const EnterPage = () => {
  return (
    <div>
      <Header />

      <section className="pt-8 pb-20 bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Enterprise Software Solutions
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Transform your business operations with custom software
                solutions designed for efficiency, scalability, and performance.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary" > Our Services </button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5"></ArrowIcon>
              </button>
            </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img 
              src={cogImage.src} 
              alt="Cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6  lg:left-0"
              animate={{
                translateY:[-30,30]
              }}
              transition={{
                repeat: Infinity,
                repeatType:"mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              ></motion.img>
            {/* <Image 
            src={cylinderImage}
            alt="cylinder image"
            width={220}
            height={220}
            className="hidden md:block -top-8 -left-32 md:absolute"
            ></Image> */}
            {/* <Image
            src={noodleImage}
            width={220}
            alt="noodleImage"
            className=" hidden lg:block absolute top-[524px] left-[440px] rotate-[30deg]"
            ></Image> */}
          </div>
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
        <div className="my-10 md:mt-0 md:flex-1">
              <motion.div
                className="bg-white p-8 shadow-lg rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-[#001E80]">
                  Our Offerings
                </h2>
                <ul className="mt-4 space-y-4 text-[#020D3E]">
                  <li>
                    <b>• ERP Systems:</b> Integrated solutions for comprehensive
                    business management
                  </li>
                  <li>
                    <b>• Analytics Dashboards:</b> Real-time insights for informed
                    decision-making
                  </li>
                  <li>
                    <b>• Order Management Systems:</b> Streamlined processing from
                    order to delivery
                  </li>
                  <li>
                    <b>• CRM Solutions:</b> Enhanced customer relationship management
                    tools
                  </li>
                </ul>
              </motion.div>
            </div>

          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[
              { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
              {
                icon: <FaAngular className="text-[#DD0031]" />,
                label: "Angular",
              },
              {
                icon: <FaNodeJs className="text-[#339933]" />,
                label: "Node.js",
              },
              {
                icon: <FaPython className="text-[#3776AB]" />,
                label: "Python",
              },
              {
                icon: <FaDatabase className="text-[#336791]" />,
                label: "PostgreSQL",
              },
              {
                icon: <FaDatabase className="text-[#47A248]" />,
                label: "MongoDB",
              },
              { icon: <FaCloud className="text-[#FF9900]" />, label: "AWS" },
              { icon: <FaCloud className="text-[#0089D6]" />, label: "Azure" },
              {
                icon: <FaCloud className="text-[#4285F4]" />,
                label: "Google Cloud",
              },
              {
                icon: <FaDocker className="text-[#2496ED]" />,
                label: "Docker",
              },
              {
                icon: <FaCubes className="text-[#326CE5]" />,
                label: "Kubernetes",
              },
              {
                icon: <FaCubes className="text-[#D24939]" />,
                label: "Jenkins",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-center bg-white p-4 shadow-lg rounded-2xl"
              >
                <div className="text-4xl text-[#001E80]">{tech.icon}</div>
                <p className="mt-2 text-lg font-bold text-[#020D3E]">
                  {tech.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Implementation Approach
          </h2>
          <div className="mt-12 space-y-6">
            {[
              "Requirements Analysis: Deep dive into your business processes",
              "Solution Design: Architecture and workflow planning",
              "Agile Development: Iterative development with regular feedback",
              "Testing & QA: Comprehensive quality assurance",
              "Deployment: Smooth transition to production",
              "Support: Ongoing maintenance and updates",
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white shadow-lg rounded-2xl flex items-start space-x-4"
              >
                <div className="text-2xl font-bold text-[#001E80]">
                  {index + 1}
                </div>
                <p className="text-[#020D3E]">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterPage;
