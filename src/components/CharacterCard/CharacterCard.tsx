import React from 'react'
import './CharacterCard.css';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';
import { motion  } from 'framer-motion' ;
import { CharactersData } from '../../types/characters';


export interface CharacterCardProps {
  character: CharactersData;
}


const CharacterCard: React.FC<CharacterCardProps> = ({ character })=> {
  const { name, image } = character;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        onClick={() => setOpenModal(true)}
        viewport={{ once: true }} 
        className=" cursor-pointer duration-300 h-72 m-auto relative rounded-lg shadow-card text-center  w-auto z-50 hover:scale-105 hover:shadow-green-400 hover:shadow-md"
      >
        
        <img src={image} alt="imagen" className=' h-4/5 rounded-t-lg'/>
        <div className='h-1/5 bg-gradient-to-r flex flex-row items-center justify-center bg-gray-800/60 w-full'>
          <div className={`w-3 h-3 flex relative rounded-[50%] mt-3 mr-4 ${character.status.toLocaleLowerCase() === 'alive' ? 'bg-green-400' : character.status.toLocaleLowerCase() === 'unknown' ? 'bg-yellow-500': 'bg-red-600'}`}></div>
          <h4 className='font-bold pt-3 text-2xl'>{name}</h4>
        </div>
      </motion.button>
      
     { openModal && <CharacterModal character={character} setOpenModal={setOpenModal} /> }
    </>
    
  )
}

export default CharacterCard
