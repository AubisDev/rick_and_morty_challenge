import React from 'react'
import { motion } from "framer-motion";
import Run_Morty from './../../assets/images/morty-running.gif';

const Loader = () => {
  return (
    <div className="absolute bottom-0 w-[15vw] ">
      <h1 className="text-white font-2xl text-right">Loading...</h1>
      <motion.img 
        className={` translate duration-500 -rotate-12 drop-shadow-morty `}
        initial={{ opacity: 0.25, y: -50 }}
        animate={{ opacity: 1, x: [0,200] }}
        transition = {{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        src={ Run_Morty } 
        alt="img"
        
      />
  </div>
  )
}

export default Loader