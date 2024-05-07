import AiSection from "@/components/AiSection";
import ComingSoon from "@/components/ComingSoon";
import CreonPass from "@/components/CreonPass";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurMission from "@/components/OurMission";
import Profiting from "@/components/Profiting";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <AiSection />
      <Footer />
    </>
    
  );
}
