import { motion } from "framer-motion";
import logo from "./Assets/SmallLogo.svg";
import {React,useEffect,useState} from "react";

const Loader = () => {
  useEffect(() => {
    console.log("Loader animation mounted");
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white z-50 ">
      <div className="relative w-32 h-32 flex justify-center items-center">
        {/* Circular Spinner */}
        <motion.div
          className="absolute w-full h-full border-[6px] border-transparent border-t-secondary border-b-secondary rounded-full will-change-transform"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        {/* Logo */}
        <img src={logo} alt="Logo" className="absolute w-12 h-12" />
      </div>
    </div>
  );
};

export default Loader;
