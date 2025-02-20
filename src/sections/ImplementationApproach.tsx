import { motion } from "framer-motion";

const ImplementationApproach = () => {
  const steps = [
    "Requirements Analysis: Deep dive into your business processes",
    "Solution Design: Architecture and workflow planning",
    "Agile Development: Iterative development with regular feedback",
    "Testing & QA: Comprehensive quality assurance",
    "Deployment: Smooth transition to production",
    "Support: Ongoing maintenance and updates",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Implementation Approach
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="min-h-[120px] flex items-center p-4 bg-white shadow-lg rounded-xl space-x-4 transition-all duration-300 ease-in-out"
            >
              {/* Step Number with Fixed Circle Shape */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white bg-gradient-to-b from-[#001E80] to-[#183EC2] shadow-md flex-shrink-0">
                {index + 1}
              </div>

              {/* Step Description */}
              <p className="text-md text-[#020D3E] font-medium leading-snug">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationApproach;
