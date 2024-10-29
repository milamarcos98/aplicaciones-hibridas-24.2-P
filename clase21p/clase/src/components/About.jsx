import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"

const aboutVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

const About = () => {
  const navigate = useNavigate();

  const MoveFunc = () => {
    console.log("mi logica y luego navigate")
    navigate('/contact');
    // quiero que me lleve a contact
  }

  return (
    <motion.div
    variants={aboutVariants}
    initial="initial"
    animate="animate"
    exit="exit"
      style={{padding: 20}}
    >
     <button onClick={MoveFunc}>Move</button>
      <p>Ir a contact: <Link to="/contact">here!</Link></p>
    </motion.div>
  )
}

export {About}