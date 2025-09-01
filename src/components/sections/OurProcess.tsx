import React from "react";
import Container from "../ui/Container";
import { processSteps } from "../../data/constants";

const OurProcess: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Process —{" "}
          <span className="text-indigo-600">from Idea to Product</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          We follow a proven, lean process that transforms your vision into a
          market-tested, scalable product — fast.
        </p>
        <div className="relative mt-20">
          {/* The vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-indigo-100 hidden md:block"
            aria-hidden="true"
          ></div>

          <div className="relative">
            {processSteps.map((step, index) => (
              <div key={index} className="md:flex items-center w-full mb-8">
                {/* Content Block */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:order-2"
                  }`}
                >
                  <div className="p-6 rounded-lg text-left">
                    <h3 className="text-xl font-semibold text-indigo-600">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Icon on the timeline */}
                <div className="hidden md:flex md:w-12 h-12 rounded-full bg-white border-2 border-indigo-200 items-center justify-center absolute left-1/2 -translate-x-1/2">
                  <img src={step.icon} alt="" className="w-6 h-6" />
                </div>

                {/* Spacer for mobile */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProcess;
