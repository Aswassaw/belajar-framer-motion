import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: "0px",

    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 90,
    },
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
