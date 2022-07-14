import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard/MenuCard";
import logo from './../assets/images/logo.png';
import { motion } from "framer-motion";
import Morty from "../components/Morty";
import { getSectionImage } from "../utils/getImages";
import Loader from "../components/Loader/Loader";


export interface Sections {
  title: string;
  color: string;
  image: string;
  description: string;
}

const Home = () => {

  const sectionsImages = getSectionImage(); 
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const sections: Array<Sections>= [
    {title:"Welcome", color:'home', image: sectionsImages[0], description: "En esta pagina podras conocer sobre los personajes, mundos a donde viajan e incluso los episodios de la serie. \n Gracias por visitar, fue divertido crear esta pagina" }, 
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
      <div className="w-screen h-[90vh] text-white at ">
        <div className="w-4/5 h-full bg-white-30 m-auto flex relative">

          <aside className=" w-96 flex flex-col mt-20">
            <h1 className="text-4xl font-bold text-center drop-shadow-morty">Bienvendos a mi</h1>
            <motion.img src={logo} alt="logo" className="-mt-14 -mb-14"  />
            <h1 className="text-4xl  font-bold text-center">Challenge</h1>
          </aside>

          <motion.div
            className={` ${!isActive && 'bg-green-600'} absolute bottom-1/4 left-1/2 text-black text-3xl shadow-menu`}
            initial={{ 
              width: 50,
              height: '60vh',  
              opacity:0.5,
              rotate: 48,
            }}
            animate={{
              opacity:1,
              width: '55vw',
              height: '70vh',
              rotate: 0,
              x: -150,
              y: 75,
              borderRadius: "10%"
            }}

            transition={{ ease: "easeIn", duration: 1, delay: 1  }}

          >
            <div className="grid grid-cols-2 gap-1 w-full h-full " >
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

      <footer className="w-screen h-[10vh] flex items-center justify-center text-white text-3xl font-bold">
        Designed by <span className="text-[#9bf264] pl-2">Aubis Sanchez</span>
      </footer>
    </>
    )
}

export default Home