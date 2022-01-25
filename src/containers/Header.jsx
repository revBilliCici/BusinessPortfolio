import React from "react";
import "./Header.css";
import { FaAirbnb, FaDropbox, FaMicrosoft, FaSearch } from "react-icons/fa";
import HeroImg from "../assets/Hero-img.png";

const Header = ({ isScrolled }) => {
  // let classes = isScrolled
  //   ? "flex justify-center p-5 lg:p-0 mt-52"
  //   : "flex justify-center p-5 lg:p-0";
  return (
    <div className="flex justify-center p-5 lg:p-0">
      <div className="Header__container lg:w-11/12 w-full">
        {/* <div className="Header__Gradient--Decorator"></div> */}
        <div className="Header__body">
          <div className="grid lg:grid-cols-2 gap-y-10 Hero__container justify-items-center lg:justify-items-start">
            <div className="flex flex-col gap-y-10 mt-40 max-w-xl">
              <div className="Hero__Heading">
                <h1 className="md:text-8xl text-7xl">
                  Growing your
                  <div className="Hero__Heading--secondary pt-5 md:pt-0">
                    Business
                  </div>
                </h1>
              </div>
              <div className="Hero__Paragraph">
                <p>
                  Relation so in confined smallest children unpacked delicate.
                  Why sir end believe uncivil respect. Always get adieus nature
                  day course for common. My little garret repair to desire he
                  esteem.
                </p>
              </div>
              <div className="flex Header__grouped-input my-5">
                <input
                  placeholder="SEARCH YOUR SERVICE"
                  type="text"
                  className="xl:px-[40px] py-[20px] px-6 grow"
                />
                <div className="flex items-center justify-center cursor-pointer px-5 py-2">
                  {innerWidth < 500 ? <FaSearch /> : <p>Search</p>}
                </div>
              </div>
              <div className="Hero__Service-Logos grid sm:grid-cols-2 gap-x-10 gap-y-5 w-10/12 self-center">
                <div className="Hero__Service-Logo flex justify-center">
                  <p
                    className="flex items-center gap-1"
                    style={{ color: "#B6B6B6" }}
                  >
                    <FaAirbnb color="#B6B6B6" className="text-2xl" />
                    airbnb
                  </p>
                </div>
                <div className="Hero__Service-Logo flex justify-center">
                  <p
                    className="flex items-center gap-1"
                    style={{ color: "#B6B6B6" }}
                  >
                    <FaDropbox color="#B6B6B6" className="text-2xl" />
                    Dropbox
                  </p>
                </div>
                <div className="Hero__Service-Logo flex justify-center">
                  <p
                    className="flex items-center gap-1"
                    style={{ color: "#B6B6B6" }}
                  >
                    <FaMicrosoft color="#B6B6B6" className="text-2xl" />
                    Microsoft
                  </p>
                </div>
                <div className="Hero__Service-Logo flex justify-center">
                  <p style={{ color: "#B6B6B6" }}>Stripe</p>
                </div>
              </div>
            </div>
            <div className="Hero__Image flex justify-center">
              <img src={HeroImg} alt="Hero Image" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
