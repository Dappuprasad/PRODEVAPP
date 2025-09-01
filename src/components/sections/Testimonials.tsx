import React from "react";
import Container from "../ui/Container";
import { clientTestimonials } from "../../data/constants";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Founders are <span className="text-indigo-600">RAVING</span> about
            us.
          </h2>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6">
          {clientTestimonials.map((t, i) => (
            <div
              key={i}
              className="group mb-4 sm:mb-6 break-inside-avoid rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
