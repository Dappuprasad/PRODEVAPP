import React from "react";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

const Contact: React.FC = () => (
  <section className="bg-indigo-50 py-20 sm:py-24">
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Empowering{" "}
            <span className="text-indigo-600">ambitious Founders</span> to
            launch/scale tech products{" "}
            <span className="text-indigo-600">— fast.</span>
          </h2>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start">
              <Icon
                path="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.4-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.4 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.4.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                className="h-6 w-6 text-indigo-600 mr-3 mt-1"
              />
              <span>Fractional CTO/Software Architect.</span>
            </li>
            <li className="flex items-start">
              <Icon
                path="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.4-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.4 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.4.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                className="h-6 w-6 text-indigo-600 mr-3 mt-1"
              />
              <span>Designer, Product Manager and Testers.</span>
            </li>
            <li className="flex items-start">
              <Icon
                path="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.4-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.4 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.4.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                className="h-6 w-6 text-indigo-600 mr-3 mt-1"
              />
              <span>Dedicated Full-stack developers.</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-center mb-6">
            Get your no-cost product consultation.
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 font-semibold"
            >
              Send
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Your details are 100% private.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default Contact;
