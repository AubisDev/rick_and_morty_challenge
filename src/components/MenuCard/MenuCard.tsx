import React from 'react'
import { motion } from "framer-motion";
import './MenuCard.css';
import { Sections } from '../../pages/Home';
import { useNavigate } from 'react-router-dom';



type Props = {
  section: Sections;
  isActive: boolean;
  setIsLoading: (val:boolean) => void;
}

const MenuCard: React.FC<Props> = ({ section, isActive, setIsLoading }) => {
  const navigate = useNavigate();
  const { color, image, title, description } = section;

  const handleNavigation = (title: string) =>{
    if( title !== 'Information'){
      setIsLoading(true);
      setTimeout( () => {
        setIsLoading(false);
        navigate( title.toLowerCase())
  
      }, 3000)
    }
    
  }

  return (
    <motion.div 
    
      className={` group relative hover:z-50 duration-300 '
      ${ (color === 'home' && isActive ) ? 'bg-home bg-cover bg-no-repeat  ' 
      : (color === 'character' && isActive ) ? 'bg-character hover:bg-fuchsia-700' 
      : (color === 'episode' && isActive ) ? 'bg-episode hover:bg-green-400' 
      : isActive && 'bg-locations hover:bg-yellow-400'} `}
      onClick={ () => handleNavigation(title) }
    >
      {
        isActive && (
          <> 
            <img src={image} alt="imagen" className='h-full cursor-pointer rounded-t-[100px] border-2 border-[#9bf264] shadow-menu md:shadow-none' />
            <div className={`absolute bottom-0 bg-black text-white bg-opacity-90 w-full ${ title === 'Information' ? "h-full " : 'h-1/4 cursor-pointer group-hover:h-1/2  group-hover:duration-300 '} `}>
              <h3 className={` font-bold text-xl lg:text-2xl xl:text-3xl  text-center  ${ title === 'Information' && 'py-8'}`}>{ (isActive && title !== 'Information' ) && title}</h3>
              <p className={`w-4/5 ${ title === 'Information' ? "flex -mt-10 sm:mt-0 sm:items-center " : 'hidden'} text-xs sm:text-xm md:text-base lg:text-lg  xl:text-xl text-green_slime group-hover:block  group-hover:duration-300 transition text-center  sm:mt-2 mx-auto sm:m-auto `}> {description}</p>
            </div>
          </>
        )
      }
     
      
      
    </motion.div>
  )
}

export default MenuCard

