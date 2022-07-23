import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'
import { getSectionImage } from "../../utils/getImages";
import MenuCard from "../MenuCard/MenuCard";

export interface Sections {
  title: string;
  color: string;
  image: string;
  description: string;
}

interface HomeMainProps {
  isActive: boolean;
  setIsLoading: ( isLoading: boolean) => void;
}


const HomeMain: React.FC<HomeMainProps> = ({ isActive, setIsLoading }) => {
  
  const sectionsImages = getSectionImage(); 
  const sections: Array<Sections>= [
    {title:"Information", color:'home', image: sectionsImages[0], description: "In this website you are able to know a little more about your favorites characters on Rick and Morty show, also you have information of the serie episodes. \n Gracias por visitar" }, 
    {title:"Characters", color: "character", image: sectionsImages[1], description: "Here you can find details about of your Rick and Morty favorite characters" }, 
    {title:"Episodes", color: "episode", image: sectionsImages[2], description:"Here you can find information about all the seasons and each episode of the Rick and Morty series."}, 
  ];
  const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <motion.main
            className={` h-auto mb-60 rounded-xl text-3xl xl:mb-0 xl:justify-start xl:items-start xl:absolute xl:bottom-1/4 xl:left-1/2 ${ isActive && 'md:shadow-menu'}`}
            initial={{ 
              opacity:0,
              x:175,
              y:-300
              
            }}
            animate={{
              opacity:1,
              width: isDesktopScreen ? '55vw':'70vw',
              height: '70vh',
              rotate: 0,
              x: isBigScreen ? -250 : isDesktopScreen ? -150 : 0,
              y: 50,
              borderRadius: "10%"
            }}
            transition={{ ease: "easeIn", duration: 1, delay: 1  }}
          >
            <div className={`grid grid-cols-1 h-auto w-full gap-y-4 sm:gap-1 sm:grid-cols-2  ${!isActive ? 'bg-gradient-to-r from-green-500 to bg-green-600' : 'bg-transparent sm:bg-green-600'} `} >
              {sections.map( ( section: Sections) => (
                <MenuCard key={section.title} section={section} isActive={isActive} setIsLoading={setIsLoading} />
                )
              )}
            </div>
          
          </motion.main>
  )
}

export default HomeMain