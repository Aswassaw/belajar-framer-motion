import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      // Mengulangi semua animasi sebanyak yang ditentukan
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "Mushrooms",
    "Peppers",
    "Onions",
    "Olives",
    "Extra Cheese",
    "Tomatoes",
  ];

  return (
    <motion.div
      className='toppings container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
