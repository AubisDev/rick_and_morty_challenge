import * as React from 'react'
import { motion } from 'framer-motion';
import { CharacterModalProps } from '../../types';


const CharacterModal: React.FC<CharacterModalProps> = ({ setOpenModal, character  }) => {

  const {name, status, species, type, gender, origin, image, episode } = character;
  
  return (
    <motion.div 
      id="model" 
      className='fixed z-[100] left-0 top-0  w-screen h-screen bg-black/70'
      onClick={ (e:any) => console.log(e.target.id === 'model' && setOpenModal(false))}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        duraton: 0.3
      }}
    >
      <div className='flex flex-col items-center relative m-auto w-3/4 sm:w-2/5 h-auto pb-4 md:py-0 sm:h-3/4 xl:h-3/5 bg-gray-800 top-1/2 -translate-y-1/2'>
        <div className='w-full h-[10%] sm:h-[15%] bg-green-600 relative'>
          <h2 className='text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center font-bold'>{name}</h2>
        </div>
        <div className='flex flex-col xl:flex-row h-[85%] w-full items-center xl:items-start'>
          <div className='md:w-full lg:w-3/4 xl:w-1/2 h-full px-8 flex items-center mt-4 xl:mt-0 '>
            <img src={image} alt="imagen" className='shadow-imagen'/>
          </div>
          <div className='w-[90%] sm:w-4/5 md:w-[65%] xl:w-1/2 h-full flex items-center justify-center xl:justify-start mt-4 md:mt-0'>
            <div className='w-[90%] h-auto xl:h-4/5 border-2 border-green-600 lg:xl xl:text-2xl flex flex-col xl:pl-12 p-5 xl:pt-10 text-left'>
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Nombre:</span> {name}</p> {/* Redundante */}
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Genero:</span> {gender}</p>
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Tipo:</span> {type}</p>
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Estado actual:</span> {status}</p>
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Especie:</span> {species}</p>
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Lugar de origen:</span> {origin.name === 'Unknown' ? 'Desconocido' : origin.name}</p>
              <p className='text-[#9bf264]'> <span className='text-white font-bold'>Numero de aparicierones:</span> {episode.length}</p>
            </div>
          </div>                
        </div>
        <button className='w-10 h-10 absolute -right-10 -mt-10 z-100 text-2xl md:text-4xl font-sans hover:scale-110'
          onClick={ () => setOpenModal(false)}
        >X</button>
      </div>

    </motion.div>
  )
}

export default CharacterModal