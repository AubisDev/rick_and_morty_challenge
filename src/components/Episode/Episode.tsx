import React from 'react'

export interface EpisodeProps {
  episode: string;
  name: string;
}

const Episode: React.FC<EpisodeProps> = ({episode, name}) => {
  return (
      <div className="border-b border-gray-500/20 flex flex-row font-[open-sans] font-light last:mb-5 last:border-none  my-1 items-center my-1 text-lg w-full ">
        <p className="mx-10 text-base">{episode}</p>
        <p className="text-orange-300">{name}</p>
      </div>               
  )
}

export default Episode