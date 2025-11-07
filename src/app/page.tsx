import ContentSection from "@/components/content-1";
import FAQsTwo from "@/components/faqs-2";
import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-2";
import FeaturesSection from "@/components/features-8";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats";
import WallOfLoveSection from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <HeroSection/>
     <LogoCloud/>
      <StatsSection/>
      <ContentSection/>
      <Features/>
      <FeaturesSection/>
     <Pricing/>
     <WallOfLoveSection/>
     <FAQsFour/>
    </div>
  );
}
