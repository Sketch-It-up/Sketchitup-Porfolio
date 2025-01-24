import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
  <>
    <Header></Header>
    <section id="home">     <Hero ></Hero>   </section>
    <LogoTicker></LogoTicker>
    <ProductShowcase></ProductShowcase>
    <section id="services">   <Pricing></Pricing>   </section>
    <CallToAction></CallToAction>
    <Footer></Footer>
  </>);

}
