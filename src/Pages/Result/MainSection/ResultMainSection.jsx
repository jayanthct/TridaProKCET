import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import CollegeCard from "../CollegeCard/CollegeCard";
import MetaData from "../MetaDeta/MetaDeta";
import RankCard from "../RankCard/RankCard";
import ResultTable from "../ResultTable/ResultTable";

import back from "../MainSection/back.svg";


function ResultMainSection() {
  const location = useLocation();
  const data = location.state?.data; // Retrieve the data passed
  const body = location.state?.body; // Retrieve the data passed

  const navigate = useNavigate();

  const animationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <button
        className="text-primary flex gap-4 px-8 cursor-pointer justify-center items-center py-2 rounded-full h-[52px] font-bold border-2 border-primary md:ml-[4%] ml-[16px] -mb-0 hover:bg-[#161b2d09] hover:scale-[0.9] transition-all ease-in duration-200"
        onClick={() => navigate("/")}
      >
        <img src={back} alt="" className="w-8" /> Retry
      </button>

      <section className="resultmainsection flex flex-row gap-4 justify-center items-stretch md:px-[4%] px-[16px] py-[2%] w-full flex-wrap md:flex-nowrap">
        {/* Rank + MetaData section */}
        <motion.div
          className="rankandmeta flex flex-col gap-4 w-ful md:w-[60%]"
          initial="hidden"
          animate="visible"
          variants={animationLeft} // Slide from Left
        >
          <RankCard rank={data?.predicted_rank} category={body?.category} />
          <MetaData
            marks={body?.marks}
            pmarks={body?.pmarks}
            cmarks={body?.cmarks}
            mmarks={body?.mmarks}
            pwd={body?.pwd}
            category={body?.category}
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full md:w-[40%] h-fit"
          initial="hidden"
          animate="visible"
          variants={animationRight} // Slide from Right
        >
          <CollegeCard />
        </motion.div>
      </section>

      {/* ✅ Fixed the prop name */}
      <ResultTable eligible_colleges={data?.eligible_colleges} />
    </>
  );
}

export default ResultMainSection;
