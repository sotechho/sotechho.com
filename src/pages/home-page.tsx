import { useEffect, useState } from "react";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import AboutSection from "./home/about-section";
import CtaSection from "./home/cta-section";
import HeroSection from "./home/hero-section";
import JoinSection from "./home/join-section";
import WhatWeDoSection from "./home/what-we-do-section";

const Divider = () => <hr className="border-0 border-t border-[#f0f0f0]" />;

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif] text-[#111] selection:bg-[#111] selection:text-white">
      <SiteHeader scrolled={scrolled} onNavigate={go} />
      <HeroSection onJoin={() => go("join-us")} />
      <Divider />
      <AboutSection />
      <Divider />
      <WhatWeDoSection />
      <Divider />
      <JoinSection />
      <Divider />
      <CtaSection />
      <SiteFooter />
    </div>
  );
};

export default HomePage;
