'use client'



import TopBar from "./Components/Topheader/page";
import Header from "./Components/Secondheader/page";
import HomeHero from "./Components/HomeHero/page";
import FeaturedProducts from "./Components/Homefeature/page";
import Footer1 from "./Components/Footer/page";
// import HeroSection from "./Components/Hero/page";

export default function Home() {
  return (
    <div>
      <TopBar/>
      <Header/> 
      <HomeHero/>
      <FeaturedProducts/>
      <Footer1/>

      
    </div>
  );
}
