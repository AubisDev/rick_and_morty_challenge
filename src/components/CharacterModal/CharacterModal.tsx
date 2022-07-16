import * as React from 'react'

import { CharactersData } from '../../pages/Characters';
interface Props { 
  handleClose: ( e:any ) => void;
  openModal: boolean;
  character: CharactersData;
}

const CharacterModal: React.FC<Props> = ({ handleClose, openModal, character  }) => {
  console.log(character);
  return (
    <div className='w-full h-full bg-white  '>
        
    </div>
  )
}

export default CharacterModal