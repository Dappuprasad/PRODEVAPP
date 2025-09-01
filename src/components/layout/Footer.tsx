import React from "react";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100">
    <Container className="py-16">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <a
            href="#"
            className="text-2xl font-bold text-white bg-gray-900 py-1 px-3 rounded-md inline-block"
          >
            PRODEV
          </a>
          <p className="mt-6 text-gray-600">
            Hyderabad, Telangana,
            <br />
            India
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Product Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Workflow Automation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                AI Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 flex items-center"
              >
                <Icon
                  path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  className="w-5 h-5 mr-2"
                />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
