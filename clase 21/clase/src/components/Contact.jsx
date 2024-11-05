import React, { useState } from 'react'
import {motion} from "framer-motion"

const contactVariants = {
  initial: { y: "100vh", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100vh", opacity: 0 },
};

const Contact = () => {
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <motion.div
    variants={contactVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{padding: 20}}
    >
      <h2>Contact</h2>
      
      <motion.button
        onClick={() => setIsOpen(!IsOpen)}
        whileHover={{scale: 1.1}}
      >
        {IsOpen ? "Cerrar" : "Abrir"}
        </motion.button>
      <motion.div
        initial={{height: 0, opacity: 0}}
        animate={{height: IsOpen ? 200 : 0, opacity: IsOpen ? 1 : 0}}
        transition={{duration: 0.5}}
        style={{
          overflow: 'hidden',
          backgroundColor: 'lightblue',
          marginTop: 20,
          borderRadius: 10
        }}
      >
        <p>Contenido visible cuando se abre</p>
      </motion.div>

    </motion.div>
  )
}

export  {Contact}