import React from 'react'
import Episode from '../Episode/Episode';
import { Episodes } from '../../types/episodes';

export interface EpisodeCardProps {
  index: number;
  image: string;
  season: string;
  episodes: Episodes[];
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ index, image, episodes, season }) => {
  return (
    <div 
      key={index} 
      className={`bg-black/30 flex h-auto items-center relative text-white  duration-300  w-full xl:last:col-span-2 xl:last:w-3/5 xl:last:m-auto `}
    >
      <div className="flex w-full h-auto items-center xl:m-0 flex-col md:flex-row">
        <div className="flex justify-center h-full m-auto w-2/5">
          <img src={image} alt="temporada" className="my-8 h-52 w-48 xl:m-auto"/>
        </div> 
        <div className="border-gray-500/20 flex flex-col w-3/5 md:border-l">
          <h3 className="font-bold py-4 text-gray-200 text-2xl text-center">{season}</h3>
          <div className="flex flex-col items-center w-full">
            { episodes.map( ({episode, name, id}) => (
              episode.startsWith(`S0${index+1}`) && (
                <Episode key={id} episode={ episode } name={name} />
              )
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EpisodeCard