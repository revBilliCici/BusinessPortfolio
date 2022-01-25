import React from "react";
import { SectionHeader } from "../components";
import "./Services.css";
import {
  StarIcon,
  GlobeIcon,
  ImageIcon,
  TabIcon,
} from "../assets/ServiceIcons";

const Services = () => {
  return (
    <div className="flex justify-center px-5 md:p-0">
      <div className="flex flex-col items-center Services__container md:w-11/12">
        <SectionHeader
          Heading={"Our Services"}
          ParaGraph={
            "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Sixcuriosity day assurance bed necessary."
          }
        />
        <div className="Services__Section md:grid-cols-2 gap-10 grid pt-16">
          <div className="Service__card flex flex-col items-center gap-5 justify-center">
            <StarIcon />
            <h3 className="Card__Title pt-5">Branding Idendity</h3>
            <p className="Card__Desc">
              Our support team will get assistance from AI-powered.
            </p>
          </div>
          <div className="Service__card flex flex-col items-center gap-5 justify-center">
            <GlobeIcon />
            <h3 className="Card__Title pt-5">Branding Consult</h3>
            <p className="Card__Desc">
              Our support team will get assistance from AI-powered.
            </p>
          </div>
          <div className="Service__card flex flex-col items-center gap-5 justify-center">
            <ImageIcon />
            <h3 className="Card__Title pt-5">Web Development</h3>
            <p className="Card__Desc">
              Our support team will get assistance from AI-powered.
            </p>
          </div>
          <div className="Service__card flex flex-col items-center gap-5 justify-center">
            <TabIcon />
            <h3 className="Card__Title pt-5">Market Analysis</h3>
            <p className="Card__Desc">
              Our support team will get assistance from AI-powered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
