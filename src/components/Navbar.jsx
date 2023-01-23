import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ urlLocation, isLoggedIn, NavName, isScrolled, onLogout }) => {
  const [ToggledMenu, setToggledMenu] = useState(false);
  let isDisabled = "";
  if (urlLocation != "/") {
    isDisabled = "disabled";
  }

  let ToggleButtonClasses = isLoggedIn
    ? "Menu__Toggler lg:hidden cursor-pointer hover:bg-orange-400 rounded-full"
    : "Menu__Toggler lg:hidden bg-white p-4 rounded-xl text-xl border-2 cursor-pointer hover:bg-orange-400";
  let isSticky = isScrolled
    ? "flex justify-center p-5 lg:p-0 fixed top-0 w-full z-10 bg-white border-b-2"
    : "flex justify-center p-5 lg:p-0";
  return (
    <div className={isSticky}>
      <div className="Header__container lg:w-11/12 w-full">
        <div className="lg:py-10">
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              className="Navbar__Logo cursor-pointer select-none animate-pulse"
            >
              Digi.Business
            </Link>
            <div
              className={ToggleButtonClasses}
              onClick={() => {
                setToggledMenu(!ToggledMenu);
              }}
            >
              {isLoggedIn ? (
                <div className="border-gray-900 border rounded-full p-3 text-3xl">
                  <FaUser />
                  <button onClick={onLogout}>Logout</button>
                </div>
              ) : (
                <>{ToggledMenu ? <FaTimes /> : <FaBars />}</>
              )}
            </div>
            <div className="lg:flex gap-8 hidden">
              <Link
                to={"/"}
                className="Navbar__navlink hover:text-orange-400 select-none"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="Navbar__navlink hover:text-orange-400 select-none"
              >
                About
              </Link>
              <div className="Navbar__navlink hover:text-orange-400 select-none">
                <a href="#Testemonials" className={isDisabled}>
                  Testimonials
                </a>
              </div>
              <Link
                to={"/contact"}
                className="Navbar__navlink hover:text-orange-400 select-none"
              >
                Contact
              </Link>
            </div>
            <div className="lg:flex gap-5 items-center hidden">
              {isLoggedIn ? (
                <div className="flex items-center gap-5">
                  <p className="NavName">{NavName}</p>
                  <div className="border-gray-900 border rounded-full p-3 text-3xl">
                    <FaUser />
                  <button onClick={onLogout}>Logout</button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="Navbar__Login hover:text-orange-400 select-none"
                  >
                    Login
                  </Link>
                  <Link to={"/register"} className="Navbar__Signup">
                    <p className="hover:text-orange-400 select-none">Sign up</p>
                  </Link>
                </>
              )}
            </div>
          </div>
          {ToggledMenu && (
            <div className="flex justify-end lg:hidden">
              <div className="flex flex-col gap-5 w-full bg-slate-300 p-5 rounded-md">
                <p className="Navbar__navlink-modified select-none border-b-orange-500 border-b pb-2 mb-5 self-center">
                  {NavName}
                </p>
                <Link
                  to={"/"}
                  className="Navbar__navlink hover:text-orange-400 select-none border-b-orange-500 border-b pb-2"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="Navbar__navlink hover:text-orange-400 select-none border-b-orange-500 border-b pb-2"
                >
                  About
                </Link>
                <div className="Navbar__navlink hover:text-orange-400 select-none border-b-orange-500 border-b pb-2">
                  <a href="#Testemonials" className={isDisabled}>
                    Testimonials
                  </a>
                </div>
                <Link
                  to={"/contact"}
                  className="Navbar__navlink hover:text-orange-400 select-none border-b-orange-500 border-b pb-2"
                >
                  Contact
                </Link>
                {!isLoggedIn && (
                  <>
                    <Link
                      to={"login"}
                      className="Navbar__Login hover:text-orange-400 select-none border-b-orange-500 border-b pb-2"
                    >
                      Login
                    </Link>
                    <Link to={"register"} className="Navbar__Signup">
                      <p className="hover:text-orange-400 select-none">
                        Sign up
                      </p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
