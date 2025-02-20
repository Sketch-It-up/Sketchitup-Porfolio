"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import BlogContent from "@/sections/BlogContent"; 
import blogImage from "@/assets/BlogPage/Blog_Page_2.png";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div>
      <Header />


      <section className="pt-8 pb-20 bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl p-4 md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Explore Our Insights
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Stay updated with the latest trends, tips, and insights in web development, digital marketing, and design.
                Our blog brings you expert knowledge to help you grow your online presence and make informed decisions.        
                </p>
                <div className="flex gap-1 items-center mt-[30px]">
                <a href="#blogs" ><button className="btn btn-primary"> Learn More </button></a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src={blogImage}
                alt="Blog Page Image"
                className="md:w-full md:max-w-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blogs"><BlogContent /></section>

      <section className="py-20 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-4xl p-4 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Explore Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Business", "Finance", "Technology", "Marketing", "Startups", "Strategy"].map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-[#001E80] text-white rounded-full shadow-lg"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001E80] text-white text-center">
        <div className="container max-w-[800px] mx-auto px-4">
          <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg">Stay updated with the latest articles and exclusive insights.</p>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-2/3 rounded-l-lg text-black"
            />
            <button className="px-6 py-3 bg-white text-[#001E80] font-bold rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
