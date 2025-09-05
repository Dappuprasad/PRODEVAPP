import React from "react";
import Container from "../ui/Container";

const HeroSection: React.FC = () => (
  <section className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-32 pb-20 overflow-hidden">
    <Container className="relative z-10 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
        Building a tech product solo is hard.
      </h1>
      <div className="relative inline-block mx-auto mb-12">
        <img
          src="/images/herosectionimage.png"
          alt="Idea Doodle"
          className="max-w-xs md:max-w-sm mx-auto"
        />
      </div>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
        Launch your idea with confidence - get to market in 45 days with a
        flexible product team.
      </p>
      <div className="relative h-80 sm:h-96 w-full max-w-4xl mx-auto">
        {/* Phone mockups with enhanced popout effects */}
        <img
          src="/images/appscreen1.png"
          alt="App Screenshot 3"
          className="absolute top-[10%] left-1/2 transform -translate-x-1/2 h-64 sm:h-72 rounded-2xl shadow-2xl z-20 
                     animate-float hover:scale-110 hover:shadow-3xl transition-all duration-300 
                     hover:rotate-1 cursor-pointer filter hover:brightness-110"
        />
        <img
          src="/images/appscreen2.png"
          alt="App Screenshot 2"
          className="absolute top-[40%] left-[37%] transform -translate-x-1/2 h-60 sm:h-64 rounded-2xl shadow-xl z-10
                     animate-float-delayed hover:scale-105 hover:shadow-2xl transition-all duration-300 
                     hover:-rotate-2 cursor-pointer filter hover:brightness-105"
          style={{ animationDelay: "0.5s" }}
        />
        <img
          src="/images/appscreen3.png"
          alt="App Screenshot 4"
          className="absolute top-[40%] left-[63%] transform -translate-x-1/2 h-60 sm:h-64 rounded-2xl shadow-xl z-10
                     animate-float-delayed hover:scale-105 hover:shadow-2xl transition-all duration-300 
                     hover:rotate-2 cursor-pointer filter hover:brightness-105"
          style={{ animationDelay: "1s" }}
        />
        <img
          src="/images/appscreen4.png"
          alt="App Screenshot 1"
          className="absolute top-[53%] left-[25%] transform -translate-x-1/2 h-56 sm:h-60 rounded-2xl shadow-lg z-0
                     animate-float-slow hover:scale-105 hover:shadow-xl transition-all duration-300 
                     hover:-rotate-1 cursor-pointer filter hover:brightness-105"
          style={{ animationDelay: "1.5s" }}
        />
        <img
          src="/images/appscreen5.png"
          alt="App Screenshot 5"
          className="absolute top-[53%] left-[75%] transform -translate-x-1/2 h-56 sm:h-60 rounded-2xl shadow-lg z-0
                     animate-float-slow hover:scale-105 hover:shadow-xl transition-all duration-300 
                     hover:rotate-1 cursor-pointer filter hover:brightness-105"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </Container>
  </section>
);

export default HeroSection;
