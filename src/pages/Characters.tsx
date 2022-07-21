import Footer from "../components/Footer/Footer"
import { useState, useEffect } from 'react';
import CharacterCard from "../components/CharacterCard/CharacterCard";
import axios, { AxiosResponse } from "axios";
import Navbar from "../components/Navbar/Navbar";
import Pagination from "../components/Pagination/Pagination";
import { motion } from 'framer-motion' ;
import { CharactersProps, CharactersData } from '../types';


const Characters: React.FC<CharactersProps> = ({page, setPage }) => {

  const [characters, setCharacters] = useState<CharactersData[]>([]);

  useEffect(() => {
    let baseUrl: string = `https://rickandmortyapi.com/api/character${page <= 1 ? '' : `?page=${page}`}`;
    axios.get(baseUrl).then( (response: AxiosResponse ) => {
      const charactersData = response.data.results;
      setCharacters( charactersData );
    })
    window.localStorage.setItem("actualPage",JSON.stringify(page));
    
  }, [page])

    
  return (
    <>
      <Navbar/>
      
      <main className="w-[80vw] h-auto my-5 m-auto border border-[#9bf264] z-50  ">
        <input
          name="search"
          placeholder="Busca tu personaje favorito"
          className="bg-transparent md:w-2/5 flex justify-center items-center m-auto my-4 border-2 border-green-700 outline-0 focus:border-[#9bf264] rounded-lg p-2 text-green_slime "
        />
        <motion.div 
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
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