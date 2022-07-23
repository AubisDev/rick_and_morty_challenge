import React from 'react'
import { motion } from 'framer-motion';
import morty1 from './../assets/images/morty-before.webp';
import morty2 from './../assets/images/morty-after.webp';

type Props = {
  isActive: boolean
}

const Morty: React.FC<Props> = ({ isActive }) => {
  const mortyImage: string = !isActive ? morty1 : morty2;  
  return (
    <motion.img
      className="absolute bottom-0 drop-shadow-morty left-0 -rotate-6 w-[20vw] xl:w-[25vw] hidden lg:block  "
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