import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Products from "./components/Products";
import WhyUs from "./components/Whyus";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Brand/>
      <Products/>
      <Banner/>
      <WhyUs/>
      <Location/>
      <CTA/>
      <Footer/>
      <StickyBar/>
    </>
  );
}