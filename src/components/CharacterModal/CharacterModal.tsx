import { motion } from 'framer-motion';
import { CharactersData } from '../../types/characters';

export interface CharacterModalProps { 
  setOpenModal: ( openModal:boolean ) => void;
  character: CharactersData;
}
const CharacterModal: React.FC<CharacterModalProps> = ({ setOpenModal, character  }) => {

  const {name, status, species, type, gender, origin, image, episode } = character;
  
  return (
    <motion.div 
      id="model" 
      className='bg-black/70 fixed h-screen left-0 top-0  w-screen z-[100]'
      onClick={ (e:any) => console.log(e.target.id === 'model' && setOpenModal(false))}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        duraton: 0.3
      }}
    >
      <div className='bg-gray-800 flex flex-col items-center m-auto relative top-1/2 -translate-y-1/2 w-3/4 sm:w-2/5 h-auto sm:h-3/4 xl:h-3/5 pb-4 md:py-0 shadow-lg shadow-gray-800'>
        <div className='bg-green-600 relative w-full h-[10%] sm:h-[15%]'>
          <h2 font-bold className=' flex items-center h-full justify-center text-3xl lg:text-4xl xl:text-5xl '>{name}</h2>
        </div>
        <div className='flex flex-col xl:flex-row h-[85%] w-full items-center xl:items-start'>
          <div className='h-full flex items-center px-8 md:w-full lg:w-3/4 xl:w-1/2 mt-4 xl:mt-0 '>
            <img src={image} alt="imagen" className='shadow-imagen'/>
          </div>
          <div className='w-[90%] sm:w-4/5 md:w-[65%] xl:w-1/2 h-full flex items-center justify-center xl:justify-start mt-4 md:mt-0'>
            <div className='border-2 border-green-600 flex flex-col text-left w-[90%] h-auto xl:h-4/5 lg:xl xl:text-2xl xl:pl-12 p-5 xl:pt-10 '>
              <p className='text-[#9bf264]'> <span className='font-bold text-white '>Nombre:</span> {name}</p> {/* Redundante */}
              <p className='text-[#9bf264]'> <span className='font-bold text-white '>Genero:</span> {gender}</p>
              <p className='text-[#9bf264]'> <span className='font-bold text-white '>Tipo:</span> {type}</p>
              <p className={`${ status.toLowerCase() === 'alive' ? 'text-[#9bf264]' :  status.toLowerCase() === 'unknown' ? ' text-yellow-500': 'text-red-600' }`}> <span font-bold className=' text-white '>Estado actual:</span> {status}</p>
              <p className='text-[#9bf264]'> <span className='font-bold text-white '>Especie:</span> {species}</p>
              <p className='text-[#9bf264]'> <span className='font-bold text-white '>Lugar de origen:</span> {origin.name === 'Unknown' ? 'Desconocido' : origin.name}</p>
              <p className='text-[#9bf264]'> <span className='font-bold text-white '>Numero de aparicierones:</span> {episode.length}</p>
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