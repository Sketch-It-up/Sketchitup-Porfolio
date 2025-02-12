import React from "react";
import { FaDraftingCompass, FaChair, FaBuilding, FaStoreAlt, FaHome, FaHandshake } from "react-icons/fa";

const ApplicationsSection = () => {
  const applications = [
    {
      icon: <FaDraftingCompass className="text-red-500" />, // Pre-construction Visualization icon
      title: "Pre-Construction Visualization",
      description: "Visualize architectural projects before breaking ground with photorealistic 3D models.",
    },
    {
      icon: <FaChair className="text-green-500" />, // Interior Design Planning icon
      title: "Interior Design Planning",
      description: "Plan and optimize interior layouts with lifelike renderings and design tools.",
    },
    {
      icon: <FaBuilding className="text-blue-500" />, // Property Marketing Materials icon
      title: "Property Marketing Materials",
      description: "Enhance marketing campaigns with immersive visuals that captivate potential buyers.",
    },
    {
      icon: <FaStoreAlt className="text-yellow-500" />, // Sales Center Experiences icon
      title: "Sales Center Experiences",
      description: "Create interactive and engaging sales center presentations using virtual reality.",
    },
    {
      icon: <FaHome className="text-purple-500" />, // Virtual Property Tours icon
      title: "Virtual Property Tours",
      description: "Enable remote clients to experience properties as if they were there in person.",
    },
    {
      icon: <FaHandshake className="text-orange-500" />, // Design Review and Approval icon
      title: "Design Review and Approval",
      description: "Facilitate collaboration by providing detailed visuals for faster approvals.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl h-14 md:text-[54px] mt-9 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Services
          </h2>
          <p className="text-xl text-[#020D3E] mt-4">
            Explore how our solutions empower various aspects of real estate and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
            >
              <div className="text-5xl mb-4">{application.icon}</div>
              <h3 className="text-xl font-bold text-[#001E80]">{application.title}</h3>
              <p className="text-[#020D3E] mt-2">{application.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
