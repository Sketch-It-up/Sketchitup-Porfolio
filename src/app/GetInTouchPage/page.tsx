"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import newlogo from '@/assets/Sketchitup-logon.jpg' ;
import MenuIcon from '@/assets/menu.svg';
import Link from "next/link";
import Image from "next/image";

const GetInTouchPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send your message. Please try again later.');
    });
  };

  return (
    <div>
      <div className='py-5'>
        <div className='px-20'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Image src={newlogo} alt='logo' height={40} width={40}></Image>
              <Link href="/"> <h6 className='text-3xl font-bold '>SketchitUp</h6></Link>
            </div>          
            <MenuIcon className ="h-5 w-5 md:hidden"></MenuIcon>
            <nav className='hidden md:flex gap-6 text-black items-center font-semibold'>
              <Link href="/">Home</Link>
              <Link href="/#services">Our Services</Link>
              <Link href="/Blog_Page">Blog</Link>
              <Link href="/AboutUsPage">About</Link>
              <Link href="/GetInTouchPage"><button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Get in touch </button></Link>
            </nav>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-[54px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl font-medium text-gray-700 mb-8">
            Ready to Elevate Your Brand? Let&apos;s Talk!
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Have a question? Fill out the form below, and we&apos;ll get back to you as soon as possible!
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" rows={4} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full py-3">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">SketchitUp</h2>
              <p className="text-lg text-gray-700 mb-2">Row House No. D3, <br /> Ahilyadevi Society, Baner, Pune - 411045</p>
              <p className="text-lg text-gray-700 mb-2">Contact No: +91 95612 80118</p>
              <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:sketchitup.official@gmail.com" className="text-blue-500">sketchitup.official@gmail.com</a></p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">Our Location</h2>
              <div className="w-[80%] h-64">
              <iframe
                  src="https://maps.google.com/maps?q=Row%20House%20No.%20D3,%20Ahilyadevi%20society,%20Baner,%20Pune%20-%20411045&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
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

export default GetInTouchPage;
