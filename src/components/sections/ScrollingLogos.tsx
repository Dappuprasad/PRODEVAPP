import React from "react";
import Container from "../ui/Container";

interface Logo {
  src: string;
  alt: string;
  name: string;
}

interface ScrollingLogosProps {
  title: string;
  subtitle: string;
  logos: Logo[];
  reversed?: boolean;
}

const ScrollingLogos: React.FC<ScrollingLogosProps> = ({
  title,
  subtitle,
  logos,
  reversed = false,
}) => (
  <section className="py-16 sm:py-20 bg-white">
    <Container className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-indigo-500 rounded-full -mb-2"></span>
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">{subtitle}</p>
    </Container>
    <div className="mt-12 relative w-full overflow-hidden">
      <div
        className={`flex animate-scroll ${
          reversed ? "animate-scroll-reverse" : ""
        }`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 mx-4 flex flex-col items-center justify-center p-4 h-36 bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <img src={logo.src} alt={logo.alt} className="h-12" />
            <span className="mt-3 text-sm font-medium text-gray-700 text-center">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScrollingLogos;
