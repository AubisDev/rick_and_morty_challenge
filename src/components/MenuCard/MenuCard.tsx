import React from 'react'
import { motion } from "framer-motion";
import './MenuCard.css';
import { useNavigate } from 'react-router-dom';
import { Sections } from '../Main/HomeMain';

interface MenuCardProps {
  section: Sections;
  isActive: boolean;
  setIsLoading: (isLoading: boolean ) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ section, isActive, setIsLoading }) => {
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
      //! Logic for backgroundColor in Sections Menu 
      className={` group relative hover:z-50 duration-300 sm:first:col-span-2 '
      ${ (color === 'home' && isActive ) ? 'bg-home bg-cover bg-no-repeat  ' 
      : (color === 'character' && isActive ) ? 'bg-character hover:bg-fuchsia-700' 
      : 'bg-episode hover:bg-green-400' } `}
      onClick={ () => handleNavigation(title) }
    >
      {
        isActive && (
          <> 
            <img src={image} alt="imagen" className={`h-full cursor-pointer rounded-t-[100px] border-2 border-[#9bf264] ${ !isActive && 'shadow-menu md:shadow-none'} `}  />
            <div className={`absolute bottom-0 bg-black text-white bg-opacity-90 w-full ${ title === 'Information' ? "h-full " : 'h-1/4 cursor-pointer group-hover:h-2/5  group-hover:duration-300 '} `}>
              <h3 className={` font-bold text-xl lg:text-2xl xl:text-3xl  text-center  ${ title === 'Information' && 'py-8'}`}>{ (isActive && title !== 'Information' ) && title}</h3>
              <div className='flex flex-col items-center justify-center'>
                { title === 'Information' && <h1 className='text-4xl sm:text-6xl font-bold tracking-wider border-b border-gray-500/40 '>Bienvenido</h1> }
                <p className={` ${ title === 'Information' ? "flex py-12 sm:mt-0 sm:items-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl w-3/5" : ' w-4/5 hidden text-xs sm:text-xm md:text-base lg:text-lg  xl:text-xl'}  text-green_slime group-hover:block  group-hover:duration-300 transition text-center  sm:mt-2 mx-auto sm:m-auto `}> {description}</p>
              </div>
             
            </div>
          </>
        )
      }
    </motion.div>
  )
}

export default MenuCard

