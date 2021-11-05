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
      type: "spring",
      stiffness: 90,
      damping: 8,
      // Semakin besar mass maka akan semakin lambat, dan sebaliknya
      mass: 0.5,
      // Animasi children tidak akan dijalankan sebelum semua animasi di elemen berjalan
      when: "beforeChildren",
      // Mengurutkan kemunculan children sesuai waktu yang ditentukan
      staggerChildren: .5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
