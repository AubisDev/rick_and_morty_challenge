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

interface Props {
  isActive: boolean;
  setIsLoading: (val: boolean) => void;
}

const HomeMain: React.FC<Props> = ({ isActive, setIsLoading }) => {
  const sectionsImages = getSectionImage(); 
  const sections: Array<Sections>= [
    {title:"Information", color:'home', image: sectionsImages[0], description: "En esta pagina podras conocer sobre los personajes, mundos a donde viajan e incluso los episodios de la serie. \n Gracias por visitar, fue divertido crear esta pagina" }, 
    {title:"Characters", color: "character", image: sectionsImages[1], description: "Conoce con detalles a tus personajes favorito de la serie y muchos mas" }, 
    {title:"Episodes", color: "episode", image: sectionsImages[2], description:" Aqui podra conocer todos los episodios de la serie y sus fechas de lanzamiento"}, 
    {title:"Locations", color: "location", image: sectionsImages[3],description: "Conoce todos los lugares por los que viajaron Rick y Morty durante sus aventuras"}, 
  ];
  const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <motion.main
            className={` h-auto mb-60 text-3xl ${ isActive && 'md:shadow-menu'} rounded-xl xl:mb-0 xl:justify-start xl:items-start xl:absolute xl:bottom-1/4 xl:left-1/2 `}
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
              y: 75,
              borderRadius: "10%"
            }}

            transition={{ ease: "easeIn", duration: 1, delay: 1  }}

          >
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-1 w-full h-auto ${!isActive ? 'bg-gradient-to-r from-green-500 to bg-green-600' : 'bg-transparent sm:bg-green-600'} `} >
              {sections.map( ( section: Sections) => (
                <MenuCard key={section.title} section={section} isActive={isActive} setIsLoading={setIsLoading} />
                )
              )}
            </div>
          
          </motion.main>
  )
}

export default HomeMain