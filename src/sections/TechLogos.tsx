"use client"


import acmeLogo from "@/assets/newtech/ChartJs.png";
import quantumLogo from "@/assets/newtech/Figma.png"; 
import echoLogo from "@/assets/newtech/Nodejs.png";
import celestialLogo from "@/assets/newtech/Tensorflow.png"; 
import pulseLogo from "@/assets/newtech/android.png";
import apexLogo from "@/assets/newtech/docker.png";
import ReactLogo from "@/assets/newtech/react.png";
import mongodbLogo from "@/assets/newtech/mongodb.png"
import Image from "next/image";
import {motion} from "framer-motion";


export const LogoTicker = () => {
return (
    <div className="py-8 md:py-12  bg-white ">
      <div className="container">
        <div className="flex mb-15 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-16 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease:"linear",
              repeatType:"loop",
            }}
          >
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image " />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-image " />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image " />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker-image " /> 
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-image " />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image " />
            <Image src={ReactLogo} alt="Celestial Logo" className="logo-ticker-image " /> 
            <Image src={mongodbLogo} alt="Pulse Logo" className="logo-ticker-image " />
            
            {/* Second set of logos */}
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image " />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-image " />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image " />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker-image " /> 
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-image " />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image " />
            <Image src={ReactLogo} alt="Celestial Logo" className="logo-ticker-image " /> 
            <Image src={mongodbLogo} alt="Pulse Logo" className="logo-ticker-image " />


          </motion.div>
        </div>
      </div>

      <div>
      <div className='max-w-[850px] mt-10 mx-auto '>
            <h2 className='text-center  text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Transform Your Visions & Ideas into Reality with <b>Sketchitup</b>   : Web Development, SaaS Solutions, AR/VR Experiences, and Startup Expertise</h2>
            <p className='text-center my-5 text-[22px] leading-[30px] tracking-tight text-[#020D3E]'>
            Welcome to Sketchitup! We are a one-stop solution for businesses looking to scale, innovate, and stand out. With expertise in web development, SaaS solutions, AR/VR immersive experiences, and startup consultancy, we bring your ideas to life. Whether youre a startup crafting your pitch deck or a real estate firm needing cutting-edge visualizations, we have got you covered.</p>

            <div className='flex justify-center'>
            <div className='tag'>Start Your Growth Journey with Us</div>
          </div>
            
        </div>
      </div>
    </div>

    
  );
};

