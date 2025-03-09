import React from "react";

const StateCard = ({ exam, state, color, logo }) => {
  return (
    <article
      className="group Statecard flex flex-col justify-center items-center gap-4 py-[16px] px-[64px] w-fit rounded-[16px] border-[2px] border-[#161b2d4a] hover:scale-[0.9] transition-all ease-in duration-200 cursor-pointer scale-[0.7] md:scale-[1]"
      style={{
        boxShadow:
          "-14px 76px 22px 0px rgba(144, 29, 120, 0.00), -9px 49px 20px 0px rgba(144, 29, 120, 0.01), -5px 27px 17px 0px rgba(144, 29, 120, 0.02), -2px 12px 12px 0px rgba(144, 29, 120, 0.03), -1px 3px 7px 0px rgba(144, 29, 120, 0.04)",
      }}
    >
      <div className="content flex flex-col justify-center items-center gap-2">
        <div className="statelogo w-16 h-16 rounded-full">
          <img src={logo} alt="" className="state w-full h-full object-cover" />
        </div>
        <div className="text flex flex-col justify-center items-center">
          <p className="title font-bold" style={{ color: color }}>
            {exam}
          </p>
          <p className="state text-primary">{state}</p>
        </div>
      </div>

      <button
        className={`text-[white] text-[10px] md:text-[14px] flex gap-4 px-8 cursor-pointer justify-center items-center rounded-full h-[42px] font-bold w-full transition-all ease-in duration-200 
    group-hover:text-white group-hover:border-white`}
        style={{ backgroundColor: color }}
      >
        Predict
      </button>
    </article>
  );
};

export default StateCard;
