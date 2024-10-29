import React from 'react'
import {motion} from "framer-motion"

const homeVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};


const Home = () => {
  return (
    <motion.div
    variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{padding: 20}}
    >
      <h2>Home</h2>
    </motion.div>
  )
}

export {Home}