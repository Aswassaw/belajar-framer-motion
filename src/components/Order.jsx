import React, { useEffect } from "react";
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
      delay: 0.2,
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
  exit: {
    x: "-100vw",

    transition: { ease: "easeInOut" },
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

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    // Timeout untuk menampilkan modal
    const setModal = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    // Ketika component dimusnahkan dari dom
    return () => {
      clearTimeout(setModal);
    };
  }, [setShowModal]);

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <AnimatePresence>
        <h2>Thank you for your order :)</h2>
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
