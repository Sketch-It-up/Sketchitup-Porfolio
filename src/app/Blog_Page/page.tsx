"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import BlogContent from "@/sections/BlogContent"; // Importing the BlogContent component

const BlogPage = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-5xl p-4 md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Welcome to Our Blog 
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Explore the latest insights, trends, and expert advice on business, finance, and technology.
          </p>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <BlogContent /> {/* Here we use BlogContent to dynamically display the blog posts */}

      {/* Categories Section */}
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

      {/* Newsletter Subscription */}
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
