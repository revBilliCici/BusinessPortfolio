import React from "react";
import "./Blogs.css";
import BlogBgImg1 from "../assets/BlogImg1.jpg";
import BlogBgImg2 from "../assets/BlogImg.jpg";
import { SectionHeader } from "../components";

const Blogs = () => {
  return (
    <div className="flex justify-center px-5 md:p-0">
      <div className="Blogs__Container flex flex-col items-center gap-24 lg:w-11/12">
        <SectionHeader
          Heading={"What Customers say"}
          ParaGraph={
            "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
          }
        />
        <div className="Blogs__Body w-full">
          <div className="Blog__Posts flex flex-col lg:flex-wrap lg:flex-row gap-10 justify-center items-center">
            <div
              className="Blog__Post w-full sm:w-[450px] min-h-[500px] flex flex-col items-center"
              style={{ backgroundImage: `url(${BlogBgImg1})` }}
            >
              <div className="Post__Label-New">
                <p>NEW</p>
              </div>
              <div className="Post__Preview w-11/12 flex flex-col gap-5 justify-between min-h-[200px] box-border p-7">
                <h4 className="Preview__Title">
                  Distrusts fulfilled happiness unwilling as explained of
                  difficult.
                </h4>
                <p className="Preview__Description">
                  Spot to many it four bred soon well to. Or am promotion in no
                  departure abilities. Whatever landlord yourself at by pleasure
                  of children be.
                </p>
                <a
                  href="#"
                  className="Preview__Link block underline underline-offset-4"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div
              className="Blog__Post w-full sm:w-[450px] min-h-[500px] flex flex-col items-center"
              style={{ backgroundImage: `url(${BlogBgImg2})` }}
            >
              <div className="Post__Label-New">
                <p>NEW</p>
              </div>
              <div className="Post__Preview w-11/12 flex flex-col gap-5 justify-between min-h-[200px] box-border p-7">
                <h4 className="Preview__Title">
                  Distrusts fulfilled happiness unwilling as explained of
                  difficult.
                </h4>
                <p className="Preview__Description">
                  Spot to many it four bred soon well to. Or am promotion in no
                  departure abilities. Whatever landlord yourself at by pleasure
                  of children be.
                </p>
                <a
                  href="#"
                  className="Preview__Link block underline underline-offset-4"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
