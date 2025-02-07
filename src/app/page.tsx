import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/TechLogos";
import { Pricing } from "@/sections/Services";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
  <>
    <Header></Header>
    <section id="home">     <Hero ></Hero>   </section>
    <LogoTicker></LogoTicker>
    <section id="services">   <Pricing></Pricing>   </section>
    <ProductShowcase></ProductShowcase>    
    <CallToAction></CallToAction>
    <section id="Footer"><Footer></Footer></section>
  </>);

}
