import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
    <Container>
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-2xl font-bold text-white bg-gray-900 py-1 px-3 rounded-md"
          >
            PRODEV
          </a>
        </div>
        <nav className="hidden md:flex md:space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Product Development
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Workflow Automation
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            AI Services
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Blog
          </a>
        </nav>
        <div className="flex items-center">
          <Button className="hidden md:inline-flex px-5 py-2.5">
            Get Started
          </Button>
          <button className="md:hidden text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
