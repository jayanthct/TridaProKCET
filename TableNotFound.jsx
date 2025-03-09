import React from "react";
import layers from "./src/Pages/Home/HomeMainSection/layers.svg";





function TableNotFound() {
  return (
    <>
      <section className="pagenotfound relative  flex flex-col gap-1 h-fit justify-center items-center px-[16px] py-0 md:py-[2%] md:px-[10%] w-full">
      <img
        src={layers}
        alt=""
        className="background absolute -z-3 bottom-[-120px] right-[-220px] opacity-15"
      />
      <img
        src={layers}
        alt=""
        className="background absolute -z-3 top-[-260px] left-[-220px] scale-[-1] opacity-15"
      />
        <div className="text flex flex-col justify-center items-center -mt-10">
          <span>
            <p className="heading text-[156px] lg:text-[264px] text-primary text-center font-extrabold">
              {":)"}
            </p>
          </span>
          <p className="desc text-[27px] md:text-[36px] font-semibold text-secondary text-center -mt-10">
            Sorry!
          </p>
          <p className="desc text-primary text-center text-[21px] md:text-[27px] font-normal">
          We Don't find colleges for you
          </p>
        </div>
      </section>
    </>
  );
}

export default TableNotFound;
