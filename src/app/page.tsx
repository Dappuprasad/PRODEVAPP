import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import VideoTestimonials from "../components/sections/VideoTestimonials";
import BackedBy from "../components/sections/BackedBy";
import HowItWorks from "../components/sections/HowItWorks";
import ProjectsCarousel from "../components/sections/ProjectsCarousel";
import OurProcess from "../components/sections/OurProcess";
import ScrollingLogos from "../components/sections/ScrollingLogos";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import { techStackLogos, servicesLogos } from "../data/constants";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <VideoTestimonials />
        <BackedBy />
        <HowItWorks />
        <ProjectsCarousel />
        <OurProcess />
        <ScrollingLogos
          title="Tech Stack"
          subtitle="Tools we use to build fast, scalable products — modern, proven, and production-ready."
          logos={techStackLogos}
        />
        <ScrollingLogos
          title="Services"
          subtitle="What we build — always modern, always scalable."
          logos={servicesLogos}
          reversed={true}
        />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
