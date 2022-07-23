import { motion } from "framer-motion";
import Run_Morty from './../../assets/images/morty-running.gif';

type LoaderProp ={
  isLoading: boolean;
}

const Loader: React.FC<LoaderProp> = ({isLoading}) => {
  return (
    <div className={`absolute bottom-0 w-[15vw] ${!isLoading ? 'block' : 'hidden'}`}>
      <h1 className="font-2xl text-white text-right">Loading...</h1>
      <motion.img 
        className='drop-shadow-morty duration-500 -rotate-12 translate'
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