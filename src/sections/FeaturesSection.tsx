import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🌿",
      title: "Cinematic Renders",
      description: "Ultra-realistic visualizations that capture every architectural detail",
    },
    {
      icon: "🎯",
      title: "Interactive 3D Models",
      description: "Fully manipulatable models allowing exploration from every angle",
    },
    {
      icon: "🔒",
      title: "360° Virtual Tours",
      description: "Immersive walkthroughs that create genuine spatial awareness",
    },
    {
      icon: "🔔",
      title: "Panoramic Views",
      description: "Sweeping vistas that showcase properties in their full context",
    },
  ];

  return (
    <div className="s p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            {/* <a
              href="#"
              className="text-blue-600 font-semibold hover:underline"
            >
              Learn more →
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
