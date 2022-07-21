import React from 'react'

interface EpisodeProps {
  episode: string;
  name: string;
}

const Episode: React.FC<EpisodeProps> = ({episode, name}) => {
  return (
      <div className=" w-full flex flex-row items-center text-lg font-[open-sans] font-light border-b border-gray-500/20 my-1 last:mb-5 last:border-none ">
        <p className="mx-10 text-base">{episode}</p>
        <p className="text-orange-300">{name}</p>
      </div>               
  )
}

export default Episode