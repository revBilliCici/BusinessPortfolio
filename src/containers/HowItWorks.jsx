import React from "react";
import { SectionHeader } from "../components";
import "./HowItWorks.css";
import {
  CreateAccountIcon,
  UploadIcon,
  SearchIcon,
  ApplyIcon,
} from "../assets/HowItWorksIcons";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center px-5 md:p-0">
      <div className="HowItWorks__Container flex flex-col items-center gap-24 md:w-11/12">
        <SectionHeader
          Heading={"How it Works?"}
          ParaGraph={
            "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Sixcuriosity day assurance bed necessary."
          }
        />
        <div className="HowItWorks__Body lg:w-4/5 flex flex-col md:flex-row md:justify-center items-center gap-y-20 gap-x-20">
          <div className="Section__Sidebar flex flex-col gap-y-10">
            <div className="Sidebar__Item flex flex-col items-center gap-5">
              <CreateAccountIcon />
              <h4>Create Account</h4>
              <hr className="w-9/12" />
            </div>
            <div className="Sidebar__Item flex flex-col items-center gap-5">
              <UploadIcon />
              <h4>Upload requirements</h4>
            </div>
            <div className="Sidebar__Item flex flex-col items-center gap-5">
              <SearchIcon />
              <h4>Search service</h4>
            </div>
            <div className="Sidebar__Item flex flex-col items-center gap-5">
              <ApplyIcon />
              <h4>Apply</h4>
            </div>
          </div>
          <div className="Section__main flex flex-col gap-10">
            <h3 className="text-center sm:text-left">How to create account?</h3>
            <p className="lg:max-w-lg md:max-w-2xl sm:max-w-xl">
              And produce say the ten moments parties. Simple innate summer fat
              appear basket his desire joy. Outward clothes promise at gravity
              do excited. Sufficient particular impossible by reasonable oh
              expression is. Yet preference connection unpleasant yet melancholy
              but end appearance. And excellence partiality estimating
              terminated day everything. <br />
              <br /> Warmly little before cousin sussex entire men set. Blessing
              it ladyship on sensible judgment settling outweigh. Worse linen an
              of civil jokes leave offer. Parties all clothes removal cheered
              calling prudent her. And residence for met the estimable
              disposing. Mean if he they been no hold mr. Is at much do made
              took held help. Latter person am secure of estate genius at.
            </p>
            <div className="flex flex-col gap-5 pt-10 sm:flex-row">
              <button className="HowItWorks__btn--primary w-full sm:w-[200px] h-[55px]">
                Create Account
              </button>
              <button className="HowItWorks__btn--outline w-full sm:w-[200px] h-[55px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
