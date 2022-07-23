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
    if( !isLoading ){
      let timer = setTimeout( () => {
        setIsActive(true);
        
      }, 2000)
      return () => {
        clearTimeout( timer )
      }
    }
   
  }, [isLoading])

  return (
    <>
      <div className="w-[90%] h-[90vh] mt-10 xl:mt-0 flex flex-col xl:flex-row m-auto items-center xl:items-start text-white justify-center xl:justify-start  ">
        <div className=" w-4/5 xl:w-[30%] h-full flex flex-col xl:justify-between items-center xl:items-start">
          <HomeHeader/>
          { 
            isLoading ? <Loader isLoading={isLoading}/> 
            : ( !isActive ?  <Morty isActive={isActive} isLoading={isLoading}/> 
                          : <Morty isActive={isActive} isLoading={isLoading}/> 
              )
          } 
        </div>
        <div className="w-4/5 sm:w-[90%]  xl:w-[70%] h-auto flex items-center mt-6 xl:mt-6  overflow-x-hidden">
          { !isActive && <Portal isActive={isActive} />}
          { isActive && <HomeMain  isActive={ isActive } setIsLoading={setIsLoading} isLoading={isLoading}/>}
        </div>

      </div>

      <Footer/>
    </>
    )
}

export default Home