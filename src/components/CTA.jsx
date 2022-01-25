import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="flex justify-center">
      <div className="Cta__Container flex flex-col justify-between items-center px-5 sm:px-0 min-h-[350px] lg:w-11/12 w-full py-10">
        <h3 className="Cta__Title text-center">Get your updated news</h3>
        <p className="Cta__Description">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing.
        </p>
        <div className="flex Cta__grouped-input my-5 items-center">
          <input
            placeholder="Enter your email"
            type="text"
            className="xl:px-[40px] py-[20px] px-6 grow"
          />
          <div className="flex items-center justify-center cursor-pointer px-5 py-4">
            {innerWidth < 500 ? <FaTelegramPlane /> : <p>Send</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
