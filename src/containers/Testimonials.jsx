import React from "react";
import "./Testemonials.css";
import { TestemonialsSelector, ReviewStar } from "../assets/TestemonialsIcons";
import { SectionHeader } from "../components";

const Testimonials = () => {
  return (
    <div
      id="Testemonials"
      className="Testemonials__Container flex flex-col items-center gap-24"
    >
      <SectionHeader
        Heading={"What Customers say"}
        ParaGraph={
          "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Sixcuriosity day assurance bed necessary."
        }
      />
      <div className="Testemonials__Body mt-40">
        <div className="Testemonials__Background">
          <div className="Testemonials__main">
            <div className="Testemonials__Item flex flex-col items-center justify-center px-10 sm:px-[30px] py-[20px] md:px-[50px] md:py-[30px] lg:px-[100px] lg:py-[60px] gap-12">
              <h3 className="Testemonial__Title">
                Best Design and delivered in time
              </h3>
              <p className="Testemonial__Content">
                Nay likely her length sooner thrown sex lively income. The
                expense windows adapted sir. Wrong widen drawn ample eat off
                doors money. Offending belonging promotion provision an be oh
                consulted ourselves it. Blessing welcomed ladyship she met
                humoured sir breeding her. Six curiosity day assurance bed
                necessary.
              </p>
              <div className="Testemonial__Review-stars justify-center flex gap-1">
                <ReviewStar />
                <ReviewStar />
                <ReviewStar />
                <ReviewStar />
                <ReviewStar />
              </div>
              <h4 className="Testemonial__Name">Mansur</h4>
              <p className="Testemonial__Org">CEO @ airbnb</p>
            </div>
            <div className="Testemonials__Selectors flex justify-center mt-9 gap-3">
              <TestemonialsSelector />
              <TestemonialsSelector isActive={true} />
              <TestemonialsSelector />
              <TestemonialsSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
