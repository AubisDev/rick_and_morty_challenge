import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import season1 from './../assets/images/season1.jpg'
import season2 from './../assets/images/season2.png'
import season3 from './../assets/images/season3.jpg'
import season4 from './../assets/images/season4.jpg'
import season5 from './../assets/images/season5.jpg'
import { motion } from "framer-motion";
import EpisodeCard from "../components/EpisodeCard/EpisodeCard";
import { EpisodesData, SeasonsData } from '../types';



const Episodes = () => {

  const [episodes, setEpisodes] = useState<EpisodesData[]>([])


  let baseUrl: string = `https://rickandmortyapi.com/api/episode`;
  let baseUrl_2: string = `https://rickandmortyapi.com/api/episode?page=2`;
  let baseUrl_3: string = `https://rickandmortyapi.com/api/episode?page=3`;
  let temporadas: SeasonsData[] = [
    { season: 'Temporada 1', image: season1 },
    { season: 'Temporada 2', image: season2 },
    { season: 'Temporada 3', image: season3 },
    { season: 'Temporada 4', image: season4 },
    { season: 'Temporada 5', image: season5 },
  ]

  const getData = async () => {
    // Hago los 3 fetch para obtener todos los datos de una sola vez ,
    const { data: data1 } = await axios.get(baseUrl);
    const { data: data2 } = await axios.get(baseUrl_2);
    const { data: data3 } = await axios.get(baseUrl_3);

    setEpisodes( data1.results.concat(data2.results).concat(data3.results) );
  }

  useEffect(() => {
    getData();
    //window.localStorage.setItem("actualPage",JSON.stringify(page));
  }, [])

  return (
    <>
      <Navbar/>
      <motion.main className="w-4/5 h-auto m-auto gap-6 grid grid-cols-1 xl:grid-cols-2 my-8 relative"
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