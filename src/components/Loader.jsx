import React from "react";
import { motion, useCycle } from "framer-motion";

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
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,

    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  setInterval(() => {
    cycleAnimation();
  }, 3000);

  return (
    <>
      <div className='flex'>
        <motion.div
          className='loader'
          variants={loaderVariants}
          animate={animation}
        ></motion.div>
        <motion.div
          className='loader'
          variants={loaderVariants}
          animate={animation}
        ></motion.div>
        <motion.div
          className='loader'
          variants={loaderVariants}
          animate={animation}
        ></motion.div>
      </div>
    </>
  );
};

export default Loader;
