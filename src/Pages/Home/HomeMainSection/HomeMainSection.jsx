import React from "react";
import { motion } from "framer-motion";
import UserForm from "../Form/UserForm";
import layers from "./layers.svg";
import MapAnimation from "../Form/MapAnimation";

function HomeMainSection() {
  return (
    <>
      <section className="mainsection flex flex-row justify-between items-stretch gap-6 lg:pr-[4%] lg:pl-0 sm:px-[4%] px-[16px] w-full relative">
        {/* Background Layer */}
        <img
          src={layers}
          alt=""
          className="background absolute -z-3 bottom-[-120px] right-[-220px]"
        />
        
      
        {/* Left Content + Image in a single flex column */}
        <motion.div
          className="headingtext hidden lg:flex flex-col justify-start gap-4 items-center w-[60%]"
          style={{ alignSelf: "stretch" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Section */}
          <div className="leftcontent flex flex-col w-full justify-between items-strech gap-2 z-10 lg:pl-[8%]">
            <p className="heading font-semibold text-[47px] text-primary">
              Worry about &nbsp;
              <span className="font-bold text-secondary">College?</span>
            </p>
            <p className="description italic font-normal text-[14px] text-[#161b2db2]">
              “Our Platform will give you accurate college prediction to your
              rank or percentile”
            </p>
          </div>

          {/* Image Container - Takes remaining space */}
          <MapAnimation></MapAnimation>

        </motion.div>

        {/* userform */}
        <motion.div
          className="userform w-full lg:w-1/2 flex flex-col justify-between items-start h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <UserForm />
        </motion.div>
      </section>
    </>
  );
}

export default HomeMainSection;
