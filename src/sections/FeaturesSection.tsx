import React from "react";
import { FaFilm, FaCubes, FaVrCardboard, FaMountain } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaFilm className="text-red-500" />, // Cinematic Renders icon
      title: "Cinematic Renders",
      description: "Ultra-realistic visualizations that capture every architectural detail",
    },
    {
      icon: <FaCubes />, // Interactive 3D Models icon
      title: "Interactive 3D Models",
      description: "Fully manipulatable models allowing exploration from every angle", 
    },
    {
      icon: <FaVrCardboard className="text-purple-500" />, // 360° Virtual Tours icon
      title: "360° Virtual Tours",
      description: "Immersive walkthroughs that create genuine spatial awareness",
    },
    {
      icon: <FaMountain className="text-orange-500" />, // Panoramic Views icon
      title: "Panoramic Views",
      description: "Sweeping vistas that showcase properties in their full context with our technology",
    },
  ];

  return (
    <div className="p-8">
      {/* Center all cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-[0_7px_14px_#EAEAEA] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
          >
            {/* Updated Icon */}
            <div className="text-4xl mb-4 text-blue-800">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-center">{feature.title}</h3>
            <p className="text-sm text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
