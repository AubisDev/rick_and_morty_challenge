import Footer from "../components/Footer/Footer"
import { useState, useEffect } from 'react';
import CharacterCard from "../components/CharacterCard/CharacterCard";
import axios, { AxiosResponse } from "axios";

export interface CharactersData {
  id: number;
  name: string;
  status: string;
  species: string;
  type ?: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  }; 
  image: string;
  episode: string[];
}

const Characters = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let baseUrl: string= 'https://rickandmortyapi.com/api/character';
    axios.get(baseUrl).then( (response: AxiosResponse ) => {
      const charactersData = response.data.results;
      setCharacters( charactersData );
    })
  }, [])
    
  return (
    <>
      <div className="w-[80vw] h-[10vh] m-auto" >
        {/* // Todo: Navbar */}
      </div>
      <div className="w-[80vw] h-auto m-auto border border-[#9bf264]   ">
        <input
          name="search"
          placeholder="Busca tu personaje favorito"
          className="bg-transparent w-2/5 flex justify-center items-center m-auto my-4 border-2 border-green-700 outline-0 focus:border-[#9bf264] rounded-lg p-2 text-green_slime "
        />
        <div className="w-[90%] m-auto py-4 grid grid-cols-4 gap-x-2 gap-y-5 text-white ">
          {
            characters.map( character => (
              <CharacterCard character={character}/>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}


export default Characters