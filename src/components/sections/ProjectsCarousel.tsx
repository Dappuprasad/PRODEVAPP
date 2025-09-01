"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import { projects } from "../../data/constants";

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            We help ambitious founders build their tech product.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            100+ products shipped across industries.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12 relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-2/5">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-bold text-gray-900">
                {projects[currentIndex].title}
              </h3>
              <p className="mt-4 text-gray-600">
                {projects[currentIndex].description}
              </p>
            </div>
          </div>
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 transition"
          >
            <Icon
              path="M15.75 19.5L8.25 12l7.5-7.5"
              className="w-6 h-6 text-gray-800"
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 transition"
          >
            <Icon
              path="M8.25 4.5l7.5 7.5-7.5 7.5"
              className="w-6 h-6 text-gray-800"
            />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsCarousel;
