import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard/MenuCard";
import logo from './../assets/images/logo.png';
import { motion } from "framer-motion";
import Morty from "../components/Morty";
import { getSectionImage } from "../utils/getImages";
import Loader from "../components/Loader/Loader";
import { useMediaQuery } from 'react-responsive'
import portal from './../assets/images/portal.png';

export interface Sections {
  title: string;
  color: string;
  image: string;
  description: string;
}

const Home = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  const sectionsImages = getSectionImage(); 
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const sections: Array<Sections>= [
    {title:"Information", color:'home', image: sectionsImages[0], description: "En esta pagina podras conocer sobre los personajes, mundos a donde viajan e incluso los episodios de la serie. \n Gracias por visitar, fue divertido crear esta pagina" }, 
    {title:"Characters", color: "character", image: sectionsImages[1], description: "Conoce con detalles a tus personajes favorito de la serie y muchos mas" }, 
    {title:"Episodes", color: "episode", image: sectionsImages[2], description:" Aqui podra conocer todos los episodios de la serie y sus fechas de lanzamiento"}, 
    {title:"Locations", color: "location", image: sectionsImages[3],description: "Conoce todos los lugares por los que viajaron Rick y Morty durante sus aventuras"}, 
  ]

  useEffect(() => {
    //Timer for Morty Home Animation
    let timer = setTimeout( () => {
      setIsActive(true);
    }, 1750)
    return () => {
      clearTimeout( timer )
    }
  }, [])

  return (
    <>
      <div className="w-screen h-[90vh] xl:flex xl:flex-col text-white at ">
        <div className="w-4/5 h-full bg-white-30 m-auto flex justify-center items-center xl:justify-start xl:items-start flex-col xl:relative">

          <header className={` w-96 flex flex-col  mt-[25rem] md:mt-[18rem] lg:mt-[25rem] xl:mt-20 text-4xl ${ isBigScreen && 'text-5xl'}`}>
            <h1 className="font-bold text-center drop-shadow-morty">Bienvendos a mi</h1>
            <motion.img src={logo} alt="logo" className="-mt-14 -mb-14"  />
            <h1 className="font-bold text-center">Challenge</h1>
          </header>
          
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
            transition={{ ease: "easeOut", duration: 1, delay: 1  }}
          />
          
          <motion.div
            className={` h-auto mb-60 text-3xl md:shadow-menu rounded-xl xl:mb-0 xl:justify-start xl:items-start xl:absolute xl:bottom-1/4 xl:left-1/2 `}
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
          
          </motion.div>
          {
            isLoading ? <Loader/> :( !isActive ?  <Morty isActive={isActive}/> : <Morty isActive={isActive}/> )
          }
        </div>
      </div>

      <footer className={` bg-black bg-opacity-40 w-screen h-[10vh] flex items-center justify-center text-white text-xl lg:text-2xl xl:text-3xl font-bold  mt-[31rem]  xs:mt-[42rem] sm:mt-[6rem] md:mt-28  lg:mt-52 xl:mt-0 `}>
        Designed by <span className="text-green_slime pl-2">Aubis Sanchez</span>
      </footer>
    </>
    )
}

export default Home