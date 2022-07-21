import React from 'react'
import Episode from '../Episode/Episode';

type Episodes = {
  name:string;
  episode: string;
  id: number;
}

interface EpisodeCardProps {
  index: number;
  image: string;
  season: string;
  episodes: Episodes[];
}



const EpisodeCard: React.FC<EpisodeCardProps> = ({ index, image, episodes, season }) => {
  return (
    <div 
      key={index} 
      className={`text-white h-auto duration-300  w-full relative flex items-center xl:last:col-span-2 xl:last:w-3/5 xl:last:m-auto bg-black/30`}
    >
      <div className="w-full h-auto  xl:m-0 flex flex-col md:flex-row  items-center  ">
        <div className="w-2/5 h-full m-auto flex justify-center ">
          <img src={image} alt="temporada" className="w-48 h-52 my-8 xl:m-auto  "/>
        </div> 
        <div className="w-3/5 md:border-l border-gray-500/20 flex flex-col  ">
          <h3 className="text-2xl font-bold text-gray-200 text-center py-4 ">{season}</h3>
          <div className="w-full flex flex-col  items-center ">
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