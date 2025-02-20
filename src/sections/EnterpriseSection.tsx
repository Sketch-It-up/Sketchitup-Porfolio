import React from "react";
import { FaDatabase, FaChartPie, FaShippingFast, FaUsers } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaDatabase className="text-red-500" />, // ERP Systems icon
      title: "ERP Systems",
      description: "Integrated solutions for comprehensive business management.",
    },
    {
      icon: <FaChartPie className="text-green-500" />, // Analytics Dashboards icon
      title: "Analytics Dashboards",
      description: "Real-time insights for informed decision-making.",
    },
    {
      icon: <FaShippingFast className="text-blue-500" />, // Order Management Systems icon
      title: "Order Management Systems",
      description: "Streamlined processing from order to delivery.",
    },
    {
      icon: <FaUsers className="text-yellow-500" />, // CRM Solutions icon
      title: "CRM Solutions",
      description: "Enhanced customer relationship management tools.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl h-14 md:text-[54px] mt-9 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-xl text-[#020D3E] mt-4">
            Discover how our solutions drive efficiency and innovation for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#001E80]">{service.title}</h3>
              <p className="text-[#020D3E] mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
