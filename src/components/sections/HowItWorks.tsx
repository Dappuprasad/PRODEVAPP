import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const HowItWorks: React.FC = () => (
  <section className="bg-white py-20 sm:py-24">
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Expand or stay lean as per your requirements
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            ProDev gives you a flexible full-stack product team;{" "}
            <strong className="text-gray-800">Engineers</strong>,{" "}
            <strong className="text-gray-800">Designers</strong>,{" "}
            <strong className="text-gray-800">PM</strong>,{" "}
            <strong className="text-gray-800">QA</strong>, and{" "}
            <strong className="text-gray-800">CTO</strong> oversight - build
            only the team you need, when you need it.
          </p>
          <div className="mt-8">
            <Button className="px-8 py-3.5 w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </div>
        <div>
          <img
            src="https://byldd.com/assets/images/techStack/team-flex.gif"
            alt="Team flexibility diagram"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </Container>
  </section>
);

export default HowItWorks;
