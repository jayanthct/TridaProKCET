import React, { useState } from "react";

function QuickChangeButtons({ formData, handleChange }) {
  return (
    <>
      <div className="quickchangebuttons flex w-full justify-around items-center gap-2 mt-2 bg-[#901d773b] lg:p-2 p-3 rounded-full mb-4">
        <button
          className={`flex gap-4 px-8 cursor-pointer justify-center items-center w-full py-2 rounded-full text-[14px] lg:text-[16px] h-[52px] font-bold bg-secondary text-white  hover:scale-[0.9] transition-all ease-in duration-200`}
        >
          Predict Your Rank By Marks
        </button>
      </div>

      <label className="block text-sm font-bold text-primary md:text-[16px] text-[14px]">
        KCET Marks <span className="font-normal text-[14px]">(out of 180)</span>{" "}
        <span className="text-[#FF4E59]">*</span>
      </label>
      <input
        required
        type="number"
        name="marks"
        value={formData.marks}
        onChange={handleChange}
        min={0}
        max={180}
        placeholder="Enter Marks"
        className="w-full h-[52px] -mt-2 p-2 pl-4 border-1 border-[#161b2d29] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#901D7862] focus:outline-2 focus:outline-[#901D78a0] appearance-none"
        style={{
          boxShadow: "0px 1px 12px 0px rgba(144, 29, 120, 0.08)",
        }}
      />

      <div className="line w-full h-[2px] border-[#161b2d1e] rounded-full border-[0.2px] mt-4 mb-2"></div>

      <p className="class -mb-2">
        <span className="text-secondary font-bold">
          12<sup>th</sup>
        </span>{" "}
        &nbsp;State Board
      </p>
      <div className="marks12th flex w-full justify-between items-center gap-4">
        {["Phy", "Chem", "Math"].map((subject) => (
          <div key={subject} className="input w-full flex flex-col gap-4">
            <label className="block text-sm font-bold text-primary md:text-[16px] text-[14px]">
              {subject}{" "}
              <span className="font-normal text-[14px]">(out of 100)</span>{" "}
              <span className="text-[#FF4E59]">*</span>
            </label>
            <input
              required
              type="number"
              name={`${subject.toLowerCase()}marks`}
              value={formData[`${subject.toLowerCase()}marks`] || ""}
              onChange={handleChange}
              min={0}
              max={100}
              placeholder="Enter Marks"
              className="w-full h-[52px] -mt-2 p-2 pl-4 border-1 border-[#161b2d29] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#901D7862] focus:outline-2 focus:outline-[#901D78a0] appearance-none"
              style={{
                boxShadow: "0px 1px 12px 0px rgba(144, 29, 120, 0.08)",
              }}
            />
          </div>
        ))}
      </div>
      <div className="line w-full h-[2px] border-[#161b2d1e] rounded-full border-[0.2px] mt-4 mb-4"></div>
    </>
  );
}

export default QuickChangeButtons;
