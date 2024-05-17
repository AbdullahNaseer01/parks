import { HeroSection } from "./components/heroSection/HeroSection";
import AnimatedCards from "./components/AnimatedCards/AnimatedCards";
import Grid from "./components/grid/Grid";
import HomePage from "./components/homePage/Home";


export default function Home() {
  return (
   <>
  
   <HomePage/>
   <HeroSection/>
   <Grid/>
  
   <AnimatedCards/>
  
   </>
  );
}
