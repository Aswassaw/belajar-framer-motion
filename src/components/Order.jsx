import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      staggerChildren: 0.5,
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
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2
            exit={{
              y: "-100vh",
            }}
            transition={{duration: 2}}
          >
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
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
