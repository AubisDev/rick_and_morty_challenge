import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import EpisodeCard from "../components/EpisodeCard/EpisodeCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { EpisodesData, SeasonsData } from '../types/episodes';
import { getEpisodesData, getTemporadas } from "../utils/getFetchData";

const Episodes = () => {

  const [episodes, setEpisodes] = useState<EpisodesData[]>([])
  const temporadas: SeasonsData[] =  getTemporadas();

  const getData = async () => {
    const fetchEpisodeData = await getEpisodesData();
    setEpisodes( fetchEpisodeData );
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Navbar/>
      <motion.main 
        className="w-4/5 h-auto m-auto gap-6 grid grid-cols-1 xl:grid-cols-2 my-8 relative"
        initial={{
          opacity:0,
          width: 0,
          height: 'auto'
        }}
        animate={{
          opacity: 1,
          width: '80%',
          transition:{ duration: 1 }
        }}
      >
      {
        temporadas.map( ({season, image}:SeasonsData, index:number) => (
          <EpisodeCard key={index} season={season} image={image} index={index} episodes={episodes} />
        ))
      }
      </motion.main>
      <Footer/>
    </>
  )
}

export default Episodes 