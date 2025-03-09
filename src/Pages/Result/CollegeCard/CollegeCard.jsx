import React from "react";
import mocktest from "./Assets/mocktest.png";

function CollegeCard() {
  return (
    <>
      <section
        className="collegecard bg-white flex flex-col justify-center items-center border-[2px] border-[#161b2d4a] rounded-[12px] overflow-hidden w-full h-fit" // ✅ Set a fixed height
        style={{
          boxShadow:
            "-17px 89px 25px 0px rgba(255, 78, 89, 0.00), -11px 57px 23px 0px rgba(255, 78, 89, 0.01), -6px 32px 20px 0px rgba(255, 78, 89, 0.02), -3px 14px 15px 0px rgba(255, 78, 89, 0.03), -1px 4px 8px 0px rgba(255, 78, 89, 0.04)",
        }}
      >
        <img
          src={mocktest}
          alt="College"
          className="scale-[1.5] object-fill" // ✅ Ensure it fills the container
        />
      </section>
    </>
  );
}

export default CollegeCard;
