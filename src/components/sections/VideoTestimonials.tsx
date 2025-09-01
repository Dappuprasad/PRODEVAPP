import React from "react";
import Container from "../ui/Container";
import { testimonials } from "../../data/constants";

const VideoTestimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Turning your vision into a product that investors and users will
            love
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-3xl shadow-lg w-full max-w-xs"
            >
              <video
                src={testimonial.video}
                controls
                playsInline
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="text-white mt-4 text-left">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
