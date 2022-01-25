import React from "react";
import "./Portfolio.css";
import portfolioImg from "../assets/Portfolio.jpg";
import { SectionHeader } from "../components";

const Portfolio = () => {
  return (
    <div className="flex justify-center px-5 md:p-0">
      <div className="Portfolio__Container flex flex-col items-center gap-24 md:w-11/12">
        <SectionHeader
          Heading={"We Make your Business Bright"}
          ParaGraph={
            "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
          }
        />
        <div className="Portfolio__Body flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-16">
          <div className="Portfolio__Stats md:w-[500] h-[435px] gap-10 sm:gap-5 md:gap-10 grid sm:grid-cols-2">
            <div className="Portfolio_Card w-[200px] h-[165px] flex pl-6">
              <div className="flex flex-col justify-between">
                <h3>1500+</h3>
                <p>
                  Projects <br /> Done
                </p>
              </div>
            </div>
            <div className="Portfolio_Card w-[200px] h-[165px] flex pl-6">
              <div className="flex flex-col justify-between">
                <h3>2000+</h3>
                <p>
                  Happy <br /> Customers
                </p>
              </div>
            </div>
            <div className="Portfolio_Card w-[200px] h-[165px] flex pl-6">
              <div className="flex flex-col justify-between">
                <h3>3000+</h3>
                <p>
                  Cup of <br /> Coffee
                </p>
              </div>
            </div>
            <div className="Portfolio_Card w-[200px] h-[165px] flex pl-6">
              <div className="flex flex-col justify-between">
                <h3>1890</h3>
                <p>
                  Projects in <br /> Queue
                </p>
              </div>
            </div>
          </div>
          <div className="Portfolio__Image-Section mt-96 sm:mt-0">
            <div className="Portfolio__Image flex justify-center">
              <img src={portfolioImg} alt="Portfolio image" />
              <div className="Image__Background--Portfolio"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
