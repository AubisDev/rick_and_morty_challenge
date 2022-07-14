import React from 'react'
import { motion } from 'framer-motion';
import morty1 from './../assets/images/morty-before.png';
import morty2 from './../assets/images/morty-after.png';

type Props = {
  isActive: boolean
}

const Morty: React.FC<Props> = ({ isActive }) => {
  const mortyImage: string = !isActive ? morty1 : morty2;  
  return (
    <motion.img
      className="absolute bottom-0 left-0 w-[25vw] -rotate-12 drop-shadow-morty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5  }}
      src={ mortyImage } 
      alt="img" 
  />
  )
}

export default Morty