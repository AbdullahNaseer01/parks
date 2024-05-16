import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { HeroSection } from "./components/heroSection/HeroSection";
import AnimatedCards from "./components/AnimatedCards/AnimatedCards";
import Grid from "./components/grid/Grid";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <Grid/>
   <AnimatedCards/>
   </>
  );
}
