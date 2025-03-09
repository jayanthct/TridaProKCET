import React from "react";
import layers from "./src/Pages/Home/HomeMainSection/layers.svg";
import { motion } from "framer-motion";

function PageNotFound404() {
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          <motion.span
            initial="hidden"
            animate="visible"
            variants={scaleUp} // Scale animation for the heading
          >
            <p className="heading text-[156px] lg:text-[264px] text-primary font-extrabold">
              404
            </p>
          </motion.span>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={scaleUp} // Scale animation for the subheading
            transition={{ delay: 0.2 }} // Slight delay for staggered effect
            className="desc text-[27px] md:text-[36px] font-semibold text-secondary -mt-10"
          >
            Page Not Found!
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={scaleUp} // Scale animation for the description
            transition={{ delay: 0.4 }} // More delay for staggered effect
            className="desc text-primary text-[21px] md:text-[27px] font-normal"
          >
            Try Again Later
          </motion.p>
        </div>
      </section>
    </>
  );
}

export default PageNotFound404;
