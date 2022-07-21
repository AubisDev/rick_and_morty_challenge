import React from 'react'
import './CharacterCard.css';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';
import { motion  } from 'framer-motion' ;
import { CharacterCardProps } from '../../types';


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
        className=" z-50 w-auto relative m-auto h-72 rounded-lg shadow-card text-center hover:scale-105 duration-300 cursor-pointer hover:shadow-green-400 hover:shadow-md"
      >
        
        <img src={image} alt="imagen" className='rounded-t-lg h-4/5 '/>
        <div className='h-1/5 bg-gradient-to-r from-green-500 to-green-700 w-full'>
          <h4 className=' text-2xl font-bold pt-3 '> {name}</h4>
        </div>
      </motion.button>
      
     { openModal && <CharacterModal character={character} setOpenModal={setOpenModal} /> }
    </>
    
  )
}

export default CharacterCard
