import { motion } from "framer-motion";
import { getSectionImage } from "../../utils/getImages";
import MenuCard from "../MenuCard/MenuCard";

export interface Sections {
  title: string;
  image: string;
  description: string;
}

interface HomeMainProps {
  isActive: boolean;
  setIsLoading: ( isLoading: boolean) => void;
  isLoading: boolean;
}


const HomeMain: React.FC<HomeMainProps> = ({ isActive, setIsLoading, isLoading }) => {
  
  const sectionsImages = getSectionImage(); 
  const sections: Array<Sections>= [
    {title:"Information", image: sectionsImages[0], description: "In this website you are able to know a little more about your favorites characters and the serie episodes. \n Thank you for visiting" }, 
    {title:"Characters",  image: sectionsImages[1], description: "Here you can find details about of your Rick and Morty favorite characters" }, 
    {title:"Episodes",  image: sectionsImages[2], description:"Here you can find information about all the seasons and each episode of the serie."}, 
  ];

  return (
    <motion.main
      className={` h-4/5 w-full mx-auto  md:w-4/5   rounded-xl text-3xl  overflow-x-hidden ${ isActive && 'md:shadow-menu'} ${!isLoading ? 'block' : 'hidden'}`}
    >
      <div className={` w-full grid grid-cols-1 h-auto gap-y-4 sm:gap-1 sm:grid-cols-2   ${!isActive ? 'bg-gradient-to-r from-green-500 to bg-green-600' : 'bg-transparent sm:bg-green-600'} `} >
        {sections.map( ( section: Sections) => (
          <MenuCard key={section.title} section={section} isActive={isActive} setIsLoading={setIsLoading} />
          )
        )}
      </div>
    
    </motion.main>
  )
}

export default HomeMain