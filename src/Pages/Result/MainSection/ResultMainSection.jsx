import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import CollegeCard from "../CollegeCard/CollegeCard";
import MetaData from "../MetaDeta/MetaDeta";
import RankCard from "../RankCard/RankCard";
import ResultTable from "../ResultTable/ResultTable";

import back from "../MainSection/back.svg";

const data = {
  chem: 75,
  eligible_colleges: [
    {
      Branch: "CS",
      CETCode: "E124",
      College: "Rajiv Gandhi Institute of Technology",
      Cutoff: 125902,
    },
    {
      Branch: "CS",
      CETCode: "E013",
      College: "Ghousia Engineering College",
      Cutoff: 128217,
    },
    {
      Branch: "CS",
      CETCode: "E033",
      College: "Sri Taralabalu Jagadguru Institute of Technology",
      Cutoff: 129578,
    },
    {
      Branch: "CS",
      CETCode: "E165",
      College: "Yenepoya Institute of Technology",
      Cutoff: 132583,
    },
    {
      Branch: "CS",
      CETCode: "E273",
      College: "Government Engineering College",
      Cutoff: 133680,
    },
    {
      Branch: "CS",
      CETCode: "E029",
      College: "Maratha Mandal Engineering College",
      Cutoff: 133883,
    },
    {
      Branch: "CS",
      CETCode: "E121",
      College: "Vivekananada College of Engineering Technology",
      Cutoff: 135835,
    },
    {
      Branch: "CS",
      CETCode: "E168",
      College: "Amrutha Institute of Engineering and Mangement",
      Cutoff: 135971,
    },
    {
      Branch: "CS",
      CETCode: "E093",
      College: "Basavakalyana Engineering College",
      Cutoff: 136407,
    },
    {
      Branch: "CS",
      CETCode: "E193",
      College: "Srinivas University",
      Cutoff: 137541,
    },
    {
      Branch: "CS",
      CETCode: "E088",
      College: "Bangalore College of Engineering and Technology",
      Cutoff: 138994,
    },
    {
      Branch: "CS",
      CETCode: "E198",
      College: "Sharnbasva University (Formerly Godutai College for Women)",
      Cutoff: 139220,
    },
    {
      Branch: "CS",
      CETCode: "E119",
      College: "KCT Engineering College",
      Cutoff: 140486,
    },
    {
      Branch: "CS",
      CETCode: "E081",
      College: "HMS Institute of Technology",
      Cutoff: 142498,
    },
    {
      Branch: "CS",
      CETCode: "E204",
      College: "Bangalore Technological Institute",
      Cutoff: 142755,
    },
    {
      Branch: "CS",
      CETCode: "E199",
      College: "AGM Rural Engineering College",
      Cutoff: 143177,
    },
    {
      Branch: "CS",
      CETCode: "E055",
      College: "PA College of Engineering",
      Cutoff: 143312,
    },
    {
      Branch: "CS",
      CETCode: "E054",
      College: "KVG College of Engineering",
      Cutoff: 144881,
    },
    {
      Branch: "CS",
      CETCode: "E213",
      College: "Lingarajappa Engineering College",
      Cutoff: 145474,
    },
    {
      Branch: "CS",
      CETCode: "E159",
      College: "Karavali Institute of Technology",
      Cutoff: 146529,
    },
    {
      Branch: "CS",
      CETCode: "E089",
      College: "BTL Institute of Technology and Management",
      Cutoff: 147019,
    },
    {
      Branch: "CS",
      CETCode: "E185",
      College: "Angadi Institute of Technology and Management",
      Cutoff: 148139,
    },
    {
      Branch: "CS",
      CETCode: "E194",
      College: "Government Engineering College",
      Cutoff: 148259,
    },
    {
      Branch: "CS",
      CETCode: "E035",
      College: "Anjuman Engineering College",
      Cutoff: 148357,
    },
    {
      Branch: "CS",
      CETCode: "E116",
      College: "RL Jalappa Institute of Technology",
      Cutoff: 148765,
    },
    {
      Branch: "CS",
      CETCode: "E184",
      College: "C Byre Gowda Institute of Technology",
      Cutoff: 148810,
    },
    {
      Branch: "CS",
      CETCode: "E227",
      College: "Cauvery Institute of Technology",
      Cutoff: 148825,
    },
    {
      Branch: "CS",
      CETCode: "E090",
      College: "Sri Revana Siddeswara Institute of Technology",
      Cutoff: 148839,
    },
    {
      Branch: "CS",
      CETCode: "E130",
      College: "Shridevi Institute of Engineering and Technology",
      Cutoff: 148844,
    },
    {
      Branch: "CS",
      CETCode: "E127",
      College: "MS Engineering College",
      Cutoff: 149076,
    },
    {
      Branch: "CS",
      CETCode: "E136",
      College: "Moodalakatte Institute of Technology",
      Cutoff: 149549,
    },
    {
      Branch: "CS",
      CETCode: "E139",
      College: "Impact College of Engineering and Applied Sciences",
      Cutoff: 149752,
    },
    {
      Branch: "CS",
      CETCode: "E174",
      College:
        "Dr. Sri. Sri. Sri. Shivakumara Mahaswamyji College of Engineering",
      Cutoff: 150032,
    },
    {
      Branch: "CS",
      CETCode: "E109",
      College: "City Engineering College",
      Cutoff: 150407,
    },
    {
      Branch: "CS",
      CETCode: "E132",
      College: "Secab Institute of Engineering and Technology",
      Cutoff: 150942,
    },
    {
      Branch: "CS",
      CETCode: "E147",
      College: "T.John Engineering College",
      Cutoff: 150967,
    },
    {
      Branch: "CS",
      CETCode: "E176",
      College: "Navodaya Institute of Technology",
      Cutoff: 151071,
    },
    {
      Branch: "CS",
      CETCode: "E180",
      College: "Bearys Institute of Technology",
      Cutoff: 151166,
    },
    {
      Branch: "CS",
      CETCode: "E207",
      College: "VSMs Somashekar R Kothiwale Institute of Technology",
      Cutoff: 151203,
    },
    {
      Branch: "CS",
      CETCode: "E191",
      College: "Akshaya Institute of Technology",
      Cutoff: 151250,
    },
    {
      Branch: "CS",
      CETCode: "E144",
      College: "Srinivas Institute of Technology",
      Cutoff: 151402,
    },
    {
      Branch: "CS",
      CETCode: "E044",
      College: "Bheemanna Khandre Institute of Technology",
      Cutoff: 151547,
    },
    {
      Branch: "CS",
      CETCode: "E042",
      College: "Khaja Banda Nawaz University",
      Cutoff: 151650,
    },
    {
      Branch: "CS",
      CETCode: "E210",
      College: "G Madegowda Institute of Technology",
      Cutoff: 151708,
    },
    {
      Branch: "CS",
      CETCode: "E094",
      College: "Coorg Institute of Technology",
      Cutoff: 151896,
    },
    {
      Branch: "CS",
      CETCode: "E112",
      College: "Sri Krishna Institute of Technology",
      Cutoff: 151906,
    },
    {
      Branch: "CS",
      CETCode: "E222",
      College: "Cambridge Institutute of Technology",
      Cutoff: 151983,
    },
    {
      Branch: "CS",
      CETCode: "E172",
      College: "R.R.Institute of Technology",
      Cutoff: 151998,
    },
    {
      Branch: "CS",
      CETCode: "E032",
      College: "RTE Socity`s Rural Engineering College",
      Cutoff: 152132,
    },
    {
      Branch: "CS",
      CETCode: "E188",
      College: "Vijaya Vittala Institute of Technology",
      Cutoff: 152156,
    },
    {
      Branch: "CS",
      CETCode: "E238",
      College: "Mysuru Royal Institute of Technology",
      Cutoff: 152192,
    },
    {
      Branch: "CS",
      CETCode: "E221",
      College: "Biluru Gurubasava Mahaswamiji Institute of Technology",
      Cutoff: 152443,
    },
    {
      Branch: "CS",
      CETCode: "E100",
      College: "KNS Institute of Technology",
      Cutoff: 152569,
    },
    {
      Branch: "CS",
      CETCode: "E164",
      College: "Government Engineering College",
      Cutoff: 152626,
    },
    {
      Branch: "CS",
      CETCode: "E252",
      College: "Mysore College of Engineering and Management",
      Cutoff: 152785,
    },
    {
      Branch: "CS",
      CETCode: "E272",
      College: "Government Engineering College",
      Cutoff: 152916,
    },
    {
      Branch: "CS",
      CETCode: "E113",
      College: "Sambhram Institute of Technology",
      Cutoff: 153193,
    },
    {
      Branch: "CS",
      CETCode: "E153",
      College: "S E A College of Engineering and Technology",
      Cutoff: 153213,
    },
    {
      Branch: "CS",
      CETCode: "E181",
      College: "Sri Basaveswara Institute of Technology",
      Cutoff: 153286,
    },
    {
      Branch: "CS",
      CETCode: "E146",
      College: "Shreedevi Institute of Technology",
      Cutoff: 153315,
    },
  ],
  kcet: 55,
  math: 50,
  phy: 80,
  predicted_rank: 124976,
};

function ResultMainSection() {
  const location = useLocation();
  // const data = location.state?.data; // Retrieve the data passed
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
