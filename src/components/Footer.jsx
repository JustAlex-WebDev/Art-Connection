import React from "react";
import ThemeToggle from "./ThemeToggle";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-div pt-4 text-primary mb-4 duration-300">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Help Center
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Contact Us
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Services
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Documentation
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                About Us
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Artists
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Members
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Invest
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[310px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <label
                htmlFor="news"
                className="text-center md:text-right hover:cursor-pointer"
              >
                Sign up for art news
              </label>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border text-primary py-2 pl-4 mr-2 w-full shadow-lg rounded-2xl md:w-auto placeholder-primary"
                    type="email"
                    id="news"
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-button px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2 font-semibold hover:opacity-50">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-4 justify-center items-center gap-4">
        <a
          href="https://github.com/JustAlex-WebDev"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub size={15} className="cursor-pointer hover:opacity-50" />
        </a>
        <SiGmail size={15} className="cursor-pointer hover:opacity-50" />
        <a
          href="https://www.linkedin.com/in/alexandar-valov-667567242"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin
            size={20}
            className="cursor-pointer hover:opacity-50"
          />
        </a>
      </div>
      <p className="text-center py-4">
        © 2023{" "}
        <Link to="/">
          <span className="hover:opacity-50 cursor-pointer">
            Art Connection
          </span>
        </Link>
        , Inc. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
