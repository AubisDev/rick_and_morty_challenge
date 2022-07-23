import Footer from "../components/Footer/Footer"
import { useState, useEffect } from 'react';
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Navbar from "../components/Navbar/Navbar";
import Pagination from "../components/Pagination/Pagination";
import { motion } from 'framer-motion' ;
import { getCharactersData } from "../utils/getFetchData";
import { CharactersData } from '../types/characters';


export interface CharactersProps  {
  page: number;
  setPage: (page:number) => void;
}


const Characters: React.FC<CharactersProps> = ({page, setPage }) => {

  const [characters, setCharacters] = useState<CharactersData[]>([]);

  useEffect(() => {
    const baseUrl: string = `https://rickandmortyapi.com/api/character${page > 1 && `?page=${page}`}`;
    const data = async() => {
      setCharacters( await getCharactersData(baseUrl) );
      window.localStorage.setItem("actualPage",JSON.stringify(page));
    }
    data();
  }, [page])

    
  return (
    <>
      <Navbar/>
      
      <main className="w-[80vw] h-auto my-5 m-auto border border-[#9bf264] z-50  ">
        <motion.div 
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1, transition:{ duration: 1 } }}
          className="w-[90%] m-auto py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-5 text-white z-50">
          {
            characters.map( (character: CharactersData) => (
              <CharacterCard key={character.id} character={character}/>
            ))
          }
        </motion.div>
      </main>

      <Pagination page={page} setPage={setPage}/>
      <Footer/>
    </>
  )
}


export default Characters