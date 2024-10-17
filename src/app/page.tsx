import HomeHero from "@/components/heros";
import HomeOverview from "@/components/overviews";
import HomeProduct from "@/components/products";
import Testimonials from "@/components/testimonials";
import AboutPage from "./about/page";
import TeamPage from "./teams/page";


export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HomeHero />
      {/* OVERVIEW */}
      <HomeOverview />
      {/* AboutPage */}
      {/* <AboutPage /> */}
      {/* Products */}
      <HomeProduct />
      {/* TeamPage */}
      {/* <TeamPage /> */}
      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
