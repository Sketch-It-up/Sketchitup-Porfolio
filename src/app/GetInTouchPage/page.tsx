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
    serviceInterest: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service_interest: formData.serviceInterest,
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
      <Header />

      
      <section className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[800px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-[54px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-8">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="serviceInterest" className="block text-lg font-medium text-gray-700">
                Service Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="SaaS">SaaS</option>
                <option value="AR/VR">AR/VR</option>
                <option value="Consultancy">Consultancy</option>
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary w-full py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GetInTouchPage;