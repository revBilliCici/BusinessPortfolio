import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({ Heading, ParaGraph }) => {
  return (
    <div className="Section__Header flex flex-col items-center gap-5 sm:w-4/5 xl:w-3/5">
      <h2 className="text-center leading-tight">{Heading}</h2>
      <hr className="w-52" />
      <p className="py-6">{ParaGraph}</p>
    </div>
  );
};

export default SectionHeader;
