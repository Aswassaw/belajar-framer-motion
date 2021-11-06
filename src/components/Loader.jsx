import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],

    transition: {
      // Transition untuk x di atas
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      // Transition untuk y di atas
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate='animationOne'
      ></motion.div>
    </>
  );
};

export default Loader;
