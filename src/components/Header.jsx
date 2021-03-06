import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    rotate: -360,
  },
  visible: {
    rotate: 0,

    transition: {
      duration: 1,
    },
  },
  hover: {
    rotate: 360,

    transition: {
      yoyo: Infinity,
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <motion.svg
          className='pizza-svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          variants={svgVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          drag
          dragConstraints={{left: 0, top: 0, right: 100, bottom: 100}}
          dragElastic={0.7}
        >
          <motion.path
            variants={pathVariants}
            fill='none'
            d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
          />
          <motion.path
            variants={pathVariants}
            fill='none'
            d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
          />
        </motion.svg>
      </div>
      <motion.div
        className='title'
        initial={{
          y: "-250px",
        }}
        animate={{ y: "-10px" }}
        transition={{
          // delay: 0.3,
          // type: "tween",
          type: "spring",
          stiffness: 45,
        }}
      >
        <motion.h1 drag>Pizza Joint</motion.h1>
      </motion.div>
    </header>
  );
};

export default Header;
