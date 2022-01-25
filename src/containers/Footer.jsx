import React, { useState } from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [IconColor, setIconColor] = useState("#f6f6f6");
  return (
    <div className="flex flex-col gap-20">
      <div className="Footer__Sections px-5 flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="Footer__Section-Head flex flex-col gap-8 2xl:">
          <h1 className="text-center sm:text-left">Digi.Business</h1>
          <p className="text-center sm:text-left">
            We use multi-mic and echo cancellation technology so that everyone
            can use device.
          </p>
          <div className="flex gap-5 justify-center sm:justify-start">
            <div className="Footer__icon rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FaFacebookF className="IconsFa" />
            </div>
            <div className="Footer__icon rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FaInstagram className="IconsFa" />
            </div>
            <div className="Footer__icon rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FaTwitter className="IconsFa" />
            </div>
            <div className="Footer__icon rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FaLinkedinIn className="IconsFa" />
            </div>
          </div>
        </div>
        <div className="Footer__Section-Links flex flex-col justify-between items-center sm:items-start lg:justify-self-center gap-5">
          <h3 className="border-b-2 border-b-black">Resources</h3>
          <p className="mt-5">
            <a href="#">Features</a>
          </p>
          <p>
            <a href="#">Pricing</a>
          </p>
          <p>
            <a href="#">Login</a>
          </p>
        </div>
        <div className="Footer__Section-Links flex flex-col justify-between items-center sm:items-start lg:justify-self-center gap-5">
          <h3 className="border-b-2 border-b-black">Legal</h3>
          <p className="mt-5">
            <a href="#">Terms of Use</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Legal Notice</a>
          </p>
        </div>
        <div className="Footer__Section-Links flex flex-col justify-between items-center sm:items-start lg:justify-self-center gap-5">
          <h3 className="border-b-2 border-b-black">Links</h3>
          <p className="mt-5">
            <a href="#">Terms of Use</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Legal Notice</a>
          </p>
        </div>
      </div>
      <div className="Footer__Secondary flex justify-center items-center">
        <p>Copyright Agha.com, All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
