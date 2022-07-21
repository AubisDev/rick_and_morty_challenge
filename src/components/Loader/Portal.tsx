import React from 'react'
import portal from './../../assets/images/portal.png';
import { motion } from "framer-motion";

type Props = {
  isActive: boolean;
}

const Portal: React.FC<Props> = ({ isActive }) => {
  return (
    <motion.img   
      src={portal} 
      alt="portal"
      className={`xl:justify-start ${ !isActive && 'mt-20'} xl:mt-0 xl:items-start xl:absolute xl:top-[4rem] xl:left-1/2 motion-safe:animate-spin`}  
      initial={{
        width: '25vw',
        height: '45vh',
        opacity: 1
      }}
      animate={{
        opacity: 0,
        width: 0,
        height: 0,
        
      }}
      transition={{ ease: "easeOut", duration: 1.750, delay: 1  }}
    />
  )
}

export default Portal