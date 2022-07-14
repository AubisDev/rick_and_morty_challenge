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
    if( title !== 'Welcome'){
      setIsLoading(true);
      setTimeout( () => {
        setIsLoading(false);
        navigate( title.toLowerCase())
  
      }, 3000)
    }
    
  }

  return (
    <motion.div 
    
      className={` group relative hover:z-50 '
      ${ (color === 'home' && isActive ) ? 'bg-home bg-cover bg-no-repeat  ' 
      : (color === 'character' && isActive ) ? 'bg-character' 
      : (color === 'episode' && isActive ) ? 'bg-episode' 
      : isActive && 'bg-locations'} `}
      onClick={ () => handleNavigation(title) }
    >
      {
        isActive && (
          <div > 
            <img src={image} alt="imagen" className='h-full cursor-pointer rounded-t-[100px] ' />
            <div className={`absolute bottom-0 bg-black text-white bg-opacity-90 w-full ${ title === 'Welcome' ? "h-full " : 'h-1/4 cursor-pointer group-hover:h-2/5  group-hover:duration-300 '} `}>
              <h3 className={` font-bold text-3xl xl:text-4xl  text-center  ${ title === 'Welcome' && 'py-8'}`}>{ isActive && title}</h3>
              <p className={`w-4/5 ${ title === 'Welcome' ? "flex items-center " : 'hidden'} text-lg  xl:text-xl text-[#9bf264] group-hover:block  group-hover:duration-300 transition text-center m-auto`}> {description}</p>
            </div>
          </div>
        )
      }
     
      
      
    </motion.div>
  )
}

export default MenuCard

