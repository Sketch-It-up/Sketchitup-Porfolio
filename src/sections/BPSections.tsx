import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Settings, BarChart3, ClipboardList, Rocket, FileText, Briefcase, TrendingUp, Gauge, Users, ShoppingCart, Globe, Shield, BarChart } from "lucide-react";
import image3 from "@/assets/BPLAN/ORK-img2.png";
import image1 from "@/assets/BPLAN/startupImg-Photoroom.png";
import image5 from "@/assets/BPLAN/Financial Services-Img.png";
import image5BP from "@/assets/BPLAN/Business_Planning_IMG.png";
import image4 from "@/assets/BPLAN/Growth_Strategy_IMG.png";

const OKRFramework = () => {
  const services = [
    { icon: <Target size={20} />, text: "Framework Design: Custom OKR Development", color: "#0D9488" },
    { icon: <Settings size={20} />, text: "Implementation: System Setup and Team Training", color: "#00CED1" },
    { icon: <BarChart3 size={20} />, text: "Monitoring: Regular Review and Adjustment", color: "#CD853F" },
    { icon: <ClipboardList size={20} />, text: "KPI Development: Meaningful Metrics Alignment", color: "#3CB371" },
  ];

  return (
    <section id="okr-framework" className="py-16 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
      <div className="container max-w-[1000px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
          OKR Framework
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border-l-4 border-[#001E80] hover:scale-105 transition-transform"
              >
                <div className="p-2" style={{ backgroundColor: service.color, color: "white", borderRadius: "50%" }}>
                  {service.icon}
                </div>
                <p className="text-sm md:text-base font-medium text-[#020D3E]">{service.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src={image3}
              alt="OKR Framework"
              className="w-[80%] max-w-[320px] rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StartupServices = () => {
  const services = [
    { icon: <Rocket size={20} />, text: "Incubation: Guidance Through Early-Stage Growth", color: "#32CD32" },
    { icon: <FileText size={20} />, text: "Pitch Deck Creation: Compelling Investor Presentations", color: "#4682B4" },
    { icon: <Briefcase size={20} />, text: "Funding Strategy: Investment Planning and Preparation", color: "#D2691E" },
  ];

  return (
    <section id="startup-services" className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container max-w-[1000px] mx-auto px-4">
        <h2 className="text-center p-4 text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Startup Services
        </h2>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src={image1}
              alt="Startup Services"
              className="w-[80%] max-w-[320px] rounded-lg"
            />
          </motion.div>
          <div className="md:w-1/2 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border-l-4 border-[#001E80] hover:scale-105 transition-transform"
              >
                <div className="p-2" style={{ backgroundColor: service.color, color: "white", borderRadius: "50%" }}>
                  {service.icon}
                </div>
                <p className="text-sm md:text-base font-medium text-[#020D3E]">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinancialServices = () => {
  const services = [
    { icon: <BarChart3 size={20} />, text: "Financial Modeling: Custom Models for Business Scenarios", color: "#DAA520" },
    { icon: <TrendingUp size={20} />, text: "Projections: Detailed Forecasting and Analysis", color: "#5F9EA0" },
    { icon: <Gauge size={20} />, text: "Performance Metrics: KPI Development and Tracking", color: "#B22222" },
  ];

  return (
    <section id="financial-services" className="py-16 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
      <div className="container max-w-[1000px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Financial Services
        </h2>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border-l-4 border-[#001E80] hover:scale-105 transition-transform"
              >
                <div className="p-2" style={{ backgroundColor: service.color, color: "white", borderRadius: "50%" }}>
                  {service.icon}
                </div>
                <p className="text-sm md:text-base font-medium text-[#020D3E]">{service.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src={image5}
              alt="Financial Services"
              className="w-[80%] max-w-[320px] rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BusinessPlanning = () => {
  const services = [
    { icon: <Users size={20} />, text: "B2B Strategy: Partnerships & Channel Optimization", color: "#9ACD32" },
    { icon: <Briefcase size={20} />, text: "B2C Planning: Consumer Engagement & Retention", color: "#4682B4" },
    { icon: <ShoppingCart size={20} />, text: "D2C Implementation: Direct-to-Consumer Growth", color: "#D2691E" },
  ];

  return (
    <section id="business-planning" className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container max-w-[1000px] mx-auto px-4">
        <h2 className="text-center p-4 text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Business Planning
        </h2>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src={image5BP}
              alt="Business Planning"
              className="w-[80%] max-w-[320px] rounded-lg"
            />
          </motion.div>
          <div className="md:w-1/2 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border-l-4 border-[#001E80] hover:scale-105 transition-transform"
              >
                <div className="p-2" style={{ backgroundColor: service.color, color: "white", borderRadius: "50%" }}>
                  {service.icon}
                </div>
                <p className="text-sm md:text-base font-medium text-[#020D3E]">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GrowthStrategy = () => {
  const services = [
    { icon: <TrendingUp size={20} />, text: "Domestic Market Penetration", color: "#EA580C" },
    { icon: <Globe size={20} />, text: "International Expansion Planning", color: "#00CED1" },
    { icon: <BarChart size={20} />, text: "Market Entry Execution", color: "#CD853F" },
    { icon: <Shield size={20} />, text: "Competitive Positioning", color: "#3CB371" },
  ];

  return (
    <section id="growth-strategy" className="py-16 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
      <div className="container max-w-[1000px] mx-auto px-4">
        <h2 className="text-center p-4 text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Growth Strategy
        </h2>
        <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border-l-4 border-[#001E80] hover:scale-105 transition-transform"
              >
                <div className="p-2" style={{ backgroundColor: service.color, color: "white", borderRadius: "50%" }}>
                  {service.icon}
                </div>
                <p className="text-sm md:text-base font-medium text-[#020D3E]">{service.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src={image4}
              alt="Growth Strategy"
              className="w-[80%] max-w-[350px] rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MergedSections = () => {
  return (
    <>
      <GrowthStrategy />
      <BusinessPlanning />
      <FinancialServices />
      <StartupServices />
      <OKRFramework />
    </>
  );
};

export default MergedSections;