export type Episodes = {
  name:string;
  episode: string;
  id: number;
}

export interface EpisodesData {
  id: number;
  name: string;
  episode: string;
  characters: string[];
}

export interface SeasonsData {
  season: string;
  image: string;
}
