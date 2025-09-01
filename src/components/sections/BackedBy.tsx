import React from "react";
import Container from "../ui/Container";
import { partnerLogos } from "../../data/constants";

const BackedBy: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-12 sm:py-16">
      <Container>
        <h2 className="text-center text-xl font-semibold text-indigo-700 mb-8">
          Our portfolio companies are backed by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              className="h-10 sm:h-12 object-contain"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BackedBy;
