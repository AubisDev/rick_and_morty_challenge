import { useEffect, useState } from "react";
import Morty from "../components/Morty";
import Loader from "../components/Loader/Loader";
import Portal from "../components/Loader/Portal";
import Footer from "../components/Footer/Footer";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeMain from "../components/Main/HomeMain";


const Home = () => {
  
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

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

          {/* //! Header con Bienvenido y Logo */} 
          <HomeHeader/>

          {/* //! Loader con Portal */} 
          <Portal isActive={isActive} />
          
          {/* //! main container  */} 
          <HomeMain  isActive={ isActive } setIsLoading={setIsLoading}/>
          
          {/* //! Logic para la Animacion de  Morty   */} 
          { 
            isLoading ? <Loader/> :( !isActive ?  <Morty isActive={isActive}/> : <Morty isActive={isActive}/> )
          }
        </div>
      </div>

      <Footer/>
    </>
    )
}

export default Home