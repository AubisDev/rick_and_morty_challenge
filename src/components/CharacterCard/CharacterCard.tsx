import React from 'react'
import './CharacterCard.css';
import { CharactersData } from '../../pages/Characters';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';

type Props = {
  character: CharactersData;
}


const CharacterCard: React.FC<Props> = ({ character })=> {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { id, name, status, species, type, gender, origin, image, episode } = character;

  const handleOpen = () => setOpenModal(true);
  const handleClose = (e:any) => {
    console.log(e);
    setOpenModal(false)
  };
  return (
    <button onClick={handleOpen} className="w-[85%] m-auto h-72 rounded-lg shadow-card text-center hover:scale-105 duration-300 cursor-pointer hover:shadow-green-400 hover:shadow-md">
      <img src={image} alt="imagen" className='rounded-t-lg h-4/5 '/>
      <div className='h-1/5 bg-gradient-to-r from-green-500 to-green-700 w-full'>
        <h4 className=' text-2xl font-bold pt-3 '> {name}</h4>
      </div>
        {  
          openModal && (
          <div id="Modal" className='modal top-1/2 left-1/2 -translate-y-1/2 fixed -translate-x-1/2  b-auto right-auto w-[40vw] h-[60vh] bg-black/60 z-50'>

              <CharacterModal character={character} handleClose={handleClose} openModal={openModal}/>
          </div>
          
          )
        }
    </button>
  )
}

export default CharacterCard
