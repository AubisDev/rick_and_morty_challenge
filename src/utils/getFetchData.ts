import axios, { AxiosResponse } from 'axios';
import { CharactersData } from '../types/characters';
import season1 from './../assets/images/season1.jpg'
import season2 from './../assets/images/season2.png'
import season3 from './../assets/images/season3.jpg'
import season4 from './../assets/images/season4.jpg'
import season5 from './../assets/images/season5.jpg'

export async function getCharactersData ( baseUrl: string) {
  return await axios.get<CharactersData>(baseUrl).then( (response: AxiosResponse) => {
    const charactersData = response.data.results;
    return charactersData
  })
}


export async function getEpisodesData ( ) {
  let baseUrl: string = `https://rickandmortyapi.com/api/episode`;
  let baseUrl_2: string = `https://rickandmortyapi.com/api/episode?page=2`;
  let baseUrl_3: string = `https://rickandmortyapi.com/api/episode?page=3`;
  const { data: data1 } = await axios.get(baseUrl);
  const { data: data2 } = await axios.get(baseUrl_2);
  const { data: data3 } = await axios.get(baseUrl_3);

  return data1.results.concat(data2.results).concat(data3.results)
}

export function getTemporadas () { 
  return [
    { season: 'Temporada 1', image: season1 },
    { season: 'Temporada 2', image: season2 },
    { season: 'Temporada 3', image: season3 },
    { season: 'Temporada 4', image: season4 },
    { season: 'Temporada 5', image: season5 },
  ]
}